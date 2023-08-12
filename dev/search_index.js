var documenterSearchIndex = {"docs":
[{"location":"#SPICEEphemeris.jl","page":"SPICEEphemeris.jl","title":"SPICEEphemeris.jl","text":"","category":"section"},{"location":"","page":"SPICEEphemeris.jl","title":"SPICEEphemeris.jl","text":"Interact with SPICE kernels without learning the SPICE interface in-full!","category":"page"},{"location":"#Installation","page":"SPICEEphemeris.jl","title":"Installation","text":"","category":"section"},{"location":"","page":"SPICEEphemeris.jl","title":"SPICEEphemeris.jl","text":"pkg> add SPICEEphemeris","category":"page"},{"location":"#Usage","page":"SPICEEphemeris.jl","title":"Usage","text":"","category":"section"},{"location":"","page":"SPICEEphemeris.jl","title":"SPICEEphemeris.jl","text":"This package requires both SPICE.jl and SPICEKernels.jl. Once you load your desired  SPICE kernels, you could interact with each kernel object (satellite, planet, barycenter, lagrange point, etc.) using the SPICE interface. In fact, if you want to do anything more complicated than retrieve some physical parameters, and request Cartesian-state ephemeris data, you probably should use the SPICE toolkit! If, however, your desired usage falls  within the narrow limitations mentioned above, SPICEEphemeris.jl could help you to  concisely retrieve solar system ephemeris data.","category":"page"},{"location":"","page":"SPICEEphemeris.jl","title":"SPICEEphemeris.jl","text":"First, load your desired SPICE kernels using SPICE.jl. SPICEKernels.jl provides an  easy Julian interface for downloading (and caching) NASA's publicly available  Generic Kernels. All generic kernels are available as callable structs within SPICEKernels.jl. If you'd like to know what each kernel does, check the Extended Help in each kernel's docstring.","category":"page"},{"location":"","page":"SPICEEphemeris.jl","title":"SPICEEphemeris.jl","text":"julia> using SPICE: furnsh\n\njulia> using SPICEKernels\n\njulia> furnsh(\n           de440(),                    # position and velocity data for major solar system bodies\n           latest_leapseconds_lsk(),   # timekeeping\n           gm_de440(),                 # mass parameters for major solar system bodies\n           pck00011(),                 # physical properties of major solar system bodies\n       )","category":"page"},{"location":"","page":"SPICEEphemeris.jl","title":"SPICEEphemeris.jl","text":"Now you're ready to use SPICEEphemeris.jl. To retrieve position and velocity data, you must construct a KernelBody instance, or implement the AbstractKernelBody interface yourself! To retrieve physical characteristics, or NAIF ID codes, you can provide  AbstractKernelBody instances, or the body's name. ","category":"page"},{"location":"","page":"SPICEEphemeris.jl","title":"SPICEEphemeris.jl","text":"julia> using AstroTime, SPICEEphemeris\n\njulia> earth = KernelBody(\"earth\")\nKernelBody(399)\n\njulia> moon = KernelBody(\"moon\")\nKernelBody(301)\n\njulia> x, y, z, ẋ, ẏ, ż = earth(AstroTime.J2000_EPOCH, wrt=moon)\n6-element Vector{Float64}:\n 291608.38463343546\n 266716.83339423337\n  76102.48709990202\n     -0.6435313877190327\n      0.6660876840916304\n      0.30132570498227307\n\njulia> μ = gm(\"earth\")\n398600.4355070226\n\njulia> R = radii(moon)\n3-element Vector{Float64}:\n 1737.4\n 1737.4\n 1737.4","category":"page"},{"location":"docstrings/#Documentation","page":"Documentation","title":"Documentation","text":"","category":"section"},{"location":"docstrings/","page":"Documentation","title":"Documentation","text":"All docstrings!","category":"page"},{"location":"docstrings/","page":"Documentation","title":"Documentation","text":"Modules = [\n    SPICEEphemeris,\n]\nOrder = [:module, :type, :function, :constant]","category":"page"},{"location":"docstrings/#SPICEEphemeris.SPICEEphemeris","page":"Documentation","title":"SPICEEphemeris.SPICEEphemeris","text":"Ephemeris via SPICE kernels.\n\nExtended Help\n\nImports\n\nAstroTime\nBase\nCore\nDocStringExtensions\nSPICE\nSPICEKernels\n\nExports\n\nKernelBody\ngm\npos\nradii\nvel\n\n\n\n\n\n","category":"module"},{"location":"docstrings/#SPICEEphemeris.AbstractKernelBody","page":"Documentation","title":"SPICEEphemeris.AbstractKernelBody","text":"abstract type AbstractKernelBody\n\nA supertype for all SPICE ephemeris objects.\n\nInterface\n\nAll subtypes must implement the following method.\n\nSPICEEphemeris.naifcode(body)::Int\n\nThe type then has access to the following method implementations.\n\nbody(epoch, ...)     # full state vector (KM, KM/S)\npos(body, ...)       # position vector (KM)\nvel(body, ...)       # velocity vector (KM/S) \ngm(body)             # \"GM\" mass parameter (KM^3/S^2)\nradii(body)          # radii vector (KM)\n\n\n\n\n\n","category":"type"},{"location":"docstrings/#SPICEEphemeris.KernelBody","page":"Documentation","title":"SPICEEphemeris.KernelBody","text":"struct KernelBody <: SPICEEphemeris.AbstractKernelBody\n\nAny celestial body, spacecraft, barycenter, or other ephemeris object which has an  assigned NAIF ID within the local SPICE kernel pool.\n\n\n\n\n\n","category":"type"},{"location":"docstrings/#SPICEEphemeris.gm-Tuple{Union{AbstractString, Integer, Symbol, SPICEEphemeris.AbstractKernelBody}}","page":"Documentation","title":"SPICEEphemeris.gm","text":"gm(body)\n\n\nReturn the mass parameter of the body (KM^3/S^2).\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEEphemeris.j2000s","page":"Documentation","title":"SPICEEphemeris.j2000s","text":"Return the number of seconds since J2000.\n\n\n\n\n\n","category":"function"},{"location":"docstrings/#SPICEEphemeris.naifcode","page":"Documentation","title":"SPICEEphemeris.naifcode","text":"Given an ephemeris body, a NAIF ID code, or a body name, return the corresponding NAIF ID.\n\n\n\n\n\n","category":"function"},{"location":"docstrings/#SPICEEphemeris.pos-Tuple{Union{AbstractString, Integer, Symbol, SPICEEphemeris.AbstractKernelBody}, AstroTime.Epochs.Epoch}","page":"Documentation","title":"SPICEEphemeris.pos","text":"pos(body, epoch; frame, aberration, wrt)\n\n\nGiven an epoch, return the position vector (KM) of the body relative to the  observer defined by wrt. See spkez for more information about the underlying  implementation.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEEphemeris.pos-Tuple{Union{AbstractString, Integer, Symbol, SPICEEphemeris.AbstractKernelBody}, Real}","page":"Documentation","title":"SPICEEphemeris.pos","text":"pos(body, j2000s; frame, aberration, wrt)\n\n\nGiven the number of seconds past J2000, return the position vector (KM) relative to  the observer defined by wrt. See spkez for more information about the underlying  implementation.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEEphemeris.radii-Tuple{Union{AbstractString, Integer, Symbol, SPICEEphemeris.AbstractKernelBody}}","page":"Documentation","title":"SPICEEphemeris.radii","text":"radii(body)\n\n\nReturn the radii vector of the body (KM).\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEEphemeris.vel-Tuple{Union{AbstractString, Integer, Symbol, SPICEEphemeris.AbstractKernelBody}, AstroTime.Epochs.Epoch}","page":"Documentation","title":"SPICEEphemeris.vel","text":"vel(body, epoch; frame, aberration, wrt)\n\n\nGiven an epoch, return the velocity vector (KM/S) of the body relative to the  observer defined by wrt. See spkez for more information about the underlying  implementation.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEEphemeris.vel-Tuple{Union{AbstractString, Integer, Symbol, SPICEEphemeris.AbstractKernelBody}, Real}","page":"Documentation","title":"SPICEEphemeris.vel","text":"vel(body, j2000s; frame, aberration, wrt)\n\n\nGiven the number of seconds past J2000, return the velocity vector (KM/S) relative to  the observer defined by wrt. See spkez for more information about the underlying  implementation.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEEphemeris.BodyLike","page":"Documentation","title":"SPICEEphemeris.BodyLike","text":"A union type for all SPICEEphemeris.naifcode argument types.\n\n\n\n\n\n","category":"type"},{"location":"docstrings/#SPICEEphemeris.BodyLike-Tuple{Dates.AbstractDateTime}","page":"Documentation","title":"SPICEEphemeris.BodyLike","text":"Given an epoch, return the full state vector (KM,KM/s) of the body relative to the  observer defined by wrt. See spkez for more information about the underlying  implementation.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEEphemeris.BodyLike-Tuple{Real}","page":"Documentation","title":"SPICEEphemeris.BodyLike","text":"Given the number of seconds past J2000, return the full state vector (KM,KM/s) relative to  the observer defined by wrt. See spkez for more information about the underlying  implementation.\n\n\n\n\n\n","category":"method"}]
}