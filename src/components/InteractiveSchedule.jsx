import React, { useState, useMemo } from 'react';
import SearchPill from './SearchPill';
import CategoryIcon from './CategoryIcon';
import HeadingHighlight from './HeadingHighlight';
import { categories, days, scheduleItems } from '../data/schedule';
import { ChevronLeft, ChevronRight, X, Clock, MapPin, Sparkles } from 'lucide-react';

export default function InteractiveSchedule({ onOpenInscription }) {
  const [selectedDayId, setSelectedDayId] = useState('jue-04');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState(null); // null = all, or category id
  const [hoveredActivityId, setHoveredActivityId] = useState(null);
  const [selectedActivityId, setSelectedActivityId] = useState('act-jue-1');

  // Exact color mapping requested by user
  const categoryColors = {
    charla: '#F8CBB8',
    exposicion: '#FDDE52',
    taller: '#D4C6E0',
    grupal: '#B4DBAC',
    recreacion: '#A3BBD7',
  };

  // Filter items by category
  const filteredSchedule = useMemo(() => {
    if (!activeCategoryFilter) return scheduleItems;
    return scheduleItems.filter((item) => item.category === activeCategoryFilter);
  }, [activeCategoryFilter]);

  // Current selected day object
  const currentDay = days.find((d) => d.id === selectedDayId) || days[3];

  // Activities for the selected day
  const dayActivities = useMemo(() => {
    return filteredSchedule.filter((item) => item.dayId === selectedDayId);
  }, [filteredSchedule, selectedDayId]);

  // Currently displayed detailed activity
  const activeActivity = useMemo(() => {
    const found = scheduleItems.find((i) => i.id === selectedActivityId);
    if (found) return found;
    return dayActivities[0] || scheduleItems[0];
  }, [selectedActivityId, dayActivities]);

  // Cycle day with arrows
  const handlePrevDay = () => {
    const idx = days.findIndex((d) => d.id === selectedDayId);
    const newIdx = (idx - 1 + days.length) % days.length;
    setSelectedDayId(days[newIdx].id);
    const firstOfNewDay = scheduleItems.find((i) => i.dayId === days[newIdx].id);
    if (firstOfNewDay) setSelectedActivityId(firstOfNewDay.id);
  };

  const handleNextDay = () => {
    const idx = days.findIndex((d) => d.id === selectedDayId);
    const newIdx = (idx + 1) % days.length;
    setSelectedDayId(days[newIdx].id);
    const firstOfNewDay = scheduleItems.find((i) => i.dayId === days[newIdx].id);
    if (firstOfNewDay) setSelectedActivityId(firstOfNewDay.id);
  };

  // Activity category pill style mapping using exact hex codes
  const getPillStyle = (category, isSelected) => {
    if (isSelected) {
      return 'bg-[#133E68] text-white shadow-md ring-2 ring-brand-orange';
    }
    const bg = categoryColors[category] || '#F8CBB8';
    return `text-[#133E68] font-black border border-black/5 hover:brightness-95`;
  };

  return (
    <section id="cronograma" className="relative py-16 sm:py-24 bg-[#EE7B30] text-white overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search Pill */}
        <SearchPill text="¿Cuál es nuestro cronograma de actividades?" />

        {/* Section Header */}
        <div className="mb-14 text-left max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Jornada de{' '}
            <HeadingHighlight
              color="#133E68"
              bgColor="#133E68"
              textColor="text-white"
            >
              concientización
            </HeadingHighlight>{' '}
            sobre el Ciberacoso
          </h2>
          <p className="mt-4 text-white/95 text-base sm:text-lg font-medium leading-relaxed">
            Explorá nuestro cronograma de noviembre, seleccioná fechas y talleres en tiempo real, y participá en un sorteo por excelentes premios con solo tu inscripción.
          </p>
        </div>

        {/* Dual Cards Grid: Misma Altura (items-stretch) + Fausti en escritorio reposado en ambos con top:-125px */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-stretch mb-12 sm:mb-16 lg:mb-12 relative">
          
          {/* Fausti en ESCRITORIO reposado en AMBOS (Timeline y Filtros) con top:-125px exacto */}
          <div className="hidden lg:block absolute -top-[125px] right-[21%] xl:right-[20%] 2xl:right-[21%] w-64 xl:w-72 z-30 pointer-events-none select-none">
            <img
              src="/assets/fausti-mira.png"
              alt="Fausti reposado en la unión del cronograma y los filtros"
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>

          {/* Timeline Card */}
          <div className="lg:col-span-8 xl:col-span-9 bg-white text-[#133E68] rounded-[36px] p-6 sm:p-8 shadow-2xl border border-orange-100 relative h-full flex flex-col justify-between">
            
            <div>
              {/* Timeline Header note for mobile touch */}
              <div className="flex items-center justify-between text-xs font-bold text-[#133E68]/70 lg:hidden px-1 mb-2">
                <span>Desliza horizontalmente para ver todos los horarios ➜</span>
              </div>

              {/* Scrollable Timeline Container */}
              <div className="overflow-x-auto pb-4 pt-4 -mx-2 px-2 scrollbar-thin overflow-y-visible">
                <div className="min-w-[720px] relative pt-2">
                  
                  {/* Hours Axis */}
                  <div className="grid grid-cols-12 gap-1 text-[11px] font-extrabold text-[#133E68]/70 border-b border-gray-100 pb-2 mb-3 pl-24 select-none">
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

                  {/* Permanencia semanal banner */}
                  <div className="flex items-center mb-3 pl-24">
                    <div className="w-full bg-[#B4DBAC]/80 text-[#205719] text-xs font-black py-1 px-4 rounded-full text-center shadow-xs flex items-center justify-center gap-2 select-none">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Permanencia semanal</span>
                    </div>
                  </div>

                  {/* Days Rows */}
                  <div className="space-y-4">
                    {days.map((day, rowIdx) => {
                      const isDaySelected = selectedDayId === day.id;
                      const dayItems = filteredSchedule.filter((item) => item.dayId === day.id);
                      const hasHoveredChild = dayItems.some((item) => item.id === hoveredActivityId);

                      return (
                        <div
                          key={day.id}
                          onClick={() => setSelectedDayId(day.id)}
                          className={`flex items-center gap-2 p-1.5 rounded-2xl transition-all cursor-pointer relative ${
                            hasHoveredChild ? 'z-50' : 'z-10'
                          } ${
                            isDaySelected
                              ? 'bg-amber-50/80 ring-2 ring-brand-blue/30'
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          {/* Day Column */}
                          <div className={`w-20 shrink-0 text-left font-black leading-tight select-none ${
                            isDaySelected ? 'text-brand-blue scale-105' : 'text-[#133E68]/70'
                          }`}>
                            <span className="block text-xs font-bold tracking-tight">{day.dayNum} - {day.dayName}</span>
                            <span className="block text-sm tracking-wider">{day.weekday}</span>
                          </div>

                          {/* Day Activities Slots Bar */}
                          <div className="relative flex-1 h-10 bg-gray-100/70 rounded-full overflow-visible flex items-center px-1">
                            {dayItems.map((item) => {
                              const totalSpan = 11;
                              const leftPercent = Math.max(0, ((item.startHour - 9) / totalSpan) * 100);
                              const widthPercent = Math.max(9, (((item.endHour - item.startHour)) / totalSpan) * 100);
                              const isItemActive = selectedActivityId === item.id;
                              const isHovered = hoveredActivityId === item.id;
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
                                    setSelectedDayId(day.id);
                                    setSelectedActivityId(item.id);
                                  }}
                                  onMouseEnter={() => setHoveredActivityId(item.id)}
                                  onMouseLeave={() => setHoveredActivityId(null)}
                                  style={{
                                    left: `${leftPercent}%`,
                                    width: `${widthPercent}%`,
                                    backgroundColor: isItemActive ? '#133E68' : pillBg,
                                  }}
                                  className={`absolute h-7 rounded-full flex items-center justify-center text-[10px] font-extrabold px-2 cursor-pointer transition-all duration-200 select-none shadow-xs ${
                                    isHovered ? 'z-40 scale-105 ring-2 ring-brand-blue' : 'z-10'
                                  } ${isItemActive ? 'text-white' : 'text-[#133E68]'}`}
                                >
                                  <span className="truncate">{item.time}</span>

                                  {/* Tooltip contextual dinámico según la actividad hovered */}
                                  {isHovered && (
                                    <div
                                      className={`absolute ${
                                        rowIdx === 0 ? 'top-full mt-2' : 'bottom-full mb-2'
                                      } ${tooltipAlignClass} z-50 pointer-events-none w-64 sm:w-72 animate-in fade-in zoom-in-95 duration-150`}
                                    >
                                      <div className="bg-[#133E68] text-white p-3.5 rounded-2xl shadow-2xl border border-white/20 text-left relative">
                                        <div className="flex items-center justify-between gap-2 mb-1">
                                          <h4 className="font-black text-sm text-amber-200 truncate">
                                            “{item.title}”
                                          </h4>
                                          <CategoryIcon type={item.category} className="w-3.5 h-3.5 shrink-0" color={pillBg} />
                                        </div>
                                        <p className="text-xs text-white/90 font-medium leading-snug mb-2 line-clamp-2">
                                          {item.subtitle}
                                        </p>
                                        <div className="text-[11px] text-amber-300 font-bold border-t border-white/10 pt-1">
                                          Disertante: {item.speaker}
                                        </div>
                                        <div className="text-[10px] text-white/70">
                                          {item.time} • {item.location}
                                        </div>

                                        <div
                                          className={`absolute left-1/2 transform -translate-x-1/2 border-6 border-transparent ${
                                            rowIdx === 0
                                              ? 'bottom-full border-b-[#133E68]'
                                              : 'top-full border-t-[#133E68]'
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
          <div className="lg:col-span-4 xl:col-span-3 relative mt-20 lg:mt-0 h-auto lg:h-full">
            
            {/* Fausti en MÓVILES: reposado solo en los filtros con holgura para no encimarse */}
            <div className="lg:hidden absolute -top-14 left-1/2 transform -translate-x-1/2 w-48 sm:w-56 z-30 pointer-events-none select-none">
              <img
                src="/assets/fausti-mira.png"
                alt="Fausti apoyado sobre los filtros en móvil"
                className="w-full h-auto drop-shadow-2xl select-none"
              />
            </div>

            {/* Filter Card */}
            <div className="bg-white text-[#133E68] rounded-[36px] p-6 sm:p-7 shadow-2xl border border-orange-100 relative z-20 h-auto lg:h-full flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between pt-1 mb-4">
                  <span className="text-xs font-black tracking-widest text-[#133E68]/80 uppercase">
                    FILTRAR POR:
                  </span>
                  {activeCategoryFilter && (
                    <button
                      onClick={() => setActiveCategoryFilter(null)}
                      className="text-xs font-bold text-brand-orange hover:underline"
                    >
                      Ver todas
                    </button>
                  )}
                </div>

                <div className="flex flex-col gap-3">
                  {categories.map((cat) => {
                    const isActive = activeCategoryFilter === cat.id;
                    const iconColor = categoryColors[cat.id] || '#F8CBB8';

                    return (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategoryFilter(isActive ? null : cat.id)}
                        className={`w-full flex items-center justify-between px-4 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all duration-200 shadow-xs ${
                          isActive
                            ? 'bg-brand-blue text-white shadow-md scale-102 ring-2 ring-brand-blue/30'
                            : 'bg-[#FFF7ED] text-[#133E68] hover:bg-orange-100/80 border border-orange-200/50'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <CategoryIcon
                            type={cat.id}
                            className="w-4 h-4 shrink-0 shadow-xs"
                            color={iconColor}
                          />
                          <span>{cat.label} ({cat.count})</span>
                        </div>
                        <X className={`w-3.5 h-3.5 transition-transform ${isActive ? 'rotate-0 text-white' : 'opacity-40 hover:opacity-100'}`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Pie de tarjeta de filtros */}
              <div className="pt-4 border-t border-gray-100/70 text-[11px] text-[#133E68]/60 font-bold text-center">
                Seleccioná una categoría para filtrar en tiempo real
              </div>

            </div>

          </div>

        </div>

        {/* Selected Day & Detail Card Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-stretch pt-6 lg:pt-0">
          
          {/* Left Box: Day activities list (Frame 108) */}
          <div className="lg:col-span-5 bg-white text-[#133E68] rounded-[36px] p-6 sm:p-7 border border-orange-200/60 shadow-xl space-y-4 flex flex-col justify-between">
            
            <div>
              {/* Day title & arrows */}
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <button
                  onClick={handlePrevDay}
                  className="w-9 h-9 rounded-full bg-brand-blue text-white flex items-center justify-center hover:bg-brand-orange shadow-sm transition-colors"
                  aria-label="Día anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <h3 className="text-lg sm:text-xl font-black text-brand-blue">
                  {currentDay.fullDate}
                </h3>
                <button
                  onClick={handleNextDay}
                  className="w-9 h-9 rounded-full bg-brand-blue text-white flex items-center justify-center hover:bg-brand-orange shadow-sm transition-colors"
                  aria-label="Día siguiente"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Activities for that day */}
              <div className="space-y-3 pt-3">
                {dayActivities.length === 0 ? (
                  <p className="text-sm text-gray-500 py-6 text-center font-bold">
                    No hay actividades con este filtro para este día.
                  </p>
                ) : (
                  dayActivities.map((act) => {
                    const isCurrent = activeActivity.id === act.id;
                    const catColor = categoryColors[act.category] || '#F8CBB8';

                    return (
                      <div
                        key={act.id}
                        onClick={() => setSelectedActivityId(act.id)}
                        className={`p-3.5 rounded-2xl cursor-pointer transition-all border ${
                          isCurrent
                            ? 'bg-[#133E68] text-white border-brand-blue shadow-md'
                            : 'bg-[#FFF7ED] text-[#133E68] border-orange-100 hover:bg-orange-100/70'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="space-y-1">
                            <span className={`text-xs font-bold ${isCurrent ? 'text-amber-300' : 'text-brand-orange'}`}>
                              {act.time}
                            </span>
                            <h4 className="font-black text-sm leading-snug">
                              “{act.title}”
                            </h4>
                            <p className={`text-xs line-clamp-2 ${isCurrent ? 'text-white/80' : 'text-[#133E68]/70'}`}>
                              {act.subtitle}
                            </p>
                          </div>
                          <CategoryIcon
                            type={act.category}
                            className="w-4 h-4 shrink-0 mt-0.5 shadow-xs"
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

          {/* Right Box: Full Activity Detail Card (Regla: Imagen pegada a la izquierda recortada abajo con degradado claro detrás, textos a la derecha, título con -5 grados) */}
          <div className="lg:col-span-7 bg-[#FFF8EE] text-[#133E68] rounded-[36px] p-6 sm:p-8 border border-orange-200/80 shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[440px]">
            
            {/* Imagen del disertante a la IZQUIERDA pegada al borde izquierdo y recortada abajo (z-20 para tapar el fondo del título que va detrás) */}
            <div className="absolute left-0 bottom-0 w-44 sm:w-56 md:w-64 h-[75%] sm:h-[85%] pointer-events-none z-20 hidden sm:block">
              {/* Assets/degradado 3 10.png detrás de ella por ser fondo claro, desbordando suavemente */}
              <div className="absolute -left-14 -bottom-14 w-80 h-80 pointer-events-none z-0 opacity-75 mix-blend-multiply">
                <img
                  src="/assets/degradado-claro.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <img
                src={activeActivity.image || '/assets/sofia-calvoe.png'}
                alt={activeActivity.speaker}
                className="w-full h-full object-contain object-left-bottom drop-shadow-xl relative z-10"
              />
            </div>

            {/* A la DERECHA: Textos y descripciones */}
            <div className="z-20 sm:ml-auto w-full sm:w-[58%] lg:w-[58%] space-y-4 text-left">
              
              {/* Badge & Category Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CategoryIcon
                    type={activeActivity.category}
                    className="w-5 h-5 shrink-0 shadow-xs"
                    color={categoryColors[activeActivity.category] || '#F8CBB8'}
                  />
                  <span className="font-black text-sm text-[#133E68]">
                    {activeActivity.categoryLabel}
                  </span>
                </div>
                {activeActivity.isStarred && (
                  <span className="text-brand-orange font-black text-sm tracking-wide">
                    ¡Invitada estrella!
                  </span>
                )}
              </div>

              {/* Título del evento con INCLINACIÓN DE -5 GRADOS y fondo que continúa a la izquierda desapareciendo detrás del disertante */}
              <div className="relative inline-block transform -rotate-[5deg] origin-left my-1 z-10">
                <div className="absolute inset-y-0 right-0 -left-[600px] bg-[#133E68] rounded-r-2xl shadow-md -z-10" />
                <span className="relative z-10 block text-white text-xl sm:text-2xl font-black py-2 pl-3 pr-6">
                  “{activeActivity.title}”
                </span>
              </div>

              <p className="text-base sm:text-lg font-black text-[#133E68] leading-snug">
                {activeActivity.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-[#133E68]/85 font-medium leading-relaxed">
                {activeActivity.description}
              </p>

              <div className="pt-2 flex flex-wrap gap-y-2 gap-x-6 text-sm">
                <div>
                  <span className="block text-xs font-semibold text-[#133E68]/60">Disertante:</span>
                  <span className="font-black text-base text-brand-blue">{activeActivity.speaker}</span>
                </div>
                <div>
                  <span className="block text-xs font-semibold text-[#133E68]/60">Lugar:</span>
                  <span className="font-black text-base text-brand-blue flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                    {activeActivity.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Sombreado en el borde inferior según especificaciones de Figma */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[281px] rounded-b-[36px] z-10"
              style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 56%, #FFF5E3 70%, rgba(2, 40, 72, 0.5) 100%)',
                mixBlendMode: 'multiply',
              }}
              aria-hidden="true"
            />

            {/* Abajo a la derecha FIXED: Botón encima de fecha y hora en Nunito Bold 32 color FFF5E3 */}
            <div className="pt-6 border-t border-orange-200/40 mt-6 flex flex-wrap items-end justify-between gap-4 z-20">
              <div className="flex items-center gap-2 text-[#FFF5E3] font-extrabold text-sm sm:text-base mb-1">
                <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-brand-orange" />
                <span>{currentDay.weekday} {currentDay.dayNum}</span>
              </div>

              <div className="flex flex-col items-end gap-1.5 ml-auto">
                <button
                  onClick={() => onOpenInscription(activeActivity.title)}
                  className="bg-brand-orange hover:bg-brand-blue text-white px-7 py-2 rounded-full font-bold text-sm sm:text-base shadow-btn hover:shadow-btn-hover active:scale-95 transition-all"
                >
                  Inscribirme
                </button>
                <span className="font-nunito font-black text-2xl lg:text-[32px] text-[#FFF5E3] leading-none tracking-tight">
                  {activeActivity.time}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
