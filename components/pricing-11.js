import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "pricing-11",
  "prefix": "pricing11",
  "name": "Pricing / Head to head",
  "category": "pricing",
  "collection": "saas",
  "description": "Pricing / Head to head for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "Two plans, side by side"
    },
    "subheading": {
      "type": "text",
      "default": "Example plans and prices. [Replace with your own.]"
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-3",
        "div-59",
        "subheading"
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
        "key": "div-61",
        "style": {
          "base": {
            "max-width": "960px",
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
                "text": "Compare plans"
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
            "key": "div-59",
            "style": {
              "base": {
                "border-top-left-radius": "20px",
                "border-top-right-radius": "20px",
                "border-bottom-right-radius": "20px",
                "border-bottom-left-radius": "20px",
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
                "overflow": "hidden"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-22",
                "style": {
                  "base": {
                    "display": "grid",
                    "grid-template-columns": "minmax(0, 1.3fr) minmax(0, 1fr) minmax(0, 1fr)",
                    "row-gap": "0",
                    "column-gap": "0",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#DDE0D8"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-7",
                    "style": {
                      "base": {
                        "padding-top": "18px",
                        "padding-right": "20px",
                        "padding-bottom": "18px",
                        "padding-left": "20px",
                        "display": "flex",
                        "align-items": "center"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-6",
                        "style": {
                          "base": {
                            "display": "flex",
                            "align-items": "center",
                            "row-gap": "10px",
                            "column-gap": "10px",
                            "font-size": "14px",
                            "color": "#4E545D",
                            "cursor": "pointer"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-4",
                            "style": {
                              "base": {
                                "width": "18px",
                                "height": "18px",
                                "accent-color": "#2D4BF0"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "text-5",
                            "text": "Only show differences"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-14",
                    "style": {
                      "base": {
                        "padding-top": "18px",
                        "padding-right": "16px",
                        "padding-bottom": "18px",
                        "padding-left": "16px",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#ECEEE8",
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "8px",
                        "column-gap": "8px",
                        "background-color": "#FFFFFF"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-12",
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-8",
                            "style": {
                              "base": {
                                "position": "absolute",
                                "width": "1px",
                                "height": "1px",
                                "overflow": "hidden",
                                "clip": "rect(0 0 0 0)"
                              }
                            },
                            "text": "First plan"
                          },
                          {
                            "tag": "div",
                            "key": "select-9",
                            "style": {
                              "base": {
                                "width": "100%",
                                "height": "44px",
                                "padding-top": "0",
                                "padding-right": "10px",
                                "padding-bottom": "0",
                                "padding-left": "10px",
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
                                "font-weight": "600",
                                "color": "#0F1115",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "space-between"
                              }
                            },
                            "attrs": {
                              "role": "combobox"
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "text-10",
                                "text": "Starter"
                              },
                              {
                                "tag": "div",
                                "key": "text-11",
                                "text": "▾"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-13",
                        "style": {
                          "base": {
                            "font-size": "28px",
                            "font-weight": "600",
                            "letter-spacing": "-0.03em"
                          }
                        },
                        "text": "$29/mo"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-21",
                    "style": {
                      "base": {
                        "padding-top": "18px",
                        "padding-right": "16px",
                        "padding-bottom": "18px",
                        "padding-left": "16px",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#ECEEE8",
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "8px",
                        "column-gap": "8px",
                        "background-color": "#F7F8FE"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-19",
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-15",
                            "style": {
                              "base": {
                                "position": "absolute",
                                "width": "1px",
                                "height": "1px",
                                "overflow": "hidden",
                                "clip": "rect(0 0 0 0)"
                              }
                            },
                            "text": "Second plan"
                          },
                          {
                            "tag": "div",
                            "key": "select-16",
                            "style": {
                              "base": {
                                "width": "100%",
                                "height": "44px",
                                "padding-top": "0",
                                "padding-right": "10px",
                                "padding-bottom": "0",
                                "padding-left": "10px",
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
                                "font-weight": "600",
                                "color": "#0F1115",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "space-between"
                              }
                            },
                            "attrs": {
                              "role": "combobox"
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "text-17",
                                "text": "Team"
                              },
                              {
                                "tag": "div",
                                "key": "text-18",
                                "text": "▾"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-20",
                        "style": {
                          "base": {
                            "font-size": "28px",
                            "font-weight": "600",
                            "letter-spacing": "-0.03em"
                          }
                        },
                        "text": "$79/mo"
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-26",
                "style": {
                  "base": {
                    "display": "grid",
                    "grid-template-columns": "minmax(0, 1.3fr) minmax(0, 1fr) minmax(0, 1fr)",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#ECEEE8",
                    "min-height": "56px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-23",
                    "style": {
                      "base": {
                        "padding-top": "0",
                        "padding-right": "20px",
                        "padding-bottom": "0",
                        "padding-left": "20px",
                        "display": "flex",
                        "align-items": "center",
                        "font-size": "15px"
                      }
                    },
                    "text": "Crews"
                  },
                  {
                    "tag": "div",
                    "key": "div-24",
                    "style": {
                      "base": {
                        "padding-top": "0",
                        "padding-right": "16px",
                        "padding-bottom": "0",
                        "padding-left": "16px",
                        "display": "flex",
                        "align-items": "center",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#ECEEE8",
                        "font-size": "15px",
                        "color": "#0F1115"
                      }
                    },
                    "text": "1"
                  },
                  {
                    "tag": "div",
                    "key": "div-25",
                    "style": {
                      "base": {
                        "padding-top": "0",
                        "padding-right": "16px",
                        "padding-bottom": "0",
                        "padding-left": "16px",
                        "display": "flex",
                        "align-items": "center",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#ECEEE8",
                        "font-size": "15px",
                        "color": "#0F1115"
                      }
                    },
                    "text": "Up to 5"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-30",
                "style": {
                  "base": {
                    "display": "grid",
                    "grid-template-columns": "minmax(0, 1.3fr) minmax(0, 1fr) minmax(0, 1fr)",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#ECEEE8",
                    "min-height": "56px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-27",
                    "style": {
                      "base": {
                        "padding-top": "0",
                        "padding-right": "20px",
                        "padding-bottom": "0",
                        "padding-left": "20px",
                        "display": "flex",
                        "align-items": "center",
                        "font-size": "15px"
                      }
                    },
                    "text": "Recurring jobs"
                  },
                  {
                    "tag": "div",
                    "key": "div-28",
                    "style": {
                      "base": {
                        "padding-top": "0",
                        "padding-right": "16px",
                        "padding-bottom": "0",
                        "padding-left": "16px",
                        "display": "flex",
                        "align-items": "center",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#ECEEE8",
                        "font-size": "15px",
                        "color": "#1D6B3A"
                      }
                    },
                    "text": "✓ Included"
                  },
                  {
                    "tag": "div",
                    "key": "div-29",
                    "style": {
                      "base": {
                        "padding-top": "0",
                        "padding-right": "16px",
                        "padding-bottom": "0",
                        "padding-left": "16px",
                        "display": "flex",
                        "align-items": "center",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#ECEEE8",
                        "font-size": "15px",
                        "color": "#1D6B3A"
                      }
                    },
                    "text": "✓ Included"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-34",
                "style": {
                  "base": {
                    "display": "grid",
                    "grid-template-columns": "minmax(0, 1.3fr) minmax(0, 1fr) minmax(0, 1fr)",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#ECEEE8",
                    "min-height": "56px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-31",
                    "style": {
                      "base": {
                        "padding-top": "0",
                        "padding-right": "20px",
                        "padding-bottom": "0",
                        "padding-left": "20px",
                        "display": "flex",
                        "align-items": "center",
                        "font-size": "15px"
                      }
                    },
                    "text": "Online booking"
                  },
                  {
                    "tag": "div",
                    "key": "div-32",
                    "style": {
                      "base": {
                        "padding-top": "0",
                        "padding-right": "16px",
                        "padding-bottom": "0",
                        "padding-left": "16px",
                        "display": "flex",
                        "align-items": "center",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#ECEEE8",
                        "font-size": "15px",
                        "color": "#1D6B3A"
                      }
                    },
                    "text": "✓ Included"
                  },
                  {
                    "tag": "div",
                    "key": "div-33",
                    "style": {
                      "base": {
                        "padding-top": "0",
                        "padding-right": "16px",
                        "padding-bottom": "0",
                        "padding-left": "16px",
                        "display": "flex",
                        "align-items": "center",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#ECEEE8",
                        "font-size": "15px",
                        "color": "#1D6B3A"
                      }
                    },
                    "text": "✓ Included"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-38",
                "style": {
                  "base": {
                    "display": "grid",
                    "grid-template-columns": "minmax(0, 1.3fr) minmax(0, 1fr) minmax(0, 1fr)",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#ECEEE8",
                    "min-height": "56px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-35",
                    "style": {
                      "base": {
                        "padding-top": "0",
                        "padding-right": "20px",
                        "padding-bottom": "0",
                        "padding-left": "20px",
                        "display": "flex",
                        "align-items": "center",
                        "font-size": "15px"
                      }
                    },
                    "text": "Reminder texts"
                  },
                  {
                    "tag": "div",
                    "key": "div-36",
                    "style": {
                      "base": {
                        "padding-top": "0",
                        "padding-right": "16px",
                        "padding-bottom": "0",
                        "padding-left": "16px",
                        "display": "flex",
                        "align-items": "center",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#ECEEE8",
                        "font-size": "15px",
                        "color": "#9AA0A8"
                      }
                    },
                    "text": "—"
                  },
                  {
                    "tag": "div",
                    "key": "div-37",
                    "style": {
                      "base": {
                        "padding-top": "0",
                        "padding-right": "16px",
                        "padding-bottom": "0",
                        "padding-left": "16px",
                        "display": "flex",
                        "align-items": "center",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#ECEEE8",
                        "font-size": "15px",
                        "color": "#1D6B3A"
                      }
                    },
                    "text": "✓ Included"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-42",
                "style": {
                  "base": {
                    "display": "grid",
                    "grid-template-columns": "minmax(0, 1.3fr) minmax(0, 1fr) minmax(0, 1fr)",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#ECEEE8",
                    "min-height": "56px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-39",
                    "style": {
                      "base": {
                        "padding-top": "0",
                        "padding-right": "20px",
                        "padding-bottom": "0",
                        "padding-left": "20px",
                        "display": "flex",
                        "align-items": "center",
                        "font-size": "15px"
                      }
                    },
                    "text": "Dispatch board"
                  },
                  {
                    "tag": "div",
                    "key": "div-40",
                    "style": {
                      "base": {
                        "padding-top": "0",
                        "padding-right": "16px",
                        "padding-bottom": "0",
                        "padding-left": "16px",
                        "display": "flex",
                        "align-items": "center",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#ECEEE8",
                        "font-size": "15px",
                        "color": "#9AA0A8"
                      }
                    },
                    "text": "—"
                  },
                  {
                    "tag": "div",
                    "key": "div-41",
                    "style": {
                      "base": {
                        "padding-top": "0",
                        "padding-right": "16px",
                        "padding-bottom": "0",
                        "padding-left": "16px",
                        "display": "flex",
                        "align-items": "center",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#ECEEE8",
                        "font-size": "15px",
                        "color": "#1D6B3A"
                      }
                    },
                    "text": "✓ Included"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-46",
                "style": {
                  "base": {
                    "display": "grid",
                    "grid-template-columns": "minmax(0, 1.3fr) minmax(0, 1fr) minmax(0, 1fr)",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#ECEEE8",
                    "min-height": "56px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-43",
                    "style": {
                      "base": {
                        "padding-top": "0",
                        "padding-right": "20px",
                        "padding-bottom": "0",
                        "padding-left": "20px",
                        "display": "flex",
                        "align-items": "center",
                        "font-size": "15px"
                      }
                    },
                    "text": "Route optimization"
                  },
                  {
                    "tag": "div",
                    "key": "div-44",
                    "style": {
                      "base": {
                        "padding-top": "0",
                        "padding-right": "16px",
                        "padding-bottom": "0",
                        "padding-left": "16px",
                        "display": "flex",
                        "align-items": "center",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#ECEEE8",
                        "font-size": "15px",
                        "color": "#9AA0A8"
                      }
                    },
                    "text": "—"
                  },
                  {
                    "tag": "div",
                    "key": "div-45",
                    "style": {
                      "base": {
                        "padding-top": "0",
                        "padding-right": "16px",
                        "padding-bottom": "0",
                        "padding-left": "16px",
                        "display": "flex",
                        "align-items": "center",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#ECEEE8",
                        "font-size": "15px",
                        "color": "#0F1115"
                      }
                    },
                    "text": "Add-on"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-50",
                "style": {
                  "base": {
                    "display": "grid",
                    "grid-template-columns": "minmax(0, 1.3fr) minmax(0, 1fr) minmax(0, 1fr)",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#ECEEE8",
                    "min-height": "56px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-47",
                    "style": {
                      "base": {
                        "padding-top": "0",
                        "padding-right": "20px",
                        "padding-bottom": "0",
                        "padding-left": "20px",
                        "display": "flex",
                        "align-items": "center",
                        "font-size": "15px"
                      }
                    },
                    "text": "Roles and permissions"
                  },
                  {
                    "tag": "div",
                    "key": "div-48",
                    "style": {
                      "base": {
                        "padding-top": "0",
                        "padding-right": "16px",
                        "padding-bottom": "0",
                        "padding-left": "16px",
                        "display": "flex",
                        "align-items": "center",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#ECEEE8",
                        "font-size": "15px",
                        "color": "#9AA0A8"
                      }
                    },
                    "text": "—"
                  },
                  {
                    "tag": "div",
                    "key": "div-49",
                    "style": {
                      "base": {
                        "padding-top": "0",
                        "padding-right": "16px",
                        "padding-bottom": "0",
                        "padding-left": "16px",
                        "display": "flex",
                        "align-items": "center",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#ECEEE8",
                        "font-size": "15px",
                        "color": "#9AA0A8"
                      }
                    },
                    "text": "—"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-54",
                "style": {
                  "base": {
                    "display": "grid",
                    "grid-template-columns": "minmax(0, 1.3fr) minmax(0, 1fr) minmax(0, 1fr)",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#ECEEE8",
                    "min-height": "56px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-51",
                    "style": {
                      "base": {
                        "padding-top": "0",
                        "padding-right": "20px",
                        "padding-bottom": "0",
                        "padding-left": "20px",
                        "display": "flex",
                        "align-items": "center",
                        "font-size": "15px"
                      }
                    },
                    "text": "Single sign-on"
                  },
                  {
                    "tag": "div",
                    "key": "div-52",
                    "style": {
                      "base": {
                        "padding-top": "0",
                        "padding-right": "16px",
                        "padding-bottom": "0",
                        "padding-left": "16px",
                        "display": "flex",
                        "align-items": "center",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#ECEEE8",
                        "font-size": "15px",
                        "color": "#9AA0A8"
                      }
                    },
                    "text": "—"
                  },
                  {
                    "tag": "div",
                    "key": "div-53",
                    "style": {
                      "base": {
                        "padding-top": "0",
                        "padding-right": "16px",
                        "padding-bottom": "0",
                        "padding-left": "16px",
                        "display": "flex",
                        "align-items": "center",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#ECEEE8",
                        "font-size": "15px",
                        "color": "#9AA0A8"
                      }
                    },
                    "text": "—"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-58",
                "style": {
                  "base": {
                    "display": "grid",
                    "grid-template-columns": "minmax(0, 1.3fr) minmax(0, 1fr) minmax(0, 1fr)",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#ECEEE8",
                    "min-height": "56px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-55",
                    "style": {
                      "base": {
                        "padding-top": "0",
                        "padding-right": "20px",
                        "padding-bottom": "0",
                        "padding-left": "20px",
                        "display": "flex",
                        "align-items": "center",
                        "font-size": "15px"
                      }
                    },
                    "text": "Support"
                  },
                  {
                    "tag": "div",
                    "key": "div-56",
                    "style": {
                      "base": {
                        "padding-top": "0",
                        "padding-right": "16px",
                        "padding-bottom": "0",
                        "padding-left": "16px",
                        "display": "flex",
                        "align-items": "center",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#ECEEE8",
                        "font-size": "15px",
                        "color": "#0F1115"
                      }
                    },
                    "text": "Email"
                  },
                  {
                    "tag": "div",
                    "key": "div-57",
                    "style": {
                      "base": {
                        "padding-top": "0",
                        "padding-right": "16px",
                        "padding-bottom": "0",
                        "padding-left": "16px",
                        "display": "flex",
                        "align-items": "center",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#ECEEE8",
                        "font-size": "15px",
                        "color": "#0F1115"
                      }
                    },
                    "text": "Email + chat"
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
                "text-align": "center",
                "font-size": "14px",
                "color": "#5B616B"
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
