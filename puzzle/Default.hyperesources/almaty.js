
            (function() {
                (function m() {
                    function k(a, b, c, d) {
                        var e = !1;
                        null == window[a] && (null == window[b] ? (window[b] = [],
                        window[b].push(m),
                        a = document.getElementsByTagName("head")[0],
                        b = document.createElement("script"),
                        e = l,
                        true == !0 && (e = "https://cdn.jsdelivr.net/gh/tumult/hype-runtime"),
                        b.type = "text/javascript",
                        "" != d && (b.integrity = d,
                        b.setAttribute("crossorigin", "anonymous")),
                        b.src = e + "/" + c,
                        a.appendChild(b)) : window[b].push(m),
                        e = !0);
                        return e
                    }
                    var l = "Default.hyperesources"
                      , f = "Default"
                      , g = "default_hype_container";
                    if (false == !1)
                        try {
                            for (var c = document.getElementsByTagName("script"), a = 0; a < c.length; a++) {
                                var d = c[a].src
                                  , b = null != d ? d.indexOf("/default_hype_generated_script.js") : -1;
                                if (-1 != b) {
                                    l = d.substr(0, b);
                                    break
                                }
                            }
                        } catch (p) {}
                    c = navigator.userAgent.match(/MSIE (\d+\.\d+)/);
                    c = parseFloat(c && c[1]) || null;
                    d = !0 == (null != window.HYPE_734F || null != window.HYPE_dtl_734F) || false == !0 || null != c && 10 > c;
                    a = !0 == d ? "HYPE-734.full.min.js" : "HYPE-734.thin.min.js";
                    c = !0 == d ? "F" : "T";
                    d = d ? "" : "";
                    if (false == !1 && (a = k("HYPE_734" + c, "HYPE_dtl_734" + c, a, d),
                    false == !0 && (a = a || k("HYPE_w_734", "HYPE_wdtl_734", "HYPE-734.waypoints.min.js", "")),
                    false == !0 && (a = a || k("Matter", "HYPE_pdtl_734", "HYPE-734.physics.min.js", "")),
                    a))
                        return;
                    d = window.HYPE.documents;
                    if (null != d[f]) {
                        b = 1;
                        a = f;
                        do
                            f = "" + a + "-" + b++;
                        while (null != d[f]);
                        for (var e = document.getElementsByTagName("div"), b = !1, a = 0; a < e.length; a++)
                            if (e[a].id == g && null == e[a].getAttribute("HYP_dn")) {
                                var b = 1
                                  , h = g;
                                do
                                    g = "" + h + "-" + b++;
                                while (null != document.getElementById(g));
                                e[a].id = g;
                                b = !0;
                                break
                            }
                        if (!1 == b)
                            return
                    }
                    b = [];
                    b = [];
                    e = {};
                    h = {};
                    for (a = 0; a < b.length; a++)
                        try {
                            h[b[a].identifier] = b[a].name,
                            e[b[a].name] = eval("(function(){return " + b[a].source + "})();")
                        } catch (n) {
                            window.console && window.console.log(n),
                            e[b[a].name] = function() {}
                        }
                    c = new window["HYPE_734" + c](f,g,{
                        "-2": {
                            n: "blank.gif"
                        },
                        "18": {
                            p: 1,
                            n: "1.png",
                            g: "192",
                            t: "@1x"
                        },
                        "10": {
                            p: 1,
                            n: "puzzle-3.png",
                            g: "31",
                            o: true,
                            t: "@1x"
                        },
                        "19": {
                            p: 1,
                            n: "bg3.jpg",
                            g: "196",
                            o: true,
                            t: "@1x"
                        },
                        "11": {
                            p: 1,
                            n: "puzzle-3_2x.png",
                            g: "31",
                            o: true,
                            t: "@2x"
                        },
                        "0": {
                            p: 1,
                            n: "PastedVector-2.svg",
                            g: "42",
                            t: "image/svg+xml"
                        },
                        "12": {
                            p: 1,
                            n: "puzzle-4.png",
                            g: "33",
                            o: true,
                            t: "@1x"
                        },
                        "1": {
                            n: "HypeDragAndDropEnabler.js"
                        },
                        "20": {
                            p: 1,
                            n: "bg3_2x.jpg",
                            g: "196",
                            o: true,
                            t: "@2x"
                        },
                        "2": {
                            p: 1,
                            n: "bg2.jpg",
                            g: "186",
                            o: true,
                            t: "@1x"
                        },
                        "13": {
                            p: 1,
                            n: "puzzle-4_2x.png",
                            g: "33",
                            o: true,
                            t: "@2x"
                        },
                        "3": {
                            p: 1,
                            n: "bg2_2x.jpg",
                            g: "186",
                            o: true,
                            t: "@2x"
                        },
                        "14": {
                            p: 1,
                            n: "puzzle-5.png",
                            g: "35",
                            o: true,
                            t: "@1x"
                        },
                        "4": {
                            p: 1,
                            n: "puzzle-0.png",
                            g: "25",
                            o: true,
                            t: "@1x"
                        },
                        "5": {
                            p: 1,
                            n: "puzzle-0_2x.png",
                            g: "25",
                            o: true,
                            t: "@2x"
                        },
                        "15": {
                            p: 1,
                            n: "puzzle-5_2x.png",
                            g: "35",
                            o: true,
                            t: "@2x"
                        },
                        "6": {
                            p: 1,
                            n: "puzzle-1.png",
                            g: "27",
                            o: true,
                            t: "@1x"
                        },
                        "16": {
                            p: 1,
                            n: "bg-1.jpg",
                            g: "187",
                            o: true,
                            t: "@1x"
                        },
                        "7": {
                            p: 1,
                            n: "puzzle-1_2x.png",
                            g: "27",
                            o: true,
                            t: "@2x"
                        },
                        "-1": {
                            n: "PIE.htc"
                        },
                        "8": {
                            p: 1,
                            n: "puzzle-2.png",
                            g: "29",
                            o: true,
                            t: "@1x"
                        },
                        "17": {
                            p: 1,
                            n: "bg-1_2x.jpg",
                            g: "187",
                            o: true,
                            t: "@2x"
                        },
                        "9": {
                            p: 1,
                            n: "puzzle-2_2x.png",
                            g: "29",
                            o: true,
                            t: "@2x"
                        }
                    },l,["<link href='https://fonts.googleapis.com/css?family=Fira+Sans:700&subset=latin' rel='stylesheet' type='text/css'>"],e,[{
                        n: "start",
                        o: "1",
                        X: [0]
                    }, {
                        n: "game",
                        o: "45",
                        X: [1]
                    }, {
                        n: "mid",
                        o: "91",
                        X: [2]
                    }],[{
                        o: "3",
                        p: "600px",
                        cA: false,
                        Y: 320,
                        Z: 480,
                        L: [],
                        c: "#FFF",
                        bY: 1,
                        d: 320,
                        U: {
                            "229": {
                                V: {
                                    drop: "247",
                                    "Main Timeline": "246"
                                },
                                W: "246",
                                n: "p2"
                            },
                            "235": {
                                V: {
                                    drop: "251",
                                    "Main Timeline": "250"
                                },
                                W: "250",
                                n: "p4"
                            },
                            "227": {
                                V: {
                                    drop: "245",
                                    "Main Timeline": "244"
                                },
                                W: "244",
                                n: "p6"
                            },
                            "232": {
                                V: {
                                    drop: "249",
                                    "Main Timeline": "248"
                                },
                                W: "248",
                                n: "p3"
                            },
                            "239": {
                                V: {
                                    drop: "255",
                                    "Main Timeline": "254"
                                },
                                W: "254",
                                n: "p1"
                            },
                            "237": {
                                V: {
                                    drop: "253",
                                    "Main Timeline": "252"
                                },
                                W: "252",
                                n: "p5"
                            }
                        },
                        T: {
                            "255": {
                                c: "239",
                                q: false,
                                z: 0.15,
                                i: "255",
                                a: [{
                                    f: "c",
                                    y: 0,
                                    z: 0.15,
                                    i: "Q",
                                    e: 0,
                                    s: 2,
                                    o: "240"
                                }, {
                                    f: "c",
                                    y: 0,
                                    z: 0.15,
                                    i: "S",
                                    e: 0,
                                    s: 2,
                                    o: "240"
                                }, {
                                    f: "c",
                                    y: 0,
                                    z: 0.15,
                                    i: "T",
                                    e: 0,
                                    s: 2,
                                    o: "240"
                                }, {
                                    f: "c",
                                    p: 2,
                                    y: 0.15,
                                    z: 0,
                                    i: "ActionHandler",
                                    s: {
                                        a: [{
                                            p: 14,
                                            B: "track"
                                        }]
                                    },
                                    o: "255"
                                }, {
                                    y: 0.15,
                                    i: "T",
                                    s: 0,
                                    z: 0,
                                    o: "240",
                                    f: "c"
                                }, {
                                    y: 0.15,
                                    i: "S",
                                    s: 0,
                                    z: 0,
                                    o: "240",
                                    f: "c"
                                }, {
                                    y: 0.15,
                                    i: "Q",
                                    s: 0,
                                    z: 0,
                                    o: "240",
                                    f: "c"
                                }],
                                n: "drop",
                                f: 30,
                                b: []
                            },
                            "247": {
                                c: "229",
                                q: false,
                                z: 0.15,
                                i: "247",
                                a: [{
                                    f: "c",
                                    y: 0,
                                    z: 0.15,
                                    i: "Q",
                                    e: 0,
                                    s: 2,
                                    o: "230"
                                }, {
                                    f: "c",
                                    y: 0,
                                    z: 0.15,
                                    i: "S",
                                    e: 0,
                                    s: 2,
                                    o: "230"
                                }, {
                                    f: "c",
                                    y: 0,
                                    z: 0.15,
                                    i: "T",
                                    e: 0,
                                    s: 2,
                                    o: "230"
                                }, {
                                    f: "c",
                                    p: 2,
                                    y: 0.15,
                                    z: 0,
                                    i: "ActionHandler",
                                    s: {
                                        a: [{
                                            p: 14,
                                            B: "track"
                                        }]
                                    },
                                    o: "247"
                                }, {
                                    y: 0.15,
                                    i: "T",
                                    s: 0,
                                    z: 0,
                                    o: "230",
                                    f: "c"
                                }, {
                                    y: 0.15,
                                    i: "S",
                                    s: 0,
                                    z: 0,
                                    o: "230",
                                    f: "c"
                                }, {
                                    y: 0.15,
                                    i: "Q",
                                    s: 0,
                                    z: 0,
                                    o: "230",
                                    f: "c"
                                }],
                                n: "drop",
                                f: 30,
                                b: []
                            },
                            "253": {
                                c: "237",
                                q: false,
                                z: 0.15,
                                i: "253",
                                a: [{
                                    f: "c",
                                    y: 0,
                                    z: 0.15,
                                    i: "T",
                                    e: 0,
                                    s: 2,
                                    o: "238"
                                }, {
                                    f: "c",
                                    y: 0,
                                    z: 0.15,
                                    i: "S",
                                    e: 0,
                                    s: 2,
                                    o: "238"
                                }, {
                                    f: "c",
                                    y: 0,
                                    z: 0.15,
                                    i: "Q",
                                    e: 0,
                                    s: 2,
                                    o: "238"
                                }, {
                                    f: "c",
                                    p: 2,
                                    y: 0.15,
                                    z: 0,
                                    i: "ActionHandler",
                                    s: {
                                        a: [{
                                            p: 14,
                                            B: "track"
                                        }]
                                    },
                                    o: "253"
                                }, {
                                    y: 0.15,
                                    i: "T",
                                    s: 0,
                                    z: 0,
                                    o: "238",
                                    f: "c"
                                }, {
                                    y: 0.15,
                                    i: "S",
                                    s: 0,
                                    z: 0,
                                    o: "238",
                                    f: "c"
                                }, {
                                    y: 0.15,
                                    i: "Q",
                                    s: 0,
                                    z: 0,
                                    o: "238",
                                    f: "c"
                                }],
                                n: "drop",
                                f: 30,
                                b: []
                            },
                            "245": {
                                c: "227",
                                q: false,
                                z: 0.15,
                                i: "245",
                                a: [{
                                    f: "c",
                                    y: 0,
                                    z: 0.15,
                                    i: "T",
                                    e: 0,
                                    s: 2,
                                    o: "228"
                                }, {
                                    f: "c",
                                    y: 0,
                                    z: 0.15,
                                    i: "S",
                                    e: 0,
                                    s: 2,
                                    o: "228"
                                }, {
                                    f: "c",
                                    y: 0,
                                    z: 0.15,
                                    i: "Q",
                                    e: 0,
                                    s: 2,
                                    o: "228"
                                }, {
                                    f: "c",
                                    p: 2,
                                    y: 0.15,
                                    z: 0,
                                    i: "ActionHandler",
                                    s: {
                                        a: [{
                                            p: 14,
                                            B: "track"
                                        }]
                                    },
                                    o: "245"
                                }, {
                                    y: 0.15,
                                    i: "T",
                                    s: 0,
                                    z: 0,
                                    o: "228",
                                    f: "c"
                                }, {
                                    y: 0.15,
                                    i: "S",
                                    s: 0,
                                    z: 0,
                                    o: "228",
                                    f: "c"
                                }, {
                                    y: 0.15,
                                    i: "Q",
                                    s: 0,
                                    z: 0,
                                    o: "228",
                                    f: "c"
                                }],
                                n: "drop",
                                f: 30,
                                b: []
                            },
                            "251": {
                                c: "235",
                                q: false,
                                z: 0.15,
                                i: "251",
                                a: [{
                                    f: "c",
                                    y: 0,
                                    z: 0.15,
                                    i: "T",
                                    e: 0,
                                    s: 2,
                                    o: "236"
                                }, {
                                    f: "c",
                                    y: 0,
                                    z: 0.15,
                                    i: "S",
                                    e: 0,
                                    s: 2,
                                    o: "236"
                                }, {
                                    f: "c",
                                    y: 0,
                                    z: 0.15,
                                    i: "Q",
                                    e: 0,
                                    s: 2,
                                    o: "236"
                                }, {
                                    f: "c",
                                    p: 2,
                                    y: 0.15,
                                    z: 0,
                                    i: "ActionHandler",
                                    s: {
                                        a: [{
                                            p: 14,
                                            B: "track"
                                        }]
                                    },
                                    o: "251"
                                }, {
                                    y: 0.15,
                                    i: "T",
                                    s: 0,
                                    z: 0,
                                    o: "236",
                                    f: "c"
                                }, {
                                    y: 0.15,
                                    i: "S",
                                    s: 0,
                                    z: 0,
                                    o: "236",
                                    f: "c"
                                }, {
                                    y: 0.15,
                                    i: "Q",
                                    s: 0,
                                    z: 0,
                                    o: "236",
                                    f: "c"
                                }],
                                n: "drop",
                                f: 30,
                                b: []
                            },
                            "248": {
                                c: "232",
                                q: false,
                                z: 0,
                                i: "248",
                                a: [],
                                n: "Main Timeline",
                                f: 30,
                                b: []
                            },
                            "254": {
                                c: "239",
                                q: false,
                                z: 0,
                                i: "254",
                                a: [],
                                n: "Main Timeline",
                                f: 30,
                                b: []
                            },
                            "252": {
                                c: "237",
                                q: false,
                                z: 0,
                                i: "252",
                                a: [],
                                n: "Main Timeline",
                                f: 30,
                                b: []
                            },
                            kTimelineDefaultIdentifier: {
                                q: false,
                                z: 5.15,
                                i: "kTimelineDefaultIdentifier",
                                n: "Main Timeline",
                                a: [{
                                    f: "c",
                                    y: 0,
                                    z: 1,
                                    i: "cQ",
                                    e: 1,
                                    s: 0,
                                    o: "241"
                                }, {
                                    f: "c",
                                    y: 0,
                                    z: 1,
                                    i: "cR",
                                    e: 1,
                                    s: 0,
                                    o: "241"
                                }, {
                                    f: "c",
                                    y: 0,
                                    z: 1,
                                    i: "e",
                                    e: 1,
                                    s: 0,
                                    o: "241"
                                }, {
                                    f: "c",
                                    y: 0.15,
                                    z: 1,
                                    i: "cR",
                                    e: 1,
                                    s: 0,
                                    o: "242"
                                }, {
                                    f: "c",
                                    y: 0.15,
                                    z: 1,
                                    i: "cQ",
                                    e: 1,
                                    s: 0,
                                    o: "242"
                                }, {
                                    f: "c",
                                    y: 0.15,
                                    z: 1,
                                    i: "e",
                                    e: 1,
                                    s: 0,
                                    o: "242"
                                }, {
                                    f: "c",
                                    y: 1,
                                    z: 0.15,
                                    i: "a",
                                    e: 16,
                                    s: -134,
                                    o: "239"
                                }, {
                                    f: "c",
                                    y: 1,
                                    z: 1,
                                    i: "e",
                                    e: 1,
                                    s: 0,
                                    o: "243"
                                }, {
                                    f: "c",
                                    y: 1,
                                    z: 1,
                                    i: "cQ",
                                    e: 1,
                                    s: 0,
                                    o: "243"
                                }, {
                                    f: "c",
                                    y: 1,
                                    z: 1,
                                    i: "cR",
                                    e: 1,
                                    s: 0,
                                    o: "243"
                                }, {
                                    y: 1,
                                    i: "cQ",
                                    s: 1,
                                    z: 0,
                                    o: "241",
                                    f: "c"
                                }, {
                                    y: 1,
                                    i: "cR",
                                    s: 1,
                                    z: 0,
                                    o: "241",
                                    f: "c"
                                }, {
                                    y: 1,
                                    i: "e",
                                    s: 1,
                                    z: 0,
                                    o: "241",
                                    f: "c"
                                }, {
                                    f: "c",
                                    y: 1.03,
                                    z: 0.15,
                                    i: "a",
                                    e: 205,
                                    s: 352,
                                    o: "229"
                                }, {
                                    f: "c",
                                    y: 1.07,
                                    z: 0.15,
                                    i: "b",
                                    e: 368,
                                    s: 534,
                                    o: "235"
                                }, {
                                    f: "c",
                                    y: 1.07,
                                    z: 0.15,
                                    i: "a",
                                    e: 162,
                                    s: 272,
                                    o: "235"
                                }, {
                                    f: "c",
                                    y: 1.11,
                                    z: 0.15,
                                    i: "b",
                                    e: 368,
                                    s: 494,
                                    o: "232"
                                }, {
                                    f: "c",
                                    y: 1.11,
                                    z: 0.15,
                                    i: "a",
                                    e: 45,
                                    s: -93,
                                    o: "232"
                                }, {
                                    y: 1.15,
                                    i: "cR",
                                    s: 1,
                                    z: 0,
                                    o: "242",
                                    f: "c"
                                }, {
                                    y: 1.15,
                                    i: "cQ",
                                    s: 1,
                                    z: 0,
                                    o: "242",
                                    f: "c"
                                }, {
                                    y: 1.15,
                                    i: "e",
                                    s: 1,
                                    z: 0,
                                    o: "242",
                                    f: "c"
                                }, {
                                    f: "c",
                                    y: 1.15,
                                    z: 0.15,
                                    i: "b",
                                    e: 351,
                                    s: 534,
                                    o: "237"
                                }, {
                                    f: "c",
                                    y: 1.15,
                                    z: 0.15,
                                    i: "a",
                                    e: 93,
                                    s: 39,
                                    o: "237"
                                }, {
                                    y: 1.15,
                                    i: "a",
                                    s: 16,
                                    z: 0,
                                    o: "239",
                                    f: "c"
                                }, {
                                    y: 1.18,
                                    i: "a",
                                    s: 205,
                                    z: 0,
                                    o: "229",
                                    f: "c"
                                }, {
                                    y: 1.22,
                                    i: "b",
                                    s: 368,
                                    z: 0,
                                    o: "235",
                                    f: "c"
                                }, {
                                    y: 1.22,
                                    i: "a",
                                    s: 162,
                                    z: 0,
                                    o: "235",
                                    f: "c"
                                }, {
                                    f: "c",
                                    y: 1.26,
                                    z: 0.15,
                                    i: "b",
                                    e: 357,
                                    s: 534,
                                    o: "234"
                                }, {
                                    f: "c",
                                    y: 1.26,
                                    z: 0.15,
                                    i: "b",
                                    e: 357,
                                    s: 534,
                                    o: "227"
                                }, {
                                    y: 1.26,
                                    i: "b",
                                    s: 368,
                                    z: 0,
                                    o: "232",
                                    f: "c"
                                }, {
                                    f: "c",
                                    y: 1.26,
                                    z: 0.15,
                                    i: "a",
                                    e: 128,
                                    s: 163,
                                    o: "234"
                                }, {
                                    f: "c",
                                    y: 1.26,
                                    z: 0.15,
                                    i: "a",
                                    e: 128,
                                    s: 163,
                                    o: "227"
                                }, {
                                    y: 1.26,
                                    i: "a",
                                    s: 45,
                                    z: 0,
                                    o: "232",
                                    f: "c"
                                }, {
                                    y: 2,
                                    i: "e",
                                    s: 1,
                                    z: 0,
                                    o: "243",
                                    f: "c"
                                }, {
                                    y: 2,
                                    i: "cQ",
                                    s: 1,
                                    z: 0,
                                    o: "243",
                                    f: "c"
                                }, {
                                    y: 2,
                                    i: "cR",
                                    s: 1,
                                    z: 0,
                                    o: "243",
                                    f: "c"
                                }, {
                                    y: 2,
                                    i: "b",
                                    s: 351,
                                    z: 0,
                                    o: "237",
                                    f: "c"
                                }, {
                                    y: 2,
                                    i: "a",
                                    s: 93,
                                    z: 0,
                                    o: "237",
                                    f: "c"
                                }, {
                                    f: "c",
                                    y: 2.11,
                                    z: 1.19,
                                    i: "b",
                                    e: 357,
                                    s: 357,
                                    o: "234"
                                }, {
                                    y: 2.11,
                                    i: "b",
                                    s: 357,
                                    z: 0,
                                    o: "227",
                                    f: "c"
                                }, {
                                    f: "c",
                                    y: 2.11,
                                    z: 1.19,
                                    i: "a",
                                    e: 128,
                                    s: 128,
                                    o: "234"
                                }, {
                                    y: 2.11,
                                    i: "a",
                                    s: 128,
                                    z: 0,
                                    o: "227",
                                    f: "c"
                                }, {
                                    f: "c",
                                    y: 3,
                                    z: 0.15,
                                    i: "b",
                                    e: 402,
                                    s: 491,
                                    o: "231"
                                }, {
                                    f: "c",
                                    y: 3,
                                    z: 0.15,
                                    i: "a",
                                    e: 166,
                                    s: 333,
                                    o: "231"
                                }, {
                                    f: "c",
                                    y: 3.15,
                                    z: 0.15,
                                    i: "cQ",
                                    e: 0.9,
                                    s: 1,
                                    o: "231"
                                }, {
                                    f: "c",
                                    y: 3.15,
                                    z: 0.15,
                                    i: "cR",
                                    e: 0.9,
                                    s: 1,
                                    o: "231"
                                }, {
                                    f: "c",
                                    y: 3.15,
                                    z: 0.15,
                                    i: "b",
                                    e: 402,
                                    s: 402,
                                    o: "231"
                                }, {
                                    f: "c",
                                    y: 3.15,
                                    z: 0.15,
                                    i: "a",
                                    e: 166,
                                    s: 166,
                                    o: "231"
                                }, {
                                    f: "c",
                                    y: 4,
                                    z: 0.15,
                                    i: "cQ",
                                    e: 0.9,
                                    s: 0.9,
                                    o: "231"
                                }, {
                                    f: "c",
                                    y: 4,
                                    z: 0.15,
                                    i: "cR",
                                    e: 0.9,
                                    s: 0.9,
                                    o: "231"
                                }, {
                                    f: "c",
                                    y: 4,
                                    z: 0.15,
                                    i: "b",
                                    e: 237,
                                    s: 357,
                                    o: "234"
                                }, {
                                    f: "c",
                                    y: 4,
                                    z: 0.15,
                                    i: "b",
                                    e: 282,
                                    s: 402,
                                    o: "231"
                                }, {
                                    f: "c",
                                    y: 4,
                                    z: 0.15,
                                    i: "a",
                                    e: 158,
                                    s: 128,
                                    o: "234"
                                }, {
                                    f: "c",
                                    y: 4,
                                    z: 0.15,
                                    i: "a",
                                    e: 196,
                                    s: 166,
                                    o: "231"
                                }, {
                                    f: "c",
                                    y: 4.15,
                                    z: 0.15,
                                    i: "cQ",
                                    e: 1,
                                    s: 0.9,
                                    o: "231"
                                }, {
                                    f: "c",
                                    y: 4.15,
                                    z: 0.15,
                                    i: "cR",
                                    e: 1,
                                    s: 0.9,
                                    o: "231"
                                }, {
                                    y: 4.15,
                                    i: "b",
                                    s: 237,
                                    z: 0,
                                    o: "234",
                                    f: "c"
                                }, {
                                    f: "c",
                                    y: 4.15,
                                    z: 0.15,
                                    i: "b",
                                    e: 282,
                                    s: 282,
                                    o: "231"
                                }, {
                                    y: 4.15,
                                    i: "a",
                                    s: 158,
                                    z: 0,
                                    o: "234",
                                    f: "c"
                                }, {
                                    f: "c",
                                    y: 4.15,
                                    z: 0.15,
                                    i: "a",
                                    e: 196,
                                    s: 196,
                                    o: "231"
                                }, {
                                    y: 5,
                                    i: "cQ",
                                    s: 1,
                                    z: 0,
                                    o: "231",
                                    f: "c"
                                }, {
                                    y: 5,
                                    i: "cR",
                                    s: 1,
                                    z: 0,
                                    o: "231",
                                    f: "c"
                                }, {
                                    f: "c",
                                    y: 5,
                                    z: 0.15,
                                    i: "e",
                                    e: 0,
                                    s: 0.3,
                                    o: "234"
                                }, {
                                    f: "c",
                                    y: 5,
                                    z: 0.15,
                                    i: "b",
                                    e: 413,
                                    s: 282,
                                    o: "231"
                                }, {
                                    f: "c",
                                    y: 5,
                                    z: 0.15,
                                    i: "a",
                                    e: 355,
                                    s: 196,
                                    o: "231"
                                }, {
                                    f: "c",
                                    p: 2,
                                    y: 5.15,
                                    z: 0,
                                    i: "ActionHandler",
                                    s: {
                                        a: [{
                                            d: 1.1,
                                            p: 1,
                                            g: 1,
                                            f: 1
                                        }]
                                    },
                                    o: "kTimelineDefaultIdentifier"
                                }, {
                                    y: 5.15,
                                    i: "e",
                                    s: 0,
                                    z: 0,
                                    o: "234",
                                    f: "c"
                                }, {
                                    y: 5.15,
                                    i: "b",
                                    s: 413,
                                    z: 0,
                                    o: "231",
                                    f: "c"
                                }, {
                                    y: 5.15,
                                    i: "a",
                                    s: 355,
                                    z: 0,
                                    o: "231",
                                    f: "c"
                                }],
                                f: 30,
                                b: [{
                                    D: 0,
                                    H: true,
                                    E: true,
                                    z: false,
                                    F: 0,
                                    G: 0,
                                    C: 0,
                                    b: "254"
                                }, {
                                    D: 0,
                                    H: true,
                                    E: true,
                                    z: false,
                                    F: 0,
                                    G: 0,
                                    C: 0,
                                    b: "246"
                                }, {
                                    D: 0,
                                    H: true,
                                    E: true,
                                    z: false,
                                    F: 0,
                                    G: 0,
                                    C: 0,
                                    b: "248"
                                }, {
                                    D: 0,
                                    H: true,
                                    E: true,
                                    z: false,
                                    F: 0,
                                    G: 0,
                                    C: 0,
                                    b: "250"
                                }, {
                                    D: 0,
                                    H: true,
                                    E: true,
                                    z: false,
                                    F: 0,
                                    G: 0,
                                    C: 0,
                                    b: "252"
                                }, {
                                    D: 0,
                                    H: true,
                                    E: true,
                                    z: false,
                                    F: 0,
                                    G: 0,
                                    C: 0,
                                    b: "244"
                                }]
                            },
                            "246": {
                                c: "229",
                                q: false,
                                z: 0,
                                i: "246",
                                a: [],
                                n: "Main Timeline",
                                f: 30,
                                b: []
                            },
                            "249": {
                                c: "232",
                                q: false,
                                z: 0.15,
                                i: "249",
                                a: [{
                                    f: "c",
                                    y: 0,
                                    z: 0.15,
                                    i: "T",
                                    e: 0,
                                    s: 2,
                                    o: "233"
                                }, {
                                    f: "c",
                                    y: 0,
                                    z: 0.15,
                                    i: "S",
                                    e: 0,
                                    s: 2,
                                    o: "233"
                                }, {
                                    f: "c",
                                    y: 0,
                                    z: 0.15,
                                    i: "Q",
                                    e: 0,
                                    s: 2,
                                    o: "233"
                                }, {
                                    f: "c",
                                    p: 2,
                                    y: 0.15,
                                    z: 0,
                                    i: "ActionHandler",
                                    s: {
                                        a: [{
                                            p: 14,
                                            B: "track"
                                        }]
                                    },
                                    o: "249"
                                }, {
                                    y: 0.15,
                                    i: "T",
                                    s: 0,
                                    z: 0,
                                    o: "233",
                                    f: "c"
                                }, {
                                    y: 0.15,
                                    i: "S",
                                    s: 0,
                                    z: 0,
                                    o: "233",
                                    f: "c"
                                }, {
                                    y: 0.15,
                                    i: "Q",
                                    s: 0,
                                    z: 0,
                                    o: "233",
                                    f: "c"
                                }],
                                n: "drop",
                                f: 30,
                                b: []
                            },
                            "244": {
                                c: "227",
                                q: false,
                                z: 0,
                                i: "244",
                                a: [],
                                n: "Main Timeline",
                                f: 30,
                                b: []
                            },
                            "250": {
                                c: "235",
                                q: false,
                                z: 0,
                                i: "250",
                                a: [],
                                n: "Main Timeline",
                                f: 30,
                                b: []
                            }
                        },
                        bZ: 180,
                        O: ["226", "241", "242", "243", "234", "231", "236", "240", "239", "233", "230", "229", "238", "237", "228", "227", "232", "235"],
                        n: "Untitled Layout",
                        "_": 0,
                        v: {
                            "233": {
                                h: "29",
                                p: "no-repeat",
                                x: "visible",
                                R: "#000",
                                q: "100% 100%",
                                a: 0,
                                j: "absolute",
                                bF: "232",
                                r: "inline",
                                T: 2,
                                b: -32,
                                d: 160,
                                z: 11,
                                dB: "img",
                                Q: 2,
                                S: 2,
                                k: "div",
                                c: 94,
                                gg: "1"
                            },
                            "236": {
                                h: "31",
                                p: "no-repeat",
                                x: "visible",
                                R: "#000",
                                q: "100% 100%",
                                a: -35,
                                j: "absolute",
                                bF: "235",
                                r: "inline",
                                T: 2,
                                b: -34,
                                d: 162,
                                z: 13,
                                dB: "img",
                                Q: 2,
                                S: 2,
                                k: "div",
                                c: 130,
                                gg: "1"
                            },
                            "231": {
                                h: "42",
                                p: "no-repeat",
                                x: "visible",
                                a: 333,
                                dB: "img",
                                q: "100% 100%",
                                j: "absolute",
                                r: "inline",
                                z: 19,
                                b: 491,
                                k: "div",
                                d: 65,
                                c: 51,
                                cQ: 1,
                                cR: 1
                            },
                            "242": {
                                aU: 8,
                                G: "#FFF",
                                aV: 8,
                                r: "inline",
                                cQ: 0,
                                s: "'Fira Sans'",
                                e: 0,
                                t: 16,
                                cR: 0,
                                u: "normal",
                                Z: "break-word",
                                v: "700",
                                w: " ",
                                j: "absolute",
                                x: "visible",
                                yy: "nowrap",
                                k: "div",
                                y: "preserve",
                                z: 22,
                                aS: 8,
                                aT: 8,
                                a: 147,
                                F: "center",
                                b: 165
                            },
                            "239": {
                                bN: {
                                    a: [{
                                        p: 11
                                    }]
                                },
                                x: "visible",
                                a: -134,
                                dY: [["data-drag", "true"], ["data-drop", "pp1"], ["data-dropsnap", "true"], ["data-dragreverse", "true"]],
                                b: 341,
                                j: "absolute",
                                cA: false,
                                c: 96,
                                k: "div",
                                bY: 1,
                                d: 96,
                                z: 12,
                                bX: false,
                                bZ: 180,
                                cV: [{
                                    a: [{
                                        b: "255",
                                        p: 3,
                                        z: false,
                                        symbolOid: "59"
                                    }],
                                    B: "p1-drop"
                                }]
                            },
                            "228": {
                                h: "35",
                                p: "no-repeat",
                                x: "visible",
                                R: "#000",
                                q: "100% 100%",
                                a: 0,
                                j: "absolute",
                                bF: "227",
                                r: "inline",
                                T: 2,
                                b: 0,
                                d: 95,
                                z: 17,
                                dB: "img",
                                Q: 2,
                                S: 2,
                                k: "div",
                                c: 96,
                                gg: "1"
                            },
                            "234": {
                                h: "35",
                                p: "no-repeat",
                                x: "visible",
                                R: "#000",
                                q: "100% 100%",
                                a: 163,
                                j: "absolute",
                                r: "inline",
                                b: 534,
                                T: 2,
                                z: 18,
                                d: 95,
                                dB: "img",
                                Q: 2,
                                e: 0.3,
                                S: 2,
                                k: "div",
                                c: 96,
                                gg: "1"
                            },
                            "240": {
                                h: "25",
                                p: "no-repeat",
                                x: "visible",
                                R: "#000",
                                q: "100% 100%",
                                a: 0,
                                j: "absolute",
                                bF: "239",
                                r: "inline",
                                T: 2,
                                b: 0,
                                d: 94,
                                z: 7,
                                dB: "img",
                                Q: 2,
                                S: 2,
                                k: "div",
                                c: 128,
                                gg: "1"
                            },
                            "237": {
                                bN: {
                                    a: [{
                                        p: 11
                                    }]
                                },
                                x: "visible",
                                a: 39,
                                dY: [["data-drag", "true"], ["data-drop", "pp5"], ["data-dropsnap", "true"], ["data-dragreverse", "true"]],
                                b: 534,
                                j: "absolute",
                                cA: false,
                                c: 96,
                                k: "div",
                                bY: 1,
                                d: 96,
                                z: 16,
                                bX: false,
                                bZ: 180,
                                cV: [{
                                    a: [{
                                        b: "253",
                                        p: 3,
                                        z: false,
                                        symbolOid: "71"
                                    }],
                                    B: "p5-drop"
                                }]
                            },
                            "226": {
                                h: "186",
                                p: "no-repeat",
                                x: "visible",
                                a: 0,
                                dB: "img",
                                q: "100% 100%",
                                j: "absolute",
                                r: "inline",
                                z: 1,
                                k: "div",
                                b: 0,
                                d: 480,
                                c: 320
                            },
                            "232": {
                                bN: {
                                    a: [{
                                        p: 11
                                    }]
                                },
                                x: "visible",
                                a: -93,
                                dY: [["data-drag", "true"], ["data-drop", "pp3"], ["data-dropsnap", "true"], ["data-dragreverse", "true"]],
                                b: 494,
                                j: "absolute",
                                cA: false,
                                c: 96,
                                k: "div",
                                bY: 1,
                                d: 96,
                                z: 14,
                                bX: false,
                                bZ: 180,
                                cV: [{
                                    a: [{
                                        b: "249",
                                        p: 3,
                                        z: false,
                                        symbolOid: "65"
                                    }],
                                    B: "p3-drop"
                                }]
                            },
                            "243": {
                                aU: 8,
                                G: "#FFF",
                                aV: 8,
                                r: "inline",
                                cQ: 0,
                                s: "'Fira Sans'",
                                e: 0,
                                t: 16,
                                cR: 0,
                                u: "normal",
                                Z: "break-word",
                                v: "700",
                                w: " ",
                                j: "absolute",
                                x: "visible",
                                yy: "nowrap",
                                k: "div",
                                y: "preserve",
                                z: 21,
                                aS: 8,
                                aT: 8,
                                a: 89,
                                F: "center",
                                b: 202
                            },
                            "229": {
                                bN: {
                                    a: [{
                                        p: 11
                                    }]
                                },
                                x: "visible",
                                a: 352,
                                dY: [["data-drag", "true"], ["data-drop", "pp2"], ["data-dropsnap", "true"], ["data-dragreverse", "true"]],
                                b: 341,
                                j: "absolute",
                                cA: false,
                                z: 13,
                                k: "div",
                                c: 96,
                                d: 96,
                                bY: 1,
                                cQ: 1,
                                bX: false,
                                bZ: 180,
                                cV: [{
                                    a: [{
                                        b: "247",
                                        p: 3,
                                        z: false,
                                        symbolOid: "62"
                                    }],
                                    B: "p2-drop"
                                }],
                                cR: 1
                            },
                            "235": {
                                bN: {
                                    a: [{
                                        p: 11
                                    }]
                                },
                                x: "visible",
                                a: 272,
                                dY: [["data-drag", "true"], ["data-drop", "pp4"], ["data-dropsnap", "true"], ["data-dragreverse", "true"]],
                                b: 534,
                                j: "absolute",
                                cA: false,
                                c: 96,
                                k: "div",
                                bY: 1,
                                d: 96,
                                z: 15,
                                bX: false,
                                bZ: 180,
                                cV: [{
                                    a: [{
                                        b: "251",
                                        p: 3,
                                        z: false,
                                        symbolOid: "68"
                                    }],
                                    B: "p4-drop"
                                }]
                            },
                            "230": {
                                h: "27",
                                p: "no-repeat",
                                x: "visible",
                                R: "#000",
                                q: "100% 100%",
                                a: 0,
                                j: "absolute",
                                bF: "229",
                                r: "inline",
                                T: 2,
                                b: 0,
                                d: 94,
                                z: 9,
                                dB: "img",
                                Q: 2,
                                S: 2,
                                k: "div",
                                c: 95,
                                gg: "1"
                            },
                            "241": {
                                aU: 8,
                                G: "#FFF",
                                aV: 8,
                                r: "inline",
                                cQ: 0,
                                s: "'Fira Sans'",
                                e: 0,
                                t: 13,
                                cR: 0,
                                u: "normal",
                                Z: "break-word",
                                v: "700",
                                w: "Собери пазл! Участвуй <br>в розыгрыше и выиграй<br> корзину колбасы",
                                j: "absolute",
                                x: "visible",
                                yy: "nowrap",
                                k: "div",
                                y: "preserve",
                                z: 20,
                                aS: 8,
                                aT: 8,
                                a: 80,
                                F: "center",
                                b: "-7"
                            },
                            "238": {
                                h: "33",
                                p: "no-repeat",
                                x: "visible",
                                R: "#000",
                                q: "100% 100%",
                                a: 0,
                                j: "absolute",
                                bF: "237",
                                r: "inline",
                                T: 2,
                                b: 0,
                                d: 95,
                                z: 15,
                                dB: "img",
                                Q: 2,
                                S: 2,
                                k: "div",
                                c: 129,
                                gg: "1"
                            },
                            "227": {
                                bN: {
                                    a: [{
                                        p: 11
                                    }]
                                },
                                x: "visible",
                                a: 163,
                                dY: [["data-drag", "true"], ["data-drop", "pp6"], ["data-dropsnap", "true"], ["data-dragreverse", "true"]],
                                b: 534,
                                j: "absolute",
                                cA: false,
                                c: 96,
                                k: "div",
                                bY: 1,
                                d: 96,
                                z: 17,
                                bX: false,
                                bZ: 180,
                                cV: [{
                                    a: [{
                                        b: "245",
                                        p: 3,
                                        z: false,
                                        symbolOid: "74"
                                    }],
                                    B: "p6-drop"
                                }]
                            }
                        }
                    }, {
                        o: "47",
                        p: "600px",
                        cA: false,
                        Y: 320,
                        Z: 480,
                        L: [{
                            a: [{
                                b: "90",
                                p: 8,
                                z: false,
                                symbolOid: "46",
                                J: false
                            }],
                            B: "track"
                        }],
                        c: "#FFF",
                        bY: 1,
                        d: 320,
                        U: {
                            "267": {
                                V: {
                                    drop: "285",
                                    "Main Timeline": "284"
                                },
                                W: "284",
                                n: "p6"
                            },
                            "264": {
                                V: {
                                    drop: "283",
                                    "Main Timeline": "282"
                                },
                                W: "282",
                                n: "p4"
                            },
                            "256": {
                                V: {
                                    drop: "279",
                                    "Main Timeline": "278"
                                },
                                W: "278",
                                n: "p2"
                            },
                            "261": {
                                V: {
                                    drop: "281",
                                    "Main Timeline": "280"
                                },
                                W: "280",
                                n: "p1"
                            },
                            "269": {
                                V: {
                                    drop: "287",
                                    "Main Timeline": "286"
                                },
                                W: "286",
                                n: "p3"
                            },
                            "271": {
                                V: {
                                    drop: "289",
                                    "Main Timeline": "288"
                                },
                                W: "288",
                                n: "p5"
                            }
                        },
                        T: {
                            "281": {
                                c: "261",
                                q: false,
                                z: 0.15,
                                i: "281",
                                a: [{
                                    f: "c",
                                    y: 0,
                                    z: 0.15,
                                    i: "Q",
                                    e: 0,
                                    s: 2,
                                    o: "262"
                                }, {
                                    f: "c",
                                    y: 0,
                                    z: 0.15,
                                    i: "S",
                                    e: 0,
                                    s: 2,
                                    o: "262"
                                }, {
                                    f: "c",
                                    y: 0,
                                    z: 0.15,
                                    i: "T",
                                    e: 0,
                                    s: 2,
                                    o: "262"
                                }, {
                                    f: "c",
                                    p: 2,
                                    y: 0.15,
                                    z: 0,
                                    i: "ActionHandler",
                                    s: {
                                        a: [{
                                            p: 14,
                                            B: "track"
                                        }]
                                    },
                                    o: "281"
                                }, {
                                    y: 0.15,
                                    i: "T",
                                    s: 0,
                                    z: 0,
                                    o: "262",
                                    f: "c"
                                }, {
                                    y: 0.15,
                                    i: "S",
                                    s: 0,
                                    z: 0,
                                    o: "262",
                                    f: "c"
                                }, {
                                    y: 0.15,
                                    i: "Q",
                                    s: 0,
                                    z: 0,
                                    o: "262",
                                    f: "c"
                                }],
                                n: "drop",
                                f: 30,
                                b: []
                            },
                            "90": {
                                q: false,
                                z: 3.15,
                                i: "90",
                                n: "track",
                                a: [{
                                    f: "c",
                                    p: 2,
                                    y: 0.15,
                                    z: 0.15,
                                    i: "ActionHandler",
                                    e: {
                                        a: [{
                                            b: "90",
                                            symbolOid: "46",
                                            p: 7
                                        }]
                                    },
                                    s: {
                                        a: [{
                                            b: "90",
                                            symbolOid: "46",
                                            p: 7
                                        }]
                                    },
                                    o: "90"
                                }, {
                                    f: "c",
                                    p: 2,
                                    y: 1,
                                    z: 0.15,
                                    i: "ActionHandler",
                                    e: {
                                        a: [{
                                            b: "90",
                                            symbolOid: "46",
                                            p: 7
                                        }]
                                    },
                                    s: {
                                        a: [{
                                            b: "90",
                                            symbolOid: "46",
                                            p: 7
                                        }]
                                    },
                                    o: "90"
                                }, {
                                    f: "c",
                                    p: 2,
                                    y: 1.15,
                                    z: 0.15,
                                    i: "ActionHandler",
                                    e: {
                                        a: [{
                                            b: "90",
                                            symbolOid: "46",
                                            p: 7
                                        }]
                                    },
                                    s: {
                                        a: [{
                                            b: "90",
                                            symbolOid: "46",
                                            p: 7
                                        }]
                                    },
                                    o: "90"
                                }, {
                                    f: "c",
                                    p: 2,
                                    y: 2,
                                    z: 0.15,
                                    i: "ActionHandler",
                                    e: {
                                        a: [{
                                            b: "90",
                                            symbolOid: "46",
                                            p: 7
                                        }]
                                    },
                                    s: {
                                        a: [{
                                            b: "90",
                                            symbolOid: "46",
                                            p: 7
                                        }]
                                    },
                                    o: "90"
                                }, {
                                    f: "c",
                                    p: 2,
                                    y: 2.15,
                                    z: 0.15,
                                    i: "ActionHandler",
                                    e: {
                                        a: [{
                                            b: "90",
                                            symbolOid: "46",
                                            p: 7
                                        }]
                                    },
                                    s: {
                                        a: [{
                                            b: "90",
                                            symbolOid: "46",
                                            p: 7
                                        }]
                                    },
                                    o: "90"
                                }, {
                                    f: "c",
                                    p: 2,
                                    y: 3,
                                    z: 0.15,
                                    i: "ActionHandler",
                                    e: {
                                        a: [{
                                            d: 0.5,
                                            p: 1,
                                            g: 2,
                                            f: 1
                                        }]
                                    },
                                    s: {
                                        a: [{
                                            b: "90",
                                            symbolOid: "46",
                                            p: 7
                                        }]
                                    },
                                    o: "90"
                                }, {
                                    f: "c",
                                    p: 2,
                                    y: 3.15,
                                    z: 0,
                                    i: "ActionHandler",
                                    s: {
                                        a: [{
                                            d: 0.5,
                                            p: 1,
                                            g: 2,
                                            f: 1
                                        }]
                                    },
                                    o: "90"
                                }],
                                f: 30,
                                b: []
                            },
                            "289": {
                                c: "271",
                                q: false,
                                z: 0.15,
                                i: "289",
                                a: [{
                                    f: "c",
                                    y: 0,
                                    z: 0.15,
                                    i: "T",
                                    e: 0,
                                    s: 2,
                                    o: "272"
                                }, {
                                    f: "c",
                                    y: 0,
                                    z: 0.15,
                                    i: "S",
                                    e: 0,
                                    s: 2,
                                    o: "272"
                                }, {
                                    f: "c",
                                    y: 0,
                                    z: 0.15,
                                    i: "Q",
                                    e: 0,
                                    s: 2,
                                    o: "272"
                                }, {
                                    f: "c",
                                    p: 2,
                                    y: 0.15,
                                    z: 0,
                                    i: "ActionHandler",
                                    s: {
                                        a: [{
                                            p: 14,
                                            B: "track"
                                        }]
                                    },
                                    o: "289"
                                }, {
                                    y: 0.15,
                                    i: "T",
                                    s: 0,
                                    z: 0,
                                    o: "272",
                                    f: "c"
                                }, {
                                    y: 0.15,
                                    i: "S",
                                    s: 0,
                                    z: 0,
                                    o: "272",
                                    f: "c"
                                }, {
                                    y: 0.15,
                                    i: "Q",
                                    s: 0,
                                    z: 0,
                                    o: "272",
                                    f: "c"
                                }],
                                n: "drop",
                                f: 30,
                                b: []
                            },
                            "278": {
                                c: "256",
                                q: false,
                                z: 0,
                                i: "278",
                                a: [],
                                n: "Main Timeline",
                                f: 30,
                                b: []
                            },
                            "284": {
                                c: "267",
                                q: false,
                                z: 0,
                                i: "284",
                                a: [],
                                n: "Main Timeline",
                                f: 30,
                                b: []
                            },
                            "287": {
                                c: "269",
                                q: false,
                                z: 0.15,
                                i: "287",
                                a: [{
                                    f: "c",
                                    y: 0,
                                    z: 0.15,
                                    i: "T",
                                    e: 0,
                                    s: 2,
                                    o: "270"
                                }, {
                                    f: "c",
                                    y: 0,
                                    z: 0.15,
                                    i: "S",
                                    e: 0,
                                    s: 2,
                                    o: "270"
                                }, {
                                    f: "c",
                                    y: 0,
                                    z: 0.15,
                                    i: "Q",
                                    e: 0,
                                    s: 2,
                                    o: "270"
                                }, {
                                    f: "c",
                                    p: 2,
                                    y: 0.15,
                                    z: 0,
                                    i: "ActionHandler",
                                    s: {
                                        a: [{
                                            p: 14,
                                            B: "track"
                                        }]
                                    },
                                    o: "287"
                                }, {
                                    y: 0.15,
                                    i: "T",
                                    s: 0,
                                    z: 0,
                                    o: "270",
                                    f: "c"
                                }, {
                                    y: 0.15,
                                    i: "S",
                                    s: 0,
                                    z: 0,
                                    o: "270",
                                    f: "c"
                                }, {
                                    y: 0.15,
                                    i: "Q",
                                    s: 0,
                                    z: 0,
                                    o: "270",
                                    f: "c"
                                }],
                                n: "drop",
                                f: 30,
                                b: []
                            },
                            "282": {
                                c: "264",
                                q: false,
                                z: 0,
                                i: "282",
                                a: [],
                                n: "Main Timeline",
                                f: 30,
                                b: []
                            },
                            "279": {
                                c: "256",
                                q: false,
                                z: 0.15,
                                i: "279",
                                a: [{
                                    f: "c",
                                    y: 0,
                                    z: 0.15,
                                    i: "Q",
                                    e: 0,
                                    s: 2,
                                    o: "257"
                                }, {
                                    f: "c",
                                    y: 0,
                                    z: 0.15,
                                    i: "S",
                                    e: 0,
                                    s: 2,
                                    o: "257"
                                }, {
                                    f: "c",
                                    y: 0,
                                    z: 0.15,
                                    i: "T",
                                    e: 0,
                                    s: 2,
                                    o: "257"
                                }, {
                                    f: "c",
                                    p: 2,
                                    y: 0.15,
                                    z: 0,
                                    i: "ActionHandler",
                                    s: {
                                        a: [{
                                            p: 14,
                                            B: "track"
                                        }]
                                    },
                                    o: "279"
                                }, {
                                    y: 0.15,
                                    i: "T",
                                    s: 0,
                                    z: 0,
                                    o: "257",
                                    f: "c"
                                }, {
                                    y: 0.15,
                                    i: "S",
                                    s: 0,
                                    z: 0,
                                    o: "257",
                                    f: "c"
                                }, {
                                    y: 0.15,
                                    i: "Q",
                                    s: 0,
                                    z: 0,
                                    o: "257",
                                    f: "c"
                                }],
                                n: "drop",
                                f: 30,
                                b: []
                            },
                            "280": {
                                c: "261",
                                q: false,
                                z: 0,
                                i: "280",
                                a: [],
                                n: "Main Timeline",
                                f: 30,
                                b: []
                            },
                            "285": {
                                c: "267",
                                q: false,
                                z: 0.15,
                                i: "285",
                                a: [{
                                    f: "c",
                                    y: 0,
                                    z: 0.15,
                                    i: "T",
                                    e: 0,
                                    s: 2,
                                    o: "268"
                                }, {
                                    f: "c",
                                    y: 0,
                                    z: 0.15,
                                    i: "S",
                                    e: 0,
                                    s: 2,
                                    o: "268"
                                }, {
                                    f: "c",
                                    y: 0,
                                    z: 0.15,
                                    i: "Q",
                                    e: 0,
                                    s: 2,
                                    o: "268"
                                }, {
                                    f: "c",
                                    p: 2,
                                    y: 0.15,
                                    z: 0,
                                    i: "ActionHandler",
                                    s: {
                                        a: [{
                                            p: 14,
                                            B: "track"
                                        }]
                                    },
                                    o: "285"
                                }, {
                                    y: 0.15,
                                    i: "T",
                                    s: 0,
                                    z: 0,
                                    o: "268",
                                    f: "c"
                                }, {
                                    y: 0.15,
                                    i: "S",
                                    s: 0,
                                    z: 0,
                                    o: "268",
                                    f: "c"
                                }, {
                                    y: 0.15,
                                    i: "Q",
                                    s: 0,
                                    z: 0,
                                    o: "268",
                                    f: "c"
                                }],
                                n: "drop",
                                f: 30,
                                b: []
                            },
                            kTimelineDefaultIdentifier: {
                                q: false,
                                z: 0,
                                i: "kTimelineDefaultIdentifier",
                                n: "Main Timeline",
                                a: [{
                                    f: "c",
                                    p: 2,
                                    y: 0,
                                    z: 0,
                                    i: "ActionHandler",
                                    s: {
                                        a: [{
                                            b: "90",
                                            p: 3,
                                            z: false,
                                            symbolOid: "46"
                                        }]
                                    },
                                    o: "kTimelineDefaultIdentifier"
                                }],
                                f: 30,
                                b: [{
                                    D: 0,
                                    H: true,
                                    E: true,
                                    z: false,
                                    F: 0,
                                    G: 0,
                                    C: 0,
                                    b: "280"
                                }, {
                                    D: 0,
                                    H: true,
                                    E: true,
                                    z: false,
                                    F: 0,
                                    G: 0,
                                    C: 0,
                                    b: "278"
                                }, {
                                    D: 0,
                                    H: true,
                                    E: true,
                                    z: false,
                                    F: 0,
                                    G: 0,
                                    C: 0,
                                    b: "286"
                                }, {
                                    D: 0,
                                    H: true,
                                    E: true,
                                    z: false,
                                    F: 0,
                                    G: 0,
                                    C: 0,
                                    b: "282"
                                }, {
                                    D: 0,
                                    H: true,
                                    E: true,
                                    z: false,
                                    F: 0,
                                    G: 0,
                                    C: 0,
                                    b: "288"
                                }, {
                                    D: 0,
                                    H: true,
                                    E: true,
                                    z: false,
                                    F: 0,
                                    G: 0,
                                    C: 0,
                                    b: "284"
                                }]
                            },
                            "283": {
                                c: "264",
                                q: false,
                                z: 0.15,
                                i: "283",
                                a: [{
                                    f: "c",
                                    y: 0,
                                    z: 0.15,
                                    i: "T",
                                    e: 0,
                                    s: 2,
                                    o: "265"
                                }, {
                                    f: "c",
                                    y: 0,
                                    z: 0.15,
                                    i: "S",
                                    e: 0,
                                    s: 2,
                                    o: "265"
                                }, {
                                    f: "c",
                                    y: 0,
                                    z: 0.15,
                                    i: "Q",
                                    e: 0,
                                    s: 2,
                                    o: "265"
                                }, {
                                    f: "c",
                                    p: 2,
                                    y: 0.15,
                                    z: 0,
                                    i: "ActionHandler",
                                    s: {
                                        a: [{
                                            p: 14,
                                            B: "track"
                                        }]
                                    },
                                    o: "283"
                                }, {
                                    y: 0.15,
                                    i: "T",
                                    s: 0,
                                    z: 0,
                                    o: "265",
                                    f: "c"
                                }, {
                                    y: 0.15,
                                    i: "S",
                                    s: 0,
                                    z: 0,
                                    o: "265",
                                    f: "c"
                                }, {
                                    y: 0.15,
                                    i: "Q",
                                    s: 0,
                                    z: 0,
                                    o: "265",
                                    f: "c"
                                }],
                                n: "drop",
                                f: 30,
                                b: []
                            },
                            "288": {
                                c: "271",
                                q: false,
                                z: 0,
                                i: "288",
                                a: [],
                                n: "Main Timeline",
                                f: 30,
                                b: []
                            },
                            "286": {
                                c: "269",
                                q: false,
                                z: 0,
                                i: "286",
                                a: [],
                                n: "Main Timeline",
                                f: 30,
                                b: []
                            }
                        },
                        bZ: 180,
                        O: ["263", "273", "259", "275", "258", "260", "277", "276", "266", "274", "265", "262", "261", "270", "257", "256", "272", "271", "268", "267", "269", "264"],
                        n: "Untitled Layout",
                        "_": 1,
                        v: {
                            "275": {
                                aU: 8,
                                G: "#FFF",
                                aV: 8,
                                r: "inline",
                                e: 1,
                                s: "'Fira Sans'",
                                cQ: 1,
                                t: 13,
                                cR: 1,
                                Z: "break-word",
                                v: "700",
                                w: "Собери пазл! Участвуй <br>в розыгрыше и выиграй<br> корзину колбасы",
                                j: "absolute",
                                x: "visible",
                                yy: "nowrap",
                                k: "div",
                                y: "preserve",
                                z: 2,
                                aS: 8,
                                aT: 8,
                                a: 80,
                                F: "center",
                                b: "-7"
                            },
                            "267": {
                                bN: {
                                    a: [{
                                        p: 11
                                    }]
                                },
                                x: "visible",
                                a: 128,
                                dY: [["data-drag", "true"], ["data-drop", "pp6"], ["data-dropsnap", "true"], ["data-dragreverse", "true"]],
                                b: 357,
                                j: "absolute",
                                cA: false,
                                c: 96,
                                k: "div",
                                bY: 1,
                                d: 96,
                                z: 19,
                                bX: false,
                                bZ: 180,
                                cV: [{
                                    a: [{
                                        b: "285",
                                        p: 3,
                                        z: false,
                                        symbolOid: "74"
                                    }],
                                    B: "p6-drop"
                                }]
                            },
                            "259": {
                                c: 96,
                                cP: "pp2",
                                d: 96,
                                I: "None",
                                J: "None",
                                K: "None",
                                L: "None",
                                M: 0,
                                N: 0,
                                dY: [["data-dropcustombehavior", "p2-drop"], ["data-intersectcustombehavior", "p2-intersect"], ["data-intersectoffcustombehavior", "p2-intersectoff"]],
                                A: "#D8DDE4",
                                x: "visible",
                                j: "absolute",
                                B: "#D8DDE4",
                                O: 0,
                                P: 0,
                                C: "#D8DDE4",
                                z: 21,
                                k: "div",
                                D: "#D8DDE4",
                                a: 161,
                                b: 52
                            },
                            "271": {
                                bN: {
                                    a: [{
                                        p: 11
                                    }]
                                },
                                x: "visible",
                                a: 93,
                                dY: [["data-drag", "true"], ["data-drop", "pp5"], ["data-dropsnap", "true"], ["data-dragreverse", "true"]],
                                b: 351,
                                j: "absolute",
                                cA: false,
                                c: 96,
                                k: "div",
                                bY: 1,
                                d: 96,
                                z: 17,
                                bX: false,
                                bZ: 180,
                                cV: [{
                                    a: [{
                                        b: "289",
                                        p: 3,
                                        z: false,
                                        symbolOid: "71"
                                    }],
                                    B: "p5-drop"
                                }]
                            },
                            "263": {
                                h: "186",
                                p: "no-repeat",
                                x: "visible",
                                a: 0,
                                dB: "img",
                                q: "100% 100%",
                                j: "absolute",
                                r: "inline",
                                z: 1,
                                k: "div",
                                b: 0,
                                d: 480,
                                c: 320
                            },
                            "276": {
                                aU: 8,
                                G: "#FFF",
                                aV: 8,
                                r: "inline",
                                e: 1,
                                s: "'Fira Sans'",
                                cQ: 1,
                                t: 16,
                                cR: 1,
                                Z: "break-word",
                                v: "700",
                                w: " ",
                                j: "absolute",
                                x: "visible",
                                yy: "nowrap",
                                k: "div",
                                y: "preserve",
                                z: 3,
                                aS: 8,
                                aT: 8,
                                a: 89,
                                F: "center",
                                b: 202
                            },
                            "268": {
                                h: "35",
                                p: "no-repeat",
                                x: "visible",
                                R: "#000",
                                q: "100% 100%",
                                a: 0,
                                j: "absolute",
                                bF: "267",
                                r: "inline",
                                T: 2,
                                b: 0,
                                d: 95,
                                z: 17,
                                dB: "img",
                                Q: 2,
                                S: 2,
                                k: "div",
                                c: 96,
                                gg: "1"
                            },
                            "272": {
                                h: "33",
                                p: "no-repeat",
                                x: "visible",
                                R: "#000",
                                q: "100% 100%",
                                a: 0,
                                j: "absolute",
                                bF: "271",
                                r: "inline",
                                T: 2,
                                b: 0,
                                d: 95,
                                z: 15,
                                dB: "img",
                                Q: 2,
                                S: 2,
                                k: "div",
                                c: 129,
                                gg: "1"
                            },
                            "264": {
                                bN: {
                                    a: [{
                                        p: 11
                                    }]
                                },
                                x: "visible",
                                a: 162,
                                dY: [["data-drag", "true"], ["data-drop", "pp4"], ["data-dropsnap", "true"], ["data-dragreverse", "true"]],
                                b: 368,
                                j: "absolute",
                                cA: false,
                                c: 96,
                                k: "div",
                                bY: 1,
                                d: 96,
                                z: 15,
                                bX: false,
                                bZ: 180,
                                cV: [{
                                    a: [{
                                        b: "283",
                                        p: 3,
                                        z: false,
                                        symbolOid: "68"
                                    }],
                                    B: "p4-drop"
                                }]
                            },
                            "256": {
                                bN: {
                                    a: [{
                                        p: 11
                                    }]
                                },
                                x: "visible",
                                a: 205,
                                dY: [["data-drag", "true"], ["data-drop", "pp2"], ["data-dropsnap", "true"], ["data-dragreverse", "true"]],
                                b: 341,
                                j: "absolute",
                                cA: false,
                                z: 11,
                                k: "div",
                                c: 96,
                                d: 96,
                                bY: 1,
                                cQ: 1,
                                bX: false,
                                bZ: 180,
                                cV: [{
                                    a: [{
                                        b: "279",
                                        p: 3,
                                        z: false,
                                        symbolOid: "62"
                                    }],
                                    B: "p2-drop"
                                }],
                                cR: 1
                            },
                            "277": {
                                aU: 8,
                                G: "#FFF",
                                aV: 8,
                                r: "inline",
                                e: 1,
                                s: "'Fira Sans'",
                                cQ: 1,
                                t: 16,
                                cR: 1,
                                Z: "break-word",
                                v: "700",
                                w: " ",
                                j: "absolute",
                                x: "visible",
                                yy: "nowrap",
                                k: "div",
                                y: "preserve",
                                z: 4,
                                aS: 8,
                                aT: 8,
                                a: 143,
                                F: "center",
                                b: 165
                            },
                            "269": {
                                bN: {
                                    a: [{
                                        p: 11
                                    }]
                                },
                                x: "visible",
                                a: 45,
                                dY: [["data-drag", "true"], ["data-drop", "pp3"], ["data-dropsnap", "true"], ["data-dragreverse", "true"]],
                                b: 368,
                                j: "absolute",
                                cA: false,
                                c: 96,
                                k: "div",
                                bY: 1,
                                d: 96,
                                z: 13,
                                bX: false,
                                bZ: 180,
                                cV: [{
                                    a: [{
                                        b: "287",
                                        p: 3,
                                        z: false,
                                        symbolOid: "65"
                                    }],
                                    B: "p3-drop"
                                }]
                            },
                            "260": {
                                c: 96,
                                cP: "pp4",
                                d: 96,
                                I: "None",
                                J: "None",
                                K: "None",
                                L: "None",
                                M: 0,
                                N: 0,
                                dY: [["data-dropcustombehavior", "p4-drop"], ["data-intersectcustombehavior", "p4-intersect"], ["data-intersectoffcustombehavior", "p4-intersectoff"]],
                                A: "#D8DDE4",
                                x: "visible",
                                j: "absolute",
                                B: "#D8DDE4",
                                O: 0,
                                P: 0,
                                C: "#D8DDE4",
                                z: 23,
                                k: "div",
                                D: "#D8DDE4",
                                a: 162,
                                b: 144
                            },
                            "273": {
                                c: 96,
                                cP: "pp1",
                                d: 96,
                                I: "None",
                                J: "None",
                                K: "None",
                                L: "None",
                                M: 0,
                                N: 0,
                                dY: [["data-dropcustombehavior", "p1-drop"], ["data-intersectcustombehavior", "p1-intersect"], ["data-intersectoffcustombehavior", "p1-intersectoff"]],
                                A: "#D8DDE4",
                                x: "visible",
                                j: "absolute",
                                B: "#D8DDE4",
                                O: 0,
                                P: 0,
                                C: "#D8DDE4",
                                z: 20,
                                k: "div",
                                D: "#D8DDE4",
                                a: 66,
                                b: 52
                            },
                            "265": {
                                h: "31",
                                p: "no-repeat",
                                x: "visible",
                                R: "#000",
                                q: "100% 100%",
                                a: -35,
                                j: "absolute",
                                bF: "264",
                                r: "inline",
                                T: 2,
                                b: -34,
                                d: 162,
                                z: 13,
                                dB: "img",
                                Q: 2,
                                S: 2,
                                k: "div",
                                c: 130,
                                gg: "1"
                            },
                            "257": {
                                h: "27",
                                p: "no-repeat",
                                x: "visible",
                                R: "#000",
                                q: "100% 100%",
                                a: 0,
                                j: "absolute",
                                bF: "256",
                                r: "inline",
                                T: 2,
                                b: 0,
                                d: 94,
                                z: 9,
                                dB: "img",
                                Q: 2,
                                S: 2,
                                k: "div",
                                c: 95,
                                gg: "1"
                            },
                            "261": {
                                bN: {
                                    a: [{
                                        p: 11
                                    }]
                                },
                                x: "visible",
                                a: 16,
                                dY: [["data-drag", "true"], ["data-drop", "pp1"], ["data-dropsnap", "true"], ["data-dragreverse", "true"]],
                                b: 341,
                                j: "absolute",
                                cA: false,
                                c: 96,
                                k: "div",
                                bY: 1,
                                d: 96,
                                z: 9,
                                bX: false,
                                bZ: 180,
                                cV: [{
                                    a: [{
                                        b: "281",
                                        p: 3,
                                        z: false,
                                        symbolOid: "59"
                                    }],
                                    B: "p1-drop"
                                }]
                            },
                            "274": {
                                c: 96,
                                cP: "pp6",
                                d: 96,
                                I: "None",
                                J: "None",
                                K: "None",
                                L: "None",
                                M: 0,
                                N: 0,
                                dY: [["data-dropcustombehavior", "p6-drop"], ["data-intersectcustombehavior", "p6-intersect"], ["data-intersectoffcustombehavior", "p6-intersectoff"]],
                                A: "#D8DDE4",
                                x: "visible",
                                j: "absolute",
                                B: "#D8DDE4",
                                O: 0,
                                P: 0,
                                C: "#D8DDE4",
                                z: 25,
                                k: "div",
                                D: "#D8DDE4",
                                a: 162,
                                b: 239
                            },
                            "266": {
                                c: 96,
                                cP: "pp5",
                                d: 96,
                                I: "None",
                                J: "None",
                                K: "None",
                                L: "None",
                                M: 0,
                                N: 0,
                                dY: [["data-dropcustombehavior", "p5-drop"], ["data-intersectcustombehavior", "p5-intersect"], ["data-intersectoffcustombehavior", "p5-intersectoff"]],
                                A: "#D8DDE4",
                                x: "visible",
                                j: "absolute",
                                B: "#D8DDE4",
                                O: 0,
                                P: 0,
                                C: "#D8DDE4",
                                z: 24,
                                k: "div",
                                D: "#D8DDE4",
                                a: 66,
                                b: 240
                            },
                            "258": {
                                c: 96,
                                cP: "pp3",
                                d: 96,
                                I: "None",
                                J: "None",
                                K: "None",
                                L: "None",
                                M: 0,
                                N: 0,
                                dY: [["data-dropcustombehavior", "p3-drop"], ["data-intersectcustombehavior", "p3-intersect"], ["data-intersectoffcustombehavior", "p3-intersectoff"]],
                                A: "#D8DDE4",
                                x: "visible",
                                j: "absolute",
                                B: "#D8DDE4",
                                O: 0,
                                P: 0,
                                C: "#D8DDE4",
                                z: 22,
                                k: "div",
                                D: "#D8DDE4",
                                a: 66,
                                b: 144
                            },
                            "270": {
                                h: "29",
                                p: "no-repeat",
                                x: "visible",
                                R: "#000",
                                q: "100% 100%",
                                a: 0,
                                j: "absolute",
                                bF: "269",
                                r: "inline",
                                T: 2,
                                b: -32,
                                d: 160,
                                z: 11,
                                dB: "img",
                                Q: 2,
                                S: 2,
                                k: "div",
                                c: 94,
                                gg: "1"
                            },
                            "262": {
                                h: "25",
                                p: "no-repeat",
                                x: "visible",
                                R: "#000",
                                q: "100% 100%",
                                a: 0,
                                j: "absolute",
                                bF: "261",
                                r: "inline",
                                T: 2,
                                b: 0,
                                d: 94,
                                z: 7,
                                dB: "img",
                                Q: 2,
                                S: 2,
                                k: "div",
                                c: 128,
                                gg: "1"
                            }
                        }
                    }, {
                        o: "93",
                        p: "600px",
                        cA: false,
                        Y: 320,
                        Z: 480,
                        L: [],
                        c: "#FFF",
                        bY: 1,
                        d: 320,
                        U: {},
                        T: {
                            kTimelineDefaultIdentifier: {
                                q: false,
                                z: 8,
                                i: "kTimelineDefaultIdentifier",
                                n: "Main Timeline",
                                a: [{
                                    f: "c",
                                    y: 0,
                                    z: 2,
                                    i: "cQ",
                                    e: 1.1,
                                    s: 1,
                                    o: "290"
                                }, {
                                    f: "c",
                                    y: 0,
                                    z: 2,
                                    i: "cR",
                                    e: 1.1,
                                    s: 1,
                                    o: "290"
                                }, {
                                    f: "c",
                                    y: 0.15,
                                    z: 1,
                                    i: "cQ",
                                    e: 1,
                                    s: 0,
                                    o: "298"
                                }, {
                                    f: "c",
                                    y: 0.15,
                                    z: 1,
                                    i: "cR",
                                    e: 1,
                                    s: 0,
                                    o: "298"
                                }, {
                                    f: "c",
                                    y: 1.15,
                                    z: 4.25,
                                    i: "cR",
                                    e: 1,
                                    s: 1,
                                    o: "298"
                                }, {
                                    f: "c",
                                    y: 1.15,
                                    z: 4.25,
                                    i: "cQ",
                                    e: 1,
                                    s: 1,
                                    o: "298"
                                }, {
                                    f: "c",
                                    y: 2,
                                    z: 1,
                                    i: "e",
                                    e: 1,
                                    s: 0,
                                    o: "291"
                                }, {
                                    f: "c",
                                    y: 2,
                                    z: 1,
                                    i: "e",
                                    e: 0,
                                    s: 1,
                                    o: "290"
                                }, {
                                    y: 2,
                                    i: "cR",
                                    s: 1.1,
                                    z: 0,
                                    o: "290",
                                    f: "c"
                                }, {
                                    y: 2,
                                    i: "cQ",
                                    s: 1.1,
                                    z: 0,
                                    o: "290",
                                    f: "c"
                                }, {
                                    f: "c",
                                    y: 3,
                                    z: 1,
                                    i: "b",
                                    e: -9,
                                    s: 156,
                                    o: "291"
                                }, {
                                    y: 3,
                                    i: "e",
                                    s: 1,
                                    z: 0,
                                    o: "291",
                                    f: "c"
                                }, {
                                    y: 3,
                                    i: "e",
                                    s: 0,
                                    z: 0,
                                    o: "290",
                                    f: "c"
                                }, {
                                    f: "c",
                                    y: 3.16,
                                    z: 1,
                                    i: "a",
                                    e: 51,
                                    s: 62,
                                    o: "293"
                                }, {
                                    f: "c",
                                    y: 3.16,
                                    z: 1,
                                    i: "e",
                                    e: 1,
                                    s: 0,
                                    o: "293"
                                }, {
                                    f: "c",
                                    y: 3.21,
                                    z: 0.3,
                                    i: "e",
                                    e: 1,
                                    s: 0,
                                    o: "294"
                                }, {
                                    f: "c",
                                    y: 3.21,
                                    z: 0.3,
                                    i: "a",
                                    e: 51,
                                    s: 62,
                                    o: "294"
                                }, {
                                    f: "c",
                                    y: 3.27,
                                    z: 1,
                                    i: "a",
                                    e: 51,
                                    s: 62,
                                    o: "295"
                                }, {
                                    f: "c",
                                    y: 3.27,
                                    z: 1,
                                    i: "e",
                                    e: 1,
                                    s: 0,
                                    o: "295"
                                }, {
                                    y: 4,
                                    i: "b",
                                    s: -9,
                                    z: 0,
                                    o: "291",
                                    f: "c"
                                }, {
                                    y: 4.16,
                                    i: "a",
                                    s: 31,
                                    z: 0,
                                    o: "293",
                                    f: "c"
                                }, {
                                    y: 4.16,
                                    i: "e",
                                    s: 1,
                                    z: 0,
                                    o: "293",
                                    f: "c"
                                }, {
                                    y: 4.21,
                                    i: "e",
                                    s: 1,
                                    z: 0,
                                    o: "294",
                                    f: "c"
                                }, {
                                    y: 4.21,
                                    i: "a",
                                    s: 31,
                                    z: 0,
                                    o: "294",
                                    f: "c"
                                }, {
                                    y: 4.27,
                                    i: "a",
                                    s: 31,
                                    z: 0,
                                    o: "295",
                                    f: "c"
                                }, {
                                    y: 4.27,
                                    i: "e",
                                    s: 1,
                                    z: 0,
                                    o: "295",
                                    f: "c"
                                }, {
                                    f: "d",
                                    y: 5,
                                    z: 0.15,
                                    i: "d",
                                    e: 78,
                                    s: 65,
                                    o: "299"
                                }, {
                                    f: "c",
                                    y: 5,
                                    z: 1,
                                    i: "a",
                                    e: 251,
                                    s: -63,
                                    o: "299"
                                }, {
                                    f: "e",
                                    y: 5.15,
                                    z: 0.15,
                                    i: "d",
                                    e: 65,
                                    s: 78,
                                    o: "299"
                                }, {
                                    y: 6,
                                    i: "a",
                                    s: 251,
                                    z: 0,
                                    o: "299",
                                    f: "c"
                                }, {
                                    y: 6,
                                    i: "d",
                                    s: 65,
                                    z: 0,
                                    o: "299",
                                    f: "c"
                                }, {
                                    f: "c",
                                    y: 6.1,
                                    z: 0.08,
                                    i: "cQ",
                                    e: 1.05,
                                    s: 1,
                                    o: "298"
                                }, {
                                    f: "c",
                                    y: 6.1,
                                    z: 0.08,
                                    i: "cR",
                                    e: 1.05,
                                    s: 1,
                                    o: "298"
                                }, {
                                    f: "c",
                                    y: 6.18,
                                    z: 0.08,
                                    i: "cQ",
                                    e: 1,
                                    s: 1.05,
                                    o: "298"
                                }, {
                                    f: "c",
                                    y: 6.18,
                                    z: 0.08,
                                    i: "cR",
                                    e: 1,
                                    s: 1.05,
                                    o: "298"
                                }, {
                                    y: 6.26,
                                    i: "cQ",
                                    s: 1,
                                    z: 0,
                                    o: "298",
                                    f: "c"
                                }, {
                                    y: 6.26,
                                    i: "cR",
                                    s: 1,
                                    z: 0,
                                    o: "298",
                                    f: "c"
                                }, {
                                    f: "c",
                                    p: 2,
                                    y: 8,
                                    z: 0,
                                    i: "ActionHandler",
                                    s: {
                                        a: [{
                                            i: 5,
                                            b: "kTimelineDefaultIdentifier",
                                            p: 9,
                                            symbolOid: "92"
                                        }]
                                    },
                                    o: "kTimelineDefaultIdentifier"
                                }],
                                f: 30,
                                b: []
                            }
                        },
                        bZ: 180,
                        O: ["291", "290", "292", "300", "299", "293", "294", "295", "297", "298", "296"],
                        n: "Untitled Layout",
                        "_": 2,
                        v: {
                            "291": {
                                h: "192",
                                p: "no-repeat",
                                x: "visible",
                                a: 37,
                                dB: "img",
                                q: "100% 100%",
                                j: "absolute",
                                r: "inline",
                                z: 3,
                                b: 156,
                                k: "div",
                                d: 106,
                                c: 256,
                                e: 0
                            },
                            "294": {
                                aU: 8,
                                G: "#FFF",
                                aV: 8,
                                r: "inline",
                                e: 0,
                                s: "'Fira Sans'",
                                cQ: 1,
                                t: 26,
                                cR: 1,
                                Z: "break-word",
                                v: "700",
                                w: "TOYBOSSALMATY<br>",
                                j: "absolute",
                                x: "visible",
                                yy: "nowrap",
                                k: "div",
                                y: "preserve",
                                z: 5,
                                aS: 8,
                                aT: 8,
                                a: 62,
                                F: "left",
                                b: 134
                            },
                            "297": {
                                c: 202,
                                d: 41,
                                I: "Solid",
                                J: "Solid",
                                K: "Solid",
                                g: "#ed1b23",
                                L: "Solid",
                                M: 0,
                                bF: "298",
                                N: 0,
                                A: "#ed1b23",
                                x: "visible",
                                j: "absolute",
                                B: "#ed1b23",
                                P: 0,
                                O: 0,
                                C: "#ed1b23",
                                z: 1,
                                aJ: 50,
                                D: "#ed1b23",
                                aK: 50,
                                k: "div",
                                aI: 50,
                                a: 0,
                                aL: 50,
                                b: 0
                            },
                            "300": {
                                x: "hidden",
                                k: "div",
                                c: 232,
                                d: 84,
                                z: 7,
                                e: 0.57131491,
                                a: 48,
                                j: "absolute",
                                b: 0
                            },
                            "290": {
                                h: "187",
                                p: "no-repeat",
                                x: "visible",
                                a: 0,
                                q: "100% 100%",
                                b: 0,
                                j: "absolute",
                                r: "inline",
                                z: 2,
                                dB: "img",
                                k: "div",
                                d: 480,
                                c: 320,
                                cQ: 1,
                                e: 1,
                                cR: 1
                            },
                            "293": {
                                aU: 8,
                                G: "#FFF",
                                aV: 8,
                                r: "inline",
                                e: 0,
                                s: "'Fira Sans'",
                                cQ: 1,
                                t: 20,
                                cR: 1,
                                Z: "break-word",
                                v: "700",
                                w: "Отправить промокод<br>",
                                j: "absolute",
                                x: "visible",
                                yy: "nowrap",
                                k: "div",
                                y: "preserve",
                                z: 4,
                                aS: 8,
                                aT: 8,
                                a: 63,
                                F: "center",
                                b: 106
                            },
                            "296": {
                                aU: 8,
                                G: "#fff",
                                aV: 8,
                                r: "inline",
                                e: 1,
                                s: "'Fira Sans'",
                                cQ: 1,
                                t: 16,
                                cR: 1,
                                Z: "break-word",
                                v: "700",
                                w: "ОТПРАВИТЬ<br>",
                                bF: "298",
                                j: "absolute",
                                x: "visible",
                                yy: "nowrap",
                                k: "div",
                                y: "preserve",
                                z: 2,
                                aS: 8,
                                aT: 8,
                                a: 48,
                                F: "left",
                                b: 3
                            },
                            "299": {
                                c: 44,
                                d: 65,
                                I: "Solid",
                                J: "Solid",
                                bL: 8,
                                gW: -10,
                                K: "Solid",
                                g: "#FFF",
                                L: "Solid",
                                M: 0,
                                bF: "300",
                                N: 0,
                                A: "#FFF",
                                x: "visible",
                                j: "absolute",
                                B: "#FFF",
                                P: 0,
                                O: 0,
                                C: "#FFF",
                                z: 1,
                                k: "div",
                                D: "#FFF",
                                a: -63,
                                b: 0
                            },
                            "292": {
                                h: "196",
                                p: "no-repeat",
                                x: "visible",
                                a: 0,
                                dB: "img",
                                q: "100% 100%",
                                j: "absolute",
                                r: "inline",
                                z: 1,
                                k: "div",
                                b: 0,
                                d: 480,
                                c: 320
                            },
                            "295": {
                                aU: 8,
                                G: "#FFF",
                                aV: 8,
                                r: "inline",
                                e: 0,
                                s: "'Fira Sans'",
                                cQ: 1,
                                t: 20,
                                cR: 1,
                                Z: "break-word",
                                v: "700",
                                w: "в директ для участия<br> в розыгрыше",
                                j: "absolute",
                                x: "visible",
                                yy: "nowrap",
                                k: "div",
                                y: "preserve",
                                z: 6,
                                aS: 8,
                                aT: 8,
                                a: 62,
                                F: "center",
                                b: 162
                            },
                            "298": {
                                x: "visible",
                                a: 59,
                                dB: "button",
                                b: 405,
                                j: "absolute",
                                aA: {
                                    a: [{
                                        p: 5,
                                        j: targetURL,
                                        k: true
                                    }]
                                },
                                k: "div",
                                z: 8,
                                d: 41,
                                c: 202,
                                cQ: 0,
                                aP: "pointer",
                                cR: 0
                            }
                        }
                    }],{},h,{},null,false,true,-1,true,true,false,true,true);
                    d[f] = c.API;
                    document.getElementById(g).setAttribute("HYP_dn", f);
                    c.z_o(this.body)
                }
                )();
            }
            )();