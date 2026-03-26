import React from "react";

export default function GanttPEIUAHApp() {
  const timeline = [
    { label: "MAR", year: "2026" },
    { label: "ABR", year: "2026" },
    { label: "MAY", year: "2026" },
    { label: "JUN", year: "2026" },
    { label: "JUL", year: "2026" },
    { label: "AGO", year: "2026" },
    { label: "SEPT", year: "2026" },
    { label: "OCT", year: "2026" },
    { label: "NOV", year: "2026" },
    { label: "DIC", year: "2026" },
    { label: "2027", year: "2027" },
    { label: "2028", year: "2028" },
    { label: "2029", year: "2029" },
    { label: "2030", year: "2030" },
  ];

  const rows = [
    { phase: "1.- DISEÑO DEL PEI INSTITUCIONAL", isPhase: true },
    {
      task: "Preparación de kit planificación",
      detail:
        "Elaboración de propuesta de indicadores y metas institucionales. Elaboración de matriz de tributación de planes de facultad vigentes al PEI. Preparación de benchmarks de indicadores clave. Formato y metodología para talleres de trabajo en facultades.",
      type: "Trabajo interno Equipo DGD",
      product: "Kit de planificación",
      owners: "Dirección de Gestión y Desarrollo",
      participants:
        "Unidades centrales (DDPU, VcM, Dirección de Investigación, Finanzas, Operaciones, Cooperación)",
      marks: ["", "X", "X", "", "", "", "", "", "", "", "", "", "", ""],
    },
    {
      task: "Definir metodología de seguimiento y control del PEI",
      detail: "Trabajo interno para definir metodología de seguimiento y control del PEI.",
      type: "Trabajo interno Equipo DGD",
      product: "Metodología del seguimiento y control del PEI",
      owners: "Dirección de Gestión y Desarrollo",
      participants: "DAI, Dirección de Planificación",
      marks: ["", "X", "X", "X", "", "", "", "", "", "", "", "", "", ""],
    },
    {
      task: "Validación y ajuste de indicadores y metas institucionales",
      detail:
        "Discusión de propuesta de indicadores y metas institucionales elaborados por el equipo DGD.",
      type: "Trabajo equipos DGD - Rectoría",
      product: "Indicadores, metas institucionales y planes de acción del PEI Institucional",
      owners: "Comité de Rectoría",
      participants: "DGD",
      marks: ["", "", "X", "X", "", "", "", "", "", "", "", "", "", ""],
    },

    { phase: "2.- DISEÑO DE LOS PLANES DE FACULTAD", isPhase: true },
    {
      task: "Presentación rediseño PEI UAH y plan de trabajo con las facultades (Kick-off)",
      detail:
        "Presentación de metodologías de trabajo. Se propone reunión online donde se citarán a todas las facultades.",
      type: "Reunión informativa para facultades",
      product: "PPT del Kick off",
      owners: "Dirección de Gestión y Desarrollo",
      participants: "Todas las facultades",
      marks: ["", "", "", "X", "", "", "", "", "", "", "", "", "", ""],
    },
    {
      task: "Taller N° 1 plan de facultad",
      detail:
        "Discusión y preparación de entregable 1: diagnóstico, prioridades y apuestas estratégicas.",
      type: "Reunión de trabajo con facultades",
      product: "Entrega de kit de planificación",
      owners: "Consejo de Facultad",
      participants: "DGD",
      marks: ["", "", "", "", "X", "", "", "", "", "", "", "", "", ""],
    },
    {
      task: "Trabajo interno de facultad",
      detail:
        "Trabajo autónomo e interno por cada facultad para la revisión detallada de sus respectivos PEI, focos y prioridades.",
      type: "Trabajo interno de facultad",
      product: "Borrador del entregable 1",
      owners: "Decanatura",
      participants: "Abierto a la convocatoria de la Facultad",
      marks: ["", "", "", "", "X", "", "", "", "", "", "", "", "", ""],
    },
    {
      task: "Taller N° 2 plan de facultad",
      detail:
        "Discusión y preparación de entregable 1: alineamiento con Plan Institucional, objetivos y acciones comprometidas.",
      type: "Reunión de trabajo con facultades",
      product: "Entregable 1",
      owners: "Consejo de Facultad",
      participants: "DGD",
      marks: ["", "", "", "", "X", "", "", "", "", "", "", "", "", ""],
    },
    {
      task: "Formulación Técnica del Plan de Facultad",
      detail: "Preparación de entregable 2: Plan de Facultad.",
      type: "Trabajo interno colaborativo de facultad",
      product: "Borrador del plan de facultad: matriz de estrategia, KPI y meta institucional",
      owners: "Comité Técnico de Facultad / Dirección de Gestión y Desarrollo",
      participants: "No aplica",
      marks: ["", "", "", "", "", "X", "", "", "", "", "", "", "", ""],
    },
    {
      task: "Valorización Preliminar del Plan de Facultad",
      detail: "Valorización del Plan de Facultad.",
      type: "Trabajo interno de facultad",
      product: "Plan de facultad valorizado",
      owners: "Dirección Administrativa Facultad / VRAF",
      participants: "No aplica",
      marks: ["", "", "", "", "", "X", "", "", "", "", "", "", "", ""],
    },
    {
      task: "Validación de la propuesta de Plan de Facultad",
      detail:
        "Revisión del contenido del plan considerando su coherencia interna, prioridades y principales líneas de acción incluyendo su costeo.",
      type: "Sesiones de validación",
      product: "Plan de facultad aprobado",
      owners: "Consejo de Facultad",
      participants: "No aplica",
      marks: ["", "", "", "", "", "", "X", "", "", "", "", "", "", ""],
    },
    {
      task: "Análisis agregado de las propuestas de planes de facultad",
      detail:
        "Revisión comparada de los planes de facultad para verificar articulación con el Plan Institucional, consistencia entre objetivos, indicadores y metas, e identificación de ajustes requeridos.",
      type: "Trabajo interno DGD",
      product: "Entregable 3",
      owners: "Dirección de Gestión y Desarrollo",
      participants: "No aplica",
      marks: ["", "", "", "", "", "", "X", "X", "", "", "", "", "", ""],
    },
    {
      task: "Revisión de factibilidad presupuestaria y asignación preliminar de recursos",
      detail:
        "Revisión técnica del costeo presentado por las facultades y contraste entre requerimientos financieros y disponibilidad de recursos.",
      type: "Sesiones de revisión",
      product: "Plan de Facultad revisado",
      owners: "Vicerrectoría de Administración y Finanzas",
      participants: "No aplica",
      marks: ["", "", "", "", "", "", "X", "X", "", "", "", "", "", ""],
    },
    {
      task: "Consolidación de observaciones y ajuste final de planes de facultad",
      detail: "Validación de coherencia institucional y priorización.",
      type: "Sesiones de revisión",
      product: "Plan de Facultad validado",
      owners: "Comité de Rectoría",
      participants: "",
      marks: ["", "", "", "", "", "", "", "", "X", "", "", "", "", ""],
    },
    {
      task: "Validación y ajuste de Plan de Facultad",
      detail: "Ajuste del plan en base a la factibilidad técnica y económica.",
      type: "Sesiones de revisión",
      product: "Plan de Facultad validado",
      owners: "DGD - CAE - Decanatura",
      participants: "VRAF",
      marks: ["", "", "", "", "", "", "", "", "X", "", "", "", "", ""],
    },
    {
      task: "Validación Institucional de los Planes de Facultad",
      detail: "Validación de consistencia institucional.",
      type: "Sesiones de revisión",
      product: "Plan de Facultad validado",
      owners: "Consejo Académico",
      participants: "Decanaturas / DGD",
      marks: ["", "", "", "", "", "", "", "", "X", "", "", "", "", ""],
    },
    {
      task: "Difusión del PEI Institucional y Planes de Facultad",
      detail: "Difusión del PEI Institucional y de los Planes de Facultad.",
      type: "Difusión",
      product: "PEI y Planes de Facultades difundidos",
      owners: "Dirección de Gestión y Desarrollo",
      participants: "No aplica",
      marks: ["", "", "", "", "", "", "", "", "", "X", "", "", "", ""],
    },

    { phase: "3.- IMPLEMENTACIÓN Y SEGUIMIENTO", isPhase: true },
    {
      task: "Implementación de las líneas de acción institucionales y de facultades",
      detail:
        "Las facultades dan curso a las líneas de acción definidas en sus planes. DGD apoya con orientaciones para la implementación.",
      type: "Implementación y acompañamiento",
      product: "Reuniones de acompañamiento",
      owners: "Facultad / Dirección de Gestión y Desarrollo",
      participants: "No aplica",
      marks: ["", "", "", "", "", "", "", "", "", "", "X", "X", "X", "X"],
    },
    {
      task: "Seguimiento y control del avance de las líneas de acción",
      detail: "Seguimiento al avance de las líneas de acción.",
      type: "Seguimiento",
      product: "Seguimiento",
      owners: "Dirección de Gestión y Desarrollo",
      participants: "No aplica",
      marks: ["", "", "", "", "", "", "", "", "", "", "X", "X", "X", "X"],
    },
    {
      task: "Seguimiento de indicadores intermedios",
      detail: "Seguimiento de indicadores intermedios.",
      type: "Seguimiento",
      product: "Seguimiento",
      owners: "Dirección de Gestión y Desarrollo",
      participants: "No aplica",
      marks: ["", "", "", "", "", "", "", "", "", "", "X", "X", "X", "X"],
    },
    {
      task: "Presentar avances sobre avance de indicadores intermedios",
      detail: "Presentación de avances en la estrategia de indicadores intermedios.",
      type: "Presentación",
      product: "PPT y análisis del avance",
      owners: "Coordinación Académica Estratégica / Consejo de Facultad",
      participants: "No aplica",
      marks: ["", "", "", "", "", "", "", "", "", "", "X", "X", "X", "X"],
    },
    {
      task: "Seguimiento de indicadores estratégicos",
      detail: "Se realiza seguimiento y se informa a las contrapartes.",
      type: "Seguimiento",
      product: "PPT y análisis del avance",
      owners: "Dirección de Gestión y Desarrollo",
      participants: "No aplica",
      marks: ["", "", "", "", "", "", "", "", "", "", "X", "X", "X", "X"],
    },
    {
      task: "Presentar resultados del avance de la estrategia del año",
      detail: "Presentación anual sobre los avances de la estrategia durante el año.",
      type: "Presentación",
      product: "PPT y análisis del avance general del año",
      owners: "Dirección de Gestión y Desarrollo",
      participants: "No aplica",
      marks: ["", "", "", "", "", "", "", "", "", "", "X", "X", "X", "X"],
    },
    {
      task: "Evaluación intermedia 2028",
      detail:
        "Elaboración de informe de evaluación intermedia con estatus general y específico de puntos críticos.",
      type: "Evaluación intermedia",
      product: "Informe intermedio",
      owners: "Dirección de Gestión y Desarrollo",
      participants: "No aplica",
      marks: ["", "", "", "", "", "", "", "", "", "", "", "X", "", ""],
    },
    {
      task: "Ajustes a la estrategia",
      detail: "Ajustes en caso de existir luego de la evaluación.",
      type: "Ajustes",
      product: "Acta",
      owners: "Comité de Rectoría",
      participants: "No aplica",
      marks: ["", "", "", "", "", "", "", "", "", "", "", "X", "", ""],
    },
    {
      task: "Cierre del PEI UAH 2030",
      detail:
        "Al cierre del período se contempla la elaboración del informe ejecutivo de cierre del PEI.",
      type: "Cierre",
      product: "Informe Ejecutivo de Cierre del PEI",
      owners: "Dirección de Gestión y Desarrollo",
      participants: "No aplica",
      marks: ["", "", "", "", "", "", "", "", "", "", "", "", "", "X"],
    },
  ];

  const [search, setSearch] = React.useState("");

  const filteredRows = rows.filter((row) => {
    if (row.isPhase) return true;
    const q = search.trim().toLowerCase();
    if (!q) return true;
    const text = [row.task, row.detail, row.type, row.product, row.owners, row.participants]
      .join(" ")
      .toLowerCase();
    return text.includes(q);
  });

  const visibleRows = [];
  for (let i = 0; i < filteredRows.length; i += 1) {
    const row = filteredRows[i];
    if (row.isPhase) {
      const nextNonPhase = filteredRows.slice(i + 1).find((r) => !r.isPhase);
      if (nextNonPhase) visibleRows.push(row);
    } else {
      visibleRows.push(row);
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f6f8] text-slate-900">
      <div className="bg-[#0f5b6f] px-6 py-5 text-white shadow-sm">
        <div className="mx-auto max-w-[2600px]">
          <h1 className="text-[30px] font-bold leading-tight">
            Actualización Plan Estratégico Institucional (PEI) — UAH 2026
          </h1>
          <p className="mt-1 text-white/80">Modelo actualización PEI UAH 2026-2030 para facultades</p>
        </div>
      </div>

      <div className="mx-auto max-w-[2600px] p-5">
        <div className="mb-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por tarea, detalle, tipo, producto, responsable o participante"
            className="w-full max-w-[540px] rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-orange-200"
          />
        </div>

        <div className="overflow-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-[3000px] border-collapse text-[12px]">
            <thead>
              <tr>
                <th
                  rowSpan={2}
                  className="sticky left-0 z-30 min-w-[300px] border border-slate-300 bg-[#142b57] px-4 py-3 text-left font-bold text-white"
                >
                  Nombre de la tarea / actividad
                </th>
                <th
                  rowSpan={2}
                  className="sticky left-[300px] z-30 min-w-[440px] border border-slate-300 bg-[#142b57] px-4 py-3 text-left font-bold text-white"
                >
                  Detalle
                </th>
                <th
                  rowSpan={2}
                  className="sticky left-[740px] z-30 min-w-[220px] border border-slate-300 bg-[#142b57] px-4 py-3 text-left font-bold text-white"
                >
                  Tipo de actividad
                </th>
                <th
                  rowSpan={2}
                  className="sticky left-[960px] z-30 min-w-[220px] border border-slate-300 bg-[#142b57] px-4 py-3 text-left font-bold text-white"
                >
                  Producto esperado
                </th>
                <th
                  rowSpan={2}
                  className="sticky left-[1180px] z-30 min-w-[220px] border border-slate-300 bg-[#142b57] px-4 py-3 text-left font-bold text-white"
                >
                  Responsables
                </th>
                <th
                  rowSpan={2}
                  className="sticky left-[1400px] z-30 min-w-[220px] border border-slate-300 bg-[#142b57] px-4 py-3 text-left font-bold text-white"
                >
                  Participantes
                </th>
                <th colSpan={10} className="border border-slate-300 bg-[#142b57] px-2 py-3 text-center font-bold text-white">
                  2026
                </th>
                <th colSpan={1} className="border border-slate-300 bg-[#142b57] px-2 py-3 text-center font-bold text-white">
                  2027
                </th>
                <th colSpan={1} className="border border-slate-300 bg-[#142b57] px-2 py-3 text-center font-bold text-white">
                  2028
                </th>
                <th colSpan={1} className="border border-slate-300 bg-[#142b57] px-2 py-3 text-center font-bold text-white">
                  2029
                </th>
                <th colSpan={1} className="border border-slate-300 bg-[#142b57] px-2 py-3 text-center font-bold text-white">
                  2030
                </th>
              </tr>
              <tr>
                {timeline.map((item, index) => (
                  <th
                    key={`${item.year}-${item.label}-${index}`}
                    className="min-w-[92px] border border-slate-300 bg-[#21406f] px-2 py-3 text-center text-xs font-semibold tracking-wide text-white"
                  >
                    {item.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {visibleRows.map((row, index) => {
                if (row.isPhase) {
                  return (
                    <tr key={`phase-${index}`}>
                      <td
                        colSpan={20}
                        className="sticky left-0 z-20 border border-slate-300 bg-[#eaf3eb] px-4 py-3 font-bold text-slate-800"
                      >
                        {row.phase}
                      </td>
                    </tr>
                  );
                }

                return (
                  <tr key={`task-${index}`}>
                    <td className="sticky left-0 z-10 min-w-[300px] border border-slate-200 bg-white px-3 py-3 align-top leading-relaxed">
                      {row.task}
                    </td>
                    <td className="sticky left-[300px] z-10 min-w-[440px] border border-slate-200 bg-white px-3 py-3 align-top leading-relaxed">
                      {row.detail}
                    </td>
                    <td className="sticky left-[740px] z-10 min-w-[220px] border border-slate-200 bg-white px-3 py-3 align-top leading-relaxed">
                      {row.type}
                    </td>
                    <td className="sticky left-[960px] z-10 min-w-[220px] border border-slate-200 bg-white px-3 py-3 align-top leading-relaxed">
                      {row.product}
                    </td>
                    <td className="sticky left-[1180px] z-10 min-w-[220px] border border-slate-200 bg-white px-3 py-3 align-top leading-relaxed">
                      {row.owners}
                    </td>
                    <td className="sticky left-[1400px] z-10 min-w-[220px] border border-slate-200 bg-white px-3 py-3 align-top leading-relaxed">
                      {row.participants}
                    </td>
                    {row.marks.map((mark, markIndex) => (
                      <td
                        key={`mark-${index}-${markIndex}`}
                        className={`min-w-[92px] border border-slate-200 px-2 py-3 text-center ${
                          markIndex >= 10 ? "bg-[#fff8f2]" : "bg-white"
                        }`}
                      >
                        {mark ? (
                          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-orange-100 font-bold text-orange-700">
                            {mark}
                          </span>
                        ) : null}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
