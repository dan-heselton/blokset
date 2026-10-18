import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "cta-17",
  "prefix": "cta17",
  "name": "CTA / Trial or sales",
  "category": "cta",
  "collection": "saas",
  "description": "CTA / Trial or sales for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "Ready when you are"
    },
    "subheading": {
      "type": "text",
      "default": "No card. Set up in an afternoon. Cancel any time."
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-4",
        "subheading",
        "div-12"
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
        "padding-top": "clamp(56px, 7vw, 88px)",
        "padding-right": "clamp(20px, 4vw, 48px)",
        "padding-bottom": "clamp(56px, 7vw, 88px)",
        "padding-left": "clamp(20px, 4vw, 48px)"
      }
    },
    "children": [
      {
        "tag": "div",
        "key": "div-13",
        "style": {
          "base": {
            "max-width": "720px",
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
            "tag": "h2",
            "key": "heading",
            "style": {
              "base": {
                "margin-top": "0",
                "margin-right": "0",
                "margin-bottom": "0",
                "margin-left": "0",
                "font-size": "clamp(36px, 5vw, 64px)",
                "line-height": "0.98",
                "letter-spacing": "-0.05em",
                "font-weight": "600"
              }
            },
            "bind": "heading"
          },
          {
            "tag": "div",
            "key": "div-4",
            "style": {
              "base": {
                "display": "flex",
                "padding-top": "4px",
                "padding-right": "4px",
                "padding-bottom": "4px",
                "padding-left": "4px",
                "border-top-left-radius": "999px",
                "border-top-right-radius": "999px",
                "border-bottom-right-radius": "999px",
                "border-bottom-left-radius": "999px",
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
                "border-left-color": "#DDE0D8"
              }
            },
            "attrs": {
              "role": "radiogroup",
              "aria-label": "How to start",
              "data-blok-choices": ""
            },
            "children": [
              {
                "tag": "div",
                "key": "div-2",
                "style": {
                  "base": {
                    "height": "44px",
                    "padding-top": "0",
                    "padding-right": "20px",
                    "padding-bottom": "0",
                    "padding-left": "20px",
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
                    "border-top-left-radius": "999px",
                    "border-top-right-radius": "999px",
                    "border-bottom-right-radius": "999px",
                    "border-bottom-left-radius": "999px",
                    "cursor": "pointer",
                    "font-size": "15px",
                    "font-weight": "500",
                    "background-color": "#0F1115",
                    "color": "#FFFFFF",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center"
                  }
                },
                "attrs": {
                  "role": "radio",
                  "aria-checked": "true",
                  "data-blok-choice": ""
                },
                "text": "Start free trial"
              },
              {
                "tag": "div",
                "key": "div-3",
                "style": {
                  "base": {
                    "height": "44px",
                    "padding-top": "0",
                    "padding-right": "20px",
                    "padding-bottom": "0",
                    "padding-left": "20px",
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
                    "border-top-left-radius": "999px",
                    "border-top-right-radius": "999px",
                    "border-bottom-right-radius": "999px",
                    "border-bottom-left-radius": "999px",
                    "cursor": "pointer",
                    "font-size": "15px",
                    "font-weight": "500",
                    "background-color": "transparent",
                    "color": "#4E545D",
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
                "text": "Talk to sales"
              }
            ]
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
          },
          {
            "tag": "div",
            "key": "div-12",
            "style": {
              "base": {
                "width": "100%",
                "display": "flex",
                "flex-direction": "column",
                "row-gap": "10px",
                "column-gap": "10px",
                "text-align": "left"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-9",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-wrap": "wrap",
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
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "260px",
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "6px",
                        "column-gap": "6px",
                        "font-size": "14px",
                        "font-weight": "500"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "text-7",
                        "text": "Work email"
                      },
                      {
                        "tag": "div",
                        "key": "div-6",
                        "style": {
                          "base": {
                            "height": "50px",
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
                            "background-color": "#FFFFFF",
                            "font-size": "16px",
                            "color": "#0F1115"
                          }
                        },
                        "attrs": {
                          "aria-invalid": "false"
                        },
                        "text": "you@company.com"
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-10",
                "style": {
                  "base": {
                    "height": "52px",
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
                    "font-size": "16px",
                    "background-color": "#2D4BF0",
                    "color": "#FFFFFF",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center"
                  }
                },
                "text": "Create my account"
              },
              {
                "tag": "div",
                "key": "div-11",
                "style": {
                  "base": {
                    "min-height": "20px",
                    "font-size": "14px",
                    "text-align": "center",
                    "color": "#5B616B"
                  }
                },
                "attrs": {
                  "role": "status"
                },
                "text": "Free for [TRIAL LENGTH]."
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
