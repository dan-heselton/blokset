import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "cases-02",
  "prefix": "cases02",
  "name": "Use cases / Sentence builder",
  "category": "cases",
  "collection": "saas",
  "description": "Use cases / Sentence builder for Harborline.",
  "props": {},
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "div-1",
        "p-15",
        "div-28",
        "div-31"
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
        "padding-top": "clamp(56px, 8vw, 104px)",
        "padding-right": "clamp(20px, 4vw, 48px)",
        "padding-bottom": "clamp(56px, 8vw, 104px)",
        "padding-left": "clamp(20px, 4vw, 48px)"
      }
    },
    "children": [
      {
        "tag": "div",
        "key": "div-32",
        "style": {
          "base": {
            "max-width": "1100px",
            "margin-top": "0",
            "margin-right": "auto",
            "margin-bottom": "0",
            "margin-left": "auto",
            "display": "flex",
            "flex-direction": "column",
            "row-gap": "36px",
            "column-gap": "36px"
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
            "text": "Made for your role"
          },
          {
            "tag": "p",
            "key": "p-15",
            "style": {
              "base": {
                "margin-top": "0",
                "margin-right": "0",
                "margin-bottom": "0",
                "margin-left": "0",
                "font-size": "clamp(32px, 4.2vw, 54px)",
                "line-height": "1.2",
                "letter-spacing": "-0.035em",
                "font-weight": "600",
                "display": "flex",
                "flex-wrap": "wrap",
                "align-items": "baseline",
                "column-gap": "0.35rem"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "text-12",
                "text": "I’m"
              },
              {
                "tag": "div",
                "key": "div-6",
                "style": {
                  "base": {
                    "display": "inline-block"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-2",
                    "style": {
                      "base": {
                        "position": "absolute",
                        "width": "1px",
                        "height": "1px",
                        "overflow": "hidden",
                        "clip": "rect(0 0 0 0)"
                      }
                    },
                    "text": "Your role"
                  },
                  {
                    "tag": "div",
                    "key": "select-3",
                    "style": {
                      "base": {
                        "font-weight": "600",
                        "color": "#2D4BF0",
                        "background-color": "#E8ECFE",
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
                        "border-top-left-radius": "12px",
                        "border-top-right-radius": "12px",
                        "border-bottom-right-radius": "12px",
                        "border-bottom-left-radius": "12px",
                        "padding-top": "0",
                        "padding-right": "14px",
                        "padding-bottom": "0",
                        "padding-left": "14px",
                        "height": "1.3em",
                        "cursor": "pointer",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "space-between"
                      }
                    },
                    "attrs": {
                      "role": "combobox"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "text-4",
                        "text": "an owner"
                      },
                      {
                        "tag": "div",
                        "key": "text-5",
                        "text": "▾"
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "text-13",
                "text": "and I want to"
              },
              {
                "tag": "div",
                "key": "div-11",
                "style": {
                  "base": {
                    "display": "inline-block"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-7",
                    "style": {
                      "base": {
                        "position": "absolute",
                        "width": "1px",
                        "height": "1px",
                        "overflow": "hidden",
                        "clip": "rect(0 0 0 0)"
                      }
                    },
                    "text": "Your goal"
                  },
                  {
                    "tag": "div",
                    "key": "select-8",
                    "style": {
                      "base": {
                        "font-weight": "600",
                        "color": "#2D4BF0",
                        "background-color": "#E8ECFE",
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
                        "border-top-left-radius": "12px",
                        "border-top-right-radius": "12px",
                        "border-bottom-right-radius": "12px",
                        "border-bottom-left-radius": "12px",
                        "padding-top": "0",
                        "padding-right": "14px",
                        "padding-bottom": "0",
                        "padding-left": "14px",
                        "height": "1.3em",
                        "cursor": "pointer",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "space-between"
                      }
                    },
                    "attrs": {
                      "role": "combobox"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "text-9",
                        "text": "save time"
                      },
                      {
                        "tag": "div",
                        "key": "text-10",
                        "text": "▾"
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "text-14",
                "text": "."
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-28",
            "style": {
              "base": {
                "display": "grid",
                "grid-template-columns": "1fr",
                "row-gap": "14px",
                "column-gap": "14px"
              },
              "md": {
                "grid-template-columns": "repeat(2, minmax(0, 1fr))"
              },
              "lg": {
                "grid-template-columns": "repeat(3, minmax(0, 1fr))"
              }
            },
            "attrs": {
              "role": "status"
            },
            "children": [
              {
                "tag": "div",
                "key": "div-19",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "10px",
                    "column-gap": "10px",
                    "padding-top": "22px",
                    "padding-right": "22px",
                    "padding-bottom": "22px",
                    "padding-left": "22px",
                    "border-top-left-radius": "18px",
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                    "border-bottom-left-radius": "18px",
                    "background-color": "#F4F5F1",
                    "border-top-width": "1px",
                    "border-top-style": "solid",
                    "border-top-color": "#E2E4DE",
                    "border-right-width": "1px",
                    "border-right-style": "solid",
                    "border-right-color": "#E2E4DE",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#E2E4DE",
                    "border-left-width": "1px",
                    "border-left-style": "solid",
                    "border-left-color": "#E2E4DE"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-16",
                    "style": {
                      "base": {
                        "font-family": "token(font-saas-mono)",
                        "font-size": "12px",
                        "color": "#5B616B"
                      }
                    },
                    "text": "01"
                  },
                  {
                    "tag": "div",
                    "key": "div-17",
                    "style": {
                      "base": {
                        "font-size": "20px",
                        "font-weight": "600",
                        "letter-spacing": "-0.02em"
                      }
                    },
                    "text": "Recurring schedules"
                  },
                  {
                    "tag": "div",
                    "key": "div-18",
                    "style": {
                      "base": {
                        "font-size": "15px",
                        "line-height": "1.55",
                        "color": "#4E545D"
                      }
                    },
                    "text": "Your week fills itself from the rhythms you set."
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-23",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "10px",
                    "column-gap": "10px",
                    "padding-top": "22px",
                    "padding-right": "22px",
                    "padding-bottom": "22px",
                    "padding-left": "22px",
                    "border-top-left-radius": "18px",
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                    "border-bottom-left-radius": "18px",
                    "background-color": "#F4F5F1",
                    "border-top-width": "1px",
                    "border-top-style": "solid",
                    "border-top-color": "#E2E4DE",
                    "border-right-width": "1px",
                    "border-right-style": "solid",
                    "border-right-color": "#E2E4DE",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#E2E4DE",
                    "border-left-width": "1px",
                    "border-left-style": "solid",
                    "border-left-color": "#E2E4DE"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-20",
                    "style": {
                      "base": {
                        "font-family": "token(font-saas-mono)",
                        "font-size": "12px",
                        "color": "#5B616B"
                      }
                    },
                    "text": "02"
                  },
                  {
                    "tag": "div",
                    "key": "div-21",
                    "style": {
                      "base": {
                        "font-size": "20px",
                        "font-weight": "600",
                        "letter-spacing": "-0.02em"
                      }
                    },
                    "text": "Reports"
                  },
                  {
                    "tag": "div",
                    "key": "div-22",
                    "style": {
                      "base": {
                        "font-size": "15px",
                        "line-height": "1.55",
                        "color": "#4E545D"
                      }
                    },
                    "text": "See revenue and hours without a spreadsheet."
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-27",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "10px",
                    "column-gap": "10px",
                    "padding-top": "22px",
                    "padding-right": "22px",
                    "padding-bottom": "22px",
                    "padding-left": "22px",
                    "border-top-left-radius": "18px",
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                    "border-bottom-left-radius": "18px",
                    "background-color": "#F4F5F1",
                    "border-top-width": "1px",
                    "border-top-style": "solid",
                    "border-top-color": "#E2E4DE",
                    "border-right-width": "1px",
                    "border-right-style": "solid",
                    "border-right-color": "#E2E4DE",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#E2E4DE",
                    "border-left-width": "1px",
                    "border-left-style": "solid",
                    "border-left-color": "#E2E4DE"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-24",
                    "style": {
                      "base": {
                        "font-family": "token(font-saas-mono)",
                        "font-size": "12px",
                        "color": "#5B616B"
                      }
                    },
                    "text": "03"
                  },
                  {
                    "tag": "div",
                    "key": "div-25",
                    "style": {
                      "base": {
                        "font-size": "20px",
                        "font-weight": "600",
                        "letter-spacing": "-0.02em"
                      }
                    },
                    "text": "Crew app"
                  },
                  {
                    "tag": "div",
                    "key": "div-26",
                    "style": {
                      "base": {
                        "font-size": "15px",
                        "line-height": "1.55",
                        "color": "#4E545D"
                      }
                    },
                    "text": "Fewer calls asking where to go next."
                  }
                ]
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-31",
            "style": {
              "base": {
                "display": "flex",
                "flex-wrap": "wrap",
                "align-items": "center",
                "row-gap": "16px",
                "column-gap": "16px"
              }
            },
            "children": [
              {
                "tag": "a",
                "key": "a-29",
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
                    "background-color": "#0F1115",
                    "color": "#FFFFFF",
                    "font-weight": "500",
                    "text-decoration": "none"
                  }
                },
                "href": "#",
                "text": "Start with this setup"
              },
              {
                "tag": "div",
                "key": "div-30",
                "style": {
                  "base": {
                    "font-size": "15px",
                    "color": "#5B616B"
                  }
                },
                "text": "We’ll turn these on first when you sign up."
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
