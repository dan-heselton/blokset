import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "dev-01",
  "prefix": "dev01",
  "name": "Developers / Code tabs",
  "category": "dev",
  "collection": "saas",
  "description": "Developers / Code tabs for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "An API for the jobs your website books"
    },
    "subheading": {
      "type": "text",
      "default": "Create jobs from your own booking form, sync customers both ways and listen for events with webhooks."
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-7",
        "div-18"
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
        "key": "div-19",
        "style": {
          "base": {
            "max-width": "1200px",
            "margin-top": "0",
            "margin-right": "auto",
            "margin-bottom": "0",
            "margin-left": "auto",
            "display": "flex",
            "flex-wrap": "wrap",
            "row-gap": "48px",
            "column-gap": "48px",
            "align-items": "center"
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
                "flex-basis": "360px",
                "display": "flex",
                "flex-direction": "column",
                "row-gap": "20px",
                "column-gap": "20px"
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
                "text": "For developers"
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
                    "max-width": "440px",
                    "font-size": "17px",
                    "line-height": "1.6",
                    "color": "#4E545D"
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
                    "row-gap": "20px",
                    "column-gap": "20px",
                    "font-weight": "500"
                  }
                },
                "children": [
                  {
                    "tag": "a",
                    "key": "a-4",
                    "style": {
                      "base": {
                        "text-decoration": "none",
                        "color": "#2D4BF0"
                      }
                    },
                    "href": "#",
                    "text": "API reference →"
                  },
                  {
                    "tag": "a",
                    "key": "a-5",
                    "style": {
                      "base": {
                        "text-decoration": "none",
                        "color": "#2D4BF0"
                      }
                    },
                    "href": "#",
                    "text": "Webhook events →"
                  }
                ]
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-18",
            "style": {
              "base": {
                "flex-grow": "1.3",
                "flex-shrink": "1",
                "flex-basis": "480px",
                "min-width": "0",
                "border-top-left-radius": "16px",
                "border-top-right-radius": "16px",
                "border-bottom-right-radius": "16px",
                "border-bottom-left-radius": "16px",
                "background-color": "#0F1115",
                "overflow": "hidden",
                "box-shadow": "0 30px 60px -30px rgba(15,17,21,0.45)",
                "display": "flex",
                "flex-wrap": "wrap",
                "align-items": "baseline",
                "column-gap": "0.35rem"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-13",
                "style": {
                  "base": {
                    "display": "flex",
                    "justify-content": "space-between",
                    "align-items": "center",
                    "row-gap": "12px",
                    "column-gap": "12px",
                    "padding-top": "8px",
                    "padding-right": "8px",
                    "padding-bottom": "8px",
                    "padding-left": "12px",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#2C3037"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-11",
                    "style": {
                      "base": {
                        "display": "flex",
                        "row-gap": "4px",
                        "column-gap": "4px"
                      }
                    },
                    "attrs": {
                      "role": "tablist",
                      "aria-label": "Language",
                      "data-blok-choices": ""
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
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px",
                            "background-color": "#262A31",
                            "color": "#FFFFFF",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center"
                          }
                        },
                        "attrs": {
                          "role": "tab",
                          "aria-selected": "true",
                          "data-blok-choice": ""
                        },
                        "text": "cURL"
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
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px",
                            "background-color": "transparent",
                            "color": "#A7ADB6",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center"
                          }
                        },
                        "attrs": {
                          "role": "tab",
                          "aria-selected": "false",
                          "data-blok-choice": ""
                        },
                        "text": "JavaScript"
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
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px",
                            "background-color": "transparent",
                            "color": "#A7ADB6",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center"
                          }
                        },
                        "attrs": {
                          "role": "tab",
                          "aria-selected": "false",
                          "data-blok-choice": ""
                        },
                        "text": "Python"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-12",
                    "style": {
                      "base": {
                        "height": "40px",
                        "padding-top": "0",
                        "padding-right": "14px",
                        "padding-bottom": "0",
                        "padding-left": "14px",
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
                        "border-top-left-radius": "8px",
                        "border-top-right-radius": "8px",
                        "border-bottom-right-radius": "8px",
                        "border-bottom-left-radius": "8px",
                        "cursor": "pointer",
                        "font-size": "13px",
                        "background-color": "transparent",
                        "color": "#F4F5F1",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "text": "Copy"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-14",
                "style": {
                  "base": {
                    "margin-top": "0",
                    "margin-right": "0",
                    "margin-bottom": "0",
                    "margin-left": "0",
                    "padding-top": "22px",
                    "padding-right": "22px",
                    "padding-bottom": "22px",
                    "padding-left": "22px",
                    "overflow-x": "auto",
                    "font-family": "token(font-saas-mono)",
                    "font-size": "13.5px",
                    "line-height": "1.7",
                    "color": "#E6E8EC",
                    "white-space": "pre"
                  }
                },
                "attrs": {
                  "role": "tabpanel"
                },
                "text": "curl https://api.harborline.example/v1/jobs \\ -H \"Authorization: Bearer $HARBORLINE_KEY\" \\ -d customer_id=cus_2841 \\ -d service=\"Spring cleanup\" \\ -d window_start=2027-04-12T09:00:00Z"
              },
              {
                "tag": "div",
                "key": "div-17",
                "style": {
                  "base": {
                    "display": "flex",
                    "justify-content": "space-between",
                    "row-gap": "12px",
                    "column-gap": "12px",
                    "padding-top": "12px",
                    "padding-right": "22px",
                    "padding-bottom": "12px",
                    "padding-left": "22px",
                    "border-top-width": "1px",
                    "border-top-style": "solid",
                    "border-top-color": "#2C3037",
                    "font-family": "token(font-saas-mono)",
                    "font-size": "12px",
                    "color": "#A7ADB6"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-15",
                    "text": "POST /v1/jobs"
                  },
                  {
                    "tag": "div",
                    "key": "div-16",
                    "style": {
                      "base": {
                        "color": "#7FD69A"
                      }
                    },
                    "text": "201 Created"
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
