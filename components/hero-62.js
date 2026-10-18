import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "hero-62",
  "prefix": "hero62",
  "name": "Hero / Scoped search",
  "category": "hero",
  "collection": "saas",
  "description": "Hero / Scoped search for Harborline.",
  "props": {
    "icon1": {
      "type": "image",
      "default": {
        "src": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23A7ADB6%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20aria-hidden%3D%22true%22%3E%3Ccircle%20cx%3D%2211%22%20cy%3D%2211%22%20r%3D%227%22%3E%3C%2Fcircle%3E%3Cpath%20d%3D%22M20%2020l-3.5-3.5%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E",
        "alt": ""
      }
    },
    "heading": {
      "type": "text",
      "default": "Every job, customer and invoice. One box."
    },
    "subheading": {
      "type": "text",
      "default": "Find a gate code, an unpaid bill or last spring’s notes in a couple of keystrokes. Try it."
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-7",
        "div-68"
      ]
    }
  },
  "tree": {
    "role": "section",
    "style": {
      "base": {
        "font-family": "token(font-saas)",
        "color": "#F4F5F1",
        "background-color": "#0F1115",
        "padding-top": "clamp(56px, 8vw, 104px)",
        "padding-right": "clamp(20px, 4vw, 48px)",
        "padding-bottom": "clamp(56px, 8vw, 104px)",
        "padding-left": "clamp(20px, 4vw, 48px)"
      }
    },
    "children": [
      {
        "tag": "div",
        "key": "div-69",
        "style": {
          "base": {
            "max-width": "1200px",
            "margin-top": "0",
            "margin-right": "auto",
            "margin-bottom": "0",
            "margin-left": "auto",
            "display": "flex",
            "flex-wrap": "wrap",
            "align-items": "center",
            "row-gap": "clamp(40px, 6vw, 80px)",
            "column-gap": "clamp(40px, 6vw, 80px)"
          }
        },
        "children": [
          {
            "tag": "div",
            "key": "div-7",
            "style": {
              "base": {
                "flex-grow": "1",
                "flex-shrink": "1",
                "flex-basis": "420px",
                "display": "flex",
                "flex-direction": "column",
                "row-gap": "22px",
                "column-gap": "22px"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-1",
                "style": {
                  "base": {
                    "font-family": "token(font-saas-mono)",
                    "font-size": "12px",
                    "letter-spacing": "0.08em",
                    "text-transform": "uppercase",
                    "color": "#A7ADB6"
                  }
                },
                "text": "Search"
              },
              {
                "tag": "h1",
                "key": "heading",
                "style": {
                  "base": {
                    "margin-top": "0",
                    "margin-right": "0",
                    "margin-bottom": "0",
                    "margin-left": "0",
                    "font-size": "clamp(42px, 5.6vw, 76px)",
                    "line-height": "0.98",
                    "letter-spacing": "-0.045em",
                    "font-weight": "600"
                  }
                },
                "bind": "heading"
              },
              {
                "tag": "p",
                "key": "subheading",
                "style": {
                  "base": {
                    "margin-top": "0",
                    "margin-right": "0",
                    "margin-bottom": "0",
                    "margin-left": "0",
                    "max-width": "460px",
                    "font-size": "18px",
                    "line-height": "1.55",
                    "color": "#B9BEC6"
                  }
                },
                "bind": "subheading"
              },
              {
                "tag": "div",
                "key": "div-6",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-wrap": "wrap",
                    "row-gap": "12px",
                    "column-gap": "12px"
                  }
                },
                "children": [
                  {
                    "tag": "a",
                    "key": "a-4",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "height": "48px",
                        "padding-top": "0",
                        "padding-right": "22px",
                        "padding-bottom": "0",
                        "padding-left": "22px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "background-color": "#FFFFFF",
                        "color": "#0F1115",
                        "font-weight": "500",
                        "text-decoration": "none"
                      }
                    },
                    "href": "#",
                    "text": "Start free trial"
                  },
                  {
                    "tag": "a",
                    "key": "a-5",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "height": "48px",
                        "padding-top": "0",
                        "padding-right": "22px",
                        "padding-bottom": "0",
                        "padding-left": "22px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#3A3F47",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#3A3F47",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#3A3F47",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#3A3F47",
                        "color": "#F4F5F1",
                        "font-weight": "500",
                        "text-decoration": "none"
                      }
                    },
                    "href": "#",
                    "text": "See all features"
                  }
                ]
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-68",
            "style": {
              "base": {
                "flex-grow": "1",
                "flex-shrink": "1",
                "flex-basis": "480px",
                "min-width": "0",
                "border-top-left-radius": "18px",
                "border-top-right-radius": "18px",
                "border-bottom-right-radius": "18px",
                "border-bottom-left-radius": "18px",
                "background-color": "#181B20",
                "border-top-width": "1px",
                "border-top-style": "solid",
                "border-top-color": "#2C3037",
                "border-right-width": "1px",
                "border-right-style": "solid",
                "border-right-color": "#2C3037",
                "border-bottom-width": "1px",
                "border-bottom-style": "solid",
                "border-bottom-color": "#2C3037",
                "border-left-width": "1px",
                "border-left-style": "solid",
                "border-left-color": "#2C3037",
                "overflow": "hidden"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-11",
                "style": {
                  "base": {
                    "display": "flex",
                    "align-items": "center",
                    "row-gap": "12px",
                    "column-gap": "12px",
                    "height": "60px",
                    "padding-top": "0",
                    "padding-right": "18px",
                    "padding-bottom": "0",
                    "padding-left": "18px",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#2C3037"
                  }
                },
                "children": [
                  {
                    "tag": "img",
                    "key": "icon-8",
                    "bind": "icon1",
                    "decorative": true,
                    "style": {
                      "base": {
                        "width": "18px",
                        "height": "18px",
                        "flex-shrink": "0"
                      }
                    }
                  },
                  {
                    "tag": "div",
                    "key": "div-9",
                    "style": {
                      "base": {
                        "position": "absolute",
                        "width": "1px",
                        "height": "1px",
                        "overflow": "hidden",
                        "clip": "rect(0 0 0 0)"
                      }
                    },
                    "text": "Search"
                  },
                  {
                    "tag": "div",
                    "key": "div-10",
                    "style": {
                      "base": {
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "0%",
                        "min-width": "0",
                        "height": "44px",
                        "border-top-width": "0",
                        "border-top-style": "none",
                        "border-top-color": "transparent",
                        "border-right-width": "0",
                        "border-right-style": "none",
                        "border-right-color": "transparent",
                        "border-bottom-width": "0",
                        "border-bottom-style": "none",
                        "border-bottom-color": "transparent",
                        "border-left-width": "0",
                        "border-left-style": "none",
                        "border-left-color": "transparent",
                        "outline": "none",
                        "background-color": "transparent",
                        "font-size": "17px",
                        "color": "#F4F5F1"
                      }
                    },
                    "text": "Try “bay”, “unpaid” or “gate”"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-24",
                "style": {
                  "base": {
                    "display": "flex",
                    "row-gap": "6px",
                    "column-gap": "6px",
                    "padding-top": "10px",
                    "padding-right": "12px",
                    "padding-bottom": "10px",
                    "padding-left": "12px",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#2C3037",
                    "overflow-x": "auto"
                  }
                },
                "attrs": {
                  "role": "tablist",
                  "aria-label": "Search scope",
                  "data-blok-choices": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-14",
                    "style": {
                      "base": {
                        "flex-shrink": "0",
                        "display": "flex",
                        "align-items": "center",
                        "row-gap": "8px",
                        "column-gap": "8px",
                        "height": "36px",
                        "padding-top": "0",
                        "padding-right": "12px",
                        "padding-bottom": "0",
                        "padding-left": "12px",
                        "border-top-width": "0",
                        "border-top-style": "none",
                        "border-top-color": "transparent",
                        "border-right-width": "0",
                        "border-right-style": "none",
                        "border-right-color": "transparent",
                        "border-bottom-width": "0",
                        "border-bottom-style": "none",
                        "border-bottom-color": "transparent",
                        "border-left-width": "0",
                        "border-left-style": "none",
                        "border-left-color": "transparent",
                        "border-top-left-radius": "8px",
                        "border-top-right-radius": "8px",
                        "border-bottom-right-radius": "8px",
                        "border-bottom-left-radius": "8px",
                        "cursor": "pointer",
                        "font-size": "14px",
                        "background-color": "#2D4BF0",
                        "color": "#FFFFFF"
                      }
                    },
                    "attrs": {
                      "role": "tab",
                      "aria-selected": "true",
                      "data-blok-choice": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "text-13",
                        "text": "All"
                      },
                      {
                        "tag": "div",
                        "key": "div-12",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#DCE2FF"
                          }
                        },
                        "text": "6"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-17",
                    "style": {
                      "base": {
                        "flex-shrink": "0",
                        "display": "flex",
                        "align-items": "center",
                        "row-gap": "8px",
                        "column-gap": "8px",
                        "height": "36px",
                        "padding-top": "0",
                        "padding-right": "12px",
                        "padding-bottom": "0",
                        "padding-left": "12px",
                        "border-top-width": "0",
                        "border-top-style": "none",
                        "border-top-color": "transparent",
                        "border-right-width": "0",
                        "border-right-style": "none",
                        "border-right-color": "transparent",
                        "border-bottom-width": "0",
                        "border-bottom-style": "none",
                        "border-bottom-color": "transparent",
                        "border-left-width": "0",
                        "border-left-style": "none",
                        "border-left-color": "transparent",
                        "border-top-left-radius": "8px",
                        "border-top-right-radius": "8px",
                        "border-bottom-right-radius": "8px",
                        "border-bottom-left-radius": "8px",
                        "cursor": "pointer",
                        "font-size": "14px",
                        "background-color": "transparent",
                        "color": "#B9BEC6"
                      }
                    },
                    "attrs": {
                      "role": "tab",
                      "aria-selected": "false",
                      "data-blok-choice": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "text-16",
                        "text": "Jobs"
                      },
                      {
                        "tag": "div",
                        "key": "div-15",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#7D838C"
                          }
                        },
                        "text": "2"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-20",
                    "style": {
                      "base": {
                        "flex-shrink": "0",
                        "display": "flex",
                        "align-items": "center",
                        "row-gap": "8px",
                        "column-gap": "8px",
                        "height": "36px",
                        "padding-top": "0",
                        "padding-right": "12px",
                        "padding-bottom": "0",
                        "padding-left": "12px",
                        "border-top-width": "0",
                        "border-top-style": "none",
                        "border-top-color": "transparent",
                        "border-right-width": "0",
                        "border-right-style": "none",
                        "border-right-color": "transparent",
                        "border-bottom-width": "0",
                        "border-bottom-style": "none",
                        "border-bottom-color": "transparent",
                        "border-left-width": "0",
                        "border-left-style": "none",
                        "border-left-color": "transparent",
                        "border-top-left-radius": "8px",
                        "border-top-right-radius": "8px",
                        "border-bottom-right-radius": "8px",
                        "border-bottom-left-radius": "8px",
                        "cursor": "pointer",
                        "font-size": "14px",
                        "background-color": "transparent",
                        "color": "#B9BEC6"
                      }
                    },
                    "attrs": {
                      "role": "tab",
                      "aria-selected": "false",
                      "data-blok-choice": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "text-19",
                        "text": "Customers"
                      },
                      {
                        "tag": "div",
                        "key": "div-18",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#7D838C"
                          }
                        },
                        "text": "2"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-23",
                    "style": {
                      "base": {
                        "flex-shrink": "0",
                        "display": "flex",
                        "align-items": "center",
                        "row-gap": "8px",
                        "column-gap": "8px",
                        "height": "36px",
                        "padding-top": "0",
                        "padding-right": "12px",
                        "padding-bottom": "0",
                        "padding-left": "12px",
                        "border-top-width": "0",
                        "border-top-style": "none",
                        "border-top-color": "transparent",
                        "border-right-width": "0",
                        "border-right-style": "none",
                        "border-right-color": "transparent",
                        "border-bottom-width": "0",
                        "border-bottom-style": "none",
                        "border-bottom-color": "transparent",
                        "border-left-width": "0",
                        "border-left-style": "none",
                        "border-left-color": "transparent",
                        "border-top-left-radius": "8px",
                        "border-top-right-radius": "8px",
                        "border-bottom-right-radius": "8px",
                        "border-bottom-left-radius": "8px",
                        "cursor": "pointer",
                        "font-size": "14px",
                        "background-color": "transparent",
                        "color": "#B9BEC6"
                      }
                    },
                    "attrs": {
                      "role": "tab",
                      "aria-selected": "false",
                      "data-blok-choice": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "text-22",
                        "text": "Invoices"
                      },
                      {
                        "tag": "div",
                        "key": "div-21",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#7D838C"
                          }
                        },
                        "text": "2"
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-67",
                "style": {
                  "base": {
                    "min-height": "330px",
                    "padding-top": "8px",
                    "padding-right": "8px",
                    "padding-bottom": "8px",
                    "padding-left": "8px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-38",
                    "style": {
                      "base": {
                        "padding-top": "8px",
                        "padding-right": "0",
                        "padding-bottom": "8px",
                        "padding-left": "0",
                        "display": "flex",
                        "flex-wrap": "wrap",
                        "align-items": "baseline",
                        "column-gap": "0.35rem"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-25",
                        "style": {
                          "base": {
                            "padding-top": "6px",
                            "padding-right": "10px",
                            "padding-bottom": "6px",
                            "padding-left": "10px",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "11px",
                            "letter-spacing": "0.08em",
                            "text-transform": "uppercase",
                            "color": "#8C929B"
                          }
                        },
                        "text": "Jobs"
                      },
                      {
                        "tag": "a",
                        "key": "a-31",
                        "style": {
                          "base": {
                            "display": "flex",
                            "align-items": "center",
                            "row-gap": "12px",
                            "column-gap": "12px",
                            "min-height": "52px",
                            "padding-top": "0",
                            "padding-right": "10px",
                            "padding-bottom": "0",
                            "padding-left": "10px",
                            "border-top-left-radius": "10px",
                            "border-top-right-radius": "10px",
                            "border-bottom-right-radius": "10px",
                            "border-bottom-left-radius": "10px",
                            "color": "#F4F5F1",
                            "text-decoration": "none"
                          }
                        },
                        "href": "#",
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-26",
                            "style": {
                              "base": {
                                "width": "32px",
                                "height": "32px",
                                "border-top-left-radius": "8px",
                                "border-top-right-radius": "8px",
                                "border-bottom-right-radius": "8px",
                                "border-bottom-left-radius": "8px",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center",
                                "font-size": "13px",
                                "font-weight": "600",
                                "background-color": "#262A31",
                                "color": "#AFC0FF"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "J"
                          },
                          {
                            "tag": "div",
                            "key": "div-29",
                            "style": {
                              "base": {
                                "flex-grow": "1",
                                "flex-shrink": "1",
                                "flex-basis": "0%",
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "2px",
                                "column-gap": "2px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-27",
                                "style": {
                                  "base": {
                                    "font-size": "15px"
                                  }
                                },
                                "text": "Bin wash · 220 Bay St"
                              },
                              {
                                "tag": "div",
                                "key": "div-28",
                                "style": {
                                  "base": {
                                    "font-size": "13px",
                                    "color": "#A7ADB6"
                                  }
                                },
                                "text": "Tomorrow 9:15 · Crew A"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-30",
                            "style": {
                              "base": {
                                "padding-top": "3px",
                                "padding-right": "8px",
                                "padding-bottom": "3px",
                                "padding-left": "8px",
                                "border-top-left-radius": "999px",
                                "border-top-right-radius": "999px",
                                "border-bottom-right-radius": "999px",
                                "border-bottom-left-radius": "999px",
                                "font-size": "12px",
                                "background-color": "#262A31",
                                "color": "#B9BEC6"
                              }
                            },
                            "text": "Scheduled"
                          }
                        ]
                      },
                      {
                        "tag": "a",
                        "key": "a-37",
                        "style": {
                          "base": {
                            "display": "flex",
                            "align-items": "center",
                            "row-gap": "12px",
                            "column-gap": "12px",
                            "min-height": "52px",
                            "padding-top": "0",
                            "padding-right": "10px",
                            "padding-bottom": "0",
                            "padding-left": "10px",
                            "border-top-left-radius": "10px",
                            "border-top-right-radius": "10px",
                            "border-bottom-right-radius": "10px",
                            "border-bottom-left-radius": "10px",
                            "color": "#F4F5F1",
                            "text-decoration": "none"
                          }
                        },
                        "href": "#",
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-32",
                            "style": {
                              "base": {
                                "width": "32px",
                                "height": "32px",
                                "border-top-left-radius": "8px",
                                "border-top-right-radius": "8px",
                                "border-bottom-right-radius": "8px",
                                "border-bottom-left-radius": "8px",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center",
                                "font-size": "13px",
                                "font-weight": "600",
                                "background-color": "#262A31",
                                "color": "#AFC0FF"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "J"
                          },
                          {
                            "tag": "div",
                            "key": "div-35",
                            "style": {
                              "base": {
                                "flex-grow": "1",
                                "flex-shrink": "1",
                                "flex-basis": "0%",
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "2px",
                                "column-gap": "2px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-33",
                                "style": {
                                  "base": {
                                    "font-size": "15px"
                                  }
                                },
                                "text": "Pressure wash · 14 Alder Ct"
                              },
                              {
                                "tag": "div",
                                "key": "div-34",
                                "style": {
                                  "base": {
                                    "font-size": "13px",
                                    "color": "#A7ADB6"
                                  }
                                },
                                "text": "Note: gate code 4410"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-36",
                            "style": {
                              "base": {
                                "padding-top": "3px",
                                "padding-right": "8px",
                                "padding-bottom": "3px",
                                "padding-left": "8px",
                                "border-top-left-radius": "999px",
                                "border-top-right-radius": "999px",
                                "border-bottom-right-radius": "999px",
                                "border-bottom-left-radius": "999px",
                                "font-size": "12px",
                                "background-color": "#1E3A2A",
                                "color": "#8FD3A8"
                              }
                            },
                            "text": "Done"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-52",
                    "style": {
                      "base": {
                        "padding-top": "8px",
                        "padding-right": "0",
                        "padding-bottom": "8px",
                        "padding-left": "0",
                        "display": "flex",
                        "flex-wrap": "wrap",
                        "align-items": "baseline",
                        "column-gap": "0.35rem"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-39",
                        "style": {
                          "base": {
                            "padding-top": "6px",
                            "padding-right": "10px",
                            "padding-bottom": "6px",
                            "padding-left": "10px",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "11px",
                            "letter-spacing": "0.08em",
                            "text-transform": "uppercase",
                            "color": "#8C929B"
                          }
                        },
                        "text": "Customers"
                      },
                      {
                        "tag": "a",
                        "key": "a-45",
                        "style": {
                          "base": {
                            "display": "flex",
                            "align-items": "center",
                            "row-gap": "12px",
                            "column-gap": "12px",
                            "min-height": "52px",
                            "padding-top": "0",
                            "padding-right": "10px",
                            "padding-bottom": "0",
                            "padding-left": "10px",
                            "border-top-left-radius": "10px",
                            "border-top-right-radius": "10px",
                            "border-bottom-right-radius": "10px",
                            "border-bottom-left-radius": "10px",
                            "color": "#F4F5F1",
                            "text-decoration": "none"
                          }
                        },
                        "href": "#",
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-40",
                            "style": {
                              "base": {
                                "width": "32px",
                                "height": "32px",
                                "border-top-left-radius": "8px",
                                "border-top-right-radius": "8px",
                                "border-bottom-right-radius": "8px",
                                "border-bottom-left-radius": "8px",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center",
                                "font-size": "13px",
                                "font-weight": "600",
                                "background-color": "#262A31",
                                "color": "#AFC0FF"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "C"
                          },
                          {
                            "tag": "div",
                            "key": "div-43",
                            "style": {
                              "base": {
                                "flex-grow": "1",
                                "flex-shrink": "1",
                                "flex-basis": "0%",
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "2px",
                                "column-gap": "2px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-41",
                                "style": {
                                  "base": {
                                    "font-size": "15px"
                                  }
                                },
                                "text": "Dana Ruiz"
                              },
                              {
                                "tag": "div",
                                "key": "div-42",
                                "style": {
                                  "base": {
                                    "font-size": "13px",
                                    "color": "#A7ADB6"
                                  }
                                },
                                "text": "220 Bay St · Monthly plan"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-44",
                            "style": {
                              "base": {
                                "padding-top": "3px",
                                "padding-right": "8px",
                                "padding-bottom": "3px",
                                "padding-left": "8px",
                                "border-top-left-radius": "999px",
                                "border-top-right-radius": "999px",
                                "border-bottom-right-radius": "999px",
                                "border-bottom-left-radius": "999px",
                                "font-size": "12px",
                                "background-color": "#1E3A2A",
                                "color": "#8FD3A8"
                              }
                            },
                            "text": "Active"
                          }
                        ]
                      },
                      {
                        "tag": "a",
                        "key": "a-51",
                        "style": {
                          "base": {
                            "display": "flex",
                            "align-items": "center",
                            "row-gap": "12px",
                            "column-gap": "12px",
                            "min-height": "52px",
                            "padding-top": "0",
                            "padding-right": "10px",
                            "padding-bottom": "0",
                            "padding-left": "10px",
                            "border-top-left-radius": "10px",
                            "border-top-right-radius": "10px",
                            "border-bottom-right-radius": "10px",
                            "border-bottom-left-radius": "10px",
                            "color": "#F4F5F1",
                            "text-decoration": "none"
                          }
                        },
                        "href": "#",
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-46",
                            "style": {
                              "base": {
                                "width": "32px",
                                "height": "32px",
                                "border-top-left-radius": "8px",
                                "border-top-right-radius": "8px",
                                "border-bottom-right-radius": "8px",
                                "border-bottom-left-radius": "8px",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center",
                                "font-size": "13px",
                                "font-weight": "600",
                                "background-color": "#262A31",
                                "color": "#AFC0FF"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "C"
                          },
                          {
                            "tag": "div",
                            "key": "div-49",
                            "style": {
                              "base": {
                                "flex-grow": "1",
                                "flex-shrink": "1",
                                "flex-basis": "0%",
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "2px",
                                "column-gap": "2px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-47",
                                "style": {
                                  "base": {
                                    "font-size": "15px"
                                  }
                                },
                                "text": "Pine Row HOA"
                              },
                              {
                                "tag": "div",
                                "key": "div-48",
                                "style": {
                                  "base": {
                                    "font-size": "13px",
                                    "color": "#A7ADB6"
                                  }
                                },
                                "text": "9 Pine Row · 42 homes"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-50",
                            "style": {
                              "base": {
                                "padding-top": "3px",
                                "padding-right": "8px",
                                "padding-bottom": "3px",
                                "padding-left": "8px",
                                "border-top-left-radius": "999px",
                                "border-top-right-radius": "999px",
                                "border-bottom-right-radius": "999px",
                                "border-bottom-left-radius": "999px",
                                "font-size": "12px",
                                "background-color": "#1E3A2A",
                                "color": "#8FD3A8"
                              }
                            },
                            "text": "Active"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-66",
                    "style": {
                      "base": {
                        "padding-top": "8px",
                        "padding-right": "0",
                        "padding-bottom": "8px",
                        "padding-left": "0",
                        "display": "flex",
                        "flex-wrap": "wrap",
                        "align-items": "baseline",
                        "column-gap": "0.35rem"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-53",
                        "style": {
                          "base": {
                            "padding-top": "6px",
                            "padding-right": "10px",
                            "padding-bottom": "6px",
                            "padding-left": "10px",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "11px",
                            "letter-spacing": "0.08em",
                            "text-transform": "uppercase",
                            "color": "#8C929B"
                          }
                        },
                        "text": "Invoices"
                      },
                      {
                        "tag": "a",
                        "key": "a-59",
                        "style": {
                          "base": {
                            "display": "flex",
                            "align-items": "center",
                            "row-gap": "12px",
                            "column-gap": "12px",
                            "min-height": "52px",
                            "padding-top": "0",
                            "padding-right": "10px",
                            "padding-bottom": "0",
                            "padding-left": "10px",
                            "border-top-left-radius": "10px",
                            "border-top-right-radius": "10px",
                            "border-bottom-right-radius": "10px",
                            "border-bottom-left-radius": "10px",
                            "color": "#F4F5F1",
                            "text-decoration": "none"
                          }
                        },
                        "href": "#",
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-54",
                            "style": {
                              "base": {
                                "width": "32px",
                                "height": "32px",
                                "border-top-left-radius": "8px",
                                "border-top-right-radius": "8px",
                                "border-bottom-right-radius": "8px",
                                "border-bottom-left-radius": "8px",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center",
                                "font-size": "13px",
                                "font-weight": "600",
                                "background-color": "#262A31",
                                "color": "#AFC0FF"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "$"
                          },
                          {
                            "tag": "div",
                            "key": "div-57",
                            "style": {
                              "base": {
                                "flex-grow": "1",
                                "flex-shrink": "1",
                                "flex-basis": "0%",
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "2px",
                                "column-gap": "2px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-55",
                                "style": {
                                  "base": {
                                    "font-size": "15px"
                                  }
                                },
                                "text": "Invoice #1042 · Dana Ruiz"
                              },
                              {
                                "tag": "div",
                                "key": "div-56",
                                "style": {
                                  "base": {
                                    "font-size": "13px",
                                    "color": "#A7ADB6"
                                  }
                                },
                                "text": "Due Oct 3"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-58",
                            "style": {
                              "base": {
                                "padding-top": "3px",
                                "padding-right": "8px",
                                "padding-bottom": "3px",
                                "padding-left": "8px",
                                "border-top-left-radius": "999px",
                                "border-top-right-radius": "999px",
                                "border-bottom-right-radius": "999px",
                                "border-bottom-left-radius": "999px",
                                "font-size": "12px",
                                "background-color": "#3A2A1E",
                                "color": "#F2B48A"
                              }
                            },
                            "text": "Unpaid"
                          }
                        ]
                      },
                      {
                        "tag": "a",
                        "key": "a-65",
                        "style": {
                          "base": {
                            "display": "flex",
                            "align-items": "center",
                            "row-gap": "12px",
                            "column-gap": "12px",
                            "min-height": "52px",
                            "padding-top": "0",
                            "padding-right": "10px",
                            "padding-bottom": "0",
                            "padding-left": "10px",
                            "border-top-left-radius": "10px",
                            "border-top-right-radius": "10px",
                            "border-bottom-right-radius": "10px",
                            "border-bottom-left-radius": "10px",
                            "color": "#F4F5F1",
                            "text-decoration": "none"
                          }
                        },
                        "href": "#",
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-60",
                            "style": {
                              "base": {
                                "width": "32px",
                                "height": "32px",
                                "border-top-left-radius": "8px",
                                "border-top-right-radius": "8px",
                                "border-bottom-right-radius": "8px",
                                "border-bottom-left-radius": "8px",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center",
                                "font-size": "13px",
                                "font-weight": "600",
                                "background-color": "#262A31",
                                "color": "#AFC0FF"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "$"
                          },
                          {
                            "tag": "div",
                            "key": "div-63",
                            "style": {
                              "base": {
                                "flex-grow": "1",
                                "flex-shrink": "1",
                                "flex-basis": "0%",
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "2px",
                                "column-gap": "2px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-61",
                                "style": {
                                  "base": {
                                    "font-size": "15px"
                                  }
                                },
                                "text": "Invoice #1038 · Pine Row HOA"
                              },
                              {
                                "tag": "div",
                                "key": "div-62",
                                "style": {
                                  "base": {
                                    "font-size": "13px",
                                    "color": "#A7ADB6"
                                  }
                                },
                                "text": "Paid Sep 28"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-64",
                            "style": {
                              "base": {
                                "padding-top": "3px",
                                "padding-right": "8px",
                                "padding-bottom": "3px",
                                "padding-left": "8px",
                                "border-top-left-radius": "999px",
                                "border-top-right-radius": "999px",
                                "border-bottom-right-radius": "999px",
                                "border-bottom-left-radius": "999px",
                                "font-size": "12px",
                                "background-color": "#1E3A2A",
                                "color": "#8FD3A8"
                              }
                            },
                            "text": "Paid"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
spec.variants = {
  theme: themeVariant({
    palette: "saas",
    default: "dark",
    map: { section: { "background-color": "bg", color: "fg" } },
  }),
};
export default spec;
