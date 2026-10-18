import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "faq-09",
  "prefix": "faq09",
  "name": "FAQ / Chat thread",
  "category": "faq",
  "collection": "saas",
  "description": "FAQ / Chat thread for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "Ask us like you’d text us"
    },
    "subheading": {
      "type": "text",
      "default": "Tap a question. Answers come from our help center, written by the team."
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
        "background-color": "#FFFFFF",
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
            "row-gap": "clamp(28px, 5vw, 64px)",
            "column-gap": "clamp(28px, 5vw, 64px)",
            "align-items": "flex-start"
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
                "flex-basis": "320px",
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
                "text": "FAQ"
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
                    "font-size": "clamp(34px, 4.4vw, 52px)",
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
                    "font-size": "17px",
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
                "flex-basis": "520px",
                "display": "flex",
                "flex-direction": "column",
                "border-top-left-radius": "22px",
                "border-top-right-radius": "22px",
                "border-bottom-right-radius": "22px",
                "border-bottom-left-radius": "22px",
                "background-color": "#F4F5F1",
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
                    "row-gap": "10px",
                    "column-gap": "10px",
                    "padding-top": "14px",
                    "padding-right": "18px",
                    "padding-bottom": "14px",
                    "padding-left": "18px",
                    "background-color": "#FFFFFF",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#DDE0D8"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-6",
                    "style": {
                      "base": {
                        "width": "32px",
                        "height": "32px",
                        "border-top-left-radius": "9px",
                        "border-top-right-radius": "9px",
                        "border-bottom-right-radius": "9px",
                        "border-bottom-left-radius": "9px",
                        "background-color": "#2D4BF0",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "attrs": {
                      "aria-hidden": "true"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-5",
                        "style": {
                          "base": {
                            "width": "12px",
                            "height": "12px",
                            "border-top-left-radius": "3px",
                            "border-top-right-radius": "3px",
                            "border-bottom-right-radius": "3px",
                            "border-bottom-left-radius": "3px",
                            "background-color": "#FFFFFF"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-9",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-7",
                        "style": {
                          "base": {
                            "font-size": "15px",
                            "font-weight": "600"
                          }
                        },
                        "text": "Harborline help"
                      },
                      {
                        "tag": "div",
                        "key": "div-8",
                        "style": {
                          "base": {
                            "font-size": "12px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Usually replies in [time]"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-10",
                    "style": {
                      "base": {
                        "margin-left": "auto",
                        "height": "36px",
                        "padding-top": "0",
                        "padding-right": "10px",
                        "padding-bottom": "0",
                        "padding-left": "10px",
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
                        "background-color": "transparent",
                        "cursor": "pointer",
                        "font-size": "14px",
                        "color": "#2D4BF0",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "text": "Start over"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-18",
                "style": {
                  "base": {
                    "min-height": "360px",
                    "max-height": "420px",
                    "overflow-y": "auto",
                    "padding-top": "18px",
                    "padding-right": "18px",
                    "padding-bottom": "18px",
                    "padding-left": "18px",
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "10px",
                    "column-gap": "10px"
                  }
                },
                "attrs": {
                  "role": "log",
                  "aria-live": "polite"
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-13",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "flex-start"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-12",
                        "style": {
                          "base": {
                            "max-width": "80%",
                            "padding-top": "12px",
                            "padding-right": "14px",
                            "padding-bottom": "12px",
                            "padding-left": "14px",
                            "border-top-left-radius": "16px",
                            "border-top-right-radius": "16px",
                            "border-bottom-right-radius": "16px",
                            "border-bottom-left-radius": "4px",
                            "font-size": "15px",
                            "line-height": "1.5",
                            "background-color": "#FFFFFF",
                            "color": "#0F1115"
                          }
                        },
                        "text": "Hi! What can we help with?"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-15",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "flex-end"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-14",
                        "style": {
                          "base": {
                            "max-width": "80%",
                            "padding-top": "12px",
                            "padding-right": "14px",
                            "padding-bottom": "12px",
                            "padding-left": "14px",
                            "border-top-left-radius": "16px",
                            "border-top-right-radius": "16px",
                            "border-bottom-right-radius": "4px",
                            "border-bottom-left-radius": "16px",
                            "font-size": "15px",
                            "line-height": "1.5",
                            "background-color": "#2D4BF0",
                            "color": "#FFFFFF"
                          }
                        },
                        "text": "Is there a free trial?"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-17",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "flex-start"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-16",
                        "style": {
                          "base": {
                            "max-width": "80%",
                            "padding-top": "12px",
                            "padding-right": "14px",
                            "padding-bottom": "12px",
                            "padding-left": "14px",
                            "border-top-left-radius": "16px",
                            "border-top-right-radius": "16px",
                            "border-bottom-right-radius": "16px",
                            "border-bottom-left-radius": "4px",
                            "font-size": "15px",
                            "line-height": "1.5",
                            "background-color": "#FFFFFF",
                            "color": "#0F1115"
                          }
                        },
                        "text": "[Trial length.] No card needed, and you keep your data if you upgrade."
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-23",
                "style": {
                  "base": {
                    "padding-top": "14px",
                    "padding-right": "18px",
                    "padding-bottom": "14px",
                    "padding-left": "18px",
                    "background-color": "#FFFFFF",
                    "border-top-width": "1px",
                    "border-top-style": "solid",
                    "border-top-color": "#DDE0D8",
                    "display": "flex",
                    "flex-wrap": "wrap",
                    "row-gap": "8px",
                    "column-gap": "8px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-19",
                    "style": {
                      "base": {
                        "height": "40px",
                        "padding-top": "0",
                        "padding-right": "14px",
                        "padding-bottom": "0",
                        "padding-left": "14px",
                        "border-top-left-radius": "999px",
                        "border-top-right-radius": "999px",
                        "border-bottom-right-radius": "999px",
                        "border-bottom-left-radius": "999px",
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
                        "background-color": "#F7F8FE",
                        "cursor": "pointer",
                        "font-size": "14px",
                        "color": "#2D4BF0",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "text": "Do crews pay for the app?"
                  },
                  {
                    "tag": "div",
                    "key": "div-20",
                    "style": {
                      "base": {
                        "height": "40px",
                        "padding-top": "0",
                        "padding-right": "14px",
                        "padding-bottom": "0",
                        "padding-left": "14px",
                        "border-top-left-radius": "999px",
                        "border-top-right-radius": "999px",
                        "border-bottom-right-radius": "999px",
                        "border-bottom-left-radius": "999px",
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
                        "background-color": "#F7F8FE",
                        "cursor": "pointer",
                        "font-size": "14px",
                        "color": "#2D4BF0",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "text": "Can customers book online?"
                  },
                  {
                    "tag": "div",
                    "key": "div-21",
                    "style": {
                      "base": {
                        "height": "40px",
                        "padding-top": "0",
                        "padding-right": "14px",
                        "padding-bottom": "0",
                        "padding-left": "14px",
                        "border-top-left-radius": "999px",
                        "border-top-right-radius": "999px",
                        "border-bottom-right-radius": "999px",
                        "border-bottom-left-radius": "999px",
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
                        "background-color": "#F7F8FE",
                        "cursor": "pointer",
                        "font-size": "14px",
                        "color": "#2D4BF0",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "text": "Can I cancel anytime?"
                  },
                  {
                    "tag": "div",
                    "key": "div-22",
                    "style": {
                      "base": {
                        "height": "40px",
                        "padding-top": "0",
                        "padding-right": "14px",
                        "padding-bottom": "0",
                        "padding-left": "14px",
                        "border-top-left-radius": "999px",
                        "border-top-right-radius": "999px",
                        "border-bottom-right-radius": "999px",
                        "border-bottom-left-radius": "999px",
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
                        "background-color": "#F7F8FE",
                        "cursor": "pointer",
                        "font-size": "14px",
                        "color": "#2D4BF0",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "text": "Will it work for my trade?"
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
