import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "import-01",
  "prefix": "import01",
  "name": "Import / Migration picker",
  "category": "import",
  "collection": "saas",
  "description": "Import / Migration picker for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "Where do your jobs live today?"
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-3",
        "div-16",
        "div-33"
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
        "key": "div-34",
        "style": {
          "base": {
            "max-width": "1200px",
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
            "key": "div-3",
            "style": {
              "base": {
                "display": "flex",
                "flex-direction": "column",
                "row-gap": "16px",
                "column-gap": "16px",
                "max-width": "700px"
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
                "text": "Switching"
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
            "tag": "div",
            "key": "div-16",
            "style": {
              "base": {
                "display": "grid",
                "grid-template-columns": "1fr",
                "row-gap": "12px",
                "column-gap": "12px"
              },
              "md": {
                "grid-template-columns": "repeat(2, minmax(0, 1fr))"
              },
              "lg": {
                "grid-template-columns": "repeat(3, minmax(0, 1fr))"
              }
            },
            "attrs": {
              "role": "radiogroup",
              "aria-label": "Current system",
              "data-blok-choices": ""
            },
            "children": [
              {
                "tag": "div",
                "key": "div-7",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "align-items": "flex-start",
                    "row-gap": "10px",
                    "column-gap": "10px",
                    "padding-top": "22px",
                    "padding-right": "22px",
                    "padding-bottom": "22px",
                    "padding-left": "22px",
                    "min-height": "140px",
                    "border-top-left-radius": "16px",
                    "border-top-right-radius": "16px",
                    "border-bottom-right-radius": "16px",
                    "border-bottom-left-radius": "16px",
                    "cursor": "pointer",
                    "text-align": "left",
                    "border-top-width": "2px",
                    "border-top-style": "solid",
                    "border-top-color": "#0F1115",
                    "border-right-width": "2px",
                    "border-right-style": "solid",
                    "border-right-color": "#0F1115",
                    "border-bottom-width": "2px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#0F1115",
                    "border-left-width": "2px",
                    "border-left-style": "solid",
                    "border-left-color": "#0F1115",
                    "background-color": "#FFFFFF",
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
                    "key": "div-4",
                    "style": {
                      "base": {
                        "width": "40px",
                        "height": "40px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "font-family": "token(font-saas-mono)",
                        "font-size": "15px",
                        "font-weight": "500",
                        "background-color": "#E5F4EA",
                        "color": "#1D6B3A"
                      }
                    },
                    "attrs": {
                      "aria-hidden": "true"
                    },
                    "text": "▦"
                  },
                  {
                    "tag": "div",
                    "key": "div-5",
                    "style": {
                      "base": {
                        "font-size": "18px",
                        "font-weight": "600",
                        "letter-spacing": "-0.015em"
                      }
                    },
                    "text": "A spreadsheet"
                  },
                  {
                    "tag": "div",
                    "key": "div-6",
                    "style": {
                      "base": {
                        "font-size": "14px",
                        "color": "#4E545D"
                      }
                    },
                    "text": "Customers and jobs in rows"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-11",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "align-items": "flex-start",
                    "row-gap": "10px",
                    "column-gap": "10px",
                    "padding-top": "22px",
                    "padding-right": "22px",
                    "padding-bottom": "22px",
                    "padding-left": "22px",
                    "min-height": "140px",
                    "border-top-left-radius": "16px",
                    "border-top-right-radius": "16px",
                    "border-bottom-right-radius": "16px",
                    "border-bottom-left-radius": "16px",
                    "cursor": "pointer",
                    "text-align": "left",
                    "border-top-width": "2px",
                    "border-top-style": "solid",
                    "border-top-color": "#DDE0D8",
                    "border-right-width": "2px",
                    "border-right-style": "solid",
                    "border-right-color": "#DDE0D8",
                    "border-bottom-width": "2px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#DDE0D8",
                    "border-left-width": "2px",
                    "border-left-style": "solid",
                    "border-left-color": "#DDE0D8",
                    "background-color": "#FAFBF8",
                    "color": "#0F1115"
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
                    "key": "div-8",
                    "style": {
                      "base": {
                        "width": "40px",
                        "height": "40px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "font-family": "token(font-saas-mono)",
                        "font-size": "15px",
                        "font-weight": "500",
                        "background-color": "#E8ECFE",
                        "color": "#2D4BF0"
                      }
                    },
                    "attrs": {
                      "aria-hidden": "true"
                    },
                    "text": "⇄"
                  },
                  {
                    "tag": "div",
                    "key": "div-9",
                    "style": {
                      "base": {
                        "font-size": "18px",
                        "font-weight": "600",
                        "letter-spacing": "-0.015em"
                      }
                    },
                    "text": "Another app"
                  },
                  {
                    "tag": "div",
                    "key": "div-10",
                    "style": {
                      "base": {
                        "font-size": "14px",
                        "color": "#4E545D"
                      }
                    },
                    "text": "A scheduling or CRM tool"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-15",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "align-items": "flex-start",
                    "row-gap": "10px",
                    "column-gap": "10px",
                    "padding-top": "22px",
                    "padding-right": "22px",
                    "padding-bottom": "22px",
                    "padding-left": "22px",
                    "min-height": "140px",
                    "border-top-left-radius": "16px",
                    "border-top-right-radius": "16px",
                    "border-bottom-right-radius": "16px",
                    "border-bottom-left-radius": "16px",
                    "cursor": "pointer",
                    "text-align": "left",
                    "border-top-width": "2px",
                    "border-top-style": "solid",
                    "border-top-color": "#DDE0D8",
                    "border-right-width": "2px",
                    "border-right-style": "solid",
                    "border-right-color": "#DDE0D8",
                    "border-bottom-width": "2px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#DDE0D8",
                    "border-left-width": "2px",
                    "border-left-style": "solid",
                    "border-left-color": "#DDE0D8",
                    "background-color": "#FAFBF8",
                    "color": "#0F1115"
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
                    "key": "div-12",
                    "style": {
                      "base": {
                        "width": "40px",
                        "height": "40px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "font-family": "token(font-saas-mono)",
                        "font-size": "15px",
                        "font-weight": "500",
                        "background-color": "#FDEFE4",
                        "color": "#9A4A12"
                      }
                    },
                    "attrs": {
                      "aria-hidden": "true"
                    },
                    "text": "✎"
                  },
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
                    "text": "Paper and memory"
                  },
                  {
                    "tag": "div",
                    "key": "div-14",
                    "style": {
                      "base": {
                        "font-size": "14px",
                        "color": "#4E545D"
                      }
                    },
                    "text": "Notebooks, texts, a whiteboard"
                  }
                ]
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-33",
            "style": {
              "base": {
                "display": "flex",
                "flex-wrap": "wrap",
                "row-gap": "28px",
                "column-gap": "28px",
                "padding-top": "clamp(22px, 3vw, 34px)",
                "padding-right": "clamp(22px, 3vw, 34px)",
                "padding-bottom": "clamp(22px, 3vw, 34px)",
                "padding-left": "clamp(22px, 3vw, 34px)",
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
                "border-top-left-radius": "20px",
                "border-top-right-radius": "20px",
                "border-bottom-right-radius": "20px",
                "border-bottom-left-radius": "20px"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-20",
                "style": {
                  "base": {
                    "flex-grow": "1",
                    "flex-shrink": "1",
                    "flex-basis": "260px",
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "10px",
                    "column-gap": "10px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-17",
                    "style": {
                      "base": {
                        "font-family": "token(font-saas-mono)",
                        "font-size": "12px",
                        "letter-spacing": "0.08em",
                        "text-transform": "uppercase",
                        "color": "#5B616B"
                      }
                    },
                    "text": "Your move"
                  },
                  {
                    "tag": "div",
                    "key": "div-18",
                    "style": {
                      "base": {
                        "font-size": "24px",
                        "font-weight": "600",
                        "letter-spacing": "-0.02em"
                      }
                    },
                    "text": "Upload it as is"
                  },
                  {
                    "tag": "div",
                    "key": "div-19",
                    "style": {
                      "base": {
                        "font-size": "15px",
                        "color": "#4E545D"
                      }
                    },
                    "text": "Typical setup time: [TIME]"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-32",
                "style": {
                  "base": {
                    "flex-grow": "2",
                    "flex-shrink": "1",
                    "flex-basis": "460px",
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
                    "flex-direction": "column",
                    "row-gap": "12px",
                    "column-gap": "12px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-23",
                    "style": {
                      "base": {
                        "display": "flex",
                        "row-gap": "14px",
                        "column-gap": "14px",
                        "align-items": "flex-start"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-21",
                        "style": {
                          "base": {
                            "flex-shrink": "0",
                            "width": "28px",
                            "height": "28px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "background-color": "#0F1115",
                            "color": "#FFFFFF",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "font-size": "13px",
                            "font-weight": "600"
                          }
                        },
                        "text": "1"
                      },
                      {
                        "tag": "div",
                        "key": "div-22",
                        "style": {
                          "base": {
                            "font-size": "16px",
                            "line-height": "1.55",
                            "padding-top": "3px"
                          }
                        },
                        "text": "Export your sheet as CSV or upload the file directly."
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-26",
                    "style": {
                      "base": {
                        "display": "flex",
                        "row-gap": "14px",
                        "column-gap": "14px",
                        "align-items": "flex-start"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-24",
                        "style": {
                          "base": {
                            "flex-shrink": "0",
                            "width": "28px",
                            "height": "28px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "background-color": "#0F1115",
                            "color": "#FFFFFF",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "font-size": "13px",
                            "font-weight": "600"
                          }
                        },
                        "text": "2"
                      },
                      {
                        "tag": "div",
                        "key": "div-25",
                        "style": {
                          "base": {
                            "font-size": "16px",
                            "line-height": "1.55",
                            "padding-top": "3px"
                          }
                        },
                        "text": "Match your columns to ours. We guess most of them."
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-29",
                    "style": {
                      "base": {
                        "display": "flex",
                        "row-gap": "14px",
                        "column-gap": "14px",
                        "align-items": "flex-start"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-27",
                        "style": {
                          "base": {
                            "flex-shrink": "0",
                            "width": "28px",
                            "height": "28px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "background-color": "#0F1115",
                            "color": "#FFFFFF",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "font-size": "13px",
                            "font-weight": "600"
                          }
                        },
                        "text": "3"
                      },
                      {
                        "tag": "div",
                        "key": "div-28",
                        "style": {
                          "base": {
                            "font-size": "16px",
                            "line-height": "1.55",
                            "padding-top": "3px"
                          }
                        },
                        "text": "Review the preview and import. Nothing goes live until you say so."
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-31",
                    "style": {
                      "base": {
                        "padding-left": "42px",
                        "display": "flex",
                        "flex-wrap": "wrap",
                        "align-items": "baseline",
                        "column-gap": "0.35rem"
                      }
                    },
                    "children": [
                      {
                        "tag": "a",
                        "key": "a-30",
                        "style": {
                          "base": {
                            "font-weight": "500",
                            "text-decoration": "none",
                            "color": "#2D4BF0"
                          }
                        },
                        "href": "#",
                        "text": "See the import guide →"
                      }
                    ]
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
