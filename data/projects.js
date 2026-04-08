/**
 * PORTFOLIO DATA
 * ──────────────
 * To add / edit a project, just update this array.
 * Each object supports:
 *   title       - project name (required)
 *   category    - used for filter tabs (e.g. "AutoCad", "Mobile", "Design")
 *   description - short summary shown on the card
 *   details     - longer description shown in the modal (supports \n for line breaks)
 *   image       - cover image path (shown on the card)
 *   images      - array of image paths shown in the modal gallery (falls back to [image])
 *   tags        - array of tech/skill labels
 *   link        - live URL (optional, set "" to hide)
 *   repo        - GitHub repo URL (optional, set "" to hide)
 */
const PROJECTS = [
  {
    title: "Field Verification & As-Built Documentation - Geo Dipa Energy",
    category: "AutoCAD",
    description: "Performed field verification and updated engineering drawings for PT Fusi Gama Indonesia under the Geo Dipa Energy project.",
    details: "Worked under PT Fusi Gama Indonesia for a Geodipa project managed under Kwarsa Hexagon.\n\nProblem: Existing engineering documents did not accurately reflect actual field conditions, causing discrepancies between P&ID references and installed instruments.\n\nSolution: Conducted direct field verification to confirm the presence, tag numbers, and physical positions of instruments. Updated and redrew hook-up drawings and instrument location layouts using AutoCAD based on verified field data.\n\nResults: Produced accurate as-built documentation that matched real field conditions, resolving all identified discrepancies between field installations and P&ID references.",
    image: "assets/images/geodipa/geodipa_1.jpg",
    images: [
      "assets/images/geodipa/geodipa_1.jpg",
      "assets/images/geodipa/geodipa_2.jpg"
    ],
    tags: ["AutoCAD", "P&ID", "Hook-up Drawing", "Instrument Location", "As-Built Documentation", "Field Verification"],
    link: "",
    repo: ""
  },
  {
    title: "PLC Programming - Assistant Instructor at UGM",
    category: "PLC & Automation",
    description: "Assisted teaching PLC programming using Siemens S7-1200, WinCC, and Schneider PLCs at Universitas Gadjah Mada.",
    details: "Served as Assistant Instructor for the PLC Programming course at Universitas Gadjah Mada (Aug-Dec 2025).\n\nScope: Delivered hands-on sessions covering Siemens S7-1200, WinCC HMI simulation, and Schneider PLC systems. Designed custom case studies involving analog scaling, signal processing, and practical control logic development.\n\nKey contributions: Guided students in building and debugging ladder logic programs, handling analog inputs, and applying automation logic to real scenarios. Supported troubleshooting for both Siemens and Schneider systems. Established and configured local communication between Siemens S7-1200 PLC and WinCC.\n\nImpact: Helped students develop confidence in diagnosing and resolving control system issues across multiple PLC platforms.",
    image: "assets/images/ugm_plc/plc_1.png",
    images: [
      "assets/images/ugm_plc/plc_1.png"
    ],
    tags: ["Siemens S7-1200", "WinCC", "Schneider PLC", "Ladder Logic", "HMI", "Analog Scaling"],
    link: "",
    repo: ""
  },
  {
    title: "Mini Water Treatment Plant - Engineering Lead",
    category: "Control System",
    description: "Led end-to-end engineering development of a mini water treatment plant integrating Arduino, Raspberry Pi, PLC, HMI, and SCADA.",
    details: "Led the full engineering lifecycle of a mini water treatment plant project from June to September 2025.\n\nProblem: The project required a fully integrated water treatment control system that met investor requirements, with cross-functional coordination across multiple engineering disciplines.\n\nSolution: Produced all engineering drawings starting from P&ID and control narratives, down to mechanical drawings, general arrangement layouts, panel layouts, wiring diagrams, and system architecture. Developed core control logic covering filtration, backwash, drain, safety interlocks, and sequencing — implemented on Arduino-based controllers. Supervised integration between Arduino, Raspberry Pi, PLC, HMI, and SCADA.\n\nResults: Delivered a fully operational mini WTP system with reliable multi-platform communication, synchronized data flow, and a clean separation of control layers across hardware.",
    image: "assets/images/wtp/wtp_3.jpg",
    images: [
      "assets/images/wtp/wtp_1.jpg",
      "assets/images/wtp/wtp_2.png",
      "assets/images/wtp/wtp_3.jpg",
      "assets/images/wtp/wtp_4.png"
    ],
    tags: ["Arduino", "Raspberry Pi", "PLC", "HMI", "P&ID", "AutoCAD"],
    link: "",
    repo: ""
  },
  {
    title: "Instrument Loop Diagram - PT Pertamina Hulu Rokan",
    category: "Instrumentation",
    description: "Produced detailed instrument loop diagrams for the DCS DeltaV system at Balam Gathering Station, PT Pertamina Hulu Rokan.",
    details: "Worked at Insys Engineering (Feb-Jun 2025) on an instrumentation documentation project for PT Pertamina Hulu Rokan.\n\nScope: Created detailed instrument loop diagrams for the DCS DeltaV at Balam Gathering Station, mapping field devices to terminals and I/O cards including signal types and cable numbering. Also produced panel power distribution diagrams for the DCS panel based on existing IC engineering designs.\n\nResults: Delivered complete and accurate loop documentation that supports field commissioning, maintenance, and future system modifications at the gathering station.",
    image: "assets/images/placeholder.svg",
    images: [
      "assets/images/placeholder.svg"
    ],
    tags: ["Autocad", "Instrument Loop Diagram", "Power Distribution", "Instrumentation"],
    link: "",
    repo: ""
  },
  {
    title: "Internship - Instrument Department at PT JGC Indonesia",
    category: "Instrumentation",
    description: "Gained hands-on experience in P&ID interpretation and engineering document management in an EPC environment at PT JGC Indonesia.",
    details: "Completed an internship at PT JGC Indonesia's Instrument Department in January-February 2025.\n\nScope: Learned to read and interpret Piping and Instrumentation Diagrams (P&ID). Created and managed engineering documents including instrument indexes, I/O lists, and datasheets. Familiarized with construction-related documents such as typical installation drawings and hook-up drawings.\n\nKey takeaway: Gained a solid understanding of EPC engineering workflows and industry standards for instrumentation installation and documentation — forming a strong foundation for subsequent professional roles.",
    image: "assets/images/jgc/jgc_1.jpg",
    images: [
      "assets/images/jgc/jgc_1.jpg"
    ],
    tags: ["P&ID", "Instrument Index", "I/O List", "Datasheet", "Hook-up Drawing", "EPC"],
    link: "",
    repo: ""
  },
  {
    title: "UAV Telemetry System - GAMAFORCE UGM",
    category: "Electronics & IoT",
    description: "Led the Telemetry Division at GAMAFORCE, researching and developing UAV communication systems and antenna solutions.",
    details: "Serving as Head of Telemetry Division at Gadjah Mada Flying Object Research Center (GAMAFORCE) since January 2024.\n\nFocus: Researching improved UAV communication with Ground Control Stations, specifically focusing on antenna design, manufacturing methods, tuning procedures, and maintenance protocols tailored to available mission profiles.\n\nResponsibilities: Overseeing research activities, managing the telemetry research team, coordinating and guiding team members in telemetry system development, and ensuring reliable data acquisition and transmission for flying robot projects.",
    image: "assets/images/gamaforce/gamaforce_1.jpg",
    images: [
      "assets/images/gamaforce/gamaforce_1.jpg",
      "assets/images/gamaforce/gamaforce_2.jpg"
    ],
    tags: ["UAV", "Telemetry", "Antenna Design", "GCS", "RF Communication"],
    link: "",
    repo: ""
  },
  {
    title: "Water Level Control Miniplant - KAMALOGIS UGM",
    category: "PLC & Automation",
    description: "Designed a water level control miniplant including P&ID creation and PLC/HMI programming using Siemens S7-1200 and Schneider PLCs.",
    details: "Contributed as an active member of KAMALOGIS (Ikatan Mahasiswa Teknologi Instrumentasi) at Universitas Gadjah Mada.\n\nProject: Designed a miniplant water level control system, including P&ID creation based on ISA 5.1 standards. Programmed and established communication between Schneider PLCs and HMIs.\n\nAdditional roles: Collaboratively supervised a Water Treatment Miniplant project, guiding junior students through industrial instrumentation, control logic, and engineering design fundamentals. Conducted training sessions on ladder diagram programming for Schneider PLCs. Performed troubleshooting for Schneider HMI issues and optimized system performance.",
    image: "assets/images/kamalogis/kamalogis_1.png",
    images: [
      "assets/images/kamalogis/kamalogis_1.png"
    ],
    tags: ["Siemens S7-1200", "Schneider PLC", "HMI", "P&ID", "ISA 5.1", "Ladder Logic"],
    link: "",
    repo: ""
  },
  {
    title: "Telepresence Robot - LPKTA UGM",
    category: "Electronics & IoT",
    description: "Developed a fully operational telepresence robot at LPKTA UGM, handling hardware design, power management, and embedded system integration using Raspberry Pi and ESP32.",
    details: "Contributed to the robotic research team at Lembaga Penelitian dan Kajian Teknik Aplikatif (LPKTA), Universitas Gadjah Mada (Dec 2022 - Dec 2024).\n\nProject: Built a telepresence robot from development to full operation — the robot was successfully brought to a working state.\n\nHardware & Electronics: Designed custom wiring boards for the robot's electrical system, ensuring clean signal routing and reliable connections across components. Managed power distribution and regulation to properly supply different subsystems within the robot.\n\nEmbedded Systems: Integrated Raspberry Pi as the main computing unit handling high-level logic, communication, and video streaming. Used ESP32 for lower-level control tasks and wireless communication. Performed extensive troubleshooting on wiring and electrical systems throughout the build.\n\nResults: Successfully delivered a functional telepresence robot capable of remote operation, demonstrating end-to-end integration of mechanical, electrical, and software layers.",
    image: "assets/images/lpkta/robot_1.jpg",
    images: [
      "assets/images/lpkta/robot_1.jpg",
      "assets/images/lpkta/robot_2.jpg",
      "assets/images/lpkta/robot_3.jpeg",
      "assets/images/lpkta/robot_4.jpg",
      "assets/images/lpkta/robot_5.jpeg",
      "assets/images/lpkta/robot_6.jpg",
      "assets/images/lpkta/robot_7.jpg"
    ],
    tags: ["Raspberry Pi", "ESP32", "Telepresence Robot", "Power Management", "Embedded System", "Wiring Design"],
    link: "",
    repo: ""
  },
  {
    title: "IoT Agriculture Monitoring Device - LPKTA UGM",
    category: "Electronics & IoT",
    description: "Developed an IoT device for real-time agriculture condition monitoring using Raspberry Pi and ESP32.",
    details: "Contributed to the research team at Lembaga Penelitian dan Kajian Teknik Aplikatif (LPKTA) at Universitas Gadjah Mada from December 2022 to December 2024.\n\nProject: Built a monitoring device capable of tracking real-time environmental conditions in the agriculture sector. Worked with Raspberry Pi and ESP32 for sensor integration, data acquisition, and connectivity.\n\nKey experience: Gained extensive hands-on experience troubleshooting wiring and electrical systems. Assisted the robotic research team alongside publishing engineering analysis content through team social media channels.",
    image: "assets/images/lpkta/lpkta_1.jpg",
    images: [
      "assets/images/lpkta/lpkta_1.jpg",
      "assets/images/lpkta/lpkta_2.jpg"
    ],
    tags: ["IoT", "Raspberry Pi", "ESP32", "Sensor Integration", "Agriculture", "Real-time Monitoring"],
    link: "",
    repo: ""
  }
];

/**
 * PERSONAL INFO
 * Update these fields with your real details.
 */
const PROFILE = {
  name: "Muhammad Zelot Zoha",
  title: "Instrument Engineer | Problem Solver",
  tagline: "Engineering solutions to real problems",
  about: `I apply engineering principles to solve real, practical problems, ranging from control and instrumentation systems to data-driven optimization. My experience includes working with sensors, control logic, system modeling, hands-on implementation, and telemetry. I focus on building solutions that are technically sound, measurable, and actually work in real-world conditions.`,
  avatar: "assets/images/foto_zelot.jpg",   // set "" to hide
  email: "muhammadzelot@gmail.com",
  github: "https://github.com/zzel114/portfolio",
  linkedin: "https://www.linkedin.com/in/muhammad-zelot-zoha-a097a9254/",
  twitter: ""                            // set "" to hide
};

// Expose to global scope so main.js can read them
window.PROJECTS = PROJECTS;
window.PROFILE  = PROFILE;
