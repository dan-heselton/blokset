import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "cta-15",
  "prefix": "cta15",
  "name": "CTA / Email capture",
  "category": "cta",
  "collection": "saas",
  "description": "CTA / Email capture for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "Your next Tuesday could be quiet"
    },
    "subheading": {
      "type": "text",
      "default": "Start a free trial. No card, no sales call unless you want one."
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-3",
        "div-10"
      ]
    }
  },
  "tree": {
    "role": "section",
    "style": {
      "base": {
        "font-family": "token(font-saas)",
        "color": "#FFFFFF",
        "background-color": "#2D4BF0",
        "padding-top": "clamp(56px, 8vw, 96px)",
        "padding-right": "clamp(20px, 4vw, 48px)",
        "padding-bottom": "clamp(56px, 8vw, 96px)",
        "padding-left": "clamp(20px, 4vw, 48px)"
      }
    },
    "children": [
      {
        "tag": "div",
        "key": "div-11",
        "style": {
          "base": {
            "max-width": "1100px",
            "margin-top": "0",
            "margin-right": "auto",
            "margin-bottom": "0",
            "margin-left": "auto",
            "display": "flex",
            "flex-wrap": "wrap",
            "justify-content": "space-between",
            "align-items": "center",
            "row-gap": "36px",
            "column-gap": "36px"
          }
        },
        "children": [
          {
            "tag": "div",
            "key": "div-3",
            "style": {
              "base": {
                "flex-grow": "1",
                "flex-shrink": "1",
                "flex-basis": "420px",
                "display": "flex",
                "flex-direction": "column",
                "row-gap": "14px",
                "column-gap": "14px"
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
                    "font-size": "clamp(34px, 4.6vw, 60px)",
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
                    "color": "#DCE2FF"
                  }
                },
                "bind": "subheading"
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
                "flex-basis": "400px",
                "max-width": "480px"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-9",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "10px",
                    "column-gap": "10px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-4",
                    "style": {
                      "base": {
                        "font-size": "14px",
                        "font-weight": "500"
                      }
                    },
                    "text": "Work email"
                  },
                  {
                    "tag": "div",
                    "key": "div-7",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-wrap": "wrap",
                        "row-gap": "8px",
                        "column-gap": "8px",
                        "padding-top": "6px",
                        "padding-right": "6px",
                        "padding-bottom": "6px",
                        "padding-left": "6px",
                        "border-top-left-radius": "14px",
                        "border-top-right-radius": "14px",
                        "border-bottom-right-radius": "14px",
                        "border-bottom-left-radius": "14px",
                        "background-color": "#FFFFFF"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-5",
                        "style": {
                          "base": {
                            "flex-grow": "1",
                            "flex-shrink": "1",
                            "flex-basis": "200px",
                            "min-width": "0",
                            "height": "48px",
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
                            "outline": "none",
                            "background-color": "transparent",
                            "font-size": "16px",
                            "color": "#0F1115"
                          }
                        },
                        "attrs": {
                          "aria-invalid": "false",
                          "aria-describedby": "cta-msg"
                        },
                        "text": "you@company.com"
                      },
                      {
                        "tag": "div",
                        "key": "div-6",
                        "style": {
                          "base": {
                            "flex-grow": "0",
                            "flex-shrink": "0",
                            "flex-basis": "auto",
                            "height": "48px",
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
                            "font-weight": "500",
                            "background-color": "#0F1115",
                            "color": "#FFFFFF",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center"
                          }
                        },
                        "text": "Start free trial"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-8",
                    "style": {
                      "base": {
                        "min-height": "20px",
                        "font-size": "14px",
                        "color": "#DCE2FF"
                      }
                    },
                    "attrs": {
                      "role": "status"
                    },
                    "text": "Free for [TRIAL LENGTH]. Cancel any time."
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
    default: "accent",
    map: { section: { "background-color": "bg", color: "fg" } },
  }),
};
export default spec;
