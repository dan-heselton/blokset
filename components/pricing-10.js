import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "pricing-10",
  "prefix": "pricing10",
  "name": "Pricing / Table",
  "category": "pricing",
  "collection": "saas",
  "description": "Pricing / Table for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "Compare every plan"
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-3",
        "div-81"
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
        "key": "div-82",
        "style": {
          "base": {
            "max-width": "1200px",
            "margin-top": "0",
            "margin-right": "auto",
            "margin-bottom": "0",
            "margin-left": "auto",
            "display": "flex",
            "flex-direction": "column",
            "row-gap": "32px",
            "column-gap": "32px"
          }
        },
        "children": [
          {
            "tag": "div",
            "key": "div-3",
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
                "tag": "h2",
                "key": "heading",
                "style": {
                  "base": {
                    "margin-top": "0",
                    "margin-right": "0",
                    "margin-bottom": "0",
                    "margin-left": "0",
                    "font-size": "clamp(30px, 3.8vw, 48px)",
                    "line-height": "1.05",
                    "letter-spacing": "-0.035em",
                    "font-weight": "600"
                  }
                },
                "bind": "heading"
              },
              {
                "tag": "div",
                "key": "div-2",
                "style": {
                  "base": {
                    "font-size": "15px",
                    "color": "#4E545D"
                  }
                },
                "text": "Pick a plan to highlight it."
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-81",
            "style": {
              "base": {
                "overflow-x": "auto",
                "border-top-left-radius": "18px",
                "border-top-right-radius": "18px",
                "border-bottom-right-radius": "18px",
                "border-bottom-left-radius": "18px",
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
                "background-color": "#FFFFFF"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-80",
                "style": {
                  "base": {
                    "min-width": "760px"
                  }
                },
                "attrs": {
                  "data-blok-accordion": "multi"
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-14",
                    "style": {
                      "base": {
                        "display": "grid",
                        "grid-template-columns": "minmax(220px, 1.6fr) repeat(3, minmax(0, 1fr))",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E2E4DE"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-4",
                        "style": {
                          "base": {
                            "padding-top": "20px",
                            "padding-right": "24px",
                            "padding-bottom": "20px",
                            "padding-left": "24px",
                            "font-size": "14px",
                            "color": "#5B616B",
                            "display": "flex",
                            "align-items": "flex-end"
                          }
                        },
                        "text": "Features"
                      },
                      {
                        "tag": "div",
                        "key": "div-7",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "align-items": "flex-start",
                            "row-gap": "4px",
                            "column-gap": "4px",
                            "padding-top": "20px",
                            "padding-right": "20px",
                            "padding-bottom": "20px",
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
                            "cursor": "pointer",
                            "text-align": "left",
                            "background-color": "#FFFFFF",
                            "color": "#0F1115"
                          }
                        },
                        "attrs": {
                          "aria-pressed": "false"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-5",
                            "style": {
                              "base": {
                                "font-size": "17px",
                                "font-weight": "600"
                              }
                            },
                            "text": "Starter"
                          },
                          {
                            "tag": "div",
                            "key": "div-6",
                            "style": {
                              "base": {
                                "font-size": "13px",
                                "color": "#5B616B"
                              }
                            },
                            "text": "[PRICE] / person"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-10",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "align-items": "flex-start",
                            "row-gap": "4px",
                            "column-gap": "4px",
                            "padding-top": "20px",
                            "padding-right": "20px",
                            "padding-bottom": "20px",
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
                            "cursor": "pointer",
                            "text-align": "left",
                            "background-color": "#0F1115",
                            "color": "#FFFFFF"
                          }
                        },
                        "attrs": {
                          "aria-pressed": "true"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-8",
                            "style": {
                              "base": {
                                "font-size": "17px",
                                "font-weight": "600"
                              }
                            },
                            "text": "Team"
                          },
                          {
                            "tag": "div",
                            "key": "div-9",
                            "style": {
                              "base": {
                                "font-size": "13px",
                                "color": "#B9BEC6"
                              }
                            },
                            "text": "[PRICE] / person"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-13",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "align-items": "flex-start",
                            "row-gap": "4px",
                            "column-gap": "4px",
                            "padding-top": "20px",
                            "padding-right": "20px",
                            "padding-bottom": "20px",
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
                            "cursor": "pointer",
                            "text-align": "left",
                            "background-color": "#FFFFFF",
                            "color": "#0F1115"
                          }
                        },
                        "attrs": {
                          "aria-pressed": "false"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-11",
                            "style": {
                              "base": {
                                "font-size": "17px",
                                "font-weight": "600"
                              }
                            },
                            "text": "Business"
                          },
                          {
                            "tag": "div",
                            "key": "div-12",
                            "style": {
                              "base": {
                                "font-size": "13px",
                                "color": "#5B616B"
                              }
                            },
                            "text": "Custom"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-34",
                    "attrs": {
                      "data-blok-acc-item": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-17",
                        "style": {
                          "base": {
                            "display": "flex",
                            "justify-content": "space-between",
                            "align-items": "center",
                            "width": "100%",
                            "min-height": "52px",
                            "padding-top": "0",
                            "padding-right": "24px",
                            "padding-bottom": "0",
                            "padding-left": "24px",
                            "border-top-width": "0",
                            "border-top-style": "none",
                            "border-top-color": "transparent",
                            "border-right-width": "0",
                            "border-right-style": "none",
                            "border-right-color": "transparent",
                            "border-bottom-width": "1px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#E2E4DE",
                            "border-left-width": "0",
                            "border-left-style": "none",
                            "border-left-color": "transparent",
                            "background-color": "#FAFBF8",
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
                            "key": "div-15",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "12px",
                                "letter-spacing": "0.08em",
                                "text-transform": "uppercase"
                              }
                            },
                            "text": "Scheduling"
                          },
                          {
                            "tag": "div",
                            "key": "div-16",
                            "style": {
                              "base": {
                                "font-size": "18px",
                                "color": "#5B616B"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true",
                              "data-blok-acc-icon": ""
                            },
                            "text": "−"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "panel-33",
                        "attrs": {
                          "data-blok-acc-panel": ""
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-22",
                            "style": {
                              "base": {
                                "display": "grid",
                                "grid-template-columns": "minmax(220px, 1.6fr) repeat(3, minmax(0, 1fr))",
                                "border-bottom-width": "1px",
                                "border-bottom-style": "solid",
                                "border-bottom-color": "#F0F1EC"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-18",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "24px",
                                    "padding-bottom": "16px",
                                    "padding-left": "24px",
                                    "font-size": "15px"
                                  }
                                },
                                "text": "Jobs and recurring visits"
                              },
                              {
                                "tag": "div",
                                "key": "div-19",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "20px",
                                    "padding-bottom": "16px",
                                    "padding-left": "20px",
                                    "font-size": "15px",
                                    "background-color": "transparent",
                                    "color": "#0F1115",
                                    "font-weight": "400"
                                  }
                                },
                                "text": "✓"
                              },
                              {
                                "tag": "div",
                                "key": "div-20",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "20px",
                                    "padding-bottom": "16px",
                                    "padding-left": "20px",
                                    "font-size": "15px",
                                    "background-color": "#EEF1FE",
                                    "color": "#0F1115",
                                    "font-weight": "500"
                                  }
                                },
                                "text": "✓"
                              },
                              {
                                "tag": "div",
                                "key": "div-21",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "20px",
                                    "padding-bottom": "16px",
                                    "padding-left": "20px",
                                    "font-size": "15px",
                                    "background-color": "transparent",
                                    "color": "#0F1115",
                                    "font-weight": "400"
                                  }
                                },
                                "text": "✓"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-27",
                            "style": {
                              "base": {
                                "display": "grid",
                                "grid-template-columns": "minmax(220px, 1.6fr) repeat(3, minmax(0, 1fr))",
                                "border-bottom-width": "1px",
                                "border-bottom-style": "solid",
                                "border-bottom-color": "#F0F1EC"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-23",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "24px",
                                    "padding-bottom": "16px",
                                    "padding-left": "24px",
                                    "font-size": "15px"
                                  }
                                },
                                "text": "Route planning"
                              },
                              {
                                "tag": "div",
                                "key": "div-24",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "20px",
                                    "padding-bottom": "16px",
                                    "padding-left": "20px",
                                    "font-size": "15px",
                                    "background-color": "transparent",
                                    "color": "#0F1115",
                                    "font-weight": "400"
                                  }
                                },
                                "text": "Basic"
                              },
                              {
                                "tag": "div",
                                "key": "div-25",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "20px",
                                    "padding-bottom": "16px",
                                    "padding-left": "20px",
                                    "font-size": "15px",
                                    "background-color": "#EEF1FE",
                                    "color": "#0F1115",
                                    "font-weight": "500"
                                  }
                                },
                                "text": "Optimized"
                              },
                              {
                                "tag": "div",
                                "key": "div-26",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "20px",
                                    "padding-bottom": "16px",
                                    "padding-left": "20px",
                                    "font-size": "15px",
                                    "background-color": "transparent",
                                    "color": "#0F1115",
                                    "font-weight": "400"
                                  }
                                },
                                "text": "Optimized"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-32",
                            "style": {
                              "base": {
                                "display": "grid",
                                "grid-template-columns": "minmax(220px, 1.6fr) repeat(3, minmax(0, 1fr))",
                                "border-bottom-width": "1px",
                                "border-bottom-style": "solid",
                                "border-bottom-color": "#F0F1EC"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-28",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "24px",
                                    "padding-bottom": "16px",
                                    "padding-left": "24px",
                                    "font-size": "15px"
                                  }
                                },
                                "text": "Dispatch board"
                              },
                              {
                                "tag": "div",
                                "key": "div-29",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "20px",
                                    "padding-bottom": "16px",
                                    "padding-left": "20px",
                                    "font-size": "15px",
                                    "background-color": "transparent",
                                    "color": "#8C929B",
                                    "font-weight": "400"
                                  }
                                },
                                "text": "—"
                              },
                              {
                                "tag": "div",
                                "key": "div-30",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "20px",
                                    "padding-bottom": "16px",
                                    "padding-left": "20px",
                                    "font-size": "15px",
                                    "background-color": "#EEF1FE",
                                    "color": "#0F1115",
                                    "font-weight": "500"
                                  }
                                },
                                "text": "✓"
                              },
                              {
                                "tag": "div",
                                "key": "div-31",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "20px",
                                    "padding-bottom": "16px",
                                    "padding-left": "20px",
                                    "font-size": "15px",
                                    "background-color": "transparent",
                                    "color": "#0F1115",
                                    "font-weight": "400"
                                  }
                                },
                                "text": "✓"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-54",
                    "attrs": {
                      "data-blok-acc-item": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-37",
                        "style": {
                          "base": {
                            "display": "flex",
                            "justify-content": "space-between",
                            "align-items": "center",
                            "width": "100%",
                            "min-height": "52px",
                            "padding-top": "0",
                            "padding-right": "24px",
                            "padding-bottom": "0",
                            "padding-left": "24px",
                            "border-top-width": "0",
                            "border-top-style": "none",
                            "border-top-color": "transparent",
                            "border-right-width": "0",
                            "border-right-style": "none",
                            "border-right-color": "transparent",
                            "border-bottom-width": "1px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#E2E4DE",
                            "border-left-width": "0",
                            "border-left-style": "none",
                            "border-left-color": "transparent",
                            "background-color": "#FAFBF8",
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
                            "key": "div-35",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "12px",
                                "letter-spacing": "0.08em",
                                "text-transform": "uppercase"
                              }
                            },
                            "text": "Billing"
                          },
                          {
                            "tag": "div",
                            "key": "div-36",
                            "style": {
                              "base": {
                                "font-size": "18px",
                                "color": "#5B616B"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true",
                              "data-blok-acc-icon": ""
                            },
                            "text": "−"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "panel-53",
                        "attrs": {
                          "data-blok-acc-panel": ""
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-42",
                            "style": {
                              "base": {
                                "display": "grid",
                                "grid-template-columns": "minmax(220px, 1.6fr) repeat(3, minmax(0, 1fr))",
                                "border-bottom-width": "1px",
                                "border-bottom-style": "solid",
                                "border-bottom-color": "#F0F1EC"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-38",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "24px",
                                    "padding-bottom": "16px",
                                    "padding-left": "24px",
                                    "font-size": "15px"
                                  }
                                },
                                "text": "Invoices and card payments"
                              },
                              {
                                "tag": "div",
                                "key": "div-39",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "20px",
                                    "padding-bottom": "16px",
                                    "padding-left": "20px",
                                    "font-size": "15px",
                                    "background-color": "transparent",
                                    "color": "#0F1115",
                                    "font-weight": "400"
                                  }
                                },
                                "text": "✓"
                              },
                              {
                                "tag": "div",
                                "key": "div-40",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "20px",
                                    "padding-bottom": "16px",
                                    "padding-left": "20px",
                                    "font-size": "15px",
                                    "background-color": "#EEF1FE",
                                    "color": "#0F1115",
                                    "font-weight": "500"
                                  }
                                },
                                "text": "✓"
                              },
                              {
                                "tag": "div",
                                "key": "div-41",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "20px",
                                    "padding-bottom": "16px",
                                    "padding-left": "20px",
                                    "font-size": "15px",
                                    "background-color": "transparent",
                                    "color": "#0F1115",
                                    "font-weight": "400"
                                  }
                                },
                                "text": "✓"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-47",
                            "style": {
                              "base": {
                                "display": "grid",
                                "grid-template-columns": "minmax(220px, 1.6fr) repeat(3, minmax(0, 1fr))",
                                "border-bottom-width": "1px",
                                "border-bottom-style": "solid",
                                "border-bottom-color": "#F0F1EC"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-43",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "24px",
                                    "padding-bottom": "16px",
                                    "padding-left": "24px",
                                    "font-size": "15px"
                                  }
                                },
                                "text": "Card on file and autopay"
                              },
                              {
                                "tag": "div",
                                "key": "div-44",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "20px",
                                    "padding-bottom": "16px",
                                    "padding-left": "20px",
                                    "font-size": "15px",
                                    "background-color": "transparent",
                                    "color": "#8C929B",
                                    "font-weight": "400"
                                  }
                                },
                                "text": "—"
                              },
                              {
                                "tag": "div",
                                "key": "div-45",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "20px",
                                    "padding-bottom": "16px",
                                    "padding-left": "20px",
                                    "font-size": "15px",
                                    "background-color": "#EEF1FE",
                                    "color": "#0F1115",
                                    "font-weight": "500"
                                  }
                                },
                                "text": "✓"
                              },
                              {
                                "tag": "div",
                                "key": "div-46",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "20px",
                                    "padding-bottom": "16px",
                                    "padding-left": "20px",
                                    "font-size": "15px",
                                    "background-color": "transparent",
                                    "color": "#0F1115",
                                    "font-weight": "400"
                                  }
                                },
                                "text": "✓"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-52",
                            "style": {
                              "base": {
                                "display": "grid",
                                "grid-template-columns": "minmax(220px, 1.6fr) repeat(3, minmax(0, 1fr))",
                                "border-bottom-width": "1px",
                                "border-bottom-style": "solid",
                                "border-bottom-color": "#F0F1EC"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-48",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "24px",
                                    "padding-bottom": "16px",
                                    "padding-left": "24px",
                                    "font-size": "15px"
                                  }
                                },
                                "text": "Accounting sync"
                              },
                              {
                                "tag": "div",
                                "key": "div-49",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "20px",
                                    "padding-bottom": "16px",
                                    "padding-left": "20px",
                                    "font-size": "15px",
                                    "background-color": "transparent",
                                    "color": "#8C929B",
                                    "font-weight": "400"
                                  }
                                },
                                "text": "—"
                              },
                              {
                                "tag": "div",
                                "key": "div-50",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "20px",
                                    "padding-bottom": "16px",
                                    "padding-left": "20px",
                                    "font-size": "15px",
                                    "background-color": "#EEF1FE",
                                    "color": "#0F1115",
                                    "font-weight": "500"
                                  }
                                },
                                "text": "✓"
                              },
                              {
                                "tag": "div",
                                "key": "div-51",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "20px",
                                    "padding-bottom": "16px",
                                    "padding-left": "20px",
                                    "font-size": "15px",
                                    "background-color": "transparent",
                                    "color": "#0F1115",
                                    "font-weight": "400"
                                  }
                                },
                                "text": "✓"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-79",
                    "attrs": {
                      "data-blok-acc-item": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-57",
                        "style": {
                          "base": {
                            "display": "flex",
                            "justify-content": "space-between",
                            "align-items": "center",
                            "width": "100%",
                            "min-height": "52px",
                            "padding-top": "0",
                            "padding-right": "24px",
                            "padding-bottom": "0",
                            "padding-left": "24px",
                            "border-top-width": "0",
                            "border-top-style": "none",
                            "border-top-color": "transparent",
                            "border-right-width": "0",
                            "border-right-style": "none",
                            "border-right-color": "transparent",
                            "border-bottom-width": "1px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#E2E4DE",
                            "border-left-width": "0",
                            "border-left-style": "none",
                            "border-left-color": "transparent",
                            "background-color": "#FAFBF8",
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
                            "key": "div-55",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "12px",
                                "letter-spacing": "0.08em",
                                "text-transform": "uppercase"
                              }
                            },
                            "text": "Team and admin"
                          },
                          {
                            "tag": "div",
                            "key": "div-56",
                            "style": {
                              "base": {
                                "font-size": "18px",
                                "color": "#5B616B"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true",
                              "data-blok-acc-icon": ""
                            },
                            "text": "−"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "panel-78",
                        "attrs": {
                          "data-blok-acc-panel": ""
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-62",
                            "style": {
                              "base": {
                                "display": "grid",
                                "grid-template-columns": "minmax(220px, 1.6fr) repeat(3, minmax(0, 1fr))",
                                "border-bottom-width": "1px",
                                "border-bottom-style": "solid",
                                "border-bottom-color": "#F0F1EC"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-58",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "24px",
                                    "padding-bottom": "16px",
                                    "padding-left": "24px",
                                    "font-size": "15px"
                                  }
                                },
                                "text": "Crew app"
                              },
                              {
                                "tag": "div",
                                "key": "div-59",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "20px",
                                    "padding-bottom": "16px",
                                    "padding-left": "20px",
                                    "font-size": "15px",
                                    "background-color": "transparent",
                                    "color": "#0F1115",
                                    "font-weight": "400"
                                  }
                                },
                                "text": "✓"
                              },
                              {
                                "tag": "div",
                                "key": "div-60",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "20px",
                                    "padding-bottom": "16px",
                                    "padding-left": "20px",
                                    "font-size": "15px",
                                    "background-color": "#EEF1FE",
                                    "color": "#0F1115",
                                    "font-weight": "500"
                                  }
                                },
                                "text": "✓"
                              },
                              {
                                "tag": "div",
                                "key": "div-61",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "20px",
                                    "padding-bottom": "16px",
                                    "padding-left": "20px",
                                    "font-size": "15px",
                                    "background-color": "transparent",
                                    "color": "#0F1115",
                                    "font-weight": "400"
                                  }
                                },
                                "text": "✓"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-67",
                            "style": {
                              "base": {
                                "display": "grid",
                                "grid-template-columns": "minmax(220px, 1.6fr) repeat(3, minmax(0, 1fr))",
                                "border-bottom-width": "1px",
                                "border-bottom-style": "solid",
                                "border-bottom-color": "#F0F1EC"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-63",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "24px",
                                    "padding-bottom": "16px",
                                    "padding-left": "24px",
                                    "font-size": "15px"
                                  }
                                },
                                "text": "Roles and permissions"
                              },
                              {
                                "tag": "div",
                                "key": "div-64",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "20px",
                                    "padding-bottom": "16px",
                                    "padding-left": "20px",
                                    "font-size": "15px",
                                    "background-color": "transparent",
                                    "color": "#8C929B",
                                    "font-weight": "400"
                                  }
                                },
                                "text": "—"
                              },
                              {
                                "tag": "div",
                                "key": "div-65",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "20px",
                                    "padding-bottom": "16px",
                                    "padding-left": "20px",
                                    "font-size": "15px",
                                    "background-color": "#EEF1FE",
                                    "color": "#0F1115",
                                    "font-weight": "500"
                                  }
                                },
                                "text": "Basic"
                              },
                              {
                                "tag": "div",
                                "key": "div-66",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "20px",
                                    "padding-bottom": "16px",
                                    "padding-left": "20px",
                                    "font-size": "15px",
                                    "background-color": "transparent",
                                    "color": "#0F1115",
                                    "font-weight": "400"
                                  }
                                },
                                "text": "Advanced"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-72",
                            "style": {
                              "base": {
                                "display": "grid",
                                "grid-template-columns": "minmax(220px, 1.6fr) repeat(3, minmax(0, 1fr))",
                                "border-bottom-width": "1px",
                                "border-bottom-style": "solid",
                                "border-bottom-color": "#F0F1EC"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-68",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "24px",
                                    "padding-bottom": "16px",
                                    "padding-left": "24px",
                                    "font-size": "15px"
                                  }
                                },
                                "text": "SSO and audit log"
                              },
                              {
                                "tag": "div",
                                "key": "div-69",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "20px",
                                    "padding-bottom": "16px",
                                    "padding-left": "20px",
                                    "font-size": "15px",
                                    "background-color": "transparent",
                                    "color": "#8C929B",
                                    "font-weight": "400"
                                  }
                                },
                                "text": "—"
                              },
                              {
                                "tag": "div",
                                "key": "div-70",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "20px",
                                    "padding-bottom": "16px",
                                    "padding-left": "20px",
                                    "font-size": "15px",
                                    "background-color": "#EEF1FE",
                                    "color": "#8C929B",
                                    "font-weight": "500"
                                  }
                                },
                                "text": "—"
                              },
                              {
                                "tag": "div",
                                "key": "div-71",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "20px",
                                    "padding-bottom": "16px",
                                    "padding-left": "20px",
                                    "font-size": "15px",
                                    "background-color": "transparent",
                                    "color": "#0F1115",
                                    "font-weight": "400"
                                  }
                                },
                                "text": "✓"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-77",
                            "style": {
                              "base": {
                                "display": "grid",
                                "grid-template-columns": "minmax(220px, 1.6fr) repeat(3, minmax(0, 1fr))",
                                "border-bottom-width": "1px",
                                "border-bottom-style": "solid",
                                "border-bottom-color": "#F0F1EC"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-73",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "24px",
                                    "padding-bottom": "16px",
                                    "padding-left": "24px",
                                    "font-size": "15px"
                                  }
                                },
                                "text": "Support"
                              },
                              {
                                "tag": "div",
                                "key": "div-74",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "20px",
                                    "padding-bottom": "16px",
                                    "padding-left": "20px",
                                    "font-size": "15px",
                                    "background-color": "transparent",
                                    "color": "#0F1115",
                                    "font-weight": "400"
                                  }
                                },
                                "text": "Email"
                              },
                              {
                                "tag": "div",
                                "key": "div-75",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "20px",
                                    "padding-bottom": "16px",
                                    "padding-left": "20px",
                                    "font-size": "15px",
                                    "background-color": "#EEF1FE",
                                    "color": "#0F1115",
                                    "font-weight": "500"
                                  }
                                },
                                "text": "Email and chat"
                              },
                              {
                                "tag": "div",
                                "key": "div-76",
                                "style": {
                                  "base": {
                                    "padding-top": "16px",
                                    "padding-right": "20px",
                                    "padding-bottom": "16px",
                                    "padding-left": "20px",
                                    "font-size": "15px",
                                    "background-color": "transparent",
                                    "color": "#0F1115",
                                    "font-weight": "400"
                                  }
                                },
                                "text": "Dedicated"
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
