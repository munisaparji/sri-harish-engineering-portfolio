// Edit this file to update portfolio content. The layout is generated automatically.
window.PORTFOLIO_DATA = {
  profile: {
    name: "Sri Harish Singaravelan",
    initials: "SH",
    eyebrow: "Mechanical Engineer · Mechatronics · Automation",
    headline: "Engineering physical systems from first sketch to validated hardware.",
    introduction:
      "Mechanical engineer with 3+ years of experience across robotics, automation, product development, and manufacturing. I combine CAD, analysis, prototyping, controls, and testing to turn multidisciplinary ideas into dependable real-world systems.",
    location: "Georgia, USA",
    email: "sriharish1108@gmail.com",
    resume: "Sri-Harish-Singaravelan-Resume.pdf",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/sriharish-omsingaravelan/"
      },
      {
        label: "GrabCAD models",
        url: "https://grabcad.com/sri.harish.singaravelan-1/models"
      }
    ]
  },

  metrics: [
    { value: "3+", label: "Years in engineering" },
    { value: "15%", label: "Robotic efficiency gain" },
    { value: "80%", label: "SKU detection improvement" },
    { value: "CSWP", label: "SOLIDWORKS Professional" }
  ],

  projects: [
    {
      id: "lidar-mapping",
      number: "01",
      title: "LiDAR-Based Indoor Spatial Mapping",
      subtitle: "Mobile robotic mapping using ROS, Hector SLAM, and Raspberry Pi",
      period: "Oct 2023 – Dec 2023",
      institution: "Northeastern University",
      image: "assets/lidar-chassis.webp",
      imageAlt: "Original custom-fabricated wooden mobile robot chassis on a workshop bench",
      mediaNote: "Original prototype photography",
      overview:
        "Developed a mobile robotic platform that uses 360° LiDAR and Hector SLAM to build a live 2D occupancy map in GPS-denied indoor environments.",
      challenge:
        "Indoor localization cannot rely on GPS. The project required the sensing hardware, onboard computing, power, mobile platform, and mapping software to operate as one reliable system while navigating real corridors, turns, glass walls, and changing surroundings.",
      architecture: [
        "360° LiDAR",
        "Raspberry Pi 4",
        "ROS Noetic",
        "Hector SLAM",
        "2D occupancy grid",
        "RViz"
      ],
      outcomes: [
        "Mapped the Dodge Hall entrance and corridor at Northeastern University in real time.",
        "Captured walls, corridors, pillars, and surrounding objects in the final occupancy map.",
        "Redesigned the RC-car proof of concept into a custom laser-cut chassis and drivetrain.",
        "Characterized mapping errors caused by sharp turns, speed, glass, and reflective surfaces."
      ],
      contributions: [
        "Integrated the FHL-LD19 LiDAR, Raspberry Pi, camera, storage, and portable power system.",
        "Configured ROS Noetic, LiDAR drivers, Hector SLAM, RViz, and ROS Map Server.",
        "Collected and evaluated LiDAR data during real-world indoor testing.",
        "Fabricated the custom chassis and developed drivetrain motor-mount interfaces.",
        "Integrated and tested motors, wheels, electronics, sensors, and power hardware."
      ],
      stack: [
        "ROS Noetic",
        "Hector SLAM",
        "RViz",
        "Raspberry Pi 4",
        "FHL-LD19 LiDAR",
        "Laser cutting",
        "Sensor integration"
      ],
      gallery: [
        {
          type: "image",
          src: "assets/lidar-chassis.webp",
          alt: "Custom laser-cut chassis for the LiDAR mapping robot"
        },
        {
          type: "image",
          src: "assets/lidar-electronics.webp",
          alt: "Electronics and sensor board mounted in a custom bracket"
        },
        {
          type: "image",
          src: "assets/lidar-sensor.webp",
          alt: "Front-facing range sensor in a custom fabricated housing"
        },
        {
          type: "image",
          src: "assets/lidar-map.webp",
          alt: "Final two-dimensional occupancy map of the Dodge Hall indoor route"
        },
        {
          type: "video",
          src: "assets/lidar-demo.mp4",
          title: "Prototype demonstration"
        },
        {
          type: "video",
          src: "assets/lidar-drive-test.mp4",
          title: "Mobile platform drive test"
        }
      ]
    },
    {
      id: "obstacle-robot",
      number: "02",
      title: "Arduino Obstacle-Avoiding Robot",
      subtitle: "Real-time sense–decide–act control on a mobile robotic platform",
      period: "Jan 2022 – May 2022",
      institution: "LICET",
      image: "assets/obstacle-robot.webp",
      imageAlt: "Representative engineering visualization of an Arduino obstacle-avoiding robot",
      mediaNote: "Representative visualization based on the project architecture",
      overview:
        "Designed and built a mobile robot that senses obstacles, evaluates available space, and changes direction using embedded control and electromechanical actuation.",
      challenge:
        "The goal was to create a complete feedback loop—not simply a vehicle following fixed commands. Sensing, decision logic, servo positioning, power distribution, and differential motor control had to work continuously in real time.",
      architecture: [
        "HC-SR04 sensor",
        "Arduino Uno",
        "C++ decision logic",
        "L298N driver",
        "Geared DC motors"
      ],
      outcomes: [
        "Demonstrated real-time obstacle detection and autonomous directional response.",
        "Used servo-driven directional sensing without rotating the entire vehicle.",
        "Integrated low-power control signals with higher-power electromechanical hardware.",
        "Validated the full perception-to-motion loop on a physical prototype."
      ],
      contributions: [
        "Designed and prototyped the complete mobile robot and electrical architecture.",
        "Integrated the HC-SR04 sensor, servo, L298N dual H-bridge, motors, and power supply.",
        "Developed real-time control logic in C++ using the Arduino IDE.",
        "Tested and troubleshot sensing, motor control, and system-level behavior."
      ],
      stack: [
        "Arduino Uno",
        "C++",
        "Arduino IDE",
        "HC-SR04",
        "Servo motor",
        "L298N",
        "Embedded systems"
      ],
      gallery: [
        {
          type: "image",
          src: "assets/obstacle-robot.webp",
          alt: "Representative visualization of the Arduino obstacle-avoiding robot"
        }
      ]
    },
    {
      id: "sae-quadcopter",
      number: "03",
      title: "SAE Drone Racing Quadcopter",
      subtitle: "Mechanical design, structural analysis, and optimization of a competition frame",
      period: "Jan 2022 – May 2022",
      institution: "LICET",
      image: "assets/sae-quadcopter.webp",
      imageAlt: "Representative engineering visualization of a custom racing quadcopter prototype",
      mediaNote: "Representative visualization; complete competition CAD remains confidential",
      overview:
        "Led the mechanical design and CAD development of a lightweight custom quadcopter frame for an intercollegiate SAE Drone Racing competition.",
      challenge:
        "A racing frame must balance low mass, stiffness, durability, component protection, manufacturability, and center-of-mass control. Every geometric decision affects both structural behavior and flight response.",
      architecture: [
        "System requirements",
        "SolidWorks CAD",
        "Component packaging",
        "FEA",
        "Design iteration",
        "Competition frame"
      ],
      outcomes: [
        "Developed the frame architecture from the ground up in SolidWorks.",
        "Used FEA findings to guide structural and geometric improvements.",
        "Improved estimated drone responsiveness by 20% through weight-distribution optimization.",
        "Delivered a competition-ready design while protecting team intellectual property."
      ],
      contributions: [
        "Helped establish the SAE Drone Racing team at LICET.",
        "Led frame CAD, structural layout, and packaging of major vehicle components.",
        "Performed FEA and presented design recommendations in engineering reviews.",
        "Iterated geometry around stiffness, weight, propulsion hardware, and assembly requirements."
      ],
      stack: [
        "SolidWorks",
        "FEA",
        "Mechanical design",
        "Structural analysis",
        "Component packaging",
        "Design optimization"
      ],
      gallery: [
        {
          type: "image",
          src: "assets/sae-quadcopter.webp",
          alt: "Representative visualization of the SAE racing quadcopter"
        }
      ]
    }
  ],

  experience: [
    {
      role: "MEP Mechanical Designer",
      company: "Ole Mexican Foods",
      location: "Norcross, Georgia",
      period: "Aug 2025 – Present",
      summary:
         "Designing facility systems and evaluating automation opportunities across manufacturing and distribution environments.",
      highlights: [
        "Simulate robotic automation workflows in RoboDK, integrating conveyors, pick-and-place robots, and vision systems to evaluate throughput and layouts.",
        "Develop HVAC, plumbing, ventilation, and fire-protection layouts in AutoCAD for production, office, IT, and distribution spaces.",
        "Coordinate construction-ready drawings and implementation with contractors, maintenance, vendors, and plant engineering teams."
      ]
    },
    {
      role: "Mechatronics Intern",
      company: "Berkshire Grey",
      location: "Bedford, Massachusetts",
      period: "Jan 2024 – Jun 2024",
      summary:
        "Designed, prototyped, and validated robotic hardware and automated test systems for industrial pick-and-place platforms.",
      highlights: [
        "Improved robotic system efficiency by approximately 15% through iterative EOAT and vacuum-valve development.",
        "Redesigned a production barcode-scanner bracket for an ABB IRB 1100, improving SKU detection accuracy by approximately 80%.",
        "Built a servo-driven lifecycle test rig and Python monitoring workflow with sensor data, automated analysis, and alerts."
      ]
    },
    {
      role: "Mechanical Engineering Intern",
      company: "Symbionic Tech Pvt Ltd",
      location: "Chennai, India",
      period: "Apr 2022 – Jun 2022",
      summary:
        "Contributed to the mechanical development of a wearable upper-limb prosthetic arm with a focus on ergonomics, packaging, and integration.",
      highlights: [
        "Refined motor packaging and mount tolerances to reduce vibration by 10% and improve load distribution.",
        "Collaborated with medical and electrical teams on electrode placement, improving sensor data quality and overall performance by 30%.",
        "Used 3D-printed iterations to accelerate user feedback and reduce development time by 30%."
      ]
    },
    {
      role: "Mechanical Engineer",
      company: "Techecy",
      location: "India",
      period: "Jan 2021 – Dec 2021",
      summary:
        "Engineered plastic and sheet-metal components for consumer electronics from design review through prototype and manufacturing handoff.",
      highlights: [
        "Reduced tooling costs by 12% and pilot-run part rejections by 20% through DFM-focused design and supplier reviews.",
        "Improved heat dissipation efficiency by 22% using thermal and structural simulation.",
        "Supported BOMs, drawings, supplier negotiations, prototype builds, and corrective design actions."
      ]
    },
    {
      role: "Mechanical Design Intern",
      company: "TVS Training and Services Ltd",
      location: "Chennai, India",
      period: "Sep 2020 – Oct 2020",
      summary:
        "Built practical knowledge of automotive manufacturing, quality inspection, and lean production methods.",
      highlights: [
        "Worked with CNC machining, welding, assembly processes, and standard metrology tools.",
        "Supported quality checks and root-cause analysis while reducing inspection time by 10%.",
        "Applied Kaizen and 5S principles in a production-oriented training environment."
      ]
    }
  ],

  about: [
    "I am a systems-minded builder who began in mechanical engineering. Mechanical design is the foundation of how I solve problems, but I am most interested in the interfaces between hardware, robotics, controls, software, manufacturing, and testing.",
    "My approach is deliberately hands-on and iterative: understand the requirement, model the system, build a prototype, test it in the real world, learn from failure, and refine the design until it performs reliably."
  ],

  skillGroups: [
    {
      title: "CAD & product design",
      items: ["SolidWorks (CSWP)", "AutoCAD", "CATIA", "Inventor", "Revit", "Creo", "Fusion 360", "GD&T", "DFM/DFA"]
    },
    {
      title: "Simulation & validation",
      items: ["ANSYS Workbench", "SolidWorks Simulation", "Abaqus", "FEA", "Thermal analysis", "Fluid simulation", "Tolerance analysis"]
    },
    {
      title: "Robotics & mechatronics",
      items: ["RoboDK", "ROS 2", "PLCs", "Sensors", "Actuators", "EOAT", "Control systems", "System integration"]
    },
    {
      title: "Prototyping & manufacturing",
      items: ["FDM / SLA / SLS", "Rapid prototyping", "Sheet metal", "CNC processes", "BOM", "ECO", "Engineering drawings"]
    },
    {
      title: "Programming & engineering tools",
      items: ["Python", "MATLAB", "C++", "MongoDB", "Teamcenter", "Omnify PLM", "SolidWorks PDM", "Jira", "Git"]
    }
  ],

  education: [
    {
      degree: "M.S. Mechanical Engineering",
      focus: "Mechatronics · GPA 3.4",
      school: "Northeastern University",
      location: "Boston, USA",
      period: "Sep 2022 – Dec 2024",
      logo: "assets/northeastern-logo.webp",
      logoAlt: "Northeastern University logo"
    },
    {
      degree: "B.E. Mechanical Engineering",
      focus: "GPA 3.5",
      school: "Loyola-ICAM College of Engineering and Technology",
      location: "Chennai, India",
      period: "Aug 2018 – Jun 2022",
      logo: "assets/licet-logo.webp",
      logoAlt: "LICET logo"
    }
  ],

  certifications: [
    "Certified SOLIDWORKS Professional — Dassault Systèmes",
    "Arduino: Foundations",
    "SOLIDWORKS: SimulationXpress",
    "MATLAB — MathWorks",
    "ANSYS Workbench",
    "Python"
  ]
};
