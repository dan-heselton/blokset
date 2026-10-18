import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "dev-02",
  "prefix": "dev02",
  "name": "Developers / Endpoint explorer",
  "category": "dev",
  "collection": "saas",
  "description": "Developers / Endpoint explorer for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "A REST API that reads like your business"
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-5",
        "div-30"
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
        "padding-top": "clamp(56px, 8vw, 96px)",
        "padding-right": "clamp(20px, 4vw, 48px)",
        "padding-bottom": "clamp(56px, 8vw, 96px)",
        "padding-left": "clamp(20px, 4vw, 48px)"
      }
    },
    "children": [
      {
        "tag": "div",
        "key": "div-31",
        "style": {
          "base": {
            "max-width": "1200px",
            "margin-top": "0",
            "margin-right": "auto",
            "margin-bottom": "0",
            "margin-left": "auto",
            "display": "flex",
            "flex-direction": "column",
            "row-gap": "28px",
            "column-gap": "28px"
          }
        },
        "children": [
          {
            "tag": "div",
            "key": "div-5",
            "style": {
              "base": {
                "display": "flex",
                "flex-wrap": "wrap",
                "justify-content": "space-between",
                "align-items": "flex-end",
                "row-gap": "16px",
                "column-gap": "16px"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-3",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "14px",
                    "column-gap": "14px",
                    "max-width": "640px"
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
                    "text": "API"
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
                  }
                ]
              },
              {
                "tag": "a",
                "key": "a-4",
                "style": {
                  "base": {
                    "font-weight": "500",
                    "text-decoration": "none",
                    "color": "#AFC0FF"
                  }
                },
                "href": "#",
                "text": "Full reference →"
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-30",
            "style": {
              "base": {
                "display": "flex",
                "flex-wrap": "wrap",
                "border-top-left-radius": "18px",
                "border-top-right-radius": "18px",
                "border-bottom-right-radius": "18px",
                "border-bottom-left-radius": "18px",
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
                "overflow": "hidden",
                "background-color": "#181B20"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-21",
                "style": {
                  "base": {
                    "flex-grow": "1",
                    "flex-shrink": "1",
                    "flex-basis": "280px",
                    "max-width": "360px",
                    "padding-top": "10px",
                    "padding-right": "10px",
                    "padding-bottom": "10px",
                    "padding-left": "10px",
                    "border-right-width": "1px",
                    "border-right-style": "solid",
                    "border-right-color": "#2C3037",
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "4px",
                    "column-gap": "4px"
                  }
                },
                "attrs": {
                  "aria-label": "Endpoints"
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-8",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "row-gap": "10px",
                        "column-gap": "10px",
                        "min-height": "48px",
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
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "cursor": "pointer",
                        "text-align": "left",
                        "background-color": "#262A31",
                        "color": "#F4F5F1"
                      }
                    },
                    "attrs": {
                      "aria-current": "page"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-6",
                        "style": {
                          "base": {
                            "width": "54px",
                            "flex-shrink": "0",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "11px",
                            "font-weight": "500",
                            "padding-top": "4px",
                            "padding-right": "0",
                            "padding-bottom": "4px",
                            "padding-left": "0",
                            "text-align": "center",
                            "border-top-left-radius": "6px",
                            "border-top-right-radius": "6px",
                            "border-bottom-right-radius": "6px",
                            "border-bottom-left-radius": "6px",
                            "background-color": "#1E3A2A",
                            "color": "#8FD3A8"
                          }
                        },
                        "text": "GET"
                      },
                      {
                        "tag": "div",
                        "key": "div-7",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px"
                          }
                        },
                        "text": "/v1/jobs"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-11",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "row-gap": "10px",
                        "column-gap": "10px",
                        "min-height": "48px",
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
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "cursor": "pointer",
                        "text-align": "left",
                        "background-color": "transparent",
                        "color": "#F4F5F1"
                      }
                    },
                    "attrs": {
                      "aria-current": "false"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-9",
                        "style": {
                          "base": {
                            "width": "54px",
                            "flex-shrink": "0",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "11px",
                            "font-weight": "500",
                            "padding-top": "4px",
                            "padding-right": "0",
                            "padding-bottom": "4px",
                            "padding-left": "0",
                            "text-align": "center",
                            "border-top-left-radius": "6px",
                            "border-top-right-radius": "6px",
                            "border-bottom-right-radius": "6px",
                            "border-bottom-left-radius": "6px",
                            "background-color": "#1E2A55",
                            "color": "#AFC0FF"
                          }
                        },
                        "text": "POST"
                      },
                      {
                        "tag": "div",
                        "key": "div-10",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px"
                          }
                        },
                        "text": "/v1/jobs"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-14",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "row-gap": "10px",
                        "column-gap": "10px",
                        "min-height": "48px",
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
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "cursor": "pointer",
                        "text-align": "left",
                        "background-color": "transparent",
                        "color": "#F4F5F1"
                      }
                    },
                    "attrs": {
                      "aria-current": "false"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-12",
                        "style": {
                          "base": {
                            "width": "54px",
                            "flex-shrink": "0",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "11px",
                            "font-weight": "500",
                            "padding-top": "4px",
                            "padding-right": "0",
                            "padding-bottom": "4px",
                            "padding-left": "0",
                            "text-align": "center",
                            "border-top-left-radius": "6px",
                            "border-top-right-radius": "6px",
                            "border-bottom-right-radius": "6px",
                            "border-bottom-left-radius": "6px",
                            "background-color": "#3A2A1E",
                            "color": "#F2B48A"
                          }
                        },
                        "text": "PATCH"
                      },
                      {
                        "tag": "div",
                        "key": "div-13",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px"
                          }
                        },
                        "text": "/v1/jobs/:id"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-17",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "row-gap": "10px",
                        "column-gap": "10px",
                        "min-height": "48px",
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
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "cursor": "pointer",
                        "text-align": "left",
                        "background-color": "transparent",
                        "color": "#F4F5F1"
                      }
                    },
                    "attrs": {
                      "aria-current": "false"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-15",
                        "style": {
                          "base": {
                            "width": "54px",
                            "flex-shrink": "0",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "11px",
                            "font-weight": "500",
                            "padding-top": "4px",
                            "padding-right": "0",
                            "padding-bottom": "4px",
                            "padding-left": "0",
                            "text-align": "center",
                            "border-top-left-radius": "6px",
                            "border-top-right-radius": "6px",
                            "border-bottom-right-radius": "6px",
                            "border-bottom-left-radius": "6px",
                            "background-color": "#1E3A2A",
                            "color": "#8FD3A8"
                          }
                        },
                        "text": "GET"
                      },
                      {
                        "tag": "div",
                        "key": "div-16",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px"
                          }
                        },
                        "text": "/v1/customers"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-20",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "row-gap": "10px",
                        "column-gap": "10px",
                        "min-height": "48px",
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
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "cursor": "pointer",
                        "text-align": "left",
                        "background-color": "transparent",
                        "color": "#F4F5F1"
                      }
                    },
                    "attrs": {
                      "aria-current": "false"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-18",
                        "style": {
                          "base": {
                            "width": "54px",
                            "flex-shrink": "0",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "11px",
                            "font-weight": "500",
                            "padding-top": "4px",
                            "padding-right": "0",
                            "padding-bottom": "4px",
                            "padding-left": "0",
                            "text-align": "center",
                            "border-top-left-radius": "6px",
                            "border-top-right-radius": "6px",
                            "border-bottom-right-radius": "6px",
                            "border-bottom-left-radius": "6px",
                            "background-color": "#3A1E22",
                            "color": "#F29A9A"
                          }
                        },
                        "text": "DELETE"
                      },
                      {
                        "tag": "div",
                        "key": "div-19",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px"
                          }
                        },
                        "text": "/v1/jobs/:id"
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-29",
                "style": {
                  "base": {
                    "flex-grow": "999",
                    "flex-shrink": "1",
                    "flex-basis": "480px",
                    "min-width": "0",
                    "display": "flex",
                    "flex-direction": "column"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-24",
                    "style": {
                      "base": {
                        "padding-top": "18px",
                        "padding-right": "20px",
                        "padding-bottom": "18px",
                        "padding-left": "20px",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#2C3037",
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "6px",
                        "column-gap": "6px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-22",
                        "style": {
                          "base": {
                            "font-size": "18px",
                            "font-weight": "600"
                          }
                        },
                        "text": "List jobs"
                      },
                      {
                        "tag": "div",
                        "key": "div-23",
                        "style": {
                          "base": {
                            "font-size": "14px",
                            "color": "#A7ADB6"
                          }
                        },
                        "text": "Filter by date, crew or status."
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-27",
                    "style": {
                      "base": {
                        "display": "flex",
                        "row-gap": "4px",
                        "column-gap": "4px",
                        "padding-top": "10px",
                        "padding-right": "14px",
                        "padding-bottom": "0",
                        "padding-left": "14px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-25",
                        "style": {
                          "base": {
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
                            "border-bottom-right-radius": "0",
                            "border-bottom-left-radius": "0",
                            "cursor": "pointer",
                            "font-size": "13px",
                            "background-color": "#0B0D10",
                            "color": "#F4F5F1",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center"
                          }
                        },
                        "attrs": {
                          "aria-pressed": "true"
                        },
                        "text": "Request"
                      },
                      {
                        "tag": "div",
                        "key": "div-26",
                        "style": {
                          "base": {
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
                            "border-bottom-right-radius": "0",
                            "border-bottom-left-radius": "0",
                            "cursor": "pointer",
                            "font-size": "13px",
                            "background-color": "transparent",
                            "color": "#8C929B",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center"
                          }
                        },
                        "attrs": {
                          "aria-pressed": "false"
                        },
                        "text": "Response"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-28",
                    "style": {
                      "base": {
                        "margin-top": "0",
                        "margin-right": "14px",
                        "margin-bottom": "14px",
                        "margin-left": "14px",
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "0%",
                        "min-height": "240px",
                        "padding-top": "18px",
                        "padding-right": "18px",
                        "padding-bottom": "18px",
                        "padding-left": "18px",
                        "border-top-left-radius": "0",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "background-color": "#0B0D10",
                        "overflow": "auto",
                        "font-family": "token(font-saas-mono)",
                        "font-size": "13px",
                        "line-height": "1.7",
                        "color": "#C9CDD4"
                      }
                    },
                    "text": "curl https://api.harborline.example/v1/jobs?date=2026-10-13 \\ -H \"Authorization: Bearer $HARBORLINE_KEY\""
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
