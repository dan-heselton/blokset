import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "cta-16",
  "prefix": "cta16",
  "name": "CTA / Book a demo",
  "category": "cta",
  "collection": "saas",
  "description": "CTA / Book a demo for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "See it with your own routes"
    },
    "subheading": {
      "type": "text",
      "default": "20 minutes, your real schedule, no slides. Pick a time that works."
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-4",
        "div-29"
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
        "padding-top": "clamp(56px, 7vw, 88px)",
        "padding-right": "clamp(20px, 4vw, 48px)",
        "padding-bottom": "clamp(56px, 7vw, 88px)",
        "padding-left": "clamp(20px, 4vw, 48px)"
      }
    },
    "children": [
      {
        "tag": "div",
        "key": "div-30",
        "style": {
          "base": {
            "max-width": "1100px",
            "margin-top": "0",
            "margin-right": "auto",
            "margin-bottom": "0",
            "margin-left": "auto",
            "display": "flex",
            "flex-wrap": "wrap",
            "align-items": "center",
            "row-gap": "clamp(32px, 5vw, 64px)",
            "column-gap": "clamp(32px, 5vw, 64px)"
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
                "flex-basis": "380px",
                "display": "flex",
                "flex-direction": "column",
                "row-gap": "16px",
                "column-gap": "16px"
              }
            },
            "children": [
              {
                "tag": "h2",
                "key": "heading",
                "style": {
                  "base": {
                    "margin-top": "0",
                    "margin-right": "0",
                    "margin-bottom": "0",
                    "margin-left": "0",
                    "font-size": "clamp(34px, 4.6vw, 58px)",
                    "line-height": "1",
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
                    "font-size": "18px",
                    "line-height": "1.55",
                    "color": "#B9BEC6"
                  }
                },
                "bind": "subheading"
              },
              {
                "tag": "a",
                "key": "a-3",
                "style": {
                  "base": {
                    "font-weight": "500",
                    "text-decoration": "none",
                    "color": "#AFC0FF"
                  }
                },
                "href": "#",
                "text": "Rather start a free trial? →"
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-29",
            "style": {
              "base": {
                "flex-grow": "1",
                "flex-shrink": "1",
                "flex-basis": "440px",
                "padding-top": "22px",
                "padding-right": "22px",
                "padding-bottom": "22px",
                "padding-left": "22px",
                "border-top-left-radius": "20px",
                "border-top-right-radius": "20px",
                "border-bottom-right-radius": "20px",
                "border-bottom-left-radius": "20px",
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
                "display": "flex",
                "flex-direction": "column",
                "row-gap": "16px",
                "column-gap": "16px"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-20",
                "style": {
                  "base": {
                    "display": "grid",
                    "grid-template-columns": "repeat(5, 1fr)",
                    "row-gap": "6px",
                    "column-gap": "6px"
                  }
                },
                "attrs": {
                  "role": "radiogroup",
                  "aria-label": "Day",
                  "data-blok-choices": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-7",
                    "style": {
                      "base": {
                        "height": "60px",
                        "border-top-left-radius": "12px",
                        "border-top-right-radius": "12px",
                        "border-bottom-right-radius": "12px",
                        "border-bottom-left-radius": "12px",
                        "cursor": "pointer",
                        "display": "flex",
                        "flex-direction": "column",
                        "align-items": "center",
                        "justify-content": "center",
                        "row-gap": "2px",
                        "column-gap": "2px",
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
                        "background-color": "transparent",
                        "color": "#F4F5F1"
                      }
                    },
                    "attrs": {
                      "role": "radio",
                      "aria-checked": "false",
                      "data-blok-choice": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-5",
                        "style": {
                          "base": {
                            "font-size": "12px"
                          }
                        },
                        "text": "Mon"
                      },
                      {
                        "tag": "div",
                        "key": "div-6",
                        "style": {
                          "base": {
                            "font-size": "18px",
                            "font-weight": "600"
                          }
                        },
                        "text": "13"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-10",
                    "style": {
                      "base": {
                        "height": "60px",
                        "border-top-left-radius": "12px",
                        "border-top-right-radius": "12px",
                        "border-bottom-right-radius": "12px",
                        "border-bottom-left-radius": "12px",
                        "cursor": "pointer",
                        "display": "flex",
                        "flex-direction": "column",
                        "align-items": "center",
                        "justify-content": "center",
                        "row-gap": "2px",
                        "column-gap": "2px",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#F4F5F1",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#F4F5F1",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#F4F5F1",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#F4F5F1",
                        "background-color": "#F4F5F1",
                        "color": "#0F1115"
                      }
                    },
                    "attrs": {
                      "role": "radio",
                      "aria-checked": "true",
                      "data-blok-choice": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-8",
                        "style": {
                          "base": {
                            "font-size": "12px"
                          }
                        },
                        "text": "Tue"
                      },
                      {
                        "tag": "div",
                        "key": "div-9",
                        "style": {
                          "base": {
                            "font-size": "18px",
                            "font-weight": "600"
                          }
                        },
                        "text": "14"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-13",
                    "style": {
                      "base": {
                        "height": "60px",
                        "border-top-left-radius": "12px",
                        "border-top-right-radius": "12px",
                        "border-bottom-right-radius": "12px",
                        "border-bottom-left-radius": "12px",
                        "cursor": "pointer",
                        "display": "flex",
                        "flex-direction": "column",
                        "align-items": "center",
                        "justify-content": "center",
                        "row-gap": "2px",
                        "column-gap": "2px",
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
                        "background-color": "transparent",
                        "color": "#F4F5F1"
                      }
                    },
                    "attrs": {
                      "role": "radio",
                      "aria-checked": "false",
                      "data-blok-choice": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-11",
                        "style": {
                          "base": {
                            "font-size": "12px"
                          }
                        },
                        "text": "Wed"
                      },
                      {
                        "tag": "div",
                        "key": "div-12",
                        "style": {
                          "base": {
                            "font-size": "18px",
                            "font-weight": "600"
                          }
                        },
                        "text": "15"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-16",
                    "style": {
                      "base": {
                        "height": "60px",
                        "border-top-left-radius": "12px",
                        "border-top-right-radius": "12px",
                        "border-bottom-right-radius": "12px",
                        "border-bottom-left-radius": "12px",
                        "cursor": "pointer",
                        "display": "flex",
                        "flex-direction": "column",
                        "align-items": "center",
                        "justify-content": "center",
                        "row-gap": "2px",
                        "column-gap": "2px",
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
                        "background-color": "transparent",
                        "color": "#F4F5F1"
                      }
                    },
                    "attrs": {
                      "role": "radio",
                      "aria-checked": "false",
                      "data-blok-choice": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-14",
                        "style": {
                          "base": {
                            "font-size": "12px"
                          }
                        },
                        "text": "Thu"
                      },
                      {
                        "tag": "div",
                        "key": "div-15",
                        "style": {
                          "base": {
                            "font-size": "18px",
                            "font-weight": "600"
                          }
                        },
                        "text": "16"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-19",
                    "style": {
                      "base": {
                        "height": "60px",
                        "border-top-left-radius": "12px",
                        "border-top-right-radius": "12px",
                        "border-bottom-right-radius": "12px",
                        "border-bottom-left-radius": "12px",
                        "cursor": "pointer",
                        "display": "flex",
                        "flex-direction": "column",
                        "align-items": "center",
                        "justify-content": "center",
                        "row-gap": "2px",
                        "column-gap": "2px",
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
                        "background-color": "transparent",
                        "color": "#F4F5F1"
                      }
                    },
                    "attrs": {
                      "role": "radio",
                      "aria-checked": "false",
                      "data-blok-choice": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-17",
                        "style": {
                          "base": {
                            "font-size": "12px"
                          }
                        },
                        "text": "Fri"
                      },
                      {
                        "tag": "div",
                        "key": "div-18",
                        "style": {
                          "base": {
                            "font-size": "18px",
                            "font-weight": "600"
                          }
                        },
                        "text": "17"
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-27",
                "style": {
                  "base": {
                    "display": "grid",
                    "grid-template-columns": "repeat(3, 1fr)",
                    "row-gap": "6px",
                    "column-gap": "6px"
                  }
                },
                "attrs": {
                  "role": "radiogroup",
                  "aria-label": "Time",
                  "data-blok-choices": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-21",
                    "style": {
                      "base": {
                        "height": "44px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "cursor": "pointer",
                        "font-family": "token(font-saas-mono)",
                        "font-size": "14px",
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
                        "background-color": "#20242A",
                        "color": "#F4F5F1",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "attrs": {
                      "role": "radio",
                      "aria-checked": "false",
                      "data-blok-choice": ""
                    },
                    "text": "9:30"
                  },
                  {
                    "tag": "div",
                    "key": "div-22",
                    "style": {
                      "base": {
                        "height": "44px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "cursor": "pointer",
                        "font-family": "token(font-saas-mono)",
                        "font-size": "14px",
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
                        "background-color": "#20242A",
                        "color": "#F4F5F1",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "attrs": {
                      "role": "radio",
                      "aria-checked": "false",
                      "data-blok-choice": ""
                    },
                    "text": "10:00"
                  },
                  {
                    "tag": "div",
                    "key": "div-23",
                    "style": {
                      "base": {
                        "height": "44px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "cursor": "pointer",
                        "font-family": "token(font-saas-mono)",
                        "font-size": "14px",
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
                        "background-color": "#20242A",
                        "color": "#F4F5F1",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "attrs": {
                      "role": "radio",
                      "aria-checked": "false",
                      "data-blok-choice": ""
                    },
                    "text": "1:00"
                  },
                  {
                    "tag": "div",
                    "key": "div-24",
                    "style": {
                      "base": {
                        "height": "44px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "cursor": "pointer",
                        "font-family": "token(font-saas-mono)",
                        "font-size": "14px",
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
                        "background-color": "#20242A",
                        "color": "#F4F5F1",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "attrs": {
                      "role": "radio",
                      "aria-checked": "false",
                      "data-blok-choice": ""
                    },
                    "text": "3:30"
                  },
                  {
                    "tag": "div",
                    "key": "div-25",
                    "style": {
                      "base": {
                        "height": "44px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "cursor": "pointer",
                        "font-family": "token(font-saas-mono)",
                        "font-size": "14px",
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
                        "background-color": "#20242A",
                        "color": "#F4F5F1",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "attrs": {
                      "role": "radio",
                      "aria-checked": "false",
                      "data-blok-choice": ""
                    },
                    "text": "4:00"
                  },
                  {
                    "tag": "div",
                    "key": "div-26",
                    "style": {
                      "base": {
                        "height": "44px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "cursor": "pointer",
                        "font-family": "token(font-saas-mono)",
                        "font-size": "14px",
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
                        "background-color": "#20242A",
                        "color": "#F4F5F1",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "attrs": {
                      "role": "radio",
                      "aria-checked": "false",
                      "data-blok-choice": ""
                    },
                    "text": "4:30"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-28",
                "style": {
                  "base": {
                    "height": "48px",
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
                    "cursor": "pointer",
                    "font-weight": "500",
                    "background-color": "#3A3F47",
                    "color": "#FFFFFF",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center"
                  }
                },
                "attrs": {
                  "aria-disabled": "true"
                },
                "text": "Pick a time"
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
