const asset = (filename: string) => `/assets/${filename}`;

export const productForms = [
  { url: asset("form-bar.png"), label: "Ingot" },
  { url: asset("form-rods.png"), label: "Bars" },
  { url: asset("form-plates.png"), label: "Plates" },
  { url: asset("form-bundle.png"), label: "Rods" },
  { url: asset("form-coil.png"), label: "Coil" },
  { url: asset("form-sheet.png"), label: "Sheet" },
  { url: asset("form-wire.png"), label: "Wire" },
];

export type Facility = {
  id: string;
  name: string;
  title: string;
  image: string;
  paragraphs: string[];
  specs: { label: string; value: string }[];
  table?: { head: string[]; rows: string[][] };
};

export const facilities: Facility[] = [
  {
    id: "esr",
    name: "ESR Furnace",
    title: "Electroslag Remelting (ESR) Furnace",
    image: asset("esr-furnace.jpg"),
    paragraphs: [
      "Equipped with ESR to produce ultra-clean, high-integrity superalloys and specialty steels for critical applications. By utilizing a controlled remelting process, the furnace ensures superior metallurgical quality, uniform structure, and enhanced mechanical performance.",
      "Engineered for precision and consistency, our ESR facility has advanced process controls to maintain optimal melting parameters, ensuring repeatable quality and high production efficiency.",
    ],
    specs: [
      { label: "Furnace Capacity", value: "IMT with 1000Kg" },
      { label: "Ingot Size", value: "Dia 80mm, 100mm, 150mm & upto 300mm" },
      { label: "Ingot Weight", value: "900Kg" },
    ],
  },
  {
    id: "slitter",
    name: "Coil Slitter",
    title: "Hot Rolled & Cold Rolled Coil Slitter",
    image: asset("slitter.jpg"),
    paragraphs: [
      "Our Slitter Line is designed for precision cutting of rolled coils into narrow strips with consistent width, clean edges, and minimal material loss. Engineered for high-strength materials such as stainless steel and superalloys, the system ensures reliable performance and superior output quality.",
      "Built with robust slitting heads and high-precision tooling, the line delivers accurate strip widths while maintaining excellent edge finish. Advanced tension control and guiding systems ensure smooth coil handling, preventing deformation and ensuring uniform slit quality across the entire length.",
      "The process is optimized for efficiency, enabling high-speed operations with consistent repeatability. Our slitting line supports a wide range of thickness and width, making it suitable for diverse industrial applications.",
    ],
    specs: [],
    table: {
      head: ["Parameter", "HR Slitter", "CR Slitter"],
      rows: [
        ["Min/Max thickness:", "0.8-5.0mm", "0.1-1.0mm"],
        ["Min/Max width:", "400-1600mm", "15-650mm"],
        ["Max Coil weight:", "30MT", "15MT"],
      ],
    },
  },
  {
    id: "mill",
    name: "6Hi Rolling Mill",
    title: "6HI - Rolling Mill",
    image: asset("rolling-mill.jpg"),
    paragraphs: [
      "Our 6-Hi Rolling Mill is engineered to deliver exceptional precision, surface quality, and consistency for high-performance superalloys and specialty metals. It ensures superior control over thickness, flatness, and mechanical properties-making it ideal for processing stainless steels and superalloys.",
      "The mill features a six-roll configuration with work rolls, intermediate rolls, and backup rolls, enabling reduced roll deflection and enhanced dimensional accuracy. This advanced setup allows the production of thin gauges with uniform profile and excellent surface finish.",
      "With integrated automation and control systems, the 6-Hi mill maintains consistent rolling parameters, ensuring repeatable quality and high productivity. It's robust design supports efficient processing of hard-to-deform materials while minimizing defects and improving overall yield.",
    ],
    specs: [
      { label: "Input Plate thickness", value: "6mm to 8mm" },
      { label: "Output sheet Thickness", value: "0.1mm to 4mm" },
      { label: "Thickness tolerance", value: "(+/-0.01mm)" },
      { label: "Maximum Width", value: "600mm" },
    ],
  },
  {
    id: "wire",
    name: "Wire Drawing",
    title: "Precision Wire Manufacturing Excellence",
    image: asset("wire-drawing.jpg"),
    paragraphs: [
      "Our state-of-the-art Wire Drawing Facility is designed to manufacture high-quality superalloys, Special steels and Titanium alloy wires with exceptional dimensional accuracy, surface finish, and mechanical properties.",
      "Equipped with advanced drawing machines, heat treatment systems, and stringent quality control processes, we produce wires that meet the demanding requirements of aerospace, automotive, energy, medical, welding, and various industrial applications.",
    ],
    specs: [
      { label: "Input Diameter", value: "9-10mm" },
      { label: "Output Diameter", value: "Upto 0.20mm" },
      { label: "Form", value: "Upto Dia2.5mm - Coil; Above Dia2.5mm - Coil & Cut to length Form" },
    ],
  },
  {
    id: "boggie",
    name: "Boggie Furnace",
    title: "Heat Treatment Furnance - Boggie Furnace",
    image: asset("furnace-boggie.jpg"),
    paragraphs: [
      "Our Boggie hearth electric furnace operates with modern control systems for accurate heating cycles and process reliability. Its Heavy-duty refractory lining and insulated walls minimize heat loss and improve durability and ensures consistent temperature distribution across the entire load.",
    ],
    specs: [],
  },
  {
    id: "pit",
    name: "Pit Furnace",
    title: "Heat Treatment Furnance - Pit Furnace",
    image: asset("furnace-pit.jpg"),
    paragraphs: [
      "10MT Pit furnance is a heat treatment furnace designed for processing cylindrical components in a controlled and uniform heating environment. The furnace chamber is constructed below ground level (pit), allowing components to be suspended vertically for efficient heat treatment.",
    ],
    specs: [],
  },
];
export const esrDiagramImage = asset("esr-diagram.jpg");

export const coldRollingFlow = [
  "HR Coil",
  "Width 1250mm",
  "Uncoiler",
  "Leveller",
  "Slitting",
  "Width 600mm x 2Nos",
  "Looper",
  "6Hi Rolling Mill",
  "Continuous Bright Annealing Line",
  "Cold Rolled slitter",
  "Coiler",
];

export const finishes = [
  ["2B", "Smooth finish, reflective grey sheen. Most widely used surface finish."],
  ["2D", "Cold rolled, low reflective matte surface."],
  ["2E", "Cold rolled, rough and dull finish."],
  ["Bright Annealed (BA)", "Cold rolled, annealed in a controlled atmosphere to retain a highly reflective finish."],
  ["Hot Rolled (HR)", "Scaled finish, ideal if surface finish is not a key concern."],
];

export const superalloyFlow = [
  ["VIM", "ESR", "Open Die Forging"],
  ["Hot Rolling Mill", "Hot Drawing Mill", "Cold Rolling Mill", "Wire Mill"],
  ["Cold Rolled Sheets / Strips", "Hot Rolled Plate", "Forged Bar or Component", "Rods", "Wire"],
  ["Furnace (Heat Treatment)", "Final Processing (Machining / Pickling / CG)", "Testing", "Dispatch"],
];

export const formsAndSizes = [
  ["Ingot", "Dia 80mm – Dia 300mm"],
  ["Forged Bars", "Dia 75mm – Dia 200mm"],
  ["Hot Rolled Bars", "Dia 12mm – Dia 70mm"],
  ["Wire & Rod", "Dia 0.3mm – Dia 10mm"],
  ["Cold Rolled Sheet", "0.1mm x 600mm x L to 4mm x 600mm x L"],
];

export type Product = {
  no: number;
  group: "Super Alloy" | "Stainless Steel" | "High Speed Steel";
  category: string;
  grade: string;
  chemistry: string;
  form: string;
  application: string;
};

export const products: Product[] = [
  { no: 1, group: "Super Alloy", category: "Nickel", grade: "Alloy 80A", chemistry: "Ni-20C4-Ti-Al", form: "Ingot, bar, rod, sheet & wire", application: "Aerospace High Temperature" },
  { no: 2, group: "Super Alloy", category: "Nickel", grade: "Alloy 90A", chemistry: "Ni-17Co-19Cr-2.5Ti-1.5Al", form: "Ingot, bar, rod, sheet & wire", application: "High Temperature & Stress" },
  { no: 3, group: "Super Alloy", category: "Nickel", grade: "Alloy C276", chemistry: "Ni-16Mo-15.5Cr-5Fe-4W", form: "Ingot, bar, rod, sheet & wire", application: "High Corrosion resistant" },
  { no: 4, group: "Super Alloy", category: "Nickel", grade: "Inconel 600", chemistry: "74Ni-15.5Cr-8Fe", form: "Ingot, bar, rod, sheet & wire", application: "High temperature corrosion resistance" },
  { no: 5, group: "Super Alloy", category: "Nickel", grade: "Inconel 625", chemistry: "62Ni-21.5Cr-9Mo-3.5Nb", form: "Ingot, bar, rod, sheet & wire", application: "Corrosion resistance" },
  { no: 6, group: "Super Alloy", category: "Nickel", grade: "Inconel 718", chemistry: "52.5Ni-19Cr-3Mo-5.1Nb-18Fe", form: "Ingot, bar, rod, sheet & wire", application: "Aerospace & Power generation" },
  { no: 7, group: "Super Alloy", category: "Nickel", grade: "Monel K400", chemistry: "67Ni-30Cu", form: "Ingot, bar, rod & wire", application: "Corrosion resistance" },
  { no: 8, group: "Super Alloy", category: "Nickel", grade: "Monel K500", chemistry: "66Ni-28Cu-3Al", form: "Ingot, bar, rod & wire", application: "High strength & corrosion resistance" },
  { no: 9, group: "Super Alloy", category: "Cobalt", grade: "KC20WN", chemistry: "52Co-20Cr-15W-10Ni", form: "Bar, rod, sheet & wire", application: "Aerospace & Defence" },
  { no: 10, group: "Super Alloy", category: "Cobalt", grade: "MP35N", chemistry: "35Co-33Ni-20Cr-10Mo", form: "Ingot, bar, rod, sheet & wire", application: "Aerospace" },
  { no: 11, group: "Super Alloy", category: "Iron", grade: "Incoloy 800/800H", chemistry: "Fe-32Ni-21Cr", form: "Ingot, bar, rod, sheet & wire", application: "Power generation, Oil & gas" },
  { no: 12, group: "Super Alloy", category: "Iron", grade: "Alloy A286", chemistry: "25Ni-15Cr-1Mo-2Ti", form: "Bar, rod, sheet, strip & wire", application: "Aerospace & Precision Equipments" },
  { no: 13, group: "Super Alloy", category: "Controlled Expansion Alloy", grade: "INVAR 36", chemistry: "Fe-36Ni", form: "Bar, rod, sheet & wire", application: "Aerospace & Precision Instruments" },
  { no: 14, group: "Super Alloy", category: "Controlled Expansion Alloy", grade: "KOVAR", chemistry: "Fe-29Ni-17Co", form: "Bar, rod, sheet & wire", application: "Aerospace & Medical" },
  { no: 15, group: "Super Alloy", category: "Soft Magnetic Alloy", grade: "Magnetic iron", chemistry: "99Fe-0.12Mn", form: "Rod, strip & wire", application: "Automobile & Electrical Industries" },
  { no: 16, group: "Stainless Steel", category: "Martensitic & Precipitation Hardening (PH) Stainless Steel", grade: "15-5PH", chemistry: "15Cr-5Ni-4Nb-4Cu-Fe Bal", form: "Bar, Rod, Sheet & wire", application: "Aerospace, Oil & Gas" },
  { no: 17, group: "Stainless Steel", category: "Martensitic & Precipitation Hardening (PH) Stainless Steel", grade: "17-4PH", chemistry: "16Cr-4Ni-4Cu-4Nb-Fe Bal", form: "Bar, Rod, Sheet & wire", application: "Aerospace & Power generation" },
  { no: 18, group: "Stainless Steel", category: "Martensitic & Precipitation Hardening (PH) Stainless Steel", grade: "14-5PH", chemistry: "14Cr-5Ni-3Nb-Fe Bal", form: "Bar, Rod, Sheet & wire", application: "Aerospace & Defence" },
  { no: 19, group: "Stainless Steel", category: "Martensitic & Precipitation Hardening (PH) Stainless Steel", grade: "11-10PH", chemistry: "11-Cr-10Ni-2Mo-Fe Bal", form: "Bar, Rod, Sheet & wire", application: "Aerospace & Defence" },
  { no: 20, group: "Stainless Steel", category: "Martensitic & Precipitation Hardening (PH) Stainless Steel", grade: "904L", chemistry: "25Ni-19Cr-4Mo-Fe Bal", form: "Bar, Rod, Sheet & wire", application: "Highly corrosive resistant" },
  { no: 21, group: "Stainless Steel", category: "Martensitic & Precipitation Hardening (PH) Stainless Steel", grade: "440B", chemistry: "16Cr-1Mn-Fe Bal", form: "Sheets & Coil", application: "Food & Medical" },
  { no: 22, group: "Stainless Steel", category: "Austenitic", grade: "304", chemistry: "18Cr-8Ni-Fe Bal", form: "Ingot, bar, rod, sheet & wire", application: "Oil & Gas, Aerospace & Pharma" },
  { no: 23, group: "Stainless Steel", category: "Austenitic", grade: "304L", chemistry: "18Cr-8Ni-Fe Bal", form: "Ingot, bar, rod, sheet & wire", application: "Oil & Gas, Aerospace & Pharma" },
  { no: 24, group: "Stainless Steel", category: "Austenitic", grade: "321", chemistry: "18Cr-10Ni-5Si-Fe Bal", form: "Ingot, bar, rod, sheet & wire", application: "Aerospace, Power generation, Oil & gas" },
  { no: 25, group: "High Speed Steel", category: "High Speed Steel", grade: "M2", chemistry: "4.2Cr-5Mo-6.4W-1.8V", form: "Bar, rod & Wire", application: "Drills & work tools" },
  { no: 26, group: "High Speed Steel", category: "High Speed Steel", grade: "M3", chemistry: "4.1Cr-5Mo-6.2W-3V", form: "Bar, rod & Wire", application: "Highly-wear resistant" },
  { no: 27, group: "High Speed Steel", category: "High Speed Steel", grade: "M7", chemistry: "3.8Cr-8.6Mo-1.8W-1.9-V", form: "Bar, rod & Wire", application: "Drill bits & cutting tools" },
  { no: 28, group: "High Speed Steel", category: "High Speed Steel", grade: "M35", chemistry: "4.2Cr-5Mo-6.4W-4.8Co-1.8V", form: "Bar, rod & Wire", application: "Milling Cutters, twist drills & reamers" },
  { no: 29, group: "High Speed Steel", category: "High Speed Steel", grade: "M42", chemistry: "3.8Cr-9.4Mo-1.5W-8Co1.2V", form: "Bar, rod & Wire", application: "Reamers & twist drills" },
  { no: 30, group: "High Speed Steel", category: "High Speed Steel", grade: "T42", chemistry: "10W-10Co-4Cr-3.5V-3.5Mo", form: "Bar, rod & Wire", application: "High stress tools & bits" },
];

export const testingFacilities = [
  { title: "Tensile Testing", image: asset("test-tensile.jpg") },
  { title: "Hardness Testing", image: asset("test-hardness.jpg") },
  { title: "Heat Treatment Furnace", image: asset("test-furnace.jpg") },
  { title: "Microstructure Analysis", image: asset("test-micro.jpg") },
  { title: "Optical Emission Spectrometer", image: asset("test-oes.jpg") },
];
