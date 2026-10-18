import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "features-66",
  "prefix": "features66",
  "name": "Features / With and without",
  "category": "features",
  "collection": "saas",
  "description": "Features / With and without for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "Same day. Fewer tabs."
    },
    "subheading": {
      "type": "text",
      "default": "Everything above happened without you opening a laptop."
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-3",
        "div-6",
        "div-32"
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
            "max-width": "980px",
            "margin-top": "0",
            "margin-right": "auto",
            "margin-bottom": "0",
            "margin-left": "auto",
            "display": "flex",
            "flex-direction": "column",
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
                "display": "flex",
                "flex-direction": "column",
                "align-items": "center",
                "text-align": "center",
                "row-gap": "16px",
                "column-gap": "16px"
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
                "text": "A normal Tuesday"
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
                    "max-width": "720px",
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
            "key": "div-6",
            "style": {
              "base": {
                "display": "flex",
                "padding-top": "5px",
                "padding-right": "5px",
                "padding-bottom": "5px",
                "padding-left": "5px",
                "background-color": "#E5E7E1",
                "border-top-left-radius": "12px",
                "border-top-right-radius": "12px",
                "border-bottom-right-radius": "12px",
                "border-bottom-left-radius": "12px",
                "row-gap": "4px",
                "column-gap": "4px"
              }
            },
            "attrs": {
              "role": "radiogroup",
              "aria-label": "Compare your day",
              "data-blok-choices": ""
            },
            "children": [
              {
                "tag": "div",
                "key": "div-4",
                "style": {
                  "base": {
                    "height": "44px",
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
                    "border-top-left-radius": "9px",
                    "border-top-right-radius": "9px",
                    "border-bottom-right-radius": "9px",
                    "border-bottom-left-radius": "9px",
                    "cursor": "pointer",
                    "font-weight": "500",
                    "font-size": "15px",
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
                "text": "Without Harborline"
              },
              {
                "tag": "div",
                "key": "div-5",
                "style": {
                  "base": {
                    "height": "44px",
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
                    "border-top-left-radius": "9px",
                    "border-top-right-radius": "9px",
                    "border-bottom-right-radius": "9px",
                    "border-bottom-left-radius": "9px",
                    "cursor": "pointer",
                    "font-weight": "500",
                    "font-size": "15px",
                    "background-color": "#FFFFFF",
                    "color": "#0F1115",
                    "box-shadow": "0 1px 2px rgba(15,17,21,0.12)",
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
                "text": "With Harborline"
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-32",
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
                "width": "100%",
                "display": "flex",
                "flex-direction": "column",
                "row-gap": "10px",
                "column-gap": "10px"
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
                    "row-gap": "18px",
                    "column-gap": "18px",
                    "padding-top": "18px",
                    "padding-right": "20px",
                    "padding-bottom": "18px",
                    "padding-left": "20px",
                    "border-top-left-radius": "14px",
                    "border-top-right-radius": "14px",
                    "border-bottom-right-radius": "14px",
                    "border-bottom-left-radius": "14px",
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
                "children": [
                  {
                    "tag": "div",
                    "key": "div-7",
                    "style": {
                      "base": {
                        "font-family": "token(font-saas-mono)",
                        "font-size": "13px",
                        "color": "#5B616B",
                        "min-width": "56px"
                      }
                    },
                    "text": "—"
                  },
                  {
                    "tag": "div",
                    "key": "div-8",
                    "style": {
                      "base": {
                        "flex-shrink": "0",
                        "width": "28px",
                        "height": "28px",
                        "border-top-left-radius": "50%",
                        "border-top-right-radius": "50%",
                        "border-bottom-right-radius": "50%",
                        "border-bottom-left-radius": "50%",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "font-size": "14px",
                        "font-weight": "600",
                        "background-color": "#E5F4EA",
                        "color": "#1D6B3A"
                      }
                    },
                    "attrs": {
                      "aria-hidden": "true"
                    },
                    "text": "✓"
                  },
                  {
                    "tag": "div",
                    "key": "div-9",
                    "style": {
                      "base": {
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "0%",
                        "font-size": "17px",
                        "line-height": "1.4",
                        "color": "#0F1115"
                      }
                    },
                    "text": "Reminders went out yesterday, automatically"
                  },
                  {
                    "tag": "div",
                    "key": "div-10",
                    "style": {
                      "base": {
                        "font-family": "token(font-saas-mono)",
                        "font-size": "12px",
                        "color": "#2D4BF0"
                      }
                    },
                    "text": "Harborline"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-16",
                "style": {
                  "base": {
                    "display": "flex",
                    "align-items": "center",
                    "row-gap": "18px",
                    "column-gap": "18px",
                    "padding-top": "18px",
                    "padding-right": "20px",
                    "padding-bottom": "18px",
                    "padding-left": "20px",
                    "border-top-left-radius": "14px",
                    "border-top-right-radius": "14px",
                    "border-bottom-right-radius": "14px",
                    "border-bottom-left-radius": "14px",
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
                "children": [
                  {
                    "tag": "div",
                    "key": "div-12",
                    "style": {
                      "base": {
                        "font-family": "token(font-saas-mono)",
                        "font-size": "13px",
                        "color": "#5B616B",
                        "min-width": "56px"
                      }
                    },
                    "text": "—"
                  },
                  {
                    "tag": "div",
                    "key": "div-13",
                    "style": {
                      "base": {
                        "flex-shrink": "0",
                        "width": "28px",
                        "height": "28px",
                        "border-top-left-radius": "50%",
                        "border-top-right-radius": "50%",
                        "border-bottom-right-radius": "50%",
                        "border-bottom-left-radius": "50%",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "font-size": "14px",
                        "font-weight": "600",
                        "background-color": "#E5F4EA",
                        "color": "#1D6B3A"
                      }
                    },
                    "attrs": {
                      "aria-hidden": "true"
                    },
                    "text": "✓"
                  },
                  {
                    "tag": "div",
                    "key": "div-14",
                    "style": {
                      "base": {
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "0%",
                        "font-size": "17px",
                        "line-height": "1.4",
                        "color": "#0F1115"
                      }
                    },
                    "text": "Crews opened the route on their phones"
                  },
                  {
                    "tag": "div",
                    "key": "div-15",
                    "style": {
                      "base": {
                        "font-family": "token(font-saas-mono)",
                        "font-size": "12px",
                        "color": "#2D4BF0"
                      }
                    },
                    "text": "Harborline"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-21",
                "style": {
                  "base": {
                    "display": "flex",
                    "align-items": "center",
                    "row-gap": "18px",
                    "column-gap": "18px",
                    "padding-top": "18px",
                    "padding-right": "20px",
                    "padding-bottom": "18px",
                    "padding-left": "20px",
                    "border-top-left-radius": "14px",
                    "border-top-right-radius": "14px",
                    "border-bottom-right-radius": "14px",
                    "border-bottom-left-radius": "14px",
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
                "children": [
                  {
                    "tag": "div",
                    "key": "div-17",
                    "style": {
                      "base": {
                        "font-family": "token(font-saas-mono)",
                        "font-size": "13px",
                        "color": "#5B616B",
                        "min-width": "56px"
                      }
                    },
                    "text": "—"
                  },
                  {
                    "tag": "div",
                    "key": "div-18",
                    "style": {
                      "base": {
                        "flex-shrink": "0",
                        "width": "28px",
                        "height": "28px",
                        "border-top-left-radius": "50%",
                        "border-top-right-radius": "50%",
                        "border-bottom-right-radius": "50%",
                        "border-bottom-left-radius": "50%",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "font-size": "14px",
                        "font-weight": "600",
                        "background-color": "#E5F4EA",
                        "color": "#1D6B3A"
                      }
                    },
                    "attrs": {
                      "aria-hidden": "true"
                    },
                    "text": "✓"
                  },
                  {
                    "tag": "div",
                    "key": "div-19",
                    "style": {
                      "base": {
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "0%",
                        "font-size": "17px",
                        "line-height": "1.4",
                        "color": "#0F1115"
                      }
                    },
                    "text": "Customers got an on-the-way text"
                  },
                  {
                    "tag": "div",
                    "key": "div-20",
                    "style": {
                      "base": {
                        "font-family": "token(font-saas-mono)",
                        "font-size": "12px",
                        "color": "#2D4BF0"
                      }
                    },
                    "text": "Harborline"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-26",
                "style": {
                  "base": {
                    "display": "flex",
                    "align-items": "center",
                    "row-gap": "18px",
                    "column-gap": "18px",
                    "padding-top": "18px",
                    "padding-right": "20px",
                    "padding-bottom": "18px",
                    "padding-left": "20px",
                    "border-top-left-radius": "14px",
                    "border-top-right-radius": "14px",
                    "border-bottom-right-radius": "14px",
                    "border-bottom-left-radius": "14px",
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
                "children": [
                  {
                    "tag": "div",
                    "key": "div-22",
                    "style": {
                      "base": {
                        "font-family": "token(font-saas-mono)",
                        "font-size": "13px",
                        "color": "#5B616B",
                        "min-width": "56px"
                      }
                    },
                    "text": "15:40"
                  },
                  {
                    "tag": "div",
                    "key": "div-23",
                    "style": {
                      "base": {
                        "flex-shrink": "0",
                        "width": "28px",
                        "height": "28px",
                        "border-top-left-radius": "50%",
                        "border-top-right-radius": "50%",
                        "border-bottom-right-radius": "50%",
                        "border-bottom-left-radius": "50%",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "font-size": "14px",
                        "font-weight": "600",
                        "background-color": "#E5F4EA",
                        "color": "#1D6B3A"
                      }
                    },
                    "attrs": {
                      "aria-hidden": "true"
                    },
                    "text": "✓"
                  },
                  {
                    "tag": "div",
                    "key": "div-24",
                    "style": {
                      "base": {
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "0%",
                        "font-size": "17px",
                        "line-height": "1.4",
                        "color": "#0F1115"
                      }
                    },
                    "text": "Invoices sent as each job closed"
                  },
                  {
                    "tag": "div",
                    "key": "div-25",
                    "style": {
                      "base": {
                        "font-family": "token(font-saas-mono)",
                        "font-size": "12px",
                        "color": "#2D4BF0"
                      }
                    },
                    "text": "Harborline"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-31",
                "style": {
                  "base": {
                    "display": "flex",
                    "align-items": "center",
                    "row-gap": "18px",
                    "column-gap": "18px",
                    "padding-top": "18px",
                    "padding-right": "20px",
                    "padding-bottom": "18px",
                    "padding-left": "20px",
                    "border-top-left-radius": "14px",
                    "border-top-right-radius": "14px",
                    "border-bottom-right-radius": "14px",
                    "border-bottom-left-radius": "14px",
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
                "children": [
                  {
                    "tag": "div",
                    "key": "div-27",
                    "style": {
                      "base": {
                        "font-family": "token(font-saas-mono)",
                        "font-size": "13px",
                        "color": "#5B616B",
                        "min-width": "56px"
                      }
                    },
                    "text": "16:00"
                  },
                  {
                    "tag": "div",
                    "key": "div-28",
                    "style": {
                      "base": {
                        "flex-shrink": "0",
                        "width": "28px",
                        "height": "28px",
                        "border-top-left-radius": "50%",
                        "border-top-right-radius": "50%",
                        "border-bottom-right-radius": "50%",
                        "border-bottom-left-radius": "50%",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "font-size": "14px",
                        "font-weight": "600",
                        "background-color": "#E5F4EA",
                        "color": "#1D6B3A"
                      }
                    },
                    "attrs": {
                      "aria-hidden": "true"
                    },
                    "text": "✓"
                  },
                  {
                    "tag": "div",
                    "key": "div-29",
                    "style": {
                      "base": {
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "0%",
                        "font-size": "17px",
                        "line-height": "1.4",
                        "color": "#0F1115"
                      }
                    },
                    "text": "Card on file paid the overdue ones"
                  },
                  {
                    "tag": "div",
                    "key": "div-30",
                    "style": {
                      "base": {
                        "font-family": "token(font-saas-mono)",
                        "font-size": "12px",
                        "color": "#2D4BF0"
                      }
                    },
                    "text": "Harborline"
                  }
                ]
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
                "font-size": "15px",
                "color": "#4E545D",
                "text-align": "center"
              }
            },
            "bind": "subheading"
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
