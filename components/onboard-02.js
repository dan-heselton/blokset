import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "onboard-02",
  "prefix": "onboard02",
  "name": "Onboarding / Setup wizard",
  "category": "onboard",
  "collection": "saas",
  "description": "Onboarding / Setup wizard for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "Three questions, then you’re scheduling"
    },
    "subheading": {
      "type": "text",
      "default": "Try the real setup. Your answers shape the account we create."
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-4",
        "div-24"
      ]
    }
  },
  "tree": {
    "role": "section",
    "style": {
      "base": {
        "font-family": "token(font-saas)",
        "color": "#0F1115",
        "background-color": "#F4F5F1",
        "padding-top": "clamp(56px, 8vw, 96px)",
        "padding-right": "clamp(20px, 4vw, 48px)",
        "padding-bottom": "clamp(56px, 8vw, 96px)",
        "padding-left": "clamp(20px, 4vw, 48px)"
      }
    },
    "children": [
      {
        "tag": "div",
        "key": "div-25",
        "style": {
          "base": {
            "max-width": "1100px",
            "margin-top": "0",
            "margin-right": "auto",
            "margin-bottom": "0",
            "margin-left": "auto",
            "display": "flex",
            "flex-wrap": "wrap",
            "row-gap": "clamp(32px, 5vw, 64px)",
            "column-gap": "clamp(32px, 5vw, 64px)",
            "align-items": "center"
          }
        },
        "children": [
          {
            "tag": "div",
            "key": "div-4",
            "style": {
              "base": {
                "flex-grow": "1",
                "flex-shrink": "1",
                "flex-basis": "340px",
                "display": "flex",
                "flex-direction": "column",
                "row-gap": "18px",
                "column-gap": "18px"
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
                    "color": "#5B616B"
                  }
                },
                "text": "Setup"
              },
              {
                "tag": "h2",
                "key": "heading",
                "style": {
                  "base": {
                    "margin-top": "0",
                    "margin-right": "0",
                    "margin-bottom": "0",
                    "margin-left": "0",
                    "font-size": "clamp(34px, 4.4vw, 56px)",
                    "line-height": "1.02",
                    "letter-spacing": "-0.04em",
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
                    "font-size": "18px",
                    "line-height": "1.55",
                    "color": "#4E545D"
                  }
                },
                "bind": "subheading"
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-24",
            "style": {
              "base": {
                "flex-grow": "1",
                "flex-shrink": "1",
                "flex-basis": "480px",
                "padding-top": "clamp(22px, 3vw, 32px)",
                "padding-right": "clamp(22px, 3vw, 32px)",
                "padding-bottom": "clamp(22px, 3vw, 32px)",
                "padding-left": "clamp(22px, 3vw, 32px)",
                "border-top-left-radius": "22px",
                "border-top-right-radius": "22px",
                "border-bottom-right-radius": "22px",
                "border-bottom-left-radius": "22px",
                "background-color": "#FFFFFF",
                "border-top-width": "1px",
                "border-top-style": "solid",
                "border-top-color": "#DDE0D8",
                "border-right-width": "1px",
                "border-right-style": "solid",
                "border-right-color": "#DDE0D8",
                "border-bottom-width": "1px",
                "border-bottom-style": "solid",
                "border-bottom-color": "#DDE0D8",
                "border-left-width": "1px",
                "border-left-style": "solid",
                "border-left-color": "#DDE0D8",
                "display": "flex",
                "flex-direction": "column",
                "row-gap": "24px",
                "column-gap": "24px",
                "min-height": "420px"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-17",
                "style": {
                  "base": {
                    "list-style": "none",
                    "margin-top": "0",
                    "margin-right": "0",
                    "margin-bottom": "0",
                    "margin-left": "0",
                    "padding-top": "0",
                    "padding-right": "0",
                    "padding-bottom": "0",
                    "padding-left": "0",
                    "display": "flex",
                    "row-gap": "6px",
                    "column-gap": "6px"
                  }
                },
                "attrs": {
                  "aria-label": "Progress"
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-7",
                    "style": {
                      "base": {
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "0%",
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "8px",
                        "column-gap": "8px"
                      }
                    },
                    "attrs": {
                      "aria-current": "step"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-5",
                        "style": {
                          "base": {
                            "height": "4px",
                            "border-top-left-radius": "999px",
                            "border-top-right-radius": "999px",
                            "border-bottom-right-radius": "999px",
                            "border-bottom-left-radius": "999px",
                            "background-color": "#2D4BF0"
                          }
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-6",
                        "style": {
                          "base": {
                            "font-size": "12px",
                            "color": "#0F1115"
                          }
                        },
                        "text": "Name"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-10",
                    "style": {
                      "base": {
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "0%",
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "8px",
                        "column-gap": "8px"
                      }
                    },
                    "attrs": {
                      "aria-current": "false"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-8",
                        "style": {
                          "base": {
                            "height": "4px",
                            "border-top-left-radius": "999px",
                            "border-top-right-radius": "999px",
                            "border-bottom-right-radius": "999px",
                            "border-bottom-left-radius": "999px",
                            "background-color": "#ECEEE8"
                          }
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-9",
                        "style": {
                          "base": {
                            "font-size": "12px",
                            "color": "#7A808A"
                          }
                        },
                        "text": "Services"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-13",
                    "style": {
                      "base": {
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "0%",
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "8px",
                        "column-gap": "8px"
                      }
                    },
                    "attrs": {
                      "aria-current": "false"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-11",
                        "style": {
                          "base": {
                            "height": "4px",
                            "border-top-left-radius": "999px",
                            "border-top-right-radius": "999px",
                            "border-bottom-right-radius": "999px",
                            "border-bottom-left-radius": "999px",
                            "background-color": "#ECEEE8"
                          }
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-12",
                        "style": {
                          "base": {
                            "font-size": "12px",
                            "color": "#7A808A"
                          }
                        },
                        "text": "Crew"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-16",
                    "style": {
                      "base": {
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "0%",
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "8px",
                        "column-gap": "8px"
                      }
                    },
                    "attrs": {
                      "aria-current": "false"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-14",
                        "style": {
                          "base": {
                            "height": "4px",
                            "border-top-left-radius": "999px",
                            "border-top-right-radius": "999px",
                            "border-bottom-right-radius": "999px",
                            "border-bottom-left-radius": "999px",
                            "background-color": "#ECEEE8"
                          }
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-15",
                        "style": {
                          "base": {
                            "font-size": "12px",
                            "color": "#7A808A"
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
                "key": "div-20",
                "style": {
                  "base": {
                    "flex-grow": "1",
                    "flex-shrink": "1",
                    "flex-basis": "0%",
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "14px",
                    "column-gap": "14px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-18",
                    "style": {
                      "base": {
                        "font-size": "22px",
                        "font-weight": "600",
                        "letter-spacing": "-0.02em"
                      }
                    },
                    "text": "What’s your business called?"
                  },
                  {
                    "tag": "div",
                    "key": "div-19",
                    "style": {
                      "base": {
                        "height": "52px",
                        "padding-top": "0",
                        "padding-right": "14px",
                        "padding-bottom": "0",
                        "padding-left": "14px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CFD3CA",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CFD3CA",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CFD3CA",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CFD3CA",
                        "font-size": "17px",
                        "color": "#0F1115"
                      }
                    },
                    "text": "e.g. Shoreline Bin Cleaning"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-23",
                "style": {
                  "base": {
                    "display": "flex",
                    "justify-content": "space-between",
                    "row-gap": "12px",
                    "column-gap": "12px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-21",
                    "style": {
                      "base": {
                        "height": "48px",
                        "padding-top": "0",
                        "padding-right": "18px",
                        "padding-bottom": "0",
                        "padding-left": "18px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DDE0D8",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DDE0D8",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DDE0D8",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#DDE0D8",
                        "background-color": "#FFFFFF",
                        "cursor": "pointer",
                        "font-weight": "500",
                        "opacity": "0.4",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "attrs": {
                      "aria-disabled": "true"
                    },
                    "text": "Back"
                  },
                  {
                    "tag": "div",
                    "key": "div-22",
                    "style": {
                      "base": {
                        "height": "48px",
                        "padding-top": "0",
                        "padding-right": "22px",
                        "padding-bottom": "0",
                        "padding-left": "22px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
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
                        "background-color": "#2D4BF0",
                        "color": "#FFFFFF",
                        "cursor": "pointer",
                        "font-weight": "500",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "text": "Continue"
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
    default: "light",
    map: { section: { "background-color": "bg", color: "fg" } },
  }),
};
export default spec;
