import { c as create_ssr_component, e as escape, a as add_attribute, j as each } from "../../../../../chunks/ssr.js";
import "devalue";
import "../../../../../chunks/client.js";
import { g as getModalStore } from "../../../../../chunks/stores.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { g as getPointsToGradeMap } from "../../../../../chunks/grades.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const modalStore = getModalStore();
  let { data } = $$props;
  let { form } = $$props;
  const courseUnitData = data.course_unit_data;
  const subject = data.subject ?? "";
  const subjectTitle = subject.replaceAll("-", " ").replace(/\b\w/g, (char) => char.toUpperCase());
  const courseSlug = courseUnitData.courseType.toLowerCase().replaceAll(" ", "-");
  const gradeOptions = [
    {
      value: "DISTINCTION",
      label: "Distinction"
    },
    { value: "MERIT", label: "Merit" },
    { value: "PASS", label: "Pass" },
    { value: "NEAR_PASS", label: "Near Pass" },
    {
      value: "UNCLASSIFIED",
      label: "Unclassified"
    },
    {
      value: "NOT_MARKED",
      label: "This unit is not marked"
    }
  ];
  const initialFormState = form?.formState ?? data.savedCalculation?.formState;
  let mandatoryGrades = {
    ...initialFormState?.mandatoryGrades ?? {}
  };
  let optionalSelections = initialFormState?.optionalSelections ? [...initialFormState.optionalSelections] : Array.from({ length: courseUnitData.optionalUnitCount }).map(() => ({ unitName: "", grade: "NOT_MARKED" }));
  while (optionalSelections.length < courseUnitData.optionalUnitCount) {
    optionalSelections.push({ unitName: "", grade: "NOT_MARKED" });
  }
  for (const unitName of courseUnitData.mandatoryUnits) {
    if (!mandatoryGrades[unitName]) {
      mandatoryGrades[unitName] = "NOT_MARKED";
    }
  }
  let latestCalculation = form?.gradeCalculationResult ?? data.savedCalculation?.result;
  let lastValidationMessage = "";
  let lastAppliedFormStateHash = "";
  let calculatorForm;
  const availableOptionalUnits = (index) => {
    const selectedByOthers = new Set(optionalSelections.filter((_, otherIndex) => otherIndex !== index).map((selection) => selection.unitName).filter((unitName) => unitName.length > 0));
    return courseUnitData.optionalUnits.filter((unitName) => {
      return unitName === optionalSelections[index].unitName || !selectedByOthers.has(unitName);
    });
  };
  const formatGrade = (gradeTokens) => {
    return gradeTokens.join("");
  };
  let boundaryRows = [];
  let nextBoundaryMessage = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  {
    if (form?.formState) {
      const nextHash = JSON.stringify(form.formState);
      if (nextHash !== lastAppliedFormStateHash) {
        mandatoryGrades = { ...form.formState.mandatoryGrades };
        optionalSelections = [...form.formState.optionalSelections];
        while (optionalSelections.length < courseUnitData.optionalUnitCount) {
          optionalSelections.push({ unitName: "", grade: "NOT_MARKED" });
        }
        for (const unitName of courseUnitData.mandatoryUnits) {
          if (!mandatoryGrades[unitName]) {
            mandatoryGrades[unitName] = "NOT_MARKED";
          }
        }
        lastAppliedFormStateHash = nextHash;
      }
    }
  }
  {
    if (form?.gradeCalculationResult) {
      latestCalculation = form.gradeCalculationResult;
    }
  }
  {
    if (form?.validationFailure) {
      const validationMessage = `${form.validationFailure.title}:${form.validationFailure.message}`;
      if (validationMessage !== lastValidationMessage) {
        modalStore.trigger({
          type: "alert",
          title: form.validationFailure.title,
          body: form.validationFailure.message
        });
        lastValidationMessage = validationMessage;
      }
    }
  }
  {
    {
      boundaryRows = [];
      nextBoundaryMessage = "";
      if (latestCalculation) {
        const pointsToGradeMap = getPointsToGradeMap(courseUnitData.courseType);
        if (pointsToGradeMap) {
          const currentPoints = latestCalculation.breakdown.points.current;
          const sortedThresholds = Array.from(pointsToGradeMap.keys()).sort((a, b) => a - b);
          const currentThreshold = [...sortedThresholds].reverse().find((threshold) => threshold <= currentPoints) ?? 0;
          const nextThreshold = sortedThresholds.find((threshold) => threshold > currentPoints);
          if (nextThreshold !== void 0) {
            const pointsNeeded = nextThreshold - currentPoints;
            const nextGrade = formatGrade((pointsToGradeMap.get(nextThreshold) ?? []).map((grade) => String(grade)));
            nextBoundaryMessage = `${pointsNeeded} more qualification point${pointsNeeded === 1 ? "" : "s"} for ${nextGrade}`;
          } else {
            nextBoundaryMessage = "You are currently at the top available boundary.";
          }
          boundaryRows = [...sortedThresholds].reverse().map((threshold) => ({
            points: threshold,
            grade: formatGrade((pointsToGradeMap.get(threshold) ?? []).map((grade) => String(grade))),
            isCurrent: threshold === currentThreshold
          }));
        }
      }
    }
  }
  return `${$$result.head += `<!-- HEAD_svelte-1u6k948_START -->${$$result.title = `<title>${escape(subjectTitle)} ${escape(courseUnitData.courseType)} Grade Calculator | BTEC Grade Calculator</title>`, ""}<meta name="description"${add_attribute("content", `Calculate ${subjectTitle} ${courseUnitData.courseType} BTEC grades and UCAS points with live current, expected and maximum projections.`, 0)}><meta property="og:title"${add_attribute("content", `${subjectTitle} ${courseUnitData.courseType} Grade Calculator | BTEC Grade Calculator`, 0)}><meta property="og:description"${add_attribute("content", `Live grade and UCAS projection for ${subjectTitle} ${courseUnitData.courseType}.`, 0)}><meta property="og:url"${add_attribute("content", `https://www.btecgradecalculator.com/calculate/${subject}/${courseSlug}`, 0)}><meta name="twitter:title"${add_attribute("content", `${subjectTitle} ${courseUnitData.courseType} Grade Calculator`, 0)}><meta name="twitter:description"${add_attribute("content", `Live grade and UCAS projection for ${subjectTitle} ${courseUnitData.courseType}.`, 0)}><!-- HEAD_svelte-1u6k948_END -->`, ""} <div class="container mx-auto px-4 md:px-8 py-8"><div class="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10 shadow-2xl backdrop-blur-xl"><div class="text-center mt-2 mb-8"><p class="text-xs uppercase tracking-[0.2em] text-cyan-200/80" data-svelte-h="svelte-wfu1cv">Live calculator</p> <h2 class="pt-3 text-3xl md:text-5xl font-black tracking-tight">BTEC ${escape(courseUnitData.courseType)}</h2> <p class="mt-3 text-slate-200" data-svelte-h="svelte-b9kwlh">Results update automatically when you change any unit selection.</p></div> <form method="POST"${add_attribute("this", calculatorForm, 0)}><div class="flex justify-center flex-col xl:flex-row gap-8"><div class="w-full"><h3 class="mb-5 text-2xl font-bold tracking-tight" data-svelte-h="svelte-ld40qz">Mandatory Units</h3> ${each(courseUnitData.mandatoryUnits, (unitName) => {
    return `<div class="mb-3 rounded-2xl border border-white/10 bg-black/20 p-4"><p class="mb-3 text-base font-semibold">${escape(unitName)}</p> <div class="grid gap-2 md:grid-cols-2 xl:grid-cols-3">${each(gradeOptions, (option) => {
      return `<label class="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 cursor-pointer transition hover:bg-white/10"><input class="radio !border-white/40" type="radio"${add_attribute("name", "mandatory:" + unitName, 0)}${add_attribute("value", option.value, 0)}${option.value === mandatoryGrades[unitName] ? add_attribute("checked", true, 1) : ""}> <span>${escape(option.label)}</span> </label>`;
    })}</div> </div>`;
  })}</div> ${courseUnitData.optionalUnitCount > 0 ? `<div class="w-full"><h3 class="mb-5 text-2xl font-bold tracking-tight" data-svelte-h="svelte-1goyif8">Optional Units</h3> <p class="mb-4 text-slate-300 text-sm" data-svelte-h="svelte-1s6lhl1">Selecting only an optional unit (with &quot;This unit is not marked&quot;) may not change results until you add a marked grade.</p> ${each(Array(courseUnitData.optionalUnitCount), (_, i) => {
    return `<div class="mb-3 rounded-2xl border border-white/10 bg-black/20 p-4"><select class="select w-full mb-3 border-white/20 bg-black/30"${add_attribute("name", "optional-unit-" + i, 0)}><option value="" data-svelte-h="svelte-qorm2w">Select optional unit</option>${each(availableOptionalUnits(i), (unitName) => {
      return `<option${add_attribute("value", unitName, 0)}>${escape(unitName)}</option>`;
    })}</select> <div class="grid gap-2 md:grid-cols-2 xl:grid-cols-3">${each(gradeOptions, (option) => {
      return `<label class="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 cursor-pointer transition hover:bg-white/10"><input class="radio !border-white/40" type="radio"${add_attribute("name", "optional-grade-" + i, 0)}${add_attribute("value", option.value, 0)} ${!optionalSelections[i].unitName ? "disabled" : ""}${option.value === optionalSelections[i].grade ? add_attribute("checked", true, 1) : ""}> <span>${escape(option.label)}</span> </label>`;
    })}</div> </div>`;
  })}</div>` : ``}</div></form></div> ${latestCalculation ? `<div class="grid gap-4 mt-6 md:grid-cols-3"><div class="rounded-2xl border border-cyan-300/30 bg-cyan-400/10 shadow-xl p-5"><h3 class="text-xl font-bold mb-3" data-svelte-h="svelte-1m20tb1">Current Grade</h3> <h6 class="text-base">Grade: ${escape(latestCalculation.currentGrade.grade)}</h6> <h6 class="text-base">Qualification Points: ${escape(latestCalculation.breakdown.points.current)}</h6> <h6 class="text-base">UCAS Points: ${escape(latestCalculation.currentGrade.ucasPoints)}</h6></div> <div class="rounded-2xl border border-fuchsia-300/30 bg-fuchsia-400/10 shadow-xl p-5"><h3 class="text-xl font-bold mb-3" data-svelte-h="svelte-uu1rj8">Expected Grade</h3> <h6 class="text-base">Grade: ${escape(latestCalculation.expectedGrade.grade)}</h6> <h6 class="text-base">Qualification Points: ${escape(latestCalculation.breakdown.points.expected)}</h6> <h6 class="text-base">UCAS Points: ${escape(latestCalculation.expectedGrade.ucasPoints)}</h6></div> <div class="rounded-2xl border border-violet-300/30 bg-violet-400/10 shadow-xl p-5"><h3 class="text-xl font-bold mb-3" data-svelte-h="svelte-pr2nzi">Maximum Grade</h3> <h6 class="text-base">Grade: ${escape(latestCalculation.maximumGrade.grade)}</h6> <h6 class="text-base">Qualification Points: ${escape(latestCalculation.breakdown.points.maximum)}</h6> <h6 class="text-base">UCAS Points: ${escape(latestCalculation.maximumGrade.ucasPoints)}</h6></div></div> <div class="mt-6 rounded-2xl border border-fuchsia-300/30 bg-fuchsia-400/10 p-4 shadow-xl"><p class="text-sm uppercase tracking-[0.16em] text-fuchsia-100/90" data-svelte-h="svelte-11kdqve">Next grade target</p> <p class="mt-2 text-base md:text-lg font-semibold text-white">${escape(nextBoundaryMessage)}</p></div> <div class="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5 shadow-xl"><h3 class="text-xl font-bold mb-3 tracking-tight" data-svelte-h="svelte-fbu7o0">Grade boundaries</h3> <div class="overflow-x-auto"><table class="w-full text-sm"><thead class="text-left text-slate-300 border-b border-white/10" data-svelte-h="svelte-dvpp6m"><tr><th class="py-2 pr-3">Grade</th> <th class="py-2 pr-3">Qualification points</th> <th class="py-2">Status</th></tr></thead> <tbody>${each(boundaryRows, (row) => {
    return `<tr${add_attribute(
      "class",
      row.isCurrent ? "bg-cyan-400/10 text-cyan-100" : "text-slate-200",
      0
    )}><td class="py-2 pr-3 font-semibold">${escape(row.grade)}</td> <td class="py-2 pr-3">${escape(row.points)}</td> <td class="py-2">${escape(row.isCurrent ? "Your current boundary" : "")}</td> </tr>`;
  })}</tbody></table></div></div> <div class="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5 shadow-xl"><h3 class="text-xl font-bold mb-3 tracking-tight" data-svelte-h="svelte-1ul4adp">How your grade is calculated</h3> <p class="text-slate-100" data-svelte-h="svelte-11v56c4">We convert each selected unit grade into a coefficient, multiply by guided learning hours, and convert
                to points using:
                <code class="px-1 rounded bg-white/10">floor(coefficient × GLH ÷ 10)</code>.</p> <p class="mt-2 text-slate-200" data-svelte-h="svelte-22lx3q">We then compare total qualification points against the qualification thresholds for your course size.</p> <div class="mt-4 grid gap-3 md:grid-cols-3"><div class="rounded-xl border border-white/10 bg-white/5 p-3"><p class="font-semibold" data-svelte-h="svelte-myvg8n">Current</p> <p>Qualification Points: ${escape(latestCalculation.breakdown.points.current)}</p> <p>Assumed coefficient for not marked units: ${escape(latestCalculation.breakdown.coefficients.current.toFixed(2))}</p></div> <div class="rounded-xl border border-white/10 bg-white/5 p-3"><p class="font-semibold" data-svelte-h="svelte-43he2y">Expected</p> <p>Qualification Points: ${escape(latestCalculation.breakdown.points.expected)}</p> <p>Assumed coefficient for not marked units: ${escape(latestCalculation.breakdown.coefficients.expected.toFixed(2))}</p></div> <div class="rounded-xl border border-white/10 bg-white/5 p-3"><p class="font-semibold" data-svelte-h="svelte-1pgj910">Maximum</p> <p>Qualification Points: ${escape(latestCalculation.breakdown.points.maximum)}</p> <p>Assumed coefficient for not marked units: ${escape(latestCalculation.breakdown.coefficients.maximum.toFixed(2))}</p></div></div> <p class="mt-3 text-slate-300">Completed units: ${escape(latestCalculation.breakdown.completedUnits)}/${escape(latestCalculation.breakdown.totalUnits)}</p></div>` : ``}</div>`;
});
export {
  Page as default
};
