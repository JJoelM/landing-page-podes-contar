import React, { useState, useMemo } from 'react';
import SearchPill from './SearchPill';
import CategoryIcon from './CategoryIcon';
import HeadingHighlight from './HeadingHighlight';
import { categories, days, scheduleItems } from '../data/schedule';
import { ChevronLeft, ChevronRight, X, Clock, MapPin } from 'lucide-react';

export default function InteractiveSchedule({ onOpenInscription }) {
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [hoveredDayId, setHoveredDayId] = useState(null);
  const [hoveredActivityId, setHoveredActivityId] = useState(null);
  const [selectedActivityId, setSelectedActivityId] = useState('act-lun-1');

  // Exact color mapping requested by designer
  const categoryColors = {
    charla: '#F8CBB8',
    exposicion: '#FDDE52',
    taller: '#D4C6E0',
    grupal: '#B4DBAC',
    recreacion: '#A3BBD7',
  };

  const hasSelection = selectedDays.length > 0 || selectedCategories.length > 0;

  const isActivityActive = (item) => {
    if (!hasSelection) return false;
    const dayMatch = selectedDays.length === 0 || selectedDays.includes(item.dayId);
    const catMatch = selectedCategories.length === 0 || selectedCategories.includes(item.category);
    return dayMatch && catMatch;
  };

  const toggleDay = (dayId) => {
    setSelectedDays((prev) =>
      prev.includes(dayId) ? prev.filter((id) => id !== dayId) : [...prev, dayId]
    );
  };

  const toggleCategory = (catId) => {
    setSelectedCategories((prev) =>
      prev.includes(catId) ? prev.filter((id) => id !== catId) : [...prev, catId]
    );
  };

  const clearFilters = () => {
    setSelectedDays([]);
    setSelectedCategories([]);
  };

  // Activities shown in the bottom-left list: combined selection, or Lun 1 by default when nothing is selected
  const listActivities = useMemo(() => {
    if (!hasSelection) {
      return scheduleItems.filter((item) => item.dayId === 'lun-01');
    }
    return scheduleItems.filter((item) => {
      const dayMatch = selectedDays.length === 0 || selectedDays.includes(item.dayId);
      const catMatch = selectedCategories.length === 0 || selectedCategories.includes(item.category);
      return dayMatch && catMatch;
    });
  }, [hasSelection, selectedDays, selectedCategories]);

  // Currently displayed detailed activity
  const activeActivity = useMemo(() => {
    const inList = listActivities.find((i) => i.id === selectedActivityId);
    if (inList) return inList;
    return listActivities[0] || scheduleItems[0];
  }, [selectedActivityId, listActivities]);

  const activeDayObj = days.find((d) => d.id === activeActivity?.dayId) || days[0];

  // Cycle single day with arrows in bottom panel
  const handlePrevDay = () => {
    const baseDayId = selectedDays[0] || activeDayObj.id;
    const idx = days.findIndex((d) => d.id === baseDayId);
    const newIdx = (idx - 1 + days.length) % days.length;
    const newDayId = days[newIdx].id;
    setSelectedDays([newDayId]);
    const firstOfNewDay = scheduleItems.find((i) => i.dayId === newDayId);
    if (firstOfNewDay) setSelectedActivityId(firstOfNewDay.id);
  };

  const handleNextDay = () => {
    const baseDayId = selectedDays[0] || activeDayObj.id;
    const idx = days.findIndex((d) => d.id === baseDayId);
    const newIdx = (idx + 1) % days.length;
    const newDayId = days[newIdx].id;
    setSelectedDays([newDayId]);
    const firstOfNewDay = scheduleItems.find((i) => i.dayId === newDayId);
    if (firstOfNewDay) setSelectedActivityId(firstOfNewDay.id);
  };

  const listHeaderTitle = useMemo(() => {
    if (!hasSelection) return days[0].fullDate; // Lun 1 de Noviembre por defecto
    if (selectedDays.length === 1 && selectedCategories.length === 0) {
      return days.find((d) => d.id === selectedDays[0])?.fullDate || days[0].fullDate;
    }
    if (selectedDays.length > 0) {
      return selectedDays
        .map((id) => days.find((d) => d.id === id))
        .filter(Boolean)
        .map((d) => `${d.weekday} ${d.dayNum}`)
        .join(' · ');
    }
    return `Actividades filtradas (${listActivities.length})`;
  }, [hasSelection, selectedDays, selectedCategories, listActivities.length]);

  return (
    <section id="cronograma" className="relative py-16 sm:py-24 bg-[#F38739] text-[#FFF5E3] overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search Pill */}
        <SearchPill text="¿Cuál es nuestro cronograma de actividades?" />

        {/* Section Header */}
        <div className="mb-14 text-left max-w-xl lg:max-w-[54%]">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#FFF5E3] tracking-tight leading-tight">
            Jornada de{' '}
            <HeadingHighlight
              color="#0660AE"
              bgColor="#0660AE"
              textColor="text-[#FFF5E3]"
            >
              concientización
            </HeadingHighlight>{' '}
            sobre el Ciberacoso
          </h2>
          <p className="mt-4 text-[#FFF5E3]/95 text-base sm:text-lg font-medium leading-relaxed">
            Explorá nuestro cronograma de noviembre, seleccioná fechas y talleres en tiempo real, y participá en un sorteo por excelentes premios con solo tu inscripción.
          </p>
        </div>

        {/* Dual Cards Grid: Misma Altura (items-stretch) + Fausti en escritorio reposado en ambos con top:-125px */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-stretch mb-12 sm:mb-16 lg:mb-12 relative">
          
          {/* Fausti en ESCRITORIO reposado en AMBOS (Timeline y Filtros), escalando según el ancho de pantalla */}
          <div className="hidden lg:block absolute top-0 -translate-y-[82%] right-[3%] xl:right-[4%] w-[clamp(320px,33vw,490px)] z-30 pointer-events-none select-none">
            <img
              src="/assets/fausti-mira.png"
              alt="Fausti reposado en la unión del cronograma y los filtros"
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>

          {/* Timeline Card */}
          <div className="lg:col-span-8 xl:col-span-9 bg-[#FFF5E3] text-[#193764] rounded-[36px] p-6 sm:p-8 shadow-2xl border border-orange-100 relative h-full flex flex-col justify-between">
            
            <div>
              {/* Timeline Header note for mobile touch */}
              <div className="flex items-center justify-between text-xs font-bold text-[#193764]/75 lg:hidden px-1 mb-2">
                <span>Desliza horizontalmente para ver todos los horarios ➜</span>
              </div>

              {/* Scrollable Timeline Container */}
              <div className="overflow-x-auto pb-4 pt-4 -mx-2 px-2 scrollbar-thin overflow-y-visible">
                <div className="min-w-[720px] relative pt-2">
                  
                  {/* Hours Axis */}
                  <div className="grid grid-cols-12 gap-1 text-[11px] font-extrabold text-[#193764] border-b border-[#193764]/10 pb-2 mb-3 pl-24 select-none">
                    <span>09:00</span>
                    <span>10:00</span>
                    <span>11:00</span>
                    <span>12:00</span>
                    <span>13:00</span>
                    <span>14:00</span>
                    <span>15:00</span>
                    <span>16:00</span>
                    <span>17:00</span>
                    <span>18:00</span>
                    <span>19:00</span>
                    <span>20:00</span>
                  </div>

                  {/* Days Rows */}
                  <div className="space-y-4">
                    {days.map((day, rowIdx) => {
                      const isDaySelected = selectedDays.includes(day.id);
                      const isDayHovered = hoveredDayId === day.id;
                      const dayItems = scheduleItems.filter((item) => item.dayId === day.id);
                      const hasHoveredChild = dayItems.some((item) => item.id === hoveredActivityId);

                      return (
                        <div
                          key={day.id}
                          onClick={() => toggleDay(day.id)}
                          onMouseEnter={() => setHoveredDayId(day.id)}
                          onMouseLeave={() => setHoveredDayId(null)}
                          className={`flex items-center gap-2 p-2 rounded-2xl transition-all duration-200 cursor-pointer relative ${
                            hasHoveredChild ? 'z-50' : 'z-10'
                          } ${
                            isDaySelected
                              ? 'bg-[#FFEED6] ring-1 ring-[#F38739]/30'
                              : 'hover:bg-[#FFEED6]/45'
                          }`}
                        >
                          {/* Day Column: Hover resalta naranja y agranda ligeramente */}
                          <div
                            className={`w-20 shrink-0 text-left leading-tight select-none transition-all duration-200 origin-left ${
                              isDaySelected
                                ? 'text-[#F38739] font-black scale-105'
                                : isDayHovered
                                ? 'text-[#F38739] font-black scale-110'
                                : 'text-[#193764] font-bold'
                            }`}
                          >
                            <span className="block text-xs tracking-tight">{day.dayNum} - {day.dayName}</span>
                            <span className="block text-sm tracking-wider">{day.weekday}</span>
                          </div>

                          {/* Day Activities Slots Bar */}
                          <div className="relative flex-1 h-10 rounded-full overflow-visible flex items-center px-1">
                            {dayItems.map((item) => {
                              const totalSpan = 11;
                              const leftPercent = Math.max(0, ((item.startHour - 9) / totalSpan) * 100);
                              const widthPercent = Math.max(9, (((item.endHour - item.startHour)) / totalSpan) * 100);
                              const showTime = isActivityActive(item);
                              const dimmed = hasSelection && !showTime;
                              const isItemActive = selectedActivityId === item.id && showTime;
                              const isHovered = hoveredActivityId === item.id && showTime;
                              const pillBg = categoryColors[item.category] || '#F8CBB8';

                              const tooltipAlignClass =
                                leftPercent < 20
                                  ? 'left-0 translate-x-0'
                                  : leftPercent > 70
                                  ? 'right-0 translate-x-0'
                                  : 'left-1/2 -translate-x-1/2';

                              return (
                                <div
                                  key={item.id}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    if (!selectedDays.includes(day.id)) {
                                      setSelectedDays((prev) => [...prev, day.id]);
                                    }
                                    setSelectedActivityId(item.id);
                                  }}
                                  onMouseEnter={() => {
                                    if (showTime) setHoveredActivityId(item.id);
                                  }}
                                  onMouseLeave={() => setHoveredActivityId(null)}
                                  style={{
                                    left: `${leftPercent}%`,
                                    width: `${widthPercent}%`,
                                    backgroundColor: isHovered ? '#193764' : pillBg,
                                    opacity: dimmed ? 0.35 : 1,
                                    boxShadow: isItemActive
                                      ? 'inset 0 2px 5px rgba(25, 55, 100, 0.35)'
                                      : undefined,
                                  }}
                                  className={`absolute h-7 rounded-full flex items-center justify-center text-[10px] font-extrabold px-2 cursor-pointer transition-all duration-200 select-none ${
                                    isHovered
                                      ? 'z-40 scale-105 text-[#FFF5E3] shadow-lg'
                                      : 'z-10 text-[#193764]'
                                  }`}
                                >
                                  {showTime && <span className="truncate">{item.time}</span>}

                                  {/* Tooltip contextual dinámico (#193764) */}
                                  {isHovered && (
                                    <div
                                      className={`absolute ${
                                        rowIdx === 0 ? 'top-full mt-2' : 'bottom-full mb-2'
                                      } ${tooltipAlignClass} z-50 pointer-events-none w-64 sm:w-72 animate-in fade-in zoom-in-95 duration-150`}
                                    >
                                      <div className="bg-[#193764] text-[#FFF5E3] p-4 rounded-2xl shadow-2xl border border-white/15 text-left relative">
                                        <div className="flex items-center justify-between gap-2 mb-1">
                                          <h4 className="font-black text-sm text-[#FFF5E3] truncate">
                                            “{item.title}”
                                          </h4>
                                          <CategoryIcon type={item.category} variant="filter" className="w-4 h-4 shrink-0" color={pillBg} />
                                        </div>
                                        <p className="text-xs text-[#FFF5E3]/90 font-medium leading-snug mb-2 line-clamp-2">
                                          {item.subtitle}
                                        </p>
                                        <div className="text-[11px] font-bold border-t border-white/15 pt-1.5">
                                          <span className="text-[#FFF5E3]/75">Disertante: </span>
                                          <span className="text-[#F38739]">{item.speaker}</span>
                                        </div>

                                        <div
                                          className={`absolute left-1/2 transform -translate-x-1/2 border-6 border-transparent ${
                                            rowIdx === 0
                                              ? 'bottom-full border-b-[#193764]'
                                              : 'top-full border-t-[#193764]'
                                          }`}
                                        />
                                      </div>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>

                        </div>
                      );
                    })}
                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* Right Card: Filter Card (Misma altura que el cronograma en desktop con lg:h-full) */}
          <div className="lg:col-span-4 xl:col-span-3 relative mt-40 sm:mt-52 lg:mt-0 h-auto lg:h-full">
            
            {/* Fausti en MÓVILES: reposado solo en los filtros, escalando según el ancho de pantalla */}
            <div className="lg:hidden absolute top-0 -translate-y-[82%] left-1/2 -translate-x-1/2 w-[clamp(220px,54vw,340px)] z-30 pointer-events-none select-none">
              <img
                src="/assets/fausti-mira.png"
                alt="Fausti apoyado sobre los filtros en móvil"
                className="w-full h-auto drop-shadow-2xl select-none"
              />
            </div>

            {/* Filter Card */}
            <div className="bg-[#FFF5E3] text-[#193764] rounded-[36px] p-6 sm:p-7 shadow-2xl border border-orange-100 relative z-20 h-auto lg:h-full flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between pt-1 mb-4">
                  <span className="text-xs font-black tracking-widest text-[#193764] uppercase">
                    FILTRAR POR:
                  </span>
                  {hasSelection && (
                    <button
                      onClick={clearFilters}
                      className="text-xs font-bold text-[#0660AE] hover:underline cursor-pointer"
                    >
                      Ver todo
                    </button>
                  )}
                </div>

                <div className="flex flex-col gap-3">
                  {categories.map((cat) => {
                    const isActive = selectedCategories.includes(cat.id);
                    const iconColor = categoryColors[cat.id] || '#F8CBB8';

                    return (
                      <button
                        key={cat.id}
                        onClick={() => toggleCategory(cat.id)}
                        className={`w-full flex items-center justify-between px-4 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all duration-200 shadow-xs cursor-pointer ${
                          isActive
                            ? 'bg-[#0660AE] text-[#FFF5E3] shadow-md scale-102 ring-2 ring-[#0660AE]/30'
                            : 'bg-[#FFEED6]/70 text-[#193764] hover:bg-[#FFEED6] border border-orange-200/40'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <CategoryIcon
                            type={cat.id}
                            variant="filter"
                            className="w-5 h-5 shrink-0"
                            color={iconColor}
                          />
                          <span>{cat.label} ({cat.count})</span>
                        </div>
                        <X className={`w-3.5 h-3.5 transition-transform ${isActive ? 'rotate-0 text-[#FFF5E3]' : 'opacity-45 hover:opacity-100'}`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Pie de tarjeta de filtros */}
              <div className="pt-4 border-t border-[#193764]/10 text-[11px] text-[#193764]/70 font-bold text-center">
                Seleccioná uno o más filtros para combinar en tiempo real
              </div>

            </div>

          </div>

        </div>

        {/* Selected Day & Detail Card Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-stretch pt-6 lg:pt-0">
          
          {/* Left Box: Activities list (Frame 108) */}
          <div className="lg:col-span-5 bg-[#FFF5E3] text-[#193764] rounded-[36px] p-6 sm:p-7 border border-orange-200/60 shadow-xl space-y-4 flex flex-col justify-between">
            
            <div>
              {/* Day title & arrows */}
              <div className="flex items-center justify-between pb-3 border-b border-[#193764]/10">
                <button
                  onClick={handlePrevDay}
                  className="w-9 h-9 rounded-full bg-[#193764] text-[#FFF5E3] flex items-center justify-center hover:bg-[#F38739] shadow-sm transition-colors cursor-pointer"
                  aria-label="Día anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <h3 className="text-base sm:text-lg font-black text-[#193764] text-center px-2">
                  {listHeaderTitle}
                </h3>
                <button
                  onClick={handleNextDay}
                  className="w-9 h-9 rounded-full bg-[#193764] text-[#FFF5E3] flex items-center justify-center hover:bg-[#F38739] shadow-sm transition-colors cursor-pointer"
                  aria-label="Día siguiente"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Activities list */}
              <div className="space-y-3 pt-3 max-h-[380px] overflow-y-auto pr-1">
                {listActivities.length === 0 ? (
                  <p className="text-sm text-[#193764]/70 py-6 text-center font-bold">
                    No hay actividades que coincidan con la selección actual.
                  </p>
                ) : (
                  listActivities.map((act) => {
                    const isCurrent = activeActivity.id === act.id;
                    const catColor = categoryColors[act.category] || '#F8CBB8';
                    const actDay = days.find((d) => d.id === act.dayId);

                    return (
                      <div
                        key={act.id}
                        onClick={() => setSelectedActivityId(act.id)}
                        className={`p-3.5 rounded-2xl cursor-pointer transition-all border ${
                          isCurrent
                            ? 'bg-[#0660AE] text-[#FFF5E3] border-[#0660AE] shadow-md'
                            : 'bg-[#FFEED6]/60 text-[#193764] border-orange-200/40 hover:bg-[#FFEED6]'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="space-y-1">
                            <span className={`text-xs font-bold ${isCurrent ? 'text-[#FFF5E3]/90' : 'text-[#F38739]'}`}>
                              {actDay ? `${actDay.weekday} ${actDay.dayNum} • ` : ''}{act.time}
                            </span>
                            <h4 className="font-black text-sm leading-snug">
                              “{act.title}”
                            </h4>
                            <p className={`text-xs line-clamp-2 ${isCurrent ? 'text-[#FFF5E3]/85' : 'text-[#193764]/80'}`}>
                              {act.subtitle}
                            </p>
                          </div>
                          <CategoryIcon
                            type={act.category}
                            variant="filter"
                            className="w-4 h-4 shrink-0 mt-0.5"
                            color={catColor}
                          />
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

          </div>

          {/* Right Box: Full Activity Detail Card (1:1 con Frame 147 de Figma) */}
          <div className="lg:col-span-7 bg-[#FFF5E3] text-[#193764] rounded-[50px] p-6 sm:p-0 shadow-[0_5px_10px_0_rgba(0,0,0,0.25)] relative overflow-hidden flex flex-col justify-between min-h-[427px]">

            {/* Degradado 3 9 detrás del disertante: exacto a Frame 147 (2679:16955) */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-[44.7%] overflow-hidden rounded-[49px] z-0" aria-hidden="true">
              <img
                src="/assets/degradado-claro.png"
                alt=""
                className="absolute h-[145.6%] left-[-86.25%] top-[-3.77%] w-[189.04%] max-w-none select-none pointer-events-none"
              />
            </div>

            {/* Top Row: Categoría a la izquierda + badge a la derecha */}
            <div className="relative z-30 flex items-center justify-between sm:pt-[33px] sm:pl-[43px] sm:pr-[38px] mb-3 sm:mb-0">
              <div className="flex items-center gap-2.5">
                <CategoryIcon
                  type={activeActivity.category}
                  variant="card"
                  className="w-8 h-8 sm:w-9 sm:h-[33px] shrink-0"
                  color="#F38739"
                />
                <span className="font-bold text-sm text-[#F38739]">
                  {activeActivity.categoryLabel}
                </span>
              </div>
              {activeActivity.isStarred && (
                <span className="text-[#F38739] font-bold text-lg sm:text-2xl leading-none">
                  ¡Invitada estrella!
                </span>
              )}
            </div>

            {/* Imagen del disertante (z-20, sin deformar relación de aspecto) */}
            <div className="hidden sm:block absolute left-0 bottom-0 w-[27%] h-[82.2%] pointer-events-none z-20 overflow-hidden rounded-bl-[49px]">
              <img
                src={activeActivity.image || '/assets/sofia-calvoe.png'}
                alt={activeActivity.speaker}
                className="w-full h-full object-cover object-top select-none"
              />
            </div>

            {/* Bastón azul #0660AE + Título con margen respecto al header superior (z-10 detrás del disertante z-20) */}
            <div className="relative sm:absolute sm:left-[28.5%] sm:top-[84px] z-10 my-2 sm:my-0 -rotate-[3.45deg] origin-left">
              <div className="relative inline-flex items-center">
                <div
                  className="absolute inset-y-0 right-0 -left-[120px] sm:-left-[150px] bg-[#0660AE] rounded-[30px] shadow-[0_5px_10px_0_rgba(0,0,0,0.25)] -z-10"
                  aria-hidden="true"
                />
                <span className="text-[#FFF5E3] text-2xl sm:text-[28px] xl:text-[32px] font-bold leading-none whitespace-nowrap py-2.5 pl-4 pr-7">
                  “{activeActivity.title}”
                </span>
              </div>
            </div>

            {/* A la DERECHA: descripciones + metadata + fecha/botón */}
            <div className="relative sm:absolute sm:left-[29.5%] sm:right-[42px] sm:top-[162px] sm:bottom-[34px] z-30 flex flex-col justify-between text-left">
              <div className="space-y-3">
                <p className="text-sm sm:text-[17px] font-medium text-[#193764] leading-snug max-w-[440px]">
                  {activeActivity.subtitle}
                </p>

                <p className="text-xs sm:text-[16px] text-[#193764] font-light leading-snug max-w-[360px]">
                  {activeActivity.description}
                </p>
              </div>

              {/* Fila inferior: Disertante/Modalidad a la izquierda, Fecha/Hora/Lugar/Botón a la derecha */}
              <div className="pt-4 sm:pt-0 mt-auto flex flex-wrap items-end justify-between gap-4">
                <div className="space-y-1.5">
                  <div>
                    <span className="block text-[15px] font-medium text-[#193764] leading-[22px]">Disertante:</span>
                    <span className="font-bold text-xl sm:text-[24px] text-[#0660AE] leading-[28px] block">
                      {activeActivity.speaker}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[15px] font-medium text-[#193764] leading-[18px]">Modalidad:</span>
                    <span className="font-bold text-[16px] text-[#0660AE] leading-[18px] block">
                      {activeActivity.modality || 'híbrida'}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1 ml-auto text-right">
                  <span className="font-nunito font-bold text-xl sm:text-[24px] text-[#F38739] leading-[25px]">
                    {activeDayObj.weekday.slice(0, 3)} {String(activeDayObj.dayNum).padStart(2, '0')}
                  </span>
                  <span className="font-nunito font-bold text-xl sm:text-[24px] text-[#F38739] leading-[25px]">
                    {activeActivity.time.split(' ')[0]}hs
                  </span>
                  <span className="text-[16px] font-bold text-[#F38739] leading-[25px] mb-1">
                    {activeActivity.location}
                  </span>
                  <button
                    onClick={() => onOpenInscription(activeActivity.title)}
                    className="bg-[#F38739] hover:bg-[#0660AE] text-[#FFF5E3] w-[127px] h-[33px] rounded-[30px] font-bold text-[16px] shadow-[0_5px_3px_0_rgba(243,135,57,0.5)] active:scale-95 transition-all flex items-center justify-center"
                  >
                    Inscribirme
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Merch / Sorteo Banner (1:1 con Frame 152 de Figma) */}
        <div className="mt-14 sm:mt-16 bg-[#0660AE] text-[#FFF5E3] rounded-[50px] px-6 sm:px-10 py-8 sm:py-0 sm:min-h-[388px] shadow-[0_5px_20px_5px_rgba(0,0,0,0.25)] relative overflow-visible flex flex-col md:flex-row items-center">
          <img
            src="/assets/brillos-esquina.png"
            alt=""
            aria-hidden="true"
            className="hidden sm:block absolute top-8 right-10 w-12 h-12 object-contain pointer-events-none select-none z-20"
          />

          {/* Merch visual a la izquierda, sobresaliendo arriba y tapando el inicio del bastón naranja (z-20) */}
          <div className="md:w-[46%] lg:w-[44%] flex justify-center md:justify-start relative z-20 -mt-14 sm:-mt-16 md:-my-8 md:pl-4 pointer-events-none select-none">
            <img
              src="/assets/merch-degradado.png"
              alt="Merch exclusivo Podés Contar: tote bag, remera, termo y llaveros de Fausti"
              className="w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[500px] h-auto object-contain drop-shadow-xl"
            />
          </div>

          {/* Copy & Bastón naranja a la derecha */}
          <div className="md:w-[54%] lg:w-[56%] text-center md:text-left relative z-10 mt-4 md:mt-0 md:py-10 md:pr-6">
            <div className="inline-flex items-start justify-center md:justify-start gap-2.5">
              <img
                src="/assets/exclamacion-abierta.png"
                alt=""
                aria-hidden="true"
                className="h-10 sm:h-12 w-auto object-contain select-none mt-1"
              />
              <h3 className="text-2xl sm:text-[34px] lg:text-[36px] font-extrabold text-[#FFF5E3] leading-[1.12]">
                Anotáte en
                <br />
                nuestras actividades
              </h3>
              <img
                src="/assets/exclamacion-cerrada.png"
                alt=""
                aria-hidden="true"
                className="h-10 sm:h-12 w-auto object-contain select-none mt-1"
              />
            </div>

            <p className="mt-2.5 text-lg sm:text-[22px] lg:text-[24px] font-medium text-[#FFF5E3] leading-snug">
              ¡Y participá por increíbles premios!
            </p>

            <p className="mt-2 text-sm sm:text-[17px] lg:text-[18px] text-[#FFF5E3]/95 font-normal leading-snug max-w-[522px] mx-auto md:mx-0">
              Se estará sorteando un Kit de Fausti con: un termo, una remera a elección, un set de stickers, dos llaveros y una totebag de Fausti.
            </p>

            {/* Bastón naranja inclinado pasando por detrás del merch (z-10 < z-20) */}
            <div className="mt-6 flex items-center justify-center md:justify-start gap-3">
              <button
                type="button"
                onClick={() => onOpenInscription()}
                className="relative inline-flex items-center -rotate-[1.9deg] origin-left cursor-pointer group"
              >
                <div
                  className="hidden md:block absolute inset-y-0 right-0 -left-56 bg-[#F38739] group-hover:bg-[#d97226] rounded-[50px] shadow-[0_5px_10px_0_rgba(0,0,0,0.25)] -z-10 transition-colors"
                  aria-hidden="true"
                />
                <span className="md:hidden bg-[#F38739] rounded-[50px] shadow-[0_5px_10px_0_rgba(0,0,0,0.25)] text-[#FFF5E3] font-extrabold text-base sm:text-xl px-6 py-3">
                  Sorteo el día Viernes 5 de noviembre
                </span>
                <span className="hidden md:block text-[#FFF5E3] font-extrabold text-xl lg:text-[24px] xl:text-[26px] leading-none whitespace-nowrap py-4 pl-2 pr-8">
                  Sorteo el día Viernes 5 de noviembre
                </span>
              </button>
              <img
                src="/assets/brillos-sorteo.svg"
                alt=""
                aria-hidden="true"
                className="hidden sm:block w-8 h-12 object-contain pointer-events-none select-none shrink-0"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
