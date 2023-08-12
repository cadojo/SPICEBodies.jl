var documenterSearchIndex = {"docs":
[{"location":"#SPICEEphemeris.jl","page":"SPICEEphemeris.jl","title":"SPICEEphemeris.jl","text":"","category":"section"},{"location":"","page":"SPICEEphemeris.jl","title":"SPICEEphemeris.jl","text":"Solar system ephemeris data for free!","category":"page"},{"location":"","page":"SPICEEphemeris.jl","title":"SPICEEphemeris.jl","text":"warning: Warning\nMore documentation will come, but for now, SPICEEphemeris only has humble docstrings! For more information, take a look at the project's GitHub repository. There, and in docstrings, you'll find a recurring warning which is reiterated here: this project is not affiliated with or endorsed by NASA, JPL, Caltech, or any other organization!","category":"page"},{"location":"docstrings/#Documentation","page":"Documentation","title":"Documentation","text":"","category":"section"},{"location":"docstrings/","page":"Documentation","title":"Documentation","text":"All docstrings!","category":"page"},{"location":"docstrings/","page":"Documentation","title":"Documentation","text":"Modules = [\n    SPICEEphemeris,\n]\nOrder = [:module, :type, :function, :constant]","category":"page"},{"location":"docstrings/#SPICEEphemeris.SPICEEphemeris","page":"Documentation","title":"SPICEEphemeris.SPICEEphemeris","text":"Ephemeris via SPICE kernels.\n\n\n\n\n\n","category":"module"},{"location":"docstrings/#SPICEEphemeris.AbstractKernelBody","page":"Documentation","title":"SPICEEphemeris.AbstractKernelBody","text":"abstract type AbstractKernelBody\n\nA supertype for all SPICE ephemeris objects.\n\nInterface\n\nAll subtypes must implement the following method.\n\nSPICEEphemeris.naifcode(body)::Int\n\nThe type then has access to the following method implementations.\n\nbody(epoch, ...)     # full state vector (KM, KM/S)\npos(body, ...)       # position vector (KM)\nvel(body, ...)       # velocity vector (KM/S) \ngm(body)             # \"GM\" mass parameter (KM^3/S^2)\nradii(body)          # radii vector (KM)\n\n\n\n\n\n","category":"type"},{"location":"docstrings/#SPICEEphemeris.BodyLike","page":"Documentation","title":"SPICEEphemeris.BodyLike","text":"abstract type Type{var\"#s2\"<:(Union{Symbol, var\"#s4\", var\"#s5\", var\"#s6\"} where {var\"#s4\"<:SPICEEphemeris.AbstractKernelBody, var\"#s5\"<:Integer, var\"#s6\"<:AbstractString})}\n\nA union type for all SPICEEphemeris.naifcode argument types.\n\n\n\n\n\n","category":"type"},{"location":"docstrings/#SPICEEphemeris.BodyLike-Tuple{AstroTime.Epochs.Epoch}","page":"Documentation","title":"SPICEEphemeris.BodyLike","text":"abstract type Type{var\"#s2\"<:(Union{Symbol, var\"#s4\", var\"#s5\", var\"#s6\"} where {var\"#s4\"<:SPICEEphemeris.AbstractKernelBody, var\"#s5\"<:Integer, var\"#s6\"<:AbstractString})}\n\nGiven an epoch, return the full state vector (KM,KM/s) of the body relative to the  observer defined by wrt. See spkez for more information about the underlying  implementation.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEEphemeris.BodyLike-Tuple{Real}","page":"Documentation","title":"SPICEEphemeris.BodyLike","text":"abstract type Type{var\"#s2\"<:(Union{Symbol, var\"#s4\", var\"#s5\", var\"#s6\"} where {var\"#s4\"<:SPICEEphemeris.AbstractKernelBody, var\"#s5\"<:Integer, var\"#s6\"<:AbstractString})}\n\nGiven the number of seconds past J2000, return the full state vector (KM,KM/s) relative to  the observer defined by wrt. See spkez for more information about the underlying  implementation.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEEphemeris.KernelBody","page":"Documentation","title":"SPICEEphemeris.KernelBody","text":"struct KernelBody <: SPICEEphemeris.AbstractKernelBody\n\nAny celestial body, spacecraft, barycenter, or other ephemeris object which has an  assigned NAIF ID within the local SPICE kernel pool.\n\n\n\n\n\n","category":"type"},{"location":"docstrings/#SPICEEphemeris.gm-Tuple{Type{var\"#s2\"} where var\"#s2\"<:(Union{Symbol, var\"#s4\", var\"#s5\", var\"#s6\"} where {var\"#s4\"<:SPICEEphemeris.AbstractKernelBody, var\"#s5\"<:Integer, var\"#s6\"<:AbstractString})}","page":"Documentation","title":"SPICEEphemeris.gm","text":"gm(body)\n\n\nReturn the mass parameter of the body (KM^3/S^2).\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEEphemeris.naifcode","page":"Documentation","title":"SPICEEphemeris.naifcode","text":"Given an ephemeris body, a NAIF ID code, or a body name, return the corresponding NAIF ID.\n\n\n\n\n\n","category":"function"},{"location":"docstrings/#SPICEEphemeris.pos-Tuple{Type{var\"#s2\"} where var\"#s2\"<:(Union{Symbol, var\"#s4\", var\"#s5\", var\"#s6\"} where {var\"#s4\"<:SPICEEphemeris.AbstractKernelBody, var\"#s5\"<:Integer, var\"#s6\"<:AbstractString}), AstroTime.Epochs.Epoch}","page":"Documentation","title":"SPICEEphemeris.pos","text":"pos(body, epoch; frame, aberration, wrt)\n\n\nGiven an epoch, return the position vector (KM) of the body relative to the  observer defined by wrt. See spkez for more information about the underlying  implementation.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEEphemeris.pos-Tuple{Type{var\"#s2\"} where var\"#s2\"<:(Union{Symbol, var\"#s4\", var\"#s5\", var\"#s6\"} where {var\"#s4\"<:SPICEEphemeris.AbstractKernelBody, var\"#s5\"<:Integer, var\"#s6\"<:AbstractString}), Real}","page":"Documentation","title":"SPICEEphemeris.pos","text":"pos(body, j2000s; frame, aberration, wrt)\n\n\nGiven the number of seconds past J2000, return the position vector (KM) relative to  the observer defined by wrt. See spkez for more information about the underlying  implementation.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEEphemeris.radii-Tuple{Type{var\"#s2\"} where var\"#s2\"<:(Union{Symbol, var\"#s4\", var\"#s5\", var\"#s6\"} where {var\"#s4\"<:SPICEEphemeris.AbstractKernelBody, var\"#s5\"<:Integer, var\"#s6\"<:AbstractString})}","page":"Documentation","title":"SPICEEphemeris.radii","text":"radii(body)\n\n\nReturn the radii vector of the body (KM).\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEEphemeris.vel-Tuple{Type{var\"#s2\"} where var\"#s2\"<:(Union{Symbol, var\"#s4\", var\"#s5\", var\"#s6\"} where {var\"#s4\"<:SPICEEphemeris.AbstractKernelBody, var\"#s5\"<:Integer, var\"#s6\"<:AbstractString}), AstroTime.Epochs.Epoch}","page":"Documentation","title":"SPICEEphemeris.vel","text":"vel(body, epoch; frame, aberration, wrt)\n\n\nGiven an epoch, return the velocity vector (KM/S) of the body relative to the  observer defined by wrt. See spkez for more information about the underlying  implementation.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEEphemeris.vel-Tuple{Type{var\"#s2\"} where var\"#s2\"<:(Union{Symbol, var\"#s4\", var\"#s5\", var\"#s6\"} where {var\"#s4\"<:SPICEEphemeris.AbstractKernelBody, var\"#s5\"<:Integer, var\"#s6\"<:AbstractString}), Real}","page":"Documentation","title":"SPICEEphemeris.vel","text":"vel(body, j2000s; frame, aberration, wrt)\n\n\nGiven the number of seconds past J2000, return the velocity vector (KM/S) relative to  the observer defined by wrt. See spkez for more information about the underlying  implementation.\n\n\n\n\n\n","category":"method"}]
}
