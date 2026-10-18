import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "integrations-01",
  "prefix": "integrations01",
  "name": "Integrations / Filter",
  "category": "integrations",
  "collection": "saas",
  "description": "Integrations / Filter for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "Connects to the tools you already pay for"
    },
    "subheading": {
      "type": "text",
      "default": "Missing one? Anything with a webhook works through the open API."
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-5",
        "div-21",
        "div-72"
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
        "key": "div-74",
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
            "key": "div-5",
            "style": {
              "base": {
                "display": "flex",
                "flex-wrap": "wrap",
                "justify-content": "space-between",
                "align-items": "flex-end",
                "row-gap": "24px",
                "column-gap": "24px"
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
                    "max-width": "620px"
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
                    "text": "Integrations"
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
                    "color": "#2D4BF0"
                  }
                },
                "href": "#",
                "text": "Browse all integrations →"
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-21",
            "style": {
              "base": {
                "display": "flex",
                "flex-wrap": "wrap",
                "row-gap": "8px",
                "column-gap": "8px"
              }
            },
            "attrs": {
              "role": "group",
              "aria-label": "Filter integrations",
              "data-blok-choices": "",
              "data-blok-multi": ""
            },
            "children": [
              {
                "tag": "div",
                "key": "div-8",
                "style": {
                  "base": {
                    "height": "44px",
                    "padding-top": "0",
                    "padding-right": "18px",
                    "padding-bottom": "0",
                    "padding-left": "18px",
                    "border-top-left-radius": "999px",
                    "border-top-right-radius": "999px",
                    "border-bottom-right-radius": "999px",
                    "border-bottom-left-radius": "999px",
                    "cursor": "pointer",
                    "font-size": "15px",
                    "font-weight": "500",
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
                    "flex-wrap": "wrap",
                    "align-items": "baseline",
                    "column-gap": "0.35rem"
                  }
                },
                "attrs": {
                  "aria-pressed": "true",
                  "data-blok-choice": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "text-7",
                    "text": "All"
                  },
                  {
                    "tag": "div",
                    "key": "div-6",
                    "style": {
                      "base": {
                        "font-family": "token(font-saas-mono)",
                        "font-size": "12px",
                        "opacity": "0.7"
                      }
                    },
                    "text": "10"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-11",
                "style": {
                  "base": {
                    "height": "44px",
                    "padding-top": "0",
                    "padding-right": "18px",
                    "padding-bottom": "0",
                    "padding-left": "18px",
                    "border-top-left-radius": "999px",
                    "border-top-right-radius": "999px",
                    "border-bottom-right-radius": "999px",
                    "border-bottom-left-radius": "999px",
                    "cursor": "pointer",
                    "font-size": "15px",
                    "font-weight": "500",
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
                    "flex-wrap": "wrap",
                    "align-items": "baseline",
                    "column-gap": "0.35rem"
                  }
                },
                "attrs": {
                  "aria-pressed": "false",
                  "data-blok-choice": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "text-10",
                    "text": "Accounting"
                  },
                  {
                    "tag": "div",
                    "key": "div-9",
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
                    "height": "44px",
                    "padding-top": "0",
                    "padding-right": "18px",
                    "padding-bottom": "0",
                    "padding-left": "18px",
                    "border-top-left-radius": "999px",
                    "border-top-right-radius": "999px",
                    "border-bottom-right-radius": "999px",
                    "border-bottom-left-radius": "999px",
                    "cursor": "pointer",
                    "font-size": "15px",
                    "font-weight": "500",
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
                    "flex-wrap": "wrap",
                    "align-items": "baseline",
                    "column-gap": "0.35rem"
                  }
                },
                "attrs": {
                  "aria-pressed": "false",
                  "data-blok-choice": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "text-13",
                    "text": "Payments"
                  },
                  {
                    "tag": "div",
                    "key": "div-12",
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
                "key": "div-17",
                "style": {
                  "base": {
                    "height": "44px",
                    "padding-top": "0",
                    "padding-right": "18px",
                    "padding-bottom": "0",
                    "padding-left": "18px",
                    "border-top-left-radius": "999px",
                    "border-top-right-radius": "999px",
                    "border-bottom-right-radius": "999px",
                    "border-bottom-left-radius": "999px",
                    "cursor": "pointer",
                    "font-size": "15px",
                    "font-weight": "500",
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
                    "flex-wrap": "wrap",
                    "align-items": "baseline",
                    "column-gap": "0.35rem"
                  }
                },
                "attrs": {
                  "aria-pressed": "false",
                  "data-blok-choice": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "text-16",
                    "text": "Calendar"
                  },
                  {
                    "tag": "div",
                    "key": "div-15",
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
                "key": "div-20",
                "style": {
                  "base": {
                    "height": "44px",
                    "padding-top": "0",
                    "padding-right": "18px",
                    "padding-bottom": "0",
                    "padding-left": "18px",
                    "border-top-left-radius": "999px",
                    "border-top-right-radius": "999px",
                    "border-bottom-right-radius": "999px",
                    "border-bottom-left-radius": "999px",
                    "cursor": "pointer",
                    "font-size": "15px",
                    "font-weight": "500",
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
                    "flex-wrap": "wrap",
                    "align-items": "baseline",
                    "column-gap": "0.35rem"
                  }
                },
                "attrs": {
                  "aria-pressed": "false",
                  "data-blok-choice": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "text-19",
                    "text": "Messaging"
                  },
                  {
                    "tag": "div",
                    "key": "div-18",
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
            "key": "div-72",
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
                "grid-template-columns": "repeat(4, minmax(0, 1fr))"
              }
            },
            "children": [
              {
                "tag": "a",
                "key": "a-26",
                "style": {
                  "base": {
                    "display": "flex",
                    "align-items": "center",
                    "row-gap": "14px",
                    "column-gap": "14px",
                    "padding-top": "18px",
                    "padding-right": "18px",
                    "padding-bottom": "18px",
                    "padding-left": "18px",
                    "min-height": "88px",
                    "box-sizing": "border-box",
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
                    "border-top-left-radius": "14px",
                    "border-top-right-radius": "14px",
                    "border-bottom-right-radius": "14px",
                    "border-bottom-left-radius": "14px",
                    "text-decoration": "none",
                    "color": "#0F1115"
                  }
                },
                "href": "#",
                "children": [
                  {
                    "tag": "div",
                    "key": "div-22",
                    "style": {
                      "base": {
                        "flex-shrink": "0",
                        "width": "44px",
                        "height": "44px",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "border-top-left-radius": "11px",
                        "border-top-right-radius": "11px",
                        "border-bottom-right-radius": "11px",
                        "border-bottom-left-radius": "11px",
                        "font-weight": "600",
                        "font-size": "16px",
                        "background-color": "#E8ECFE",
                        "color": "#2D4BF0"
                      }
                    },
                    "text": "Ls"
                  },
                  {
                    "tag": "div",
                    "key": "div-25",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "3px",
                        "column-gap": "3px",
                        "min-width": "0"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-23",
                        "style": {
                          "base": {
                            "font-weight": "600",
                            "font-size": "15px"
                          }
                        },
                        "text": "Ledger sync"
                      },
                      {
                        "tag": "div",
                        "key": "div-24",
                        "style": {
                          "base": {
                            "font-size": "13px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Push invoices to your books"
                      }
                    ]
                  }
                ],
                "attrs": {
                  "data-blok-group": "Accounting",
                  "data-blok-filter-card": ""
                }
              },
              {
                "tag": "a",
                "key": "a-31",
                "style": {
                  "base": {
                    "display": "flex",
                    "align-items": "center",
                    "row-gap": "14px",
                    "column-gap": "14px",
                    "padding-top": "18px",
                    "padding-right": "18px",
                    "padding-bottom": "18px",
                    "padding-left": "18px",
                    "min-height": "88px",
                    "box-sizing": "border-box",
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
                    "border-top-left-radius": "14px",
                    "border-top-right-radius": "14px",
                    "border-bottom-right-radius": "14px",
                    "border-bottom-left-radius": "14px",
                    "text-decoration": "none",
                    "color": "#0F1115"
                  }
                },
                "href": "#",
                "children": [
                  {
                    "tag": "div",
                    "key": "div-27",
                    "style": {
                      "base": {
                        "flex-shrink": "0",
                        "width": "44px",
                        "height": "44px",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "border-top-left-radius": "11px",
                        "border-top-right-radius": "11px",
                        "border-bottom-right-radius": "11px",
                        "border-bottom-left-radius": "11px",
                        "font-weight": "600",
                        "font-size": "16px",
                        "background-color": "#E8ECFE",
                        "color": "#2D4BF0"
                      }
                    },
                    "text": "Pe"
                  },
                  {
                    "tag": "div",
                    "key": "div-30",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "3px",
                        "column-gap": "3px",
                        "min-width": "0"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-28",
                        "style": {
                          "base": {
                            "font-weight": "600",
                            "font-size": "15px"
                          }
                        },
                        "text": "Payroll export"
                      },
                      {
                        "tag": "div",
                        "key": "div-29",
                        "style": {
                          "base": {
                            "font-size": "13px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Crew hours, ready to run"
                      }
                    ]
                  }
                ],
                "attrs": {
                  "data-blok-group": "Accounting",
                  "data-blok-filter-card": ""
                }
              },
              {
                "tag": "a",
                "key": "a-36",
                "style": {
                  "base": {
                    "display": "flex",
                    "align-items": "center",
                    "row-gap": "14px",
                    "column-gap": "14px",
                    "padding-top": "18px",
                    "padding-right": "18px",
                    "padding-bottom": "18px",
                    "padding-left": "18px",
                    "min-height": "88px",
                    "box-sizing": "border-box",
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
                    "border-top-left-radius": "14px",
                    "border-top-right-radius": "14px",
                    "border-bottom-right-radius": "14px",
                    "border-bottom-left-radius": "14px",
                    "text-decoration": "none",
                    "color": "#0F1115"
                  }
                },
                "href": "#",
                "children": [
                  {
                    "tag": "div",
                    "key": "div-32",
                    "style": {
                      "base": {
                        "flex-shrink": "0",
                        "width": "44px",
                        "height": "44px",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "border-top-left-radius": "11px",
                        "border-top-right-radius": "11px",
                        "border-bottom-right-radius": "11px",
                        "border-bottom-left-radius": "11px",
                        "font-weight": "600",
                        "font-size": "16px",
                        "background-color": "#E5F4EA",
                        "color": "#1D6B3A"
                      }
                    },
                    "text": "Cp"
                  },
                  {
                    "tag": "div",
                    "key": "div-35",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "3px",
                        "column-gap": "3px",
                        "min-width": "0"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-33",
                        "style": {
                          "base": {
                            "font-weight": "600",
                            "font-size": "15px"
                          }
                        },
                        "text": "Card payments"
                      },
                      {
                        "tag": "div",
                        "key": "div-34",
                        "style": {
                          "base": {
                            "font-size": "13px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Get paid from the invoice"
                      }
                    ]
                  }
                ],
                "attrs": {
                  "data-blok-group": "Payments",
                  "data-blok-filter-card": ""
                }
              },
              {
                "tag": "a",
                "key": "a-41",
                "style": {
                  "base": {
                    "display": "flex",
                    "align-items": "center",
                    "row-gap": "14px",
                    "column-gap": "14px",
                    "padding-top": "18px",
                    "padding-right": "18px",
                    "padding-bottom": "18px",
                    "padding-left": "18px",
                    "min-height": "88px",
                    "box-sizing": "border-box",
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
                    "border-top-left-radius": "14px",
                    "border-top-right-radius": "14px",
                    "border-bottom-right-radius": "14px",
                    "border-bottom-left-radius": "14px",
                    "text-decoration": "none",
                    "color": "#0F1115"
                  }
                },
                "href": "#",
                "children": [
                  {
                    "tag": "div",
                    "key": "div-37",
                    "style": {
                      "base": {
                        "flex-shrink": "0",
                        "width": "44px",
                        "height": "44px",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "border-top-left-radius": "11px",
                        "border-top-right-radius": "11px",
                        "border-bottom-right-radius": "11px",
                        "border-bottom-left-radius": "11px",
                        "font-weight": "600",
                        "font-size": "16px",
                        "background-color": "#E5F4EA",
                        "color": "#1D6B3A"
                      }
                    },
                    "text": "Bt"
                  },
                  {
                    "tag": "div",
                    "key": "div-40",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "3px",
                        "column-gap": "3px",
                        "min-width": "0"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-38",
                        "style": {
                          "base": {
                            "font-weight": "600",
                            "font-size": "15px"
                          }
                        },
                        "text": "Bank transfers"
                      },
                      {
                        "tag": "div",
                        "key": "div-39",
                        "style": {
                          "base": {
                            "font-size": "13px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Lower fees on big jobs"
                      }
                    ]
                  }
                ],
                "attrs": {
                  "data-blok-group": "Payments",
                  "data-blok-filter-card": ""
                }
              },
              {
                "tag": "a",
                "key": "a-46",
                "style": {
                  "base": {
                    "display": "flex",
                    "align-items": "center",
                    "row-gap": "14px",
                    "column-gap": "14px",
                    "padding-top": "18px",
                    "padding-right": "18px",
                    "padding-bottom": "18px",
                    "padding-left": "18px",
                    "min-height": "88px",
                    "box-sizing": "border-box",
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
                    "border-top-left-radius": "14px",
                    "border-top-right-radius": "14px",
                    "border-bottom-right-radius": "14px",
                    "border-bottom-left-radius": "14px",
                    "text-decoration": "none",
                    "color": "#0F1115"
                  }
                },
                "href": "#",
                "children": [
                  {
                    "tag": "div",
                    "key": "div-42",
                    "style": {
                      "base": {
                        "flex-shrink": "0",
                        "width": "44px",
                        "height": "44px",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "border-top-left-radius": "11px",
                        "border-top-right-radius": "11px",
                        "border-bottom-right-radius": "11px",
                        "border-bottom-left-radius": "11px",
                        "font-weight": "600",
                        "font-size": "16px",
                        "background-color": "#E5F4EA",
                        "color": "#1D6B3A"
                      }
                    },
                    "text": "Cof"
                  },
                  {
                    "tag": "div",
                    "key": "div-45",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "3px",
                        "column-gap": "3px",
                        "min-width": "0"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-43",
                        "style": {
                          "base": {
                            "font-weight": "600",
                            "font-size": "15px"
                          }
                        },
                        "text": "Card on file"
                      },
                      {
                        "tag": "div",
                        "key": "div-44",
                        "style": {
                          "base": {
                            "font-size": "13px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Charge recurring clients"
                      }
                    ]
                  }
                ],
                "attrs": {
                  "data-blok-group": "Payments",
                  "data-blok-filter-card": ""
                }
              },
              {
                "tag": "a",
                "key": "a-51",
                "style": {
                  "base": {
                    "display": "flex",
                    "align-items": "center",
                    "row-gap": "14px",
                    "column-gap": "14px",
                    "padding-top": "18px",
                    "padding-right": "18px",
                    "padding-bottom": "18px",
                    "padding-left": "18px",
                    "min-height": "88px",
                    "box-sizing": "border-box",
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
                    "border-top-left-radius": "14px",
                    "border-top-right-radius": "14px",
                    "border-bottom-right-radius": "14px",
                    "border-bottom-left-radius": "14px",
                    "text-decoration": "none",
                    "color": "#0F1115"
                  }
                },
                "href": "#",
                "children": [
                  {
                    "tag": "div",
                    "key": "div-47",
                    "style": {
                      "base": {
                        "flex-shrink": "0",
                        "width": "44px",
                        "height": "44px",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "border-top-left-radius": "11px",
                        "border-top-right-radius": "11px",
                        "border-bottom-right-radius": "11px",
                        "border-bottom-left-radius": "11px",
                        "font-weight": "600",
                        "font-size": "16px",
                        "background-color": "#FDEFE4",
                        "color": "#9A4A12"
                      }
                    },
                    "text": "Cs"
                  },
                  {
                    "tag": "div",
                    "key": "div-50",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "3px",
                        "column-gap": "3px",
                        "min-width": "0"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-48",
                        "style": {
                          "base": {
                            "font-weight": "600",
                            "font-size": "15px"
                          }
                        },
                        "text": "Calendar sync"
                      },
                      {
                        "tag": "div",
                        "key": "div-49",
                        "style": {
                          "base": {
                            "font-size": "13px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Jobs on every phone"
                      }
                    ]
                  }
                ],
                "attrs": {
                  "data-blok-group": "Calendar",
                  "data-blok-filter-card": ""
                }
              },
              {
                "tag": "a",
                "key": "a-56",
                "style": {
                  "base": {
                    "display": "flex",
                    "align-items": "center",
                    "row-gap": "14px",
                    "column-gap": "14px",
                    "padding-top": "18px",
                    "padding-right": "18px",
                    "padding-bottom": "18px",
                    "padding-left": "18px",
                    "min-height": "88px",
                    "box-sizing": "border-box",
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
                    "border-top-left-radius": "14px",
                    "border-top-right-radius": "14px",
                    "border-bottom-right-radius": "14px",
                    "border-bottom-left-radius": "14px",
                    "text-decoration": "none",
                    "color": "#0F1115"
                  }
                },
                "href": "#",
                "children": [
                  {
                    "tag": "div",
                    "key": "div-52",
                    "style": {
                      "base": {
                        "flex-shrink": "0",
                        "width": "44px",
                        "height": "44px",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "border-top-left-radius": "11px",
                        "border-top-right-radius": "11px",
                        "border-bottom-right-radius": "11px",
                        "border-bottom-left-radius": "11px",
                        "font-weight": "600",
                        "font-size": "16px",
                        "background-color": "#FDEFE4",
                        "color": "#9A4A12"
                      }
                    },
                    "text": "Bp"
                  },
                  {
                    "tag": "div",
                    "key": "div-55",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "3px",
                        "column-gap": "3px",
                        "min-width": "0"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-53",
                        "style": {
                          "base": {
                            "font-weight": "600",
                            "font-size": "15px"
                          }
                        },
                        "text": "Booking page"
                      },
                      {
                        "tag": "div",
                        "key": "div-54",
                        "style": {
                          "base": {
                            "font-size": "13px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Customers pick a slot"
                      }
                    ]
                  }
                ],
                "attrs": {
                  "data-blok-group": "Calendar",
                  "data-blok-filter-card": ""
                }
              },
              {
                "tag": "a",
                "key": "a-61",
                "style": {
                  "base": {
                    "display": "flex",
                    "align-items": "center",
                    "row-gap": "14px",
                    "column-gap": "14px",
                    "padding-top": "18px",
                    "padding-right": "18px",
                    "padding-bottom": "18px",
                    "padding-left": "18px",
                    "min-height": "88px",
                    "box-sizing": "border-box",
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
                    "border-top-left-radius": "14px",
                    "border-top-right-radius": "14px",
                    "border-bottom-right-radius": "14px",
                    "border-bottom-left-radius": "14px",
                    "text-decoration": "none",
                    "color": "#0F1115"
                  }
                },
                "href": "#",
                "children": [
                  {
                    "tag": "div",
                    "key": "div-57",
                    "style": {
                      "base": {
                        "flex-shrink": "0",
                        "width": "44px",
                        "height": "44px",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "border-top-left-radius": "11px",
                        "border-top-right-radius": "11px",
                        "border-bottom-right-radius": "11px",
                        "border-bottom-left-radius": "11px",
                        "font-weight": "600",
                        "font-size": "16px",
                        "background-color": "#F1E9FB",
                        "color": "#6B32A8"
                      }
                    },
                    "text": "Tr"
                  },
                  {
                    "tag": "div",
                    "key": "div-60",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "3px",
                        "column-gap": "3px",
                        "min-width": "0"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-58",
                        "style": {
                          "base": {
                            "font-weight": "600",
                            "font-size": "15px"
                          }
                        },
                        "text": "Text reminders"
                      },
                      {
                        "tag": "div",
                        "key": "div-59",
                        "style": {
                          "base": {
                            "font-size": "13px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "The day before every visit"
                      }
                    ]
                  }
                ],
                "attrs": {
                  "data-blok-group": "Messaging",
                  "data-blok-filter-card": ""
                }
              },
              {
                "tag": "a",
                "key": "a-66",
                "style": {
                  "base": {
                    "display": "flex",
                    "align-items": "center",
                    "row-gap": "14px",
                    "column-gap": "14px",
                    "padding-top": "18px",
                    "padding-right": "18px",
                    "padding-bottom": "18px",
                    "padding-left": "18px",
                    "min-height": "88px",
                    "box-sizing": "border-box",
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
                    "border-top-left-radius": "14px",
                    "border-top-right-radius": "14px",
                    "border-bottom-right-radius": "14px",
                    "border-bottom-left-radius": "14px",
                    "text-decoration": "none",
                    "color": "#0F1115"
                  }
                },
                "href": "#",
                "children": [
                  {
                    "tag": "div",
                    "key": "div-62",
                    "style": {
                      "base": {
                        "flex-shrink": "0",
                        "width": "44px",
                        "height": "44px",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "border-top-left-radius": "11px",
                        "border-top-right-radius": "11px",
                        "border-bottom-right-radius": "11px",
                        "border-bottom-left-radius": "11px",
                        "font-weight": "600",
                        "font-size": "16px",
                        "background-color": "#F1E9FB",
                        "color": "#6B32A8"
                      }
                    },
                    "text": "Er"
                  },
                  {
                    "tag": "div",
                    "key": "div-65",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "3px",
                        "column-gap": "3px",
                        "min-width": "0"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-63",
                        "style": {
                          "base": {
                            "font-weight": "600",
                            "font-size": "15px"
                          }
                        },
                        "text": "Email receipts"
                      },
                      {
                        "tag": "div",
                        "key": "div-64",
                        "style": {
                          "base": {
                            "font-size": "13px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Sent when payment lands"
                      }
                    ]
                  }
                ],
                "attrs": {
                  "data-blok-group": "Messaging",
                  "data-blok-filter-card": ""
                }
              },
              {
                "tag": "a",
                "key": "a-71",
                "style": {
                  "base": {
                    "display": "flex",
                    "align-items": "center",
                    "row-gap": "14px",
                    "column-gap": "14px",
                    "padding-top": "18px",
                    "padding-right": "18px",
                    "padding-bottom": "18px",
                    "padding-left": "18px",
                    "min-height": "88px",
                    "box-sizing": "border-box",
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
                    "border-top-left-radius": "14px",
                    "border-top-right-radius": "14px",
                    "border-bottom-right-radius": "14px",
                    "border-bottom-left-radius": "14px",
                    "text-decoration": "none",
                    "color": "#0F1115"
                  }
                },
                "href": "#",
                "children": [
                  {
                    "tag": "div",
                    "key": "div-67",
                    "style": {
                      "base": {
                        "flex-shrink": "0",
                        "width": "44px",
                        "height": "44px",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "border-top-left-radius": "11px",
                        "border-top-right-radius": "11px",
                        "border-bottom-right-radius": "11px",
                        "border-bottom-left-radius": "11px",
                        "font-weight": "600",
                        "font-size": "16px",
                        "background-color": "#F1E9FB",
                        "color": "#6B32A8"
                      }
                    },
                    "text": "Tc"
                  },
                  {
                    "tag": "div",
                    "key": "div-70",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "3px",
                        "column-gap": "3px",
                        "min-width": "0"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-68",
                        "style": {
                          "base": {
                            "font-weight": "600",
                            "font-size": "15px"
                          }
                        },
                        "text": "Team chat"
                      },
                      {
                        "tag": "div",
                        "key": "div-69",
                        "style": {
                          "base": {
                            "font-size": "13px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Job updates in your channel"
                      }
                    ]
                  }
                ],
                "attrs": {
                  "data-blok-group": "Messaging",
                  "data-blok-filter-card": ""
                }
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
                "font-size": "14px",
                "color": "#5B616B"
              }
            },
            "bind": "subheading"
          }
        ]
      }
    ],
    "attrs": {
      "data-blok-filter": ""
    }
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
