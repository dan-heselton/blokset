import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "compare-02",
  "prefix": "compare02",
  "name": "Compare / Before after slider",
  "category": "compare",
  "collection": "saas",
  "description": "Compare / Before after slider for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "Drag to see the same Monday"
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-3",
        "div-42",
        "div-51"
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
        "padding-top": "clamp(56px, 8vw, 96px)",
        "padding-right": "clamp(20px, 4vw, 48px)",
        "padding-bottom": "clamp(56px, 8vw, 96px)",
        "padding-left": "clamp(20px, 4vw, 48px)"
      }
    },
    "children": [
      {
        "tag": "div",
        "key": "div-52",
        "style": {
          "base": {
            "max-width": "1100px",
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
            "key": "div-3",
            "style": {
              "base": {
                "display": "flex",
                "flex-direction": "column",
                "align-items": "center",
                "row-gap": "14px",
                "column-gap": "14px",
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
                "text": "Before and after"
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
            "key": "div-42",
            "style": {
              "base": {
                "position": "relative",
                "border-top-left-radius": "22px",
                "border-top-right-radius": "22px",
                "border-bottom-right-radius": "22px",
                "border-bottom-left-radius": "22px",
                "overflow": "hidden",
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
                "min-height": "420px"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-21",
                "style": {
                  "base": {
                    "position": "absolute",
                    "top": "0",
                    "right": "0",
                    "bottom": "0",
                    "left": "0",
                    "background-color": "#0F1115",
                    "color": "#F4F5F1",
                    "padding-top": "28px",
                    "padding-right": "28px",
                    "padding-bottom": "28px",
                    "padding-left": "28px",
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "12px",
                    "column-gap": "12px"
                  }
                },
                "attrs": {
                  "aria-hidden": "false"
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-5",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "flex-end"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-4",
                        "style": {
                          "base": {
                            "padding-top": "5px",
                            "padding-right": "12px",
                            "padding-bottom": "5px",
                            "padding-left": "12px",
                            "border-top-left-radius": "999px",
                            "border-top-right-radius": "999px",
                            "border-bottom-right-radius": "999px",
                            "border-bottom-left-radius": "999px",
                            "background-color": "#2D4BF0",
                            "font-size": "13px",
                            "font-weight": "500"
                          }
                        },
                        "text": "With Harborline"
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
                        "row-gap": "16px",
                        "column-gap": "16px",
                        "align-items": "center",
                        "padding-top": "14px",
                        "padding-right": "16px",
                        "padding-bottom": "14px",
                        "padding-left": "16px",
                        "border-top-left-radius": "12px",
                        "border-top-right-radius": "12px",
                        "border-bottom-right-radius": "12px",
                        "border-bottom-left-radius": "12px",
                        "background-color": "#181B20",
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
                        "border-left-color": "#2C3037"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-6",
                        "style": {
                          "base": {
                            "font-size": "16px"
                          }
                        },
                        "text": "Recurring jobs already on the calendar"
                      },
                      {
                        "tag": "div",
                        "key": "div-7",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px",
                            "color": "#8FD3A8"
                          }
                        },
                        "text": "Automatic"
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
                        "row-gap": "16px",
                        "column-gap": "16px",
                        "align-items": "center",
                        "padding-top": "14px",
                        "padding-right": "16px",
                        "padding-bottom": "14px",
                        "padding-left": "16px",
                        "border-top-left-radius": "12px",
                        "border-top-right-radius": "12px",
                        "border-bottom-right-radius": "12px",
                        "border-bottom-left-radius": "12px",
                        "background-color": "#181B20",
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
                        "border-left-color": "#2C3037"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-9",
                        "style": {
                          "base": {
                            "font-size": "16px"
                          }
                        },
                        "text": "Reminder texts went out yesterday"
                      },
                      {
                        "tag": "div",
                        "key": "div-10",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px",
                            "color": "#8FD3A8"
                          }
                        },
                        "text": "Automatic"
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
                        "row-gap": "16px",
                        "column-gap": "16px",
                        "align-items": "center",
                        "padding-top": "14px",
                        "padding-right": "16px",
                        "padding-bottom": "14px",
                        "padding-left": "16px",
                        "border-top-left-radius": "12px",
                        "border-top-right-radius": "12px",
                        "border-bottom-right-radius": "12px",
                        "border-bottom-left-radius": "12px",
                        "background-color": "#181B20",
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
                        "border-left-color": "#2C3037"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-12",
                        "style": {
                          "base": {
                            "font-size": "16px"
                          }
                        },
                        "text": "Crews opened their route in the app"
                      },
                      {
                        "tag": "div",
                        "key": "div-13",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px",
                            "color": "#8FD3A8"
                          }
                        },
                        "text": "Automatic"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-17",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "row-gap": "16px",
                        "column-gap": "16px",
                        "align-items": "center",
                        "padding-top": "14px",
                        "padding-right": "16px",
                        "padding-bottom": "14px",
                        "padding-left": "16px",
                        "border-top-left-radius": "12px",
                        "border-top-right-radius": "12px",
                        "border-bottom-right-radius": "12px",
                        "border-bottom-left-radius": "12px",
                        "background-color": "#181B20",
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
                        "border-left-color": "#2C3037"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-15",
                        "style": {
                          "base": {
                            "font-size": "16px"
                          }
                        },
                        "text": "Invoices sent as jobs closed"
                      },
                      {
                        "tag": "div",
                        "key": "div-16",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px",
                            "color": "#8FD3A8"
                          }
                        },
                        "text": "Automatic"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-20",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "row-gap": "16px",
                        "column-gap": "16px",
                        "align-items": "center",
                        "padding-top": "14px",
                        "padding-right": "16px",
                        "padding-bottom": "14px",
                        "padding-left": "16px",
                        "border-top-left-radius": "12px",
                        "border-top-right-radius": "12px",
                        "border-bottom-right-radius": "12px",
                        "border-bottom-left-radius": "12px",
                        "background-color": "#181B20",
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
                        "border-left-color": "#2C3037"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-18",
                        "style": {
                          "base": {
                            "font-size": "16px"
                          }
                        },
                        "text": "Payment reminders sent"
                      },
                      {
                        "tag": "div",
                        "key": "div-19",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px",
                            "color": "#8FD3A8"
                          }
                        },
                        "text": "Automatic"
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
                    "position": "absolute",
                    "top": "0",
                    "right": "0",
                    "bottom": "0",
                    "left": "0",
                    "background-color": "#F4F5F1",
                    "padding-top": "28px",
                    "padding-right": "28px",
                    "padding-bottom": "28px",
                    "padding-left": "28px",
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "12px",
                    "column-gap": "12px",
                    "clip-path": "inset(0 50% 0 0)"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-23",
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-22",
                        "style": {
                          "base": {
                            "padding-top": "5px",
                            "padding-right": "12px",
                            "padding-bottom": "5px",
                            "padding-left": "12px",
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
                            "border-left-color": "#DDE0D8",
                            "font-size": "13px",
                            "font-weight": "500"
                          }
                        },
                        "text": "Without"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-26",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "row-gap": "16px",
                        "column-gap": "16px",
                        "align-items": "center",
                        "padding-top": "14px",
                        "padding-right": "16px",
                        "padding-bottom": "14px",
                        "padding-left": "16px",
                        "border-top-left-radius": "12px",
                        "border-top-right-radius": "12px",
                        "border-bottom-right-radius": "12px",
                        "border-bottom-left-radius": "12px",
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
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-24",
                        "style": {
                          "base": {
                            "font-size": "16px"
                          }
                        },
                        "text": "Copy jobs from last week’s spreadsheet"
                      },
                      {
                        "tag": "div",
                        "key": "div-25",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px",
                            "color": "#9A4A12"
                          }
                        },
                        "text": "[~1 hr]"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-29",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "row-gap": "16px",
                        "column-gap": "16px",
                        "align-items": "center",
                        "padding-top": "14px",
                        "padding-right": "16px",
                        "padding-bottom": "14px",
                        "padding-left": "16px",
                        "border-top-left-radius": "12px",
                        "border-top-right-radius": "12px",
                        "border-bottom-right-radius": "12px",
                        "border-bottom-left-radius": "12px",
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
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-27",
                        "style": {
                          "base": {
                            "font-size": "16px"
                          }
                        },
                        "text": "Call customers to confirm"
                      },
                      {
                        "tag": "div",
                        "key": "div-28",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px",
                            "color": "#9A4A12"
                          }
                        },
                        "text": "[~1.5 hr]"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-32",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "row-gap": "16px",
                        "column-gap": "16px",
                        "align-items": "center",
                        "padding-top": "14px",
                        "padding-right": "16px",
                        "padding-bottom": "14px",
                        "padding-left": "16px",
                        "border-top-left-radius": "12px",
                        "border-top-right-radius": "12px",
                        "border-bottom-right-radius": "12px",
                        "border-bottom-left-radius": "12px",
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
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-30",
                        "style": {
                          "base": {
                            "font-size": "16px"
                          }
                        },
                        "text": "Text each crew their stops"
                      },
                      {
                        "tag": "div",
                        "key": "div-31",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px",
                            "color": "#9A4A12"
                          }
                        },
                        "text": "[~30 min]"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-35",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "row-gap": "16px",
                        "column-gap": "16px",
                        "align-items": "center",
                        "padding-top": "14px",
                        "padding-right": "16px",
                        "padding-bottom": "14px",
                        "padding-left": "16px",
                        "border-top-left-radius": "12px",
                        "border-top-right-radius": "12px",
                        "border-bottom-right-radius": "12px",
                        "border-bottom-left-radius": "12px",
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
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-33",
                        "style": {
                          "base": {
                            "font-size": "16px"
                          }
                        },
                        "text": "Type invoices from paper tickets"
                      },
                      {
                        "tag": "div",
                        "key": "div-34",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px",
                            "color": "#9A4A12"
                          }
                        },
                        "text": "[~1 hr]"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-38",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "row-gap": "16px",
                        "column-gap": "16px",
                        "align-items": "center",
                        "padding-top": "14px",
                        "padding-right": "16px",
                        "padding-bottom": "14px",
                        "padding-left": "16px",
                        "border-top-left-radius": "12px",
                        "border-top-right-radius": "12px",
                        "border-bottom-right-radius": "12px",
                        "border-bottom-left-radius": "12px",
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
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-36",
                        "style": {
                          "base": {
                            "font-size": "16px"
                          }
                        },
                        "text": "Chase last week’s unpaid bills"
                      },
                      {
                        "tag": "div",
                        "key": "div-37",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px",
                            "color": "#9A4A12"
                          }
                        },
                        "text": "[~45 min]"
                      }
                    ]
                  }
                ],
                "attrs": {
                  "data-blok-compare-before": ""
                }
              },
              {
                "tag": "div",
                "key": "div-41",
                "style": {
                  "base": {
                    "position": "absolute",
                    "top": "0",
                    "bottom": "0",
                    "left": "50%",
                    "width": "2px",
                    "margin-left": "-1px",
                    "background-color": "#2D4BF0",
                    "display": "flex",
                    "flex-wrap": "wrap",
                    "align-items": "baseline",
                    "column-gap": "0.35rem"
                  }
                },
                "attrs": {
                  "aria-hidden": "true"
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-40",
                    "style": {
                      "base": {
                        "position": "absolute",
                        "top": "50%",
                        "left": "50%",
                        "transform": "translate(-50%, -50%)",
                        "width": "44px",
                        "height": "44px",
                        "border-top-left-radius": "50%",
                        "border-top-right-radius": "50%",
                        "border-bottom-right-radius": "50%",
                        "border-bottom-left-radius": "50%",
                        "background-color": "#2D4BF0",
                        "color": "#FFFFFF",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "font-size": "16px",
                        "box-shadow": "0 6px 18px rgba(45,75,240,0.4)"
                      }
                    },
                    "text": "⇆"
                  }
                ]
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-51",
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
                "tag": "div",
                "key": "div-43",
                "style": {
                  "base": {
                    "font-size": "14px",
                    "color": "#4E545D"
                  }
                },
                "text": "Compare"
              },
              {
                "tag": "div",
                "key": "range-44",
                "style": {
                  "base": {
                    "flex-grow": "1",
                    "flex-shrink": "1",
                    "flex-basis": "300px",
                    "position": "relative",
                    "display": "flex",
                    "align-items": "center"
                  }
                },
                "attrs": {
                  "data-blok-range": "",
                  "role": "slider",
                  "aria-valuemin": "0",
                  "aria-valuemax": "100",
                  "aria-valuenow": "50",
                  "data-min": "0",
                  "data-max": "100",
                  "data-value": "50"
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "track-45",
                    "style": {
                      "base": {
                        "position": "relative",
                        "width": "100%",
                        "height": "4px",
                        "background-color": "#DDE0D8",
                        "border-top-left-radius": "999px",
                        "border-top-right-radius": "999px",
                        "border-bottom-right-radius": "999px",
                        "border-bottom-left-radius": "999px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "fill-46",
                        "style": {
                          "base": {
                            "width": "50%",
                            "height": "4px",
                            "background-color": "#2D4BF0",
                            "border-top-left-radius": "999px",
                            "border-top-right-radius": "999px",
                            "border-bottom-right-radius": "999px",
                            "border-bottom-left-radius": "999px"
                          }
                        },
                        "attrs": {
                          "data-blok-range-fill": ""
                        }
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "thumb-47",
                    "style": {
                      "base": {
                        "position": "absolute",
                        "left": "50%",
                        "top": "7px",
                        "width": "18px",
                        "height": "18px",
                        "background-color": "#2D4BF0",
                        "transform": "translateX(-50%)",
                        "border-top-left-radius": "999px",
                        "border-top-right-radius": "999px",
                        "border-bottom-right-radius": "999px",
                        "border-bottom-left-radius": "999px"
                      }
                    },
                    "attrs": {
                      "data-blok-range-thumb": ""
                    }
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-50",
                "style": {
                  "base": {
                    "display": "flex",
                    "row-gap": "6px",
                    "column-gap": "6px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-48",
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
                        "cursor": "pointer",
                        "font-size": "14px",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "text": "Without"
                  },
                  {
                    "tag": "div",
                    "key": "div-49",
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
                        "background-color": "#0F1115",
                        "color": "#FFFFFF",
                        "cursor": "pointer",
                        "font-size": "14px",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "text": "With"
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
