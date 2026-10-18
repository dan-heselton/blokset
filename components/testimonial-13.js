import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "testimonial-13",
  "prefix": "testimonial13",
  "name": "Testimonials / Quote carousel",
  "category": "testimonial",
  "collection": "saas",
  "description": "Testimonials / Quote carousel for Harborline.",
  "props": {},
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "div-1",
        "stack-69",
        "div-15",
        "p-16"
      ]
    }
  },
  "tree": {
    "role": "section",
    "style": {
      "base": {
        "font-family": "token(font-saas)",
        "color": "#0F1115",
        "background-color": "#E8ECFE",
        "padding-top": "clamp(56px, 8vw, 96px)",
        "padding-right": "clamp(20px, 4vw, 48px)",
        "padding-bottom": "clamp(56px, 8vw, 96px)",
        "padding-left": "clamp(20px, 4vw, 48px)"
      }
    },
    "children": [
      {
        "tag": "div",
        "key": "div-17",
        "style": {
          "base": {
            "max-width": "1000px",
            "margin-top": "0",
            "margin-right": "auto",
            "margin-bottom": "0",
            "margin-left": "auto",
            "display": "flex",
            "flex-direction": "column",
            "align-items": "center",
            "row-gap": "32px",
            "column-gap": "32px",
            "text-align": "center"
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
                "color": "#4E545D"
              }
            },
            "text": "From the people using it"
          },
          {
            "tag": "div",
            "key": "stack-69",
            "style": {
              "base": {
                "display": "flex",
                "flex-direction": "column",
                "width": "100%"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-7",
                "style": {
                  "base": {
                    "margin-top": "0",
                    "margin-right": "0",
                    "margin-bottom": "0",
                    "margin-left": "0",
                    "display": "flex",
                    "flex-direction": "column",
                    "align-items": "center",
                    "row-gap": "28px",
                    "column-gap": "28px",
                    "min-height": "280px"
                  }
                },
                "attrs": {
                  "aria-live": "polite",
                  "data-blok-panel": "",
                  "data-display": "flex"
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-2",
                    "style": {
                      "base": {
                        "font-size": "72px",
                        "line-height": "0.5",
                        "color": "#2D4BF0",
                        "font-weight": "600"
                      }
                    },
                    "attrs": {
                      "aria-hidden": "true"
                    },
                    "text": "“"
                  },
                  {
                    "tag": "div",
                    "key": "div-3",
                    "style": {
                      "base": {
                        "margin-top": "0",
                        "margin-right": "0",
                        "margin-bottom": "0",
                        "margin-left": "0",
                        "font-size": "clamp(26px, 3.4vw, 42px)",
                        "line-height": "1.2",
                        "letter-spacing": "-0.03em",
                        "font-weight": "500",
                        "max-width": "860px"
                      }
                    },
                    "text": "[A sentence about what changed in their week after switching.]"
                  },
                  {
                    "tag": "div",
                    "key": "div-6",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "4px",
                        "column-gap": "4px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-4",
                        "style": {
                          "base": {
                            "font-size": "17px",
                            "font-weight": "600"
                          }
                        },
                        "text": "[Customer name]"
                      },
                      {
                        "tag": "div",
                        "key": "div-5",
                        "style": {
                          "base": {
                            "font-size": "15px",
                            "color": "#4E545D"
                          }
                        },
                        "text": "[Owner, bin cleaning company]"
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-24",
                "style": {
                  "base": {
                    "margin-top": "0",
                    "margin-right": "0",
                    "margin-bottom": "0",
                    "margin-left": "0",
                    "display": "none",
                    "flex-direction": "column",
                    "align-items": "center",
                    "row-gap": "28px",
                    "column-gap": "28px",
                    "min-height": "280px"
                  }
                },
                "attrs": {
                  "aria-live": "polite",
                  "data-blok-panel": "",
                  "data-display": "flex"
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-19",
                    "style": {
                      "base": {
                        "font-size": "72px",
                        "line-height": "0.5",
                        "color": "#2D4BF0",
                        "font-weight": "600"
                      }
                    },
                    "attrs": {
                      "aria-hidden": "true"
                    },
                    "text": "“"
                  },
                  {
                    "tag": "div",
                    "key": "div-20",
                    "style": {
                      "base": {
                        "margin-top": "0",
                        "margin-right": "0",
                        "margin-bottom": "0",
                        "margin-left": "0",
                        "font-size": "clamp(26px, 3.4vw, 42px)",
                        "line-height": "1.2",
                        "letter-spacing": "-0.03em",
                        "font-weight": "500",
                        "max-width": "860px"
                      }
                    },
                    "text": "[A sentence about rescheduling or routing getting easier.]"
                  },
                  {
                    "tag": "div",
                    "key": "div-23",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "4px",
                        "column-gap": "4px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-21",
                        "style": {
                          "base": {
                            "font-size": "17px",
                            "font-weight": "600"
                          }
                        },
                        "text": "[Customer name]"
                      },
                      {
                        "tag": "div",
                        "key": "div-22",
                        "style": {
                          "base": {
                            "font-size": "15px",
                            "color": "#4E545D"
                          }
                        },
                        "text": "[Dispatcher, pressure washing]"
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-41",
                "style": {
                  "base": {
                    "margin-top": "0",
                    "margin-right": "0",
                    "margin-bottom": "0",
                    "margin-left": "0",
                    "display": "none",
                    "flex-direction": "column",
                    "align-items": "center",
                    "row-gap": "28px",
                    "column-gap": "28px",
                    "min-height": "280px"
                  }
                },
                "attrs": {
                  "aria-live": "polite",
                  "data-blok-panel": "",
                  "data-display": "flex"
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-36",
                    "style": {
                      "base": {
                        "font-size": "72px",
                        "line-height": "0.5",
                        "color": "#2D4BF0",
                        "font-weight": "600"
                      }
                    },
                    "attrs": {
                      "aria-hidden": "true"
                    },
                    "text": "“"
                  },
                  {
                    "tag": "div",
                    "key": "div-37",
                    "style": {
                      "base": {
                        "margin-top": "0",
                        "margin-right": "0",
                        "margin-bottom": "0",
                        "margin-left": "0",
                        "font-size": "clamp(26px, 3.4vw, 42px)",
                        "line-height": "1.2",
                        "letter-spacing": "-0.03em",
                        "font-weight": "500",
                        "max-width": "860px"
                      }
                    },
                    "text": "[A sentence about the crew app in the field.]"
                  },
                  {
                    "tag": "div",
                    "key": "div-40",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "4px",
                        "column-gap": "4px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-38",
                        "style": {
                          "base": {
                            "font-size": "17px",
                            "font-weight": "600"
                          }
                        },
                        "text": "[Customer name]"
                      },
                      {
                        "tag": "div",
                        "key": "div-39",
                        "style": {
                          "base": {
                            "font-size": "15px",
                            "color": "#4E545D"
                          }
                        },
                        "text": "[Crew lead, lawn care]"
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-58",
                "style": {
                  "base": {
                    "margin-top": "0",
                    "margin-right": "0",
                    "margin-bottom": "0",
                    "margin-left": "0",
                    "display": "none",
                    "flex-direction": "column",
                    "align-items": "center",
                    "row-gap": "28px",
                    "column-gap": "28px",
                    "min-height": "280px"
                  }
                },
                "attrs": {
                  "aria-live": "polite",
                  "data-blok-panel": "",
                  "data-display": "flex"
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-53",
                    "style": {
                      "base": {
                        "font-size": "72px",
                        "line-height": "0.5",
                        "color": "#2D4BF0",
                        "font-weight": "600"
                      }
                    },
                    "attrs": {
                      "aria-hidden": "true"
                    },
                    "text": "“"
                  },
                  {
                    "tag": "div",
                    "key": "div-54",
                    "style": {
                      "base": {
                        "margin-top": "0",
                        "margin-right": "0",
                        "margin-bottom": "0",
                        "margin-left": "0",
                        "font-size": "clamp(26px, 3.4vw, 42px)",
                        "line-height": "1.2",
                        "letter-spacing": "-0.03em",
                        "font-weight": "500",
                        "max-width": "860px"
                      }
                    },
                    "text": "[A sentence about getting paid faster.]"
                  },
                  {
                    "tag": "div",
                    "key": "div-57",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "4px",
                        "column-gap": "4px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-55",
                        "style": {
                          "base": {
                            "font-size": "17px",
                            "font-weight": "600"
                          }
                        },
                        "text": "[Customer name]"
                      },
                      {
                        "tag": "div",
                        "key": "div-56",
                        "style": {
                          "base": {
                            "font-size": "15px",
                            "color": "#4E545D"
                          }
                        },
                        "text": "[Owner, window cleaning]"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-15",
            "style": {
              "base": {
                "display": "flex",
                "align-items": "center",
                "row-gap": "16px",
                "column-gap": "16px"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-8",
                "style": {
                  "base": {
                    "width": "48px",
                    "height": "48px",
                    "border-top-left-radius": "50%",
                    "border-top-right-radius": "50%",
                    "border-bottom-right-radius": "50%",
                    "border-bottom-left-radius": "50%",
                    "border-top-width": "1px",
                    "border-top-style": "solid",
                    "border-top-color": "#C5CFFB",
                    "border-right-width": "1px",
                    "border-right-style": "solid",
                    "border-right-color": "#C5CFFB",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#C5CFFB",
                    "border-left-width": "1px",
                    "border-left-style": "solid",
                    "border-left-color": "#C5CFFB",
                    "background-color": "#FFFFFF",
                    "cursor": "pointer",
                    "font-size": "18px",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center",
                    "line-height": "1",
                    "flex-shrink": "0",
                    "padding-top": "0px",
                    "padding-right": "0px",
                    "padding-bottom": "0px",
                    "padding-left": "0px"
                  }
                },
                "attrs": {
                  "aria-label": "Previous story",
                  "data-blok-panel-prev": ""
                },
                "text": "←"
              },
              {
                "tag": "div",
                "key": "div-13",
                "style": {
                  "base": {
                    "display": "flex",
                    "row-gap": "8px",
                    "column-gap": "8px"
                  }
                },
                "attrs": {
                  "role": "tablist",
                  "aria-label": "Choose story",
                  "data-blok-choices": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-9",
                    "style": {
                      "base": {
                        "width": "52px",
                        "height": "52px",
                        "border-top-left-radius": "50%",
                        "border-top-right-radius": "50%",
                        "border-bottom-right-radius": "50%",
                        "border-bottom-left-radius": "50%",
                        "cursor": "pointer",
                        "font-weight": "600",
                        "font-size": "15px",
                        "border-top-width": "3px",
                        "border-top-style": "solid",
                        "border-top-color": "#2D4BF0",
                        "border-right-width": "3px",
                        "border-right-style": "solid",
                        "border-right-color": "#2D4BF0",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#2D4BF0",
                        "border-left-width": "3px",
                        "border-left-style": "solid",
                        "border-left-color": "#2D4BF0",
                        "background-color": "#0F1115",
                        "color": "#FFFFFF",
                        "transform": "scale(1.08)",
                        "transition": "transform 180ms ease",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "line-height": "1",
                        "flex-shrink": "0",
                        "padding-top": "0px",
                        "padding-right": "0px",
                        "padding-bottom": "0px",
                        "padding-left": "0px"
                      }
                    },
                    "attrs": {
                      "role": "tab",
                      "aria-selected": "true",
                      "aria-label": "[Customer name]",
                      "data-blok-panel-go": "",
                      "data-blok-choice": ""
                    },
                    "text": "A"
                  },
                  {
                    "tag": "div",
                    "key": "div-10",
                    "style": {
                      "base": {
                        "width": "52px",
                        "height": "52px",
                        "border-top-left-radius": "50%",
                        "border-top-right-radius": "50%",
                        "border-bottom-right-radius": "50%",
                        "border-bottom-left-radius": "50%",
                        "cursor": "pointer",
                        "font-weight": "600",
                        "font-size": "15px",
                        "border-top-width": "3px",
                        "border-top-style": "solid",
                        "border-top-color": "transparent",
                        "border-right-width": "3px",
                        "border-right-style": "solid",
                        "border-right-color": "transparent",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "transparent",
                        "border-left-width": "3px",
                        "border-left-style": "solid",
                        "border-left-color": "transparent",
                        "background-color": "#FFFFFF",
                        "color": "#4E545D",
                        "transform": "scale(1)",
                        "transition": "transform 180ms ease",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "line-height": "1",
                        "flex-shrink": "0",
                        "padding-top": "0px",
                        "padding-right": "0px",
                        "padding-bottom": "0px",
                        "padding-left": "0px"
                      }
                    },
                    "attrs": {
                      "role": "tab",
                      "aria-selected": "false",
                      "aria-label": "[Customer name]",
                      "data-blok-panel-go": "",
                      "data-blok-choice": ""
                    },
                    "text": "B"
                  },
                  {
                    "tag": "div",
                    "key": "div-11",
                    "style": {
                      "base": {
                        "width": "52px",
                        "height": "52px",
                        "border-top-left-radius": "50%",
                        "border-top-right-radius": "50%",
                        "border-bottom-right-radius": "50%",
                        "border-bottom-left-radius": "50%",
                        "cursor": "pointer",
                        "font-weight": "600",
                        "font-size": "15px",
                        "border-top-width": "3px",
                        "border-top-style": "solid",
                        "border-top-color": "transparent",
                        "border-right-width": "3px",
                        "border-right-style": "solid",
                        "border-right-color": "transparent",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "transparent",
                        "border-left-width": "3px",
                        "border-left-style": "solid",
                        "border-left-color": "transparent",
                        "background-color": "#FFFFFF",
                        "color": "#4E545D",
                        "transform": "scale(1)",
                        "transition": "transform 180ms ease",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "line-height": "1",
                        "flex-shrink": "0",
                        "padding-top": "0px",
                        "padding-right": "0px",
                        "padding-bottom": "0px",
                        "padding-left": "0px"
                      }
                    },
                    "attrs": {
                      "role": "tab",
                      "aria-selected": "false",
                      "aria-label": "[Customer name]",
                      "data-blok-panel-go": "",
                      "data-blok-choice": ""
                    },
                    "text": "C"
                  },
                  {
                    "tag": "div",
                    "key": "div-12",
                    "style": {
                      "base": {
                        "width": "52px",
                        "height": "52px",
                        "border-top-left-radius": "50%",
                        "border-top-right-radius": "50%",
                        "border-bottom-right-radius": "50%",
                        "border-bottom-left-radius": "50%",
                        "cursor": "pointer",
                        "font-weight": "600",
                        "font-size": "15px",
                        "border-top-width": "3px",
                        "border-top-style": "solid",
                        "border-top-color": "transparent",
                        "border-right-width": "3px",
                        "border-right-style": "solid",
                        "border-right-color": "transparent",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "transparent",
                        "border-left-width": "3px",
                        "border-left-style": "solid",
                        "border-left-color": "transparent",
                        "background-color": "#FFFFFF",
                        "color": "#4E545D",
                        "transform": "scale(1)",
                        "transition": "transform 180ms ease",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "line-height": "1",
                        "flex-shrink": "0",
                        "padding-top": "0px",
                        "padding-right": "0px",
                        "padding-bottom": "0px",
                        "padding-left": "0px"
                      }
                    },
                    "attrs": {
                      "role": "tab",
                      "aria-selected": "false",
                      "aria-label": "[Customer name]",
                      "data-blok-panel-go": "",
                      "data-blok-choice": ""
                    },
                    "text": "D"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-14",
                "style": {
                  "base": {
                    "width": "48px",
                    "height": "48px",
                    "border-top-left-radius": "50%",
                    "border-top-right-radius": "50%",
                    "border-bottom-right-radius": "50%",
                    "border-bottom-left-radius": "50%",
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
                    "background-color": "#0F1115",
                    "color": "#FFFFFF",
                    "cursor": "pointer",
                    "font-size": "18px",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center",
                    "line-height": "1",
                    "flex-shrink": "0",
                    "padding-top": "0px",
                    "padding-right": "0px",
                    "padding-bottom": "0px",
                    "padding-left": "0px"
                  }
                },
                "attrs": {
                  "aria-label": "Next story",
                  "data-blok-panel-next": ""
                },
                "text": "→"
              }
            ]
          },
          {
            "tag": "p",
            "key": "p-16",
            "style": {
              "base": {
                "margin-top": "0",
                "margin-right": "0",
                "margin-bottom": "0",
                "margin-left": "0",
                "font-size": "13px",
                "color": "#5B616B"
              }
            },
            "text": "Placeholder quotes. [Replace with real customer quotes, used with permission.]"
          }
        ]
      }
    ],
    "attrs": {
      "data-blok-panels": ""
    }
  }
};
spec.variants = {
  theme: themeVariant({
    palette: "saas",
    default: "light",
    map: { section: { "background-color": "bg", color: "fg" } },
  }),
};
export default spec;
