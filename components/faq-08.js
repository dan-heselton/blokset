import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "faq-08",
  "prefix": "faq08",
  "name": "FAQ / Category split",
  "category": "faq",
  "collection": "saas",
  "description": "FAQ / Category split for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "Good questions"
    },
    "subheading": {
      "type": "text",
      "default": "Most teams add services and customers in an afternoon. [Confirm typical time.]"
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-20",
        "div-39"
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
        "padding-top": "clamp(56px, 8vw, 96px)",
        "padding-right": "clamp(20px, 4vw, 48px)",
        "padding-bottom": "clamp(56px, 8vw, 96px)",
        "padding-left": "clamp(20px, 4vw, 48px)"
      }
    },
    "children": [
      {
        "tag": "div",
        "key": "div-40",
        "style": {
          "base": {
            "max-width": "1200px",
            "margin-top": "0",
            "margin-right": "auto",
            "margin-bottom": "0",
            "margin-left": "auto",
            "display": "flex",
            "flex-wrap": "wrap",
            "row-gap": "clamp(28px, 5vw, 64px)",
            "column-gap": "clamp(28px, 5vw, 64px)"
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
                "flex-basis": "300px",
                "max-width": "380px",
                "display": "flex",
                "flex-direction": "column",
                "row-gap": "22px",
                "column-gap": "22px"
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
                "tag": "div",
                "key": "div-15",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "4px",
                    "column-gap": "4px"
                  }
                },
                "attrs": {
                  "role": "tablist",
                  "aria-orientation": "vertical",
                  "aria-label": "Topics",
                  "data-blok-choices": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-5",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "align-items": "center",
                        "min-height": "48px",
                        "padding-top": "0",
                        "padding-right": "16px",
                        "padding-bottom": "0",
                        "padding-left": "16px",
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
                        "cursor": "pointer",
                        "text-align": "left",
                        "font-size": "16px",
                        "font-weight": "500",
                        "background-color": "#0F1115",
                        "color": "#FFFFFF"
                      }
                    },
                    "attrs": {
                      "role": "tab",
                      "aria-selected": "true",
                      "data-blok-choice": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-3",
                        "text": "Getting started"
                      },
                      {
                        "tag": "div",
                        "key": "div-4",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "opacity": "0.7"
                          }
                        },
                        "text": "3"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-8",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "align-items": "center",
                        "min-height": "48px",
                        "padding-top": "0",
                        "padding-right": "16px",
                        "padding-bottom": "0",
                        "padding-left": "16px",
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
                        "cursor": "pointer",
                        "text-align": "left",
                        "font-size": "16px",
                        "font-weight": "500",
                        "background-color": "transparent",
                        "color": "#0F1115"
                      }
                    },
                    "attrs": {
                      "role": "tab",
                      "aria-selected": "false",
                      "data-blok-choice": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-6",
                        "text": "Billing"
                      },
                      {
                        "tag": "div",
                        "key": "div-7",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "opacity": "0.7"
                          }
                        },
                        "text": "3"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-11",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "align-items": "center",
                        "min-height": "48px",
                        "padding-top": "0",
                        "padding-right": "16px",
                        "padding-bottom": "0",
                        "padding-left": "16px",
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
                        "cursor": "pointer",
                        "text-align": "left",
                        "font-size": "16px",
                        "font-weight": "500",
                        "background-color": "transparent",
                        "color": "#0F1115"
                      }
                    },
                    "attrs": {
                      "role": "tab",
                      "aria-selected": "false",
                      "data-blok-choice": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-9",
                        "text": "Crews and app"
                      },
                      {
                        "tag": "div",
                        "key": "div-10",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "opacity": "0.7"
                          }
                        },
                        "text": "2"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-14",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "align-items": "center",
                        "min-height": "48px",
                        "padding-top": "0",
                        "padding-right": "16px",
                        "padding-bottom": "0",
                        "padding-left": "16px",
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
                        "cursor": "pointer",
                        "text-align": "left",
                        "font-size": "16px",
                        "font-weight": "500",
                        "background-color": "transparent",
                        "color": "#0F1115"
                      }
                    },
                    "attrs": {
                      "role": "tab",
                      "aria-selected": "false",
                      "data-blok-choice": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-12",
                        "text": "Data and security"
                      },
                      {
                        "tag": "div",
                        "key": "div-13",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "opacity": "0.7"
                          }
                        },
                        "text": "3"
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-19",
                "style": {
                  "base": {
                    "padding-top": "20px",
                    "padding-right": "20px",
                    "padding-bottom": "20px",
                    "padding-left": "20px",
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
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "8px",
                    "column-gap": "8px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-16",
                    "style": {
                      "base": {
                        "font-size": "16px",
                        "font-weight": "600"
                      }
                    },
                    "text": "Still stuck?"
                  },
                  {
                    "tag": "div",
                    "key": "div-17",
                    "style": {
                      "base": {
                        "font-size": "14px",
                        "line-height": "1.5",
                        "color": "#4E545D"
                      }
                    },
                    "text": "A real person answers within [response time]."
                  },
                  {
                    "tag": "a",
                    "key": "a-18",
                    "style": {
                      "base": {
                        "font-weight": "500",
                        "text-decoration": "none",
                        "color": "#2D4BF0"
                      }
                    },
                    "href": "#",
                    "text": "Message support →"
                  }
                ]
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-39",
            "style": {
              "base": {
                "flex-grow": "999",
                "flex-shrink": "1",
                "flex-basis": "520px",
                "min-width": "0",
                "display": "flex",
                "flex-direction": "column",
                "row-gap": "10px",
                "column-gap": "10px"
              }
            },
            "attrs": {
              "role": "tabpanel",
              "data-blok-accordion": ""
            },
            "children": [
              {
                "tag": "div",
                "key": "div-26",
                "style": {
                  "base": {
                    "border-top-left-radius": "16px",
                    "border-top-right-radius": "16px",
                    "border-bottom-right-radius": "16px",
                    "border-bottom-left-radius": "16px",
                    "background-color": "#FFFFFF",
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
                    "border-left-color": "#CFD3CA"
                  }
                },
                "attrs": {
                  "data-blok-acc-item": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-23",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "align-items": "center",
                        "row-gap": "16px",
                        "column-gap": "16px",
                        "width": "100%",
                        "min-height": "68px",
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
                        "background-color": "transparent",
                        "cursor": "pointer",
                        "text-align": "left",
                        "color": "#0F1115"
                      }
                    },
                    "attrs": {
                      "aria-expanded": "true",
                      "data-blok-acc-trigger": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-21",
                        "style": {
                          "base": {
                            "font-size": "18px",
                            "font-weight": "600",
                            "letter-spacing": "-0.01em"
                          }
                        },
                        "text": "How long does setup take?"
                      },
                      {
                        "tag": "div",
                        "key": "div-22",
                        "style": {
                          "base": {
                            "flex-shrink": "0",
                            "font-size": "14px",
                            "color": "#5B616B",
                            "transform": "rotate(180deg)",
                            "transition": "transform 180ms ease"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true",
                          "data-blok-acc-icon": ""
                        },
                        "text": "▾"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "panel-25",
                    "attrs": {
                      "data-blok-acc-panel": ""
                    },
                    "children": [
                      {
                        "tag": "p",
                        "key": "subheading",
                        "style": {
                          "base": {
                            "margin-top": "0",
                            "margin-right": "0",
                            "margin-bottom": "0",
                            "margin-left": "0",
                            "padding-top": "0",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
                            "padding-left": "22px",
                            "font-size": "16px",
                            "line-height": "1.6",
                            "color": "#4E545D"
                          }
                        },
                        "bind": "subheading"
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-32",
                "style": {
                  "base": {
                    "border-top-left-radius": "16px",
                    "border-top-right-radius": "16px",
                    "border-bottom-right-radius": "16px",
                    "border-bottom-left-radius": "16px",
                    "background-color": "#FFFFFF",
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
                "attrs": {
                  "data-blok-acc-item": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-29",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "align-items": "center",
                        "row-gap": "16px",
                        "column-gap": "16px",
                        "width": "100%",
                        "min-height": "68px",
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
                        "background-color": "transparent",
                        "cursor": "pointer",
                        "text-align": "left",
                        "color": "#0F1115"
                      }
                    },
                    "attrs": {
                      "aria-expanded": "false",
                      "data-blok-acc-trigger": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-27",
                        "style": {
                          "base": {
                            "font-size": "18px",
                            "font-weight": "600",
                            "letter-spacing": "-0.01em"
                          }
                        },
                        "text": "Can you import my spreadsheet?"
                      },
                      {
                        "tag": "div",
                        "key": "div-28",
                        "style": {
                          "base": {
                            "flex-shrink": "0",
                            "font-size": "14px",
                            "color": "#5B616B",
                            "transform": "rotate(0deg)",
                            "transition": "transform 180ms ease"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true",
                          "data-blok-acc-icon": ""
                        },
                        "text": "▾"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "panel-31",
                    "attrs": {
                      "data-blok-acc-panel": ""
                    },
                    "children": [
                      {
                        "tag": "p",
                        "key": "p-30",
                        "style": {
                          "base": {
                            "margin-top": "0",
                            "margin-right": "0",
                            "margin-bottom": "0",
                            "margin-left": "0",
                            "padding-top": "0",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
                            "padding-left": "22px",
                            "font-size": "16px",
                            "line-height": "1.6",
                            "color": "#4E545D"
                          }
                        },
                        "text": "Yes. Upload it and map your columns, or send it to us and we’ll do it."
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-38",
                "style": {
                  "base": {
                    "border-top-left-radius": "16px",
                    "border-top-right-radius": "16px",
                    "border-bottom-right-radius": "16px",
                    "border-bottom-left-radius": "16px",
                    "background-color": "#FFFFFF",
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
                "attrs": {
                  "data-blok-acc-item": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-35",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "align-items": "center",
                        "row-gap": "16px",
                        "column-gap": "16px",
                        "width": "100%",
                        "min-height": "68px",
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
                        "background-color": "transparent",
                        "cursor": "pointer",
                        "text-align": "left",
                        "color": "#0F1115"
                      }
                    },
                    "attrs": {
                      "aria-expanded": "false",
                      "data-blok-acc-trigger": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-33",
                        "style": {
                          "base": {
                            "font-size": "18px",
                            "font-weight": "600",
                            "letter-spacing": "-0.01em"
                          }
                        },
                        "text": "Do I need to train my crew?"
                      },
                      {
                        "tag": "div",
                        "key": "div-34",
                        "style": {
                          "base": {
                            "flex-shrink": "0",
                            "font-size": "14px",
                            "color": "#5B616B",
                            "transform": "rotate(0deg)",
                            "transition": "transform 180ms ease"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true",
                          "data-blok-acc-icon": ""
                        },
                        "text": "▾"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "panel-37",
                    "attrs": {
                      "data-blok-acc-panel": ""
                    },
                    "children": [
                      {
                        "tag": "p",
                        "key": "p-36",
                        "style": {
                          "base": {
                            "margin-top": "0",
                            "margin-right": "0",
                            "margin-bottom": "0",
                            "margin-left": "0",
                            "padding-top": "0",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
                            "padding-left": "22px",
                            "font-size": "16px",
                            "line-height": "1.6",
                            "color": "#4E545D"
                          }
                        },
                        "text": "The crew app shows today’s stops and a checklist. Most crews pick it up on the first route."
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
