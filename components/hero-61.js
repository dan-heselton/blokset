import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "hero-61",
  "prefix": "hero61",
  "name": "Hero / Ask with suggestions",
  "category": "hero",
  "collection": "saas",
  "description": "Hero / Ask with suggestions for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "What should your office stop doing by hand?"
    },
    "subheading": {
      "type": "text",
      "default": "Type a chore or pick one below. We’ll show how Harborline handles it."
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-1",
        "subheading",
        "div-7"
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
        "padding-top": "clamp(56px, 8vw, 104px)",
        "padding-right": "clamp(20px, 4vw, 48px)",
        "padding-bottom": "clamp(56px, 8vw, 104px)",
        "padding-left": "clamp(20px, 4vw, 48px)"
      }
    },
    "children": [
      {
        "tag": "div",
        "key": "div-21",
        "style": {
          "base": {
            "max-width": "820px",
            "margin-top": "0",
            "margin-right": "auto",
            "margin-bottom": "0",
            "margin-left": "auto",
            "display": "flex",
            "flex-direction": "column",
            "align-items": "center",
            "row-gap": "22px",
            "column-gap": "22px",
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
                "color": "#5B616B"
              }
            },
            "text": "Field service software"
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
                "font-size": "clamp(42px, 6vw, 80px)",
                "line-height": "0.96",
                "letter-spacing": "-0.05em",
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
                "max-width": "540px",
                "font-size": "18px",
                "line-height": "1.55",
                "color": "#4E545D"
              }
            },
            "bind": "subheading"
          },
          {
            "tag": "div",
            "key": "div-7",
            "style": {
              "base": {
                "width": "100%",
                "display": "flex",
                "row-gap": "8px",
                "column-gap": "8px",
                "padding-top": "8px",
                "padding-right": "8px",
                "padding-bottom": "8px",
                "padding-left": "8px",
                "border-top-left-radius": "16px",
                "border-top-right-radius": "16px",
                "border-bottom-right-radius": "16px",
                "border-bottom-left-radius": "16px",
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
                "box-shadow": "0 16px 40px -28px rgba(15,17,21,0.4)"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-4",
                "style": {
                  "base": {
                    "position": "absolute",
                    "width": "1px",
                    "height": "1px",
                    "overflow": "hidden",
                    "clip": "rect(0 0 0 0)"
                  }
                },
                "text": "Describe a chore"
              },
              {
                "tag": "div",
                "key": "div-5",
                "style": {
                  "base": {
                    "flex-grow": "1",
                    "flex-shrink": "1",
                    "flex-basis": "0%",
                    "min-width": "0",
                    "height": "52px",
                    "padding-top": "0",
                    "padding-right": "14px",
                    "padding-bottom": "0",
                    "padding-left": "14px",
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
                    "font-size": "18px",
                    "color": "#0F1115"
                  }
                },
                "text": "e.g. chasing unpaid invoices"
              },
              {
                "tag": "div",
                "key": "div-6",
                "style": {
                  "base": {
                    "height": "52px",
                    "padding-top": "0",
                    "padding-right": "22px",
                    "padding-bottom": "0",
                    "padding-left": "22px",
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
                    "border-top-left-radius": "10px",
                    "border-top-right-radius": "10px",
                    "border-bottom-right-radius": "10px",
                    "border-bottom-left-radius": "10px",
                    "cursor": "pointer",
                    "background-color": "#2D4BF0",
                    "color": "#FFFFFF",
                    "font-weight": "500",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center"
                  }
                },
                "text": "Show me"
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-12",
            "style": {
              "base": {
                "display": "flex",
                "flex-wrap": "wrap",
                "justify-content": "center",
                "row-gap": "8px",
                "column-gap": "8px"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-8",
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
                    "cursor": "pointer",
                    "font-size": "15px",
                    "border-top-width": "1px",
                    "border-top-style": "solid",
                    "border-top-color": "#0F1115",
                    "border-right-width": "1px",
                    "border-right-style": "solid",
                    "border-right-color": "#0F1115",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#0F1115",
                    "border-left-width": "1px",
                    "border-left-style": "solid",
                    "border-left-color": "#0F1115",
                    "background-color": "#0F1115",
                    "color": "#FFFFFF",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center"
                  }
                },
                "attrs": {
                  "aria-pressed": "true",
                  "data-blok-choice": ""
                },
                "text": "Chasing invoices"
              },
              {
                "tag": "div",
                "key": "div-9",
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
                    "cursor": "pointer",
                    "font-size": "15px",
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
                    "color": "#0F1115",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center"
                  }
                },
                "attrs": {
                  "aria-pressed": "false",
                  "data-blok-choice": ""
                },
                "text": "Building the schedule"
              },
              {
                "tag": "div",
                "key": "div-10",
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
                    "cursor": "pointer",
                    "font-size": "15px",
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
                    "color": "#0F1115",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center"
                  }
                },
                "attrs": {
                  "aria-pressed": "false",
                  "data-blok-choice": ""
                },
                "text": "Reminder calls"
              },
              {
                "tag": "div",
                "key": "div-11",
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
                    "cursor": "pointer",
                    "font-size": "15px",
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
                    "color": "#0F1115",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center"
                  }
                },
                "attrs": {
                  "aria-pressed": "false",
                  "data-blok-choice": ""
                },
                "text": "Planning routes"
              }
            ],
            "attrs": {
              "data-blok-choices": "",
              "data-blok-multi": ""
            }
          },
          {
            "tag": "div",
            "key": "div-20",
            "style": {
              "base": {
                "width": "100%",
                "margin-top": "8px",
                "text-align": "left",
                "border-top-left-radius": "18px",
                "border-top-right-radius": "18px",
                "border-bottom-right-radius": "18px",
                "border-bottom-left-radius": "18px",
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
                "overflow": "hidden"
              }
            },
            "attrs": {
              "role": "status"
            },
            "children": [
              {
                "tag": "div",
                "key": "div-15",
                "style": {
                  "base": {
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "space-between",
                    "row-gap": "12px",
                    "column-gap": "12px",
                    "padding-top": "16px",
                    "padding-right": "20px",
                    "padding-bottom": "16px",
                    "padding-left": "20px",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#ECEEE8"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-13",
                    "style": {
                      "base": {
                        "font-size": "18px",
                        "font-weight": "600",
                        "letter-spacing": "-0.015em"
                      }
                    },
                    "text": "Invoices that follow themselves up"
                  },
                  {
                    "tag": "div",
                    "key": "div-14",
                    "style": {
                      "base": {
                        "padding-top": "4px",
                        "padding-right": "10px",
                        "padding-bottom": "4px",
                        "padding-left": "10px",
                        "border-top-left-radius": "999px",
                        "border-top-right-radius": "999px",
                        "border-bottom-right-radius": "999px",
                        "border-bottom-left-radius": "999px",
                        "font-size": "12px",
                        "font-weight": "500",
                        "background-color": "#E8ECFE",
                        "color": "#2D4BF0"
                      }
                    },
                    "text": "Invoicing"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-19",
                "style": {
                  "base": {
                    "margin-top": "0",
                    "margin-right": "0",
                    "margin-bottom": "0",
                    "margin-left": "0",
                    "padding-top": "16px",
                    "padding-right": "20px",
                    "padding-bottom": "20px",
                    "padding-left": "40px",
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "10px",
                    "column-gap": "10px",
                    "font-size": "16px",
                    "line-height": "1.5",
                    "color": "#4E545D"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-16",
                    "text": "An invoice goes out by text the moment a job is marked done."
                  },
                  {
                    "tag": "div",
                    "key": "div-17",
                    "text": "Unpaid after [X] days? A polite reminder sends itself."
                  },
                  {
                    "tag": "div",
                    "key": "div-18",
                    "text": "Paid invoices sync to your books."
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
