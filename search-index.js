var searchIndex = {};
searchIndex['rusttype'] = {"items":[[3,"Rect","rusttype","A rectangle, with top-left corner at `min`, and bottom-right corner at `max`.",null,null],[12,"min","","",0,null],[12,"max","","",0,null],[3,"Point","","A point in 2-dimensional space, with each dimension of type `N`.",null,null],[12,"x","","",1,null],[12,"y","","",1,null],[3,"Vector","","A vector in 2-dimensional space, with each dimension of type `N`.",null,null],[12,"x","","",2,null],[12,"y","","",2,null],[3,"Line","","A straight line between two points, `p[0]` and `p[1]`",null,null],[12,"p","","",3,null],[3,"Curve","","A quadratic Bezier curve, starting at `p[0]`, ending at `p[2]`, with control point `p[1]`.",null,null],[12,"p","","",4,null],[3,"FontCollection","","A collection of fonts read straight from a font file's data. The data in the collection is not validated.\nThis structure may or may not own the font data.",null,null],[3,"Font","","A single font. This may or may not own the font data.",null,null],[3,"Codepoint","","Represents a Unicode code point.",null,null],[3,"GlyphId","","Represents a glyph identifier for a particular font. This identifier will not necessarily correspond to\nthe correct glyph in a font other than the one that it was obtained from.",null,null],[3,"Glyph","","A single glyph of a font. this may either be a thin wrapper referring to the font and the glyph id, or\nit may be a standalone glyph that owns the data needed by it.",null,null],[3,"HMetrics","","The \"horizontal metrics\" of a glyph. This is useful for calculating the horizontal offset of a glyph\nfrom the previous one in a string when laying a string out horizontally.",null,null],[12,"advance_width","","The horizontal offset that the origin of the next glyph should be from the origin of this glyph.",5,null],[12,"left_side_bearing","","The horizontal offset between the origin of this glyph and the leftmost edge/point of the glyph.",5,null],[3,"VMetrics","","The \"vertical metrics\" of a font at a particular scale. This is useful for calculating the amount of\nvertical space to give a line of text, and for computing the vertical offset between successive lines.",null,null],[12,"ascent","","The highest point that any glyph in the font extends to above the baseline. Typically positive.",6,null],[12,"descent","","The lowest point that any glyph in the font extends to below the baseline. Typically negative.",6,null],[12,"line_gap","","The gap to leave between the descent of one line and the ascent of the next. This is of\ncourse only a guideline given by the font's designers.",6,null],[3,"ScaledGlyph","","A glyph augmented with scaling information. You can query such a glyph for information that depends\non the scale of the glyph.",null,null],[3,"PositionedGlyph","","A glyph augmented with positioning and scaling information. You can query such a glyph for information\nthat depends on the scale and position of the glyph.",null,null],[3,"Scale","","Defines the size of a rendered face of a font, in pixels, horizontally and vertically. A vertical\nscale of `y` pixels means that the distance betwen the ascent and descent lines (see `VMetrics`) of the\nface will be `y` pixels. If `x` and `y` are equal the scaling is uniform. Non-uniform scaling by a factor\n*f* in the horizontal direction is achieved by setting `x` equal to *f* times `y`.",null,null],[12,"x","","Horizontal scale, in pixels.",7,null],[12,"y","","Vertical scale, in pixels.",7,null],[3,"GlyphIter","","",null,null],[3,"LayoutIter","","",null,null],[3,"Contour","","A closed loop consisting of a sequence of `Segment`s.",null,null],[12,"segments","","",8,null],[4,"SharedBytes","","`SharedBytes` handles the lifetime of font data used in RustType. The data is either a shared\nreference to externally owned data, or managed by reference counting. `SharedBytes` can be\nconveniently used with `From` and `Into`, and dereferences to the contained bytes.",null,null],[13,"ByRef","","",9,null],[13,"ByArc","","",9,null],[4,"CodepointOrGlyphId","","Represents either a Unicode code point, or a glyph identifier for a font.",null,null],[13,"Codepoint","","",10,null],[13,"GlyphId","","",10,null],[4,"Segment","","Part of a `Contour`, either a `Line` or a `Curve`.",null,null],[13,"Line","","",11,null],[13,"Curve","","",11,null],[5,"point","","A convenience function for generating `Point`s.",null,{"inputs":[{"name":"n"},{"name":"n"}],"output":{"name":"point"}}],[5,"vector","","A convenience function for generating `Vector`s.",null,{"inputs":[{"name":"n"},{"name":"n"}],"output":{"name":"vector"}}],[11,"hash","","",1,null],[11,"eq","","",1,{"inputs":[{"name":"point"},{"name":"point"}],"output":{"name":"bool"}}],[11,"ne","","",1,{"inputs":[{"name":"point"},{"name":"point"}],"output":{"name":"bool"}}],[11,"cmp","","",1,{"inputs":[{"name":"point"},{"name":"point"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",1,{"inputs":[{"name":"point"},{"name":"point"}],"output":{"name":"option"}}],[11,"lt","","",1,{"inputs":[{"name":"point"},{"name":"point"}],"output":{"name":"bool"}}],[11,"le","","",1,{"inputs":[{"name":"point"},{"name":"point"}],"output":{"name":"bool"}}],[11,"gt","","",1,{"inputs":[{"name":"point"},{"name":"point"}],"output":{"name":"bool"}}],[11,"ge","","",1,{"inputs":[{"name":"point"},{"name":"point"}],"output":{"name":"bool"}}],[11,"fmt","","",1,{"inputs":[{"name":"point"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"point"}],"output":{"name":"point"}}],[11,"hash","","",2,null],[11,"eq","","",2,{"inputs":[{"name":"vector"},{"name":"vector"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"vector"},{"name":"vector"}],"output":{"name":"bool"}}],[11,"cmp","","",2,{"inputs":[{"name":"vector"},{"name":"vector"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",2,{"inputs":[{"name":"vector"},{"name":"vector"}],"output":{"name":"option"}}],[11,"lt","","",2,{"inputs":[{"name":"vector"},{"name":"vector"}],"output":{"name":"bool"}}],[11,"le","","",2,{"inputs":[{"name":"vector"},{"name":"vector"}],"output":{"name":"bool"}}],[11,"gt","","",2,{"inputs":[{"name":"vector"},{"name":"vector"}],"output":{"name":"bool"}}],[11,"ge","","",2,{"inputs":[{"name":"vector"},{"name":"vector"}],"output":{"name":"bool"}}],[11,"fmt","","",2,{"inputs":[{"name":"vector"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",2,{"inputs":[{"name":"vector"}],"output":{"name":"vector"}}],[11,"sub","","",1,{"inputs":[{"name":"point"},{"name":"point"}],"output":{"name":"vector"}}],[11,"add","","",2,{"inputs":[{"name":"vector"},{"name":"vector"}],"output":{"name":"vector"}}],[11,"sub","","",2,{"inputs":[{"name":"vector"},{"name":"vector"}],"output":{"name":"vector"}}],[11,"mul","","",2,{"inputs":[{"name":"vector"},{"name":"f32"}],"output":{"name":"vector"}}],[11,"mul","","",2,{"inputs":[{"name":"vector"},{"name":"f64"}],"output":{"name":"vector"}}],[11,"div","","",2,{"inputs":[{"name":"vector"},{"name":"f32"}],"output":{"name":"vector"}}],[11,"div","","",2,{"inputs":[{"name":"vector"},{"name":"f64"}],"output":{"name":"vector"}}],[11,"add","","",1,{"inputs":[{"name":"point"},{"name":"vector"}],"output":{"name":"point"}}],[11,"sub","","",1,{"inputs":[{"name":"point"},{"name":"vector"}],"output":{"name":"point"}}],[11,"add","","",2,{"inputs":[{"name":"vector"},{"name":"point"}],"output":{"name":"point"}}],[11,"partial_cmp","","",3,{"inputs":[{"name":"line"},{"name":"line"}],"output":{"name":"option"}}],[11,"lt","","",3,{"inputs":[{"name":"line"},{"name":"line"}],"output":{"name":"bool"}}],[11,"le","","",3,{"inputs":[{"name":"line"},{"name":"line"}],"output":{"name":"bool"}}],[11,"gt","","",3,{"inputs":[{"name":"line"},{"name":"line"}],"output":{"name":"bool"}}],[11,"ge","","",3,{"inputs":[{"name":"line"},{"name":"line"}],"output":{"name":"bool"}}],[11,"eq","","",3,{"inputs":[{"name":"line"},{"name":"line"}],"output":{"name":"bool"}}],[11,"ne","","",3,{"inputs":[{"name":"line"},{"name":"line"}],"output":{"name":"bool"}}],[11,"fmt","","",3,{"inputs":[{"name":"line"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",3,{"inputs":[{"name":"line"}],"output":{"name":"line"}}],[11,"partial_cmp","","",4,{"inputs":[{"name":"curve"},{"name":"curve"}],"output":{"name":"option"}}],[11,"lt","","",4,{"inputs":[{"name":"curve"},{"name":"curve"}],"output":{"name":"bool"}}],[11,"le","","",4,{"inputs":[{"name":"curve"},{"name":"curve"}],"output":{"name":"bool"}}],[11,"gt","","",4,{"inputs":[{"name":"curve"},{"name":"curve"}],"output":{"name":"bool"}}],[11,"ge","","",4,{"inputs":[{"name":"curve"},{"name":"curve"}],"output":{"name":"bool"}}],[11,"eq","","",4,{"inputs":[{"name":"curve"},{"name":"curve"}],"output":{"name":"bool"}}],[11,"ne","","",4,{"inputs":[{"name":"curve"},{"name":"curve"}],"output":{"name":"bool"}}],[11,"fmt","","",4,{"inputs":[{"name":"curve"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",4,{"inputs":[{"name":"curve"}],"output":{"name":"curve"}}],[11,"cmp","","",0,{"inputs":[{"name":"rect"},{"name":"rect"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",0,{"inputs":[{"name":"rect"},{"name":"rect"}],"output":{"name":"option"}}],[11,"lt","","",0,{"inputs":[{"name":"rect"},{"name":"rect"}],"output":{"name":"bool"}}],[11,"le","","",0,{"inputs":[{"name":"rect"},{"name":"rect"}],"output":{"name":"bool"}}],[11,"gt","","",0,{"inputs":[{"name":"rect"},{"name":"rect"}],"output":{"name":"bool"}}],[11,"ge","","",0,{"inputs":[{"name":"rect"},{"name":"rect"}],"output":{"name":"bool"}}],[11,"hash","","",0,null],[11,"eq","","",0,{"inputs":[{"name":"rect"},{"name":"rect"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"rect"},{"name":"rect"}],"output":{"name":"bool"}}],[11,"fmt","","",0,{"inputs":[{"name":"rect"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"rect"}],"output":{"name":"rect"}}],[11,"width","","",0,{"inputs":[{"name":"rect"}],"output":{"name":"n"}}],[11,"height","","",0,{"inputs":[{"name":"rect"}],"output":{"name":"n"}}],[0,"gpu_cache","","This module provides capabilities for managing a cache of rendered glyphs in GPU memory, with the goal of\nminimisng the size and frequency of glyph uploads to GPU memory from the CPU.",null,null],[3,"Cache","rusttype::gpu_cache","An implementation of a dynamic GPU glyph cache. See the module documentation for more information.",null,null],[4,"CacheReadErr","","Returned from `Cache::rect_for`.",null,null],[13,"GlyphNotCached","","Indicates that the requested glyph is not present in the cache",12,null],[4,"CacheWriteErr","","Returned from `Cache::cache_queued`.",null,null],[13,"GlyphTooLarge","","At least one of the queued glyphs is too big to fit into the cache, even if all other glyphs are removed.",13,null],[13,"NoRoomForWholeQueue","","Not all of the requested glyphs can fit into the cache, even if the cache is completely cleared before\nthe attempt.",13,null],[11,"cmp","","",12,{"inputs":[{"name":"cachereaderr"},{"name":"cachereaderr"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",12,{"inputs":[{"name":"cachereaderr"},{"name":"cachereaderr"}],"output":{"name":"option"}}],[11,"lt","","",12,{"inputs":[{"name":"cachereaderr"},{"name":"cachereaderr"}],"output":{"name":"bool"}}],[11,"le","","",12,{"inputs":[{"name":"cachereaderr"},{"name":"cachereaderr"}],"output":{"name":"bool"}}],[11,"gt","","",12,{"inputs":[{"name":"cachereaderr"},{"name":"cachereaderr"}],"output":{"name":"bool"}}],[11,"ge","","",12,{"inputs":[{"name":"cachereaderr"},{"name":"cachereaderr"}],"output":{"name":"bool"}}],[11,"eq","","",12,{"inputs":[{"name":"cachereaderr"},{"name":"cachereaderr"}],"output":{"name":"bool"}}],[11,"ne","","",12,{"inputs":[{"name":"cachereaderr"},{"name":"cachereaderr"}],"output":{"name":"bool"}}],[11,"fmt","","",12,{"inputs":[{"name":"cachereaderr"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",12,{"inputs":[{"name":"cachereaderr"}],"output":{"name":"cachereaderr"}}],[11,"cmp","","",13,{"inputs":[{"name":"cachewriteerr"},{"name":"cachewriteerr"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",13,{"inputs":[{"name":"cachewriteerr"},{"name":"cachewriteerr"}],"output":{"name":"option"}}],[11,"lt","","",13,{"inputs":[{"name":"cachewriteerr"},{"name":"cachewriteerr"}],"output":{"name":"bool"}}],[11,"le","","",13,{"inputs":[{"name":"cachewriteerr"},{"name":"cachewriteerr"}],"output":{"name":"bool"}}],[11,"gt","","",13,{"inputs":[{"name":"cachewriteerr"},{"name":"cachewriteerr"}],"output":{"name":"bool"}}],[11,"ge","","",13,{"inputs":[{"name":"cachewriteerr"},{"name":"cachewriteerr"}],"output":{"name":"bool"}}],[11,"eq","","",13,{"inputs":[{"name":"cachewriteerr"},{"name":"cachewriteerr"}],"output":{"name":"bool"}}],[11,"ne","","",13,{"inputs":[{"name":"cachewriteerr"},{"name":"cachewriteerr"}],"output":{"name":"bool"}}],[11,"fmt","","",13,{"inputs":[{"name":"cachewriteerr"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",13,{"inputs":[{"name":"cachewriteerr"}],"output":{"name":"cachewriteerr"}}],[11,"new","","Constructs a new cache. Note that this is just the CPU side of the cache. The GPU texture is managed\nby the user.",14,{"inputs":[{"name":"cache"},{"name":"u32"},{"name":"u32"},{"name":"f32"},{"name":"f32"}],"output":{"name":"cache"}}],[11,"set_scale_tolerance","","Sets the scale tolerance for the cache. See the documentation for `Cache::new` for more information.",14,{"inputs":[{"name":"cache"},{"name":"f32"}],"output":null}],[11,"scale_tolerance","","Returns the current scale tolerance for the cache.",14,{"inputs":[{"name":"cache"}],"output":{"name":"f32"}}],[11,"set_position_tolerance","","Sets the subpixel position tolerance for the cache. See the documentation for `Cache::new` for more\ninformation.",14,{"inputs":[{"name":"cache"},{"name":"f32"}],"output":null}],[11,"position_tolerance","","Returns the current subpixel position tolerance for the cache.",14,{"inputs":[{"name":"cache"}],"output":{"name":"f32"}}],[11,"dimensions","","Returns the cache texture dimensions assumed by the cache. For proper operation this should\nmatch the dimensions of the used GPU texture.",14,null],[11,"queue_glyph","","Queue a glyph for caching by the next call to `cache_queued`. `font_id` is used to\ndisambiguate glyphs from different fonts. The user should ensure that `font_id` is unique to the\nfont the glyph is from.",14,{"inputs":[{"name":"cache"},{"name":"usize"},{"name":"positionedglyph"}],"output":null}],[11,"clear","","Clears the cache. Does not affect the glyph queue.",14,{"inputs":[{"name":"cache"}],"output":null}],[11,"clear_queue","","Clears the glyph queue.",14,{"inputs":[{"name":"cache"}],"output":null}],[11,"cache_queued","","Caches the queued glyphs. If this is unsuccessful, the queue is untouched.\nAny glyphs cached by previous calls to this function may be removed from the cache to make\nroom for the newly queued glyphs. Thus if you want to ensure that a glyph is in the cache,\nthe most recently cached queue must have contained that glyph.",14,{"inputs":[{"name":"cache"},{"name":"f"}],"output":{"name":"result"}}],[11,"rect_for","","Retrieves the (floating point) texture coordinates of the quad for a glyph in the cache,\nas well as the pixel-space (integer) coordinates that this region should be drawn at.\nIn the majority of cases these pixel-space coordinates should be identical to the bounding box of the\ninput glyph. They only differ if the cache has returned a substitute glyph that is deemed close enough\nto the requested glyph as specified by the cache tolerance parameters.",14,{"inputs":[{"name":"cache"},{"name":"usize"},{"name":"positionedglyph"}],"output":{"name":"result"}}],[11,"clone","rusttype","",15,{"inputs":[{"name":"fontcollection"}],"output":{"name":"fontcollection"}}],[11,"clone","","",16,{"inputs":[{"name":"font"}],"output":{"name":"font"}}],[11,"clone","","",9,{"inputs":[{"name":"sharedbytes"}],"output":{"name":"sharedbytes"}}],[11,"deref","","",9,null],[11,"from","","",9,null],[11,"from","","",9,{"inputs":[{"name":"sharedbytes"},{"name":"arc"}],"output":{"name":"sharedbytes"}}],[11,"from","","",9,{"inputs":[{"name":"sharedbytes"},{"name":"box"}],"output":{"name":"sharedbytes"}}],[11,"from","","",9,{"inputs":[{"name":"sharedbytes"},{"name":"vec"}],"output":{"name":"sharedbytes"}}],[11,"cmp","","",17,{"inputs":[{"name":"codepoint"},{"name":"codepoint"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",17,{"inputs":[{"name":"codepoint"},{"name":"codepoint"}],"output":{"name":"option"}}],[11,"lt","","",17,{"inputs":[{"name":"codepoint"},{"name":"codepoint"}],"output":{"name":"bool"}}],[11,"le","","",17,{"inputs":[{"name":"codepoint"},{"name":"codepoint"}],"output":{"name":"bool"}}],[11,"gt","","",17,{"inputs":[{"name":"codepoint"},{"name":"codepoint"}],"output":{"name":"bool"}}],[11,"ge","","",17,{"inputs":[{"name":"codepoint"},{"name":"codepoint"}],"output":{"name":"bool"}}],[11,"hash","","",17,null],[11,"eq","","",17,{"inputs":[{"name":"codepoint"},{"name":"codepoint"}],"output":{"name":"bool"}}],[11,"ne","","",17,{"inputs":[{"name":"codepoint"},{"name":"codepoint"}],"output":{"name":"bool"}}],[11,"fmt","","",17,{"inputs":[{"name":"codepoint"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",17,{"inputs":[{"name":"codepoint"}],"output":{"name":"codepoint"}}],[11,"cmp","","",10,{"inputs":[{"name":"codepointorglyphid"},{"name":"codepointorglyphid"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",10,{"inputs":[{"name":"codepointorglyphid"},{"name":"codepointorglyphid"}],"output":{"name":"option"}}],[11,"lt","","",10,{"inputs":[{"name":"codepointorglyphid"},{"name":"codepointorglyphid"}],"output":{"name":"bool"}}],[11,"le","","",10,{"inputs":[{"name":"codepointorglyphid"},{"name":"codepointorglyphid"}],"output":{"name":"bool"}}],[11,"gt","","",10,{"inputs":[{"name":"codepointorglyphid"},{"name":"codepointorglyphid"}],"output":{"name":"bool"}}],[11,"ge","","",10,{"inputs":[{"name":"codepointorglyphid"},{"name":"codepointorglyphid"}],"output":{"name":"bool"}}],[11,"hash","","",10,null],[11,"eq","","",10,{"inputs":[{"name":"codepointorglyphid"},{"name":"codepointorglyphid"}],"output":{"name":"bool"}}],[11,"ne","","",10,{"inputs":[{"name":"codepointorglyphid"},{"name":"codepointorglyphid"}],"output":{"name":"bool"}}],[11,"fmt","","",10,{"inputs":[{"name":"codepointorglyphid"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",10,{"inputs":[{"name":"codepointorglyphid"}],"output":{"name":"codepointorglyphid"}}],[11,"cmp","","",18,{"inputs":[{"name":"glyphid"},{"name":"glyphid"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",18,{"inputs":[{"name":"glyphid"},{"name":"glyphid"}],"output":{"name":"option"}}],[11,"lt","","",18,{"inputs":[{"name":"glyphid"},{"name":"glyphid"}],"output":{"name":"bool"}}],[11,"le","","",18,{"inputs":[{"name":"glyphid"},{"name":"glyphid"}],"output":{"name":"bool"}}],[11,"gt","","",18,{"inputs":[{"name":"glyphid"},{"name":"glyphid"}],"output":{"name":"bool"}}],[11,"ge","","",18,{"inputs":[{"name":"glyphid"},{"name":"glyphid"}],"output":{"name":"bool"}}],[11,"hash","","",18,null],[11,"eq","","",18,{"inputs":[{"name":"glyphid"},{"name":"glyphid"}],"output":{"name":"bool"}}],[11,"ne","","",18,{"inputs":[{"name":"glyphid"},{"name":"glyphid"}],"output":{"name":"bool"}}],[11,"fmt","","",18,{"inputs":[{"name":"glyphid"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",18,{"inputs":[{"name":"glyphid"}],"output":{"name":"glyphid"}}],[11,"clone","","",19,{"inputs":[{"name":"glyph"}],"output":{"name":"glyph"}}],[11,"partial_cmp","","",5,{"inputs":[{"name":"hmetrics"},{"name":"hmetrics"}],"output":{"name":"option"}}],[11,"lt","","",5,{"inputs":[{"name":"hmetrics"},{"name":"hmetrics"}],"output":{"name":"bool"}}],[11,"le","","",5,{"inputs":[{"name":"hmetrics"},{"name":"hmetrics"}],"output":{"name":"bool"}}],[11,"gt","","",5,{"inputs":[{"name":"hmetrics"},{"name":"hmetrics"}],"output":{"name":"bool"}}],[11,"ge","","",5,{"inputs":[{"name":"hmetrics"},{"name":"hmetrics"}],"output":{"name":"bool"}}],[11,"eq","","",5,{"inputs":[{"name":"hmetrics"},{"name":"hmetrics"}],"output":{"name":"bool"}}],[11,"ne","","",5,{"inputs":[{"name":"hmetrics"},{"name":"hmetrics"}],"output":{"name":"bool"}}],[11,"fmt","","",5,{"inputs":[{"name":"hmetrics"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",5,{"inputs":[{"name":"hmetrics"}],"output":{"name":"hmetrics"}}],[11,"partial_cmp","","",6,{"inputs":[{"name":"vmetrics"},{"name":"vmetrics"}],"output":{"name":"option"}}],[11,"lt","","",6,{"inputs":[{"name":"vmetrics"},{"name":"vmetrics"}],"output":{"name":"bool"}}],[11,"le","","",6,{"inputs":[{"name":"vmetrics"},{"name":"vmetrics"}],"output":{"name":"bool"}}],[11,"gt","","",6,{"inputs":[{"name":"vmetrics"},{"name":"vmetrics"}],"output":{"name":"bool"}}],[11,"ge","","",6,{"inputs":[{"name":"vmetrics"},{"name":"vmetrics"}],"output":{"name":"bool"}}],[11,"eq","","",6,{"inputs":[{"name":"vmetrics"},{"name":"vmetrics"}],"output":{"name":"bool"}}],[11,"ne","","",6,{"inputs":[{"name":"vmetrics"},{"name":"vmetrics"}],"output":{"name":"bool"}}],[11,"fmt","","",6,{"inputs":[{"name":"vmetrics"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",6,{"inputs":[{"name":"vmetrics"}],"output":{"name":"vmetrics"}}],[11,"clone","","",20,{"inputs":[{"name":"scaledglyph"}],"output":{"name":"scaledglyph"}}],[11,"clone","","",21,{"inputs":[{"name":"positionedglyph"}],"output":{"name":"positionedglyph"}}],[11,"fmt","","",7,{"inputs":[{"name":"scale"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"partial_cmp","","",7,{"inputs":[{"name":"scale"},{"name":"scale"}],"output":{"name":"option"}}],[11,"lt","","",7,{"inputs":[{"name":"scale"},{"name":"scale"}],"output":{"name":"bool"}}],[11,"le","","",7,{"inputs":[{"name":"scale"},{"name":"scale"}],"output":{"name":"bool"}}],[11,"gt","","",7,{"inputs":[{"name":"scale"},{"name":"scale"}],"output":{"name":"bool"}}],[11,"ge","","",7,{"inputs":[{"name":"scale"},{"name":"scale"}],"output":{"name":"bool"}}],[11,"eq","","",7,{"inputs":[{"name":"scale"},{"name":"scale"}],"output":{"name":"bool"}}],[11,"ne","","",7,{"inputs":[{"name":"scale"},{"name":"scale"}],"output":{"name":"bool"}}],[11,"clone","","",7,{"inputs":[{"name":"scale"}],"output":{"name":"scale"}}],[11,"uniform","","Uniform scaling, equivalent to `Scale { x: s, y: s }`.",7,{"inputs":[{"name":"scale"},{"name":"f32"}],"output":{"name":"scale"}}],[11,"from","","",17,{"inputs":[{"name":"codepoint"},{"name":"char"}],"output":{"name":"codepoint"}}],[11,"from","","",10,{"inputs":[{"name":"codepointorglyphid"},{"name":"codepoint"}],"output":{"name":"codepointorglyphid"}}],[11,"from","","",10,{"inputs":[{"name":"codepointorglyphid"},{"name":"glyphid"}],"output":{"name":"codepointorglyphid"}}],[11,"from","","",10,{"inputs":[{"name":"codepointorglyphid"},{"name":"char"}],"output":{"name":"codepointorglyphid"}}],[11,"from_bytes","","Constructs a font collection from an array of bytes, typically loaded from a font file.\nThis array may be owned (e.g. `Vec<u8>`), or borrowed (`&[u8]`).\nAs long as `From<T>` is implemented for `Bytes` for some type `T`, `T` can be used as input.",15,{"inputs":[{"name":"fontcollection"},{"name":"b"}],"output":{"name":"fontcollection"}}],[11,"into_font","","In the common case that a font collection consists of only one font, this function\nconsumes this font collection and turns it into a font. If this is not the case,\nor the font is not valid (read: not supported by this library), `None` is returned.",15,{"inputs":[{"name":"fontcollection"}],"output":{"name":"option"}}],[11,"font_at","","Gets the font at index `i` in the font collection, if it exists and is valid.\nThe produced font borrows the font data that is either borrowed or owned by this font collection.",15,{"inputs":[{"name":"fontcollection"},{"name":"usize"}],"output":{"name":"option"}}],[11,"v_metrics","","The \"vertical metrics\" for this font at a given scale. These metrics are shared by all of the glyphs\nin the font.\nSee `VMetrics` for more detail.",16,{"inputs":[{"name":"font"},{"name":"scale"}],"output":{"name":"vmetrics"}}],[11,"glyph_count","","The number of glyphs present in this font. Glyph identifiers for this font will always be in the range\n`0..self.glyph_count()`",16,{"inputs":[{"name":"font"}],"output":{"name":"usize"}}],[11,"glyph","","Returns the corresponding glyph for a Unicode code point or a glyph id for this font.\nIf id corresponds to a glyph identifier, the identifier must be valid (smaller than `self.glyph_count()`),\notherwise `None` is returned.",16,{"inputs":[{"name":"font"},{"name":"c"}],"output":{"name":"option"}}],[11,"glyphs_for","","A convenience function.",16,{"inputs":[{"name":"font"},{"name":"i"}],"output":{"name":"glyphiter"}}],[11,"layout","","A convenience function for laying out glyphs for a string horizontally. It does not take control\ncharacters like line breaks into account, as treatment of these is likely to depend on the application.",16,{"inputs":[{"name":"font"},{"name":"str"},{"name":"scale"},{"name":"point"}],"output":{"name":"layoutiter"}}],[11,"pair_kerning","","Returns additional kerning to apply as well as that given by HMetrics for a particular pair of glyphs.",16,{"inputs":[{"name":"font"},{"name":"scale"},{"name":"a"},{"name":"b"}],"output":{"name":"f32"}}],[11,"next","","",22,{"inputs":[{"name":"glyphiter"}],"output":{"name":"option"}}],[11,"next","","",23,{"inputs":[{"name":"layoutiter"}],"output":{"name":"option"}}],[11,"font","","The font to which this glyph belongs. If the glyph is a standalone glyph that owns its resources,\nit no longer has a reference to the font which it was created from (using `standalone()`). In which\ncase, `None` is returned.",19,{"inputs":[{"name":"glyph"}],"output":{"name":"option"}}],[11,"id","","The glyph identifier for this glyph.",19,{"inputs":[{"name":"glyph"}],"output":{"name":"glyphid"}}],[11,"scaled","","Augments this glyph with scaling information, making methods that depend on the scale of the glyph\navailable.",19,{"inputs":[{"name":"glyph"},{"name":"scale"}],"output":{"name":"scaledglyph"}}],[11,"standalone","","Turns a `Glyph<'a>` into a `Glyph<'static>`. This produces a glyph that owns its resources,\nextracted from the font. This glyph can outlive the font that it comes from.",19,{"inputs":[{"name":"glyph"}],"output":{"name":"glyph"}}],[11,"fmt","","",11,{"inputs":[{"name":"segment"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",11,{"inputs":[{"name":"segment"}],"output":{"name":"segment"}}],[11,"fmt","","",8,{"inputs":[{"name":"contour"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",8,{"inputs":[{"name":"contour"}],"output":{"name":"contour"}}],[11,"id","","The glyph identifier for this glyph.",20,{"inputs":[{"name":"scaledglyph"}],"output":{"name":"glyphid"}}],[11,"font","","The font to which this glyph belongs. If the glyph is a standalone glyph that owns its resources,\nit no longer has a reference to the font which it was created from (using `standalone()`). In which\ncase, `None` is returned.",20,{"inputs":[{"name":"scaledglyph"}],"output":{"name":"option"}}],[11,"into_unscaled","","A reference to this glyph without the scaling",20,{"inputs":[{"name":"scaledglyph"}],"output":{"name":"glyph"}}],[11,"unscaled","","Removes the scaling from this glyph",20,{"inputs":[{"name":"scaledglyph"}],"output":{"name":"glyph"}}],[11,"positioned","","Augments this glyph with positioning information, making methods that depend on the position of the\nglyph available.",20,{"inputs":[{"name":"scaledglyph"},{"name":"point"}],"output":{"name":"positionedglyph"}}],[11,"scale","","",20,{"inputs":[{"name":"scaledglyph"}],"output":{"name":"scale"}}],[11,"h_metrics","","Retrieves the \"horizontal metrics\" of this glyph. See `HMetrics` for more detail.",20,{"inputs":[{"name":"scaledglyph"}],"output":{"name":"hmetrics"}}],[11,"shape","","Produces a list of the contours that make up the shape of this glyph. Each contour consists of\na sequence of segments. Each segment is either a straight `Line` or a `Curve`.",20,{"inputs":[{"name":"scaledglyph"}],"output":{"name":"option"}}],[11,"exact_bounding_box","","The bounding box of the shape of this glyph, not to be confused with `pixel_bounding_box`, the\nconservative pixel-boundary bounding box. The coordinates are relative to the glyph's origin.",20,{"inputs":[{"name":"scaledglyph"}],"output":{"name":"option"}}],[11,"standalone","","Constructs a glyph that owns its data from this glyph. This is similar to `Glyph::standalone`. See\nthat function for more details.",20,{"inputs":[{"name":"scaledglyph"}],"output":{"name":"scaledglyph"}}],[11,"id","","The glyph identifier for this glyph.",21,{"inputs":[{"name":"positionedglyph"}],"output":{"name":"glyphid"}}],[11,"font","","The font to which this glyph belongs. If the glyph is a standalone glyph that owns its resources,\nit no longer has a reference to the font which it was created from (using `standalone()`). In which\ncase, `None` is returned.",21,{"inputs":[{"name":"positionedglyph"}],"output":{"name":"option"}}],[11,"unpositioned","","A reference to this glyph without positioning",21,{"inputs":[{"name":"positionedglyph"}],"output":{"name":"scaledglyph"}}],[11,"into_unpositioned","","Removes the positioning from this glyph",21,{"inputs":[{"name":"positionedglyph"}],"output":{"name":"scaledglyph"}}],[11,"pixel_bounding_box","","The conservative pixel-boundary bounding box for this glyph. This is the smallest rectangle\naligned to pixel boundaries that encloses the shape of this glyph at this position.",21,{"inputs":[{"name":"positionedglyph"}],"output":{"name":"option"}}],[11,"shape","","Similar to `ScaledGlyph::shape()`, but with the position of the glyph taken into account.",21,{"inputs":[{"name":"positionedglyph"}],"output":{"name":"option"}}],[11,"scale","","",21,{"inputs":[{"name":"positionedglyph"}],"output":{"name":"scale"}}],[11,"position","","",21,{"inputs":[{"name":"positionedglyph"}],"output":{"name":"point"}}],[11,"draw","","Rasterises this glyph. For each pixel in the rect given by `pixel_bounding_box()`, `o` is called:",21,{"inputs":[{"name":"positionedglyph"},{"name":"o"}],"output":null}],[11,"standalone","","Constructs a glyph that owns its data from this glyph. This is similar to `Glyph::standalone`. See\nthat function for more details.",21,{"inputs":[{"name":"positionedglyph"}],"output":{"name":"positionedglyph"}}]],"paths":[[3,"Rect"],[3,"Point"],[3,"Vector"],[3,"Line"],[3,"Curve"],[3,"HMetrics"],[3,"VMetrics"],[3,"Scale"],[3,"Contour"],[4,"SharedBytes"],[4,"CodepointOrGlyphId"],[4,"Segment"],[4,"CacheReadErr"],[4,"CacheWriteErr"],[3,"Cache"],[3,"FontCollection"],[3,"Font"],[3,"Codepoint"],[3,"GlyphId"],[3,"Glyph"],[3,"ScaledGlyph"],[3,"PositionedGlyph"],[3,"GlyphIter"],[3,"LayoutIter"]]};
initSearch(searchIndex);
