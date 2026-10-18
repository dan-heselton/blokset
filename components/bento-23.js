import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "bento-23",
  "prefix": "bento23",
  "name": "Bento / Expanding tiles",
  "category": "bento",
  "collection": "saas",
  "description": "Bento / Expanding tiles for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "Open any tile for the details"
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-5",
        "stack-446"
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
        "key": "div-65",
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
                        "color": "#5B616B"
                      }
                    },
                    "text": "Everything included"
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
                "key": "div-4",
                "style": {
                  "base": {
                    "font-size": "15px",
                    "color": "#5B616B"
                  }
                },
                "text": "Every plan includes all six."
              }
            ]
          },
          {
            "tag": "div",
            "key": "stack-446",
            "style": {
              "base": {
                "display": "flex",
                "flex-direction": "column",
                "width": "100%"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-64",
                "style": {
                  "base": {
                    "display": "grid",
                    "grid-template-columns": "repeat(4, minmax(0, 1fr))",
                    "grid-auto-rows": "200px",
                    "grid-auto-flow": "dense",
                    "row-gap": "14px",
                    "column-gap": "14px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-23",
                    "style": {
                      "base": {
                        "grid-column-start": "span 2",
                        "grid-row-start": "span 2",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
                        "overflow": "hidden",
                        "background-color": "#0F1115",
                        "color": "#FFFFFF",
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
                        "border-left-color": "#0F1115"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-22",
                        "style": {
                          "base": {
                            "width": "100%",
                            "height": "100%",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
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
                            "color": "inherit",
                            "cursor": "pointer",
                            "text-align": "left",
                            "display": "flex",
                            "flex-direction": "column",
                            "justify-content": "space-between",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "center",
                            "line-height": "1",
                            "flex-shrink": "0"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "true"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-8",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "width": "100%"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-6",
                                "style": {
                                  "base": {
                                    "width": "40px",
                                    "height": "40px",
                                    "border-top-left-radius": "11px",
                                    "border-top-right-radius": "11px",
                                    "border-bottom-right-radius": "11px",
                                    "border-bottom-left-radius": "11px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "background-color": "#262A31"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "▦"
                              },
                              {
                                "tag": "div",
                                "key": "div-7",
                                "style": {
                                  "base": {
                                    "width": "32px",
                                    "height": "32px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
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
                                    "border-left-color": "#3A3F47"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "−"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-21",
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
                                "key": "div-9",
                                "style": {
                                  "base": {
                                    "font-size": "32px",
                                    "line-height": "1.1",
                                    "letter-spacing": "-0.025em",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Recurring schedules"
                              },
                              {
                                "tag": "div",
                                "key": "div-10",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "opacity": "0.75"
                                  }
                                },
                                "text": "Set a rhythm once."
                              },
                              {
                                "tag": "div",
                                "key": "div-20",
                                "style": {
                                  "base": {
                                    "display": "flex",
                                    "flex-direction": "column",
                                    "row-gap": "8px",
                                    "column-gap": "8px",
                                    "margin-top": "6px"
                                  }
                                },
                                "children": [
                                  {
                                    "tag": "div",
                                    "key": "div-13",
                                    "style": {
                                      "base": {
                                        "display": "flex",
                                        "row-gap": "10px",
                                        "column-gap": "10px",
                                        "font-size": "15px"
                                      }
                                    },
                                    "children": [
                                      {
                                        "tag": "div",
                                        "key": "div-11",
                                        "attrs": {
                                          "aria-hidden": "true"
                                        },
                                        "text": "✓"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "text-12",
                                        "text": "Weekly, monthly or custom"
                                      }
                                    ]
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-16",
                                    "style": {
                                      "base": {
                                        "display": "flex",
                                        "row-gap": "10px",
                                        "column-gap": "10px",
                                        "font-size": "15px"
                                      }
                                    },
                                    "children": [
                                      {
                                        "tag": "div",
                                        "key": "div-14",
                                        "attrs": {
                                          "aria-hidden": "true"
                                        },
                                        "text": "✓"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "text-15",
                                        "text": "Skip or shift one visit"
                                      }
                                    ]
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-19",
                                    "style": {
                                      "base": {
                                        "display": "flex",
                                        "row-gap": "10px",
                                        "column-gap": "10px",
                                        "font-size": "15px"
                                      }
                                    },
                                    "children": [
                                      {
                                        "tag": "div",
                                        "key": "div-17",
                                        "attrs": {
                                          "aria-hidden": "true"
                                        },
                                        "text": "✓"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "text-18",
                                        "text": "Holiday rules"
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
                  },
                  {
                    "tag": "div",
                    "key": "div-31",
                    "style": {
                      "base": {
                        "grid-column-start": "span 1",
                        "grid-row-start": "span 1",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
                        "overflow": "hidden",
                        "background-color": "#2D4BF0",
                        "color": "#FFFFFF",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#2D4BF0",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#2D4BF0",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#2D4BF0",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#2D4BF0"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-30",
                        "style": {
                          "base": {
                            "width": "100%",
                            "height": "100%",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
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
                            "color": "inherit",
                            "cursor": "pointer",
                            "text-align": "left",
                            "display": "flex",
                            "flex-direction": "column",
                            "justify-content": "space-between",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "center",
                            "line-height": "1",
                            "flex-shrink": "0"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "false"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-26",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "width": "100%"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-24",
                                "style": {
                                  "base": {
                                    "width": "40px",
                                    "height": "40px",
                                    "border-top-left-radius": "11px",
                                    "border-top-right-radius": "11px",
                                    "border-bottom-right-radius": "11px",
                                    "border-bottom-left-radius": "11px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "background-color": "#4562F3"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "↝"
                              },
                              {
                                "tag": "div",
                                "key": "div-25",
                                "style": {
                                  "base": {
                                    "width": "32px",
                                    "height": "32px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "rgba(255,255,255,0.35)",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "rgba(255,255,255,0.35)",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "rgba(255,255,255,0.35)",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "rgba(255,255,255,0.35)"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-29",
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
                                "key": "div-27",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "line-height": "1.1",
                                    "letter-spacing": "-0.025em",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Route ordering"
                              },
                              {
                                "tag": "div",
                                "key": "div-28",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "opacity": "0.75"
                                  }
                                },
                                "text": "Shortest drive, one click."
                              }
                            ]
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
                        "grid-column-start": "span 1",
                        "grid-row-start": "span 1",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
                        "overflow": "hidden",
                        "background-color": "#FFFFFF",
                        "color": "#0F1115",
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
                        "key": "div-38",
                        "style": {
                          "base": {
                            "width": "100%",
                            "height": "100%",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
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
                            "color": "inherit",
                            "cursor": "pointer",
                            "text-align": "left",
                            "display": "flex",
                            "flex-direction": "column",
                            "justify-content": "space-between",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "center",
                            "line-height": "1",
                            "flex-shrink": "0"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "false"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-34",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "width": "100%"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-32",
                                "style": {
                                  "base": {
                                    "width": "40px",
                                    "height": "40px",
                                    "border-top-left-radius": "11px",
                                    "border-top-right-radius": "11px",
                                    "border-bottom-right-radius": "11px",
                                    "border-bottom-left-radius": "11px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "background-color": "#F4F5F1"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "✆"
                              },
                              {
                                "tag": "div",
                                "key": "div-33",
                                "style": {
                                  "base": {
                                    "width": "32px",
                                    "height": "32px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
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
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-37",
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
                                "key": "div-35",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "line-height": "1.1",
                                    "letter-spacing": "-0.025em",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Reminder texts"
                              },
                              {
                                "tag": "div",
                                "key": "div-36",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "opacity": "0.75"
                                  }
                                },
                                "text": "Fewer no-shows."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-47",
                    "style": {
                      "base": {
                        "grid-column-start": "span 1",
                        "grid-row-start": "span 1",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
                        "overflow": "hidden",
                        "background-color": "#FFFFFF",
                        "color": "#0F1115",
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
                        "key": "div-46",
                        "style": {
                          "base": {
                            "width": "100%",
                            "height": "100%",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
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
                            "color": "inherit",
                            "cursor": "pointer",
                            "text-align": "left",
                            "display": "flex",
                            "flex-direction": "column",
                            "justify-content": "space-between",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "center",
                            "line-height": "1",
                            "flex-shrink": "0"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "false"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-42",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "width": "100%"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-40",
                                "style": {
                                  "base": {
                                    "width": "40px",
                                    "height": "40px",
                                    "border-top-left-radius": "11px",
                                    "border-top-right-radius": "11px",
                                    "border-bottom-right-radius": "11px",
                                    "border-bottom-left-radius": "11px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "background-color": "#F4F5F1"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "$"
                              },
                              {
                                "tag": "div",
                                "key": "div-41",
                                "style": {
                                  "base": {
                                    "width": "32px",
                                    "height": "32px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
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
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-45",
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
                                "key": "div-43",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "line-height": "1.1",
                                    "letter-spacing": "-0.025em",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Invoices and payments"
                              },
                              {
                                "tag": "div",
                                "key": "div-44",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "opacity": "0.75"
                                  }
                                },
                                "text": "Paid from a text."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-55",
                    "style": {
                      "base": {
                        "grid-column-start": "span 1",
                        "grid-row-start": "span 1",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
                        "overflow": "hidden",
                        "background-color": "#FFFFFF",
                        "color": "#0F1115",
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
                        "key": "div-54",
                        "style": {
                          "base": {
                            "width": "100%",
                            "height": "100%",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
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
                            "color": "inherit",
                            "cursor": "pointer",
                            "text-align": "left",
                            "display": "flex",
                            "flex-direction": "column",
                            "justify-content": "space-between",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "center",
                            "line-height": "1",
                            "flex-shrink": "0"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "false"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-50",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "width": "100%"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-48",
                                "style": {
                                  "base": {
                                    "width": "40px",
                                    "height": "40px",
                                    "border-top-left-radius": "11px",
                                    "border-top-right-radius": "11px",
                                    "border-bottom-right-radius": "11px",
                                    "border-bottom-left-radius": "11px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "background-color": "#F4F5F1"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "◉"
                              },
                              {
                                "tag": "div",
                                "key": "div-49",
                                "style": {
                                  "base": {
                                    "width": "32px",
                                    "height": "32px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
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
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-53",
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
                                "key": "div-51",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "line-height": "1.1",
                                    "letter-spacing": "-0.025em",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Job photos"
                              },
                              {
                                "tag": "div",
                                "key": "div-52",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "opacity": "0.75"
                                  }
                                },
                                "text": "Proof for every visit."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-63",
                    "style": {
                      "base": {
                        "grid-column-start": "span 1",
                        "grid-row-start": "span 1",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
                        "overflow": "hidden",
                        "background-color": "#E8ECFE",
                        "color": "#0F1115",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E8ECFE",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E8ECFE",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E8ECFE",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E8ECFE"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-62",
                        "style": {
                          "base": {
                            "width": "100%",
                            "height": "100%",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
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
                            "color": "inherit",
                            "cursor": "pointer",
                            "text-align": "left",
                            "display": "flex",
                            "flex-direction": "column",
                            "justify-content": "space-between",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "center",
                            "line-height": "1",
                            "flex-shrink": "0"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "false"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-58",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "width": "100%"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-56",
                                "style": {
                                  "base": {
                                    "width": "40px",
                                    "height": "40px",
                                    "border-top-left-radius": "11px",
                                    "border-top-right-radius": "11px",
                                    "border-bottom-right-radius": "11px",
                                    "border-bottom-left-radius": "11px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "background-color": "#FFFFFF"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "≡"
                              },
                              {
                                "tag": "div",
                                "key": "div-57",
                                "style": {
                                  "base": {
                                    "width": "32px",
                                    "height": "32px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#C5CFFB",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#C5CFFB",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#C5CFFB",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#C5CFFB"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-61",
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
                                "key": "div-59",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "line-height": "1.1",
                                    "letter-spacing": "-0.025em",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Reports"
                              },
                              {
                                "tag": "div",
                                "key": "div-60",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "opacity": "0.75"
                                  }
                                },
                                "text": "Know your numbers."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ],
                "attrs": {
                  "data-blok-panel": "",
                  "data-display": "grid"
                }
              },
              {
                "tag": "div",
                "key": "div-129",
                "style": {
                  "base": {
                    "display": "none",
                    "grid-template-columns": "repeat(4, minmax(0, 1fr))",
                    "grid-auto-rows": "200px",
                    "grid-auto-flow": "dense",
                    "row-gap": "14px",
                    "column-gap": "14px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-78",
                    "style": {
                      "base": {
                        "grid-column-start": "span 1",
                        "grid-row-start": "span 1",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
                        "overflow": "hidden",
                        "background-color": "#0F1115",
                        "color": "#FFFFFF",
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
                        "border-left-color": "#0F1115"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-77",
                        "style": {
                          "base": {
                            "width": "100%",
                            "height": "100%",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
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
                            "color": "inherit",
                            "cursor": "pointer",
                            "text-align": "left",
                            "display": "flex",
                            "flex-direction": "column",
                            "justify-content": "space-between",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "center",
                            "line-height": "1",
                            "flex-shrink": "0"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "false"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-73",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "width": "100%"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-71",
                                "style": {
                                  "base": {
                                    "width": "40px",
                                    "height": "40px",
                                    "border-top-left-radius": "11px",
                                    "border-top-right-radius": "11px",
                                    "border-bottom-right-radius": "11px",
                                    "border-bottom-left-radius": "11px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "background-color": "#262A31"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "▦"
                              },
                              {
                                "tag": "div",
                                "key": "div-72",
                                "style": {
                                  "base": {
                                    "width": "32px",
                                    "height": "32px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
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
                                    "border-left-color": "#3A3F47"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-76",
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
                                "key": "div-74",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "line-height": "1.1",
                                    "letter-spacing": "-0.025em",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Recurring schedules"
                              },
                              {
                                "tag": "div",
                                "key": "div-75",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "opacity": "0.75"
                                  }
                                },
                                "text": "Set a rhythm once."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-96",
                    "style": {
                      "base": {
                        "grid-column-start": "span 2",
                        "grid-row-start": "span 2",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
                        "overflow": "hidden",
                        "background-color": "#2D4BF0",
                        "color": "#FFFFFF",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#2D4BF0",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#2D4BF0",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#2D4BF0",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#2D4BF0"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-95",
                        "style": {
                          "base": {
                            "width": "100%",
                            "height": "100%",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
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
                            "color": "inherit",
                            "cursor": "pointer",
                            "text-align": "left",
                            "display": "flex",
                            "flex-direction": "column",
                            "justify-content": "space-between",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "center",
                            "line-height": "1",
                            "flex-shrink": "0"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "true"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-81",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "width": "100%"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-79",
                                "style": {
                                  "base": {
                                    "width": "40px",
                                    "height": "40px",
                                    "border-top-left-radius": "11px",
                                    "border-top-right-radius": "11px",
                                    "border-bottom-right-radius": "11px",
                                    "border-bottom-left-radius": "11px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "background-color": "#4562F3"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "↝"
                              },
                              {
                                "tag": "div",
                                "key": "div-80",
                                "style": {
                                  "base": {
                                    "width": "32px",
                                    "height": "32px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "rgba(255,255,255,0.35)",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "rgba(255,255,255,0.35)",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "rgba(255,255,255,0.35)",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "rgba(255,255,255,0.35)"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "−"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-94",
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
                                "key": "div-82",
                                "style": {
                                  "base": {
                                    "font-size": "32px",
                                    "line-height": "1.1",
                                    "letter-spacing": "-0.025em",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Route ordering"
                              },
                              {
                                "tag": "div",
                                "key": "div-83",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "opacity": "0.75"
                                  }
                                },
                                "text": "Shortest drive, one click."
                              },
                              {
                                "tag": "div",
                                "key": "div-93",
                                "style": {
                                  "base": {
                                    "display": "flex",
                                    "flex-direction": "column",
                                    "row-gap": "8px",
                                    "column-gap": "8px",
                                    "margin-top": "6px"
                                  }
                                },
                                "children": [
                                  {
                                    "tag": "div",
                                    "key": "div-86",
                                    "style": {
                                      "base": {
                                        "display": "flex",
                                        "row-gap": "10px",
                                        "column-gap": "10px",
                                        "font-size": "15px"
                                      }
                                    },
                                    "children": [
                                      {
                                        "tag": "div",
                                        "key": "div-84",
                                        "attrs": {
                                          "aria-hidden": "true"
                                        },
                                        "text": "✓"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "text-85",
                                        "text": "Re-orders when jobs change"
                                      }
                                    ]
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-89",
                                    "style": {
                                      "base": {
                                        "display": "flex",
                                        "row-gap": "10px",
                                        "column-gap": "10px",
                                        "font-size": "15px"
                                      }
                                    },
                                    "children": [
                                      {
                                        "tag": "div",
                                        "key": "div-87",
                                        "attrs": {
                                          "aria-hidden": "true"
                                        },
                                        "text": "✓"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "text-88",
                                        "text": "Turn-by-turn in the crew app"
                                      }
                                    ]
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-92",
                                    "style": {
                                      "base": {
                                        "display": "flex",
                                        "row-gap": "10px",
                                        "column-gap": "10px",
                                        "font-size": "15px"
                                      }
                                    },
                                    "children": [
                                      {
                                        "tag": "div",
                                        "key": "div-90",
                                        "attrs": {
                                          "aria-hidden": "true"
                                        },
                                        "text": "✓"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "text-91",
                                        "text": "Arrival windows update"
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
                  },
                  {
                    "tag": "div",
                    "key": "div-104",
                    "style": {
                      "base": {
                        "grid-column-start": "span 1",
                        "grid-row-start": "span 1",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
                        "overflow": "hidden",
                        "background-color": "#FFFFFF",
                        "color": "#0F1115",
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
                        "key": "div-103",
                        "style": {
                          "base": {
                            "width": "100%",
                            "height": "100%",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
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
                            "color": "inherit",
                            "cursor": "pointer",
                            "text-align": "left",
                            "display": "flex",
                            "flex-direction": "column",
                            "justify-content": "space-between",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "center",
                            "line-height": "1",
                            "flex-shrink": "0"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "false"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-99",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "width": "100%"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-97",
                                "style": {
                                  "base": {
                                    "width": "40px",
                                    "height": "40px",
                                    "border-top-left-radius": "11px",
                                    "border-top-right-radius": "11px",
                                    "border-bottom-right-radius": "11px",
                                    "border-bottom-left-radius": "11px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "background-color": "#F4F5F1"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "✆"
                              },
                              {
                                "tag": "div",
                                "key": "div-98",
                                "style": {
                                  "base": {
                                    "width": "32px",
                                    "height": "32px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
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
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-102",
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
                                "key": "div-100",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "line-height": "1.1",
                                    "letter-spacing": "-0.025em",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Reminder texts"
                              },
                              {
                                "tag": "div",
                                "key": "div-101",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "opacity": "0.75"
                                  }
                                },
                                "text": "Fewer no-shows."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-112",
                    "style": {
                      "base": {
                        "grid-column-start": "span 1",
                        "grid-row-start": "span 1",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
                        "overflow": "hidden",
                        "background-color": "#FFFFFF",
                        "color": "#0F1115",
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
                        "key": "div-111",
                        "style": {
                          "base": {
                            "width": "100%",
                            "height": "100%",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
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
                            "color": "inherit",
                            "cursor": "pointer",
                            "text-align": "left",
                            "display": "flex",
                            "flex-direction": "column",
                            "justify-content": "space-between",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "center",
                            "line-height": "1",
                            "flex-shrink": "0"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "false"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-107",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "width": "100%"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-105",
                                "style": {
                                  "base": {
                                    "width": "40px",
                                    "height": "40px",
                                    "border-top-left-radius": "11px",
                                    "border-top-right-radius": "11px",
                                    "border-bottom-right-radius": "11px",
                                    "border-bottom-left-radius": "11px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "background-color": "#F4F5F1"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "$"
                              },
                              {
                                "tag": "div",
                                "key": "div-106",
                                "style": {
                                  "base": {
                                    "width": "32px",
                                    "height": "32px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
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
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-110",
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
                                "key": "div-108",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "line-height": "1.1",
                                    "letter-spacing": "-0.025em",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Invoices and payments"
                              },
                              {
                                "tag": "div",
                                "key": "div-109",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "opacity": "0.75"
                                  }
                                },
                                "text": "Paid from a text."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-120",
                    "style": {
                      "base": {
                        "grid-column-start": "span 1",
                        "grid-row-start": "span 1",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
                        "overflow": "hidden",
                        "background-color": "#FFFFFF",
                        "color": "#0F1115",
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
                        "key": "div-119",
                        "style": {
                          "base": {
                            "width": "100%",
                            "height": "100%",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
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
                            "color": "inherit",
                            "cursor": "pointer",
                            "text-align": "left",
                            "display": "flex",
                            "flex-direction": "column",
                            "justify-content": "space-between",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "center",
                            "line-height": "1",
                            "flex-shrink": "0"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "false"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-115",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "width": "100%"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-113",
                                "style": {
                                  "base": {
                                    "width": "40px",
                                    "height": "40px",
                                    "border-top-left-radius": "11px",
                                    "border-top-right-radius": "11px",
                                    "border-bottom-right-radius": "11px",
                                    "border-bottom-left-radius": "11px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "background-color": "#F4F5F1"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "◉"
                              },
                              {
                                "tag": "div",
                                "key": "div-114",
                                "style": {
                                  "base": {
                                    "width": "32px",
                                    "height": "32px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
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
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-118",
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
                                "key": "div-116",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "line-height": "1.1",
                                    "letter-spacing": "-0.025em",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Job photos"
                              },
                              {
                                "tag": "div",
                                "key": "div-117",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "opacity": "0.75"
                                  }
                                },
                                "text": "Proof for every visit."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-128",
                    "style": {
                      "base": {
                        "grid-column-start": "span 1",
                        "grid-row-start": "span 1",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
                        "overflow": "hidden",
                        "background-color": "#E8ECFE",
                        "color": "#0F1115",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E8ECFE",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E8ECFE",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E8ECFE",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E8ECFE"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-127",
                        "style": {
                          "base": {
                            "width": "100%",
                            "height": "100%",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
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
                            "color": "inherit",
                            "cursor": "pointer",
                            "text-align": "left",
                            "display": "flex",
                            "flex-direction": "column",
                            "justify-content": "space-between",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "center",
                            "line-height": "1",
                            "flex-shrink": "0"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "false"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-123",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "width": "100%"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-121",
                                "style": {
                                  "base": {
                                    "width": "40px",
                                    "height": "40px",
                                    "border-top-left-radius": "11px",
                                    "border-top-right-radius": "11px",
                                    "border-bottom-right-radius": "11px",
                                    "border-bottom-left-radius": "11px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "background-color": "#FFFFFF"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "≡"
                              },
                              {
                                "tag": "div",
                                "key": "div-122",
                                "style": {
                                  "base": {
                                    "width": "32px",
                                    "height": "32px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#C5CFFB",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#C5CFFB",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#C5CFFB",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#C5CFFB"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-126",
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
                                "key": "div-124",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "line-height": "1.1",
                                    "letter-spacing": "-0.025em",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Reports"
                              },
                              {
                                "tag": "div",
                                "key": "div-125",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "opacity": "0.75"
                                  }
                                },
                                "text": "Know your numbers."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ],
                "attrs": {
                  "data-blok-panel": "",
                  "data-display": "grid"
                }
              },
              {
                "tag": "div",
                "key": "div-194",
                "style": {
                  "base": {
                    "display": "none",
                    "grid-template-columns": "repeat(4, minmax(0, 1fr))",
                    "grid-auto-rows": "200px",
                    "grid-auto-flow": "dense",
                    "row-gap": "14px",
                    "column-gap": "14px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-143",
                    "style": {
                      "base": {
                        "grid-column-start": "span 1",
                        "grid-row-start": "span 1",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
                        "overflow": "hidden",
                        "background-color": "#0F1115",
                        "color": "#FFFFFF",
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
                        "border-left-color": "#0F1115"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-142",
                        "style": {
                          "base": {
                            "width": "100%",
                            "height": "100%",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
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
                            "color": "inherit",
                            "cursor": "pointer",
                            "text-align": "left",
                            "display": "flex",
                            "flex-direction": "column",
                            "justify-content": "space-between",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "center",
                            "line-height": "1",
                            "flex-shrink": "0"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "false"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-138",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "width": "100%"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-136",
                                "style": {
                                  "base": {
                                    "width": "40px",
                                    "height": "40px",
                                    "border-top-left-radius": "11px",
                                    "border-top-right-radius": "11px",
                                    "border-bottom-right-radius": "11px",
                                    "border-bottom-left-radius": "11px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "background-color": "#262A31"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "▦"
                              },
                              {
                                "tag": "div",
                                "key": "div-137",
                                "style": {
                                  "base": {
                                    "width": "32px",
                                    "height": "32px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
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
                                    "border-left-color": "#3A3F47"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-141",
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
                                "key": "div-139",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "line-height": "1.1",
                                    "letter-spacing": "-0.025em",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Recurring schedules"
                              },
                              {
                                "tag": "div",
                                "key": "div-140",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "opacity": "0.75"
                                  }
                                },
                                "text": "Set a rhythm once."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-151",
                    "style": {
                      "base": {
                        "grid-column-start": "span 1",
                        "grid-row-start": "span 1",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
                        "overflow": "hidden",
                        "background-color": "#2D4BF0",
                        "color": "#FFFFFF",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#2D4BF0",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#2D4BF0",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#2D4BF0",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#2D4BF0"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-150",
                        "style": {
                          "base": {
                            "width": "100%",
                            "height": "100%",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
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
                            "color": "inherit",
                            "cursor": "pointer",
                            "text-align": "left",
                            "display": "flex",
                            "flex-direction": "column",
                            "justify-content": "space-between",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "center",
                            "line-height": "1",
                            "flex-shrink": "0"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "false"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-146",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "width": "100%"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-144",
                                "style": {
                                  "base": {
                                    "width": "40px",
                                    "height": "40px",
                                    "border-top-left-radius": "11px",
                                    "border-top-right-radius": "11px",
                                    "border-bottom-right-radius": "11px",
                                    "border-bottom-left-radius": "11px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "background-color": "#4562F3"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "↝"
                              },
                              {
                                "tag": "div",
                                "key": "div-145",
                                "style": {
                                  "base": {
                                    "width": "32px",
                                    "height": "32px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "rgba(255,255,255,0.35)",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "rgba(255,255,255,0.35)",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "rgba(255,255,255,0.35)",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "rgba(255,255,255,0.35)"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-149",
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
                                "key": "div-147",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "line-height": "1.1",
                                    "letter-spacing": "-0.025em",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Route ordering"
                              },
                              {
                                "tag": "div",
                                "key": "div-148",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "opacity": "0.75"
                                  }
                                },
                                "text": "Shortest drive, one click."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-169",
                    "style": {
                      "base": {
                        "grid-column-start": "span 2",
                        "grid-row-start": "span 2",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
                        "overflow": "hidden",
                        "background-color": "#FFFFFF",
                        "color": "#0F1115",
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
                        "key": "div-168",
                        "style": {
                          "base": {
                            "width": "100%",
                            "height": "100%",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
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
                            "color": "inherit",
                            "cursor": "pointer",
                            "text-align": "left",
                            "display": "flex",
                            "flex-direction": "column",
                            "justify-content": "space-between",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "center",
                            "line-height": "1",
                            "flex-shrink": "0"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "true"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-154",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "width": "100%"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-152",
                                "style": {
                                  "base": {
                                    "width": "40px",
                                    "height": "40px",
                                    "border-top-left-radius": "11px",
                                    "border-top-right-radius": "11px",
                                    "border-bottom-right-radius": "11px",
                                    "border-bottom-left-radius": "11px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "background-color": "#F4F5F1"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "✆"
                              },
                              {
                                "tag": "div",
                                "key": "div-153",
                                "style": {
                                  "base": {
                                    "width": "32px",
                                    "height": "32px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
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
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "−"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-167",
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
                                "key": "div-155",
                                "style": {
                                  "base": {
                                    "font-size": "32px",
                                    "line-height": "1.1",
                                    "letter-spacing": "-0.025em",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Reminder texts"
                              },
                              {
                                "tag": "div",
                                "key": "div-156",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "opacity": "0.75"
                                  }
                                },
                                "text": "Fewer no-shows."
                              },
                              {
                                "tag": "div",
                                "key": "div-166",
                                "style": {
                                  "base": {
                                    "display": "flex",
                                    "flex-direction": "column",
                                    "row-gap": "8px",
                                    "column-gap": "8px",
                                    "margin-top": "6px"
                                  }
                                },
                                "children": [
                                  {
                                    "tag": "div",
                                    "key": "div-159",
                                    "style": {
                                      "base": {
                                        "display": "flex",
                                        "row-gap": "10px",
                                        "column-gap": "10px",
                                        "font-size": "15px"
                                      }
                                    },
                                    "children": [
                                      {
                                        "tag": "div",
                                        "key": "div-157",
                                        "attrs": {
                                          "aria-hidden": "true"
                                        },
                                        "text": "✓"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "text-158",
                                        "text": "Day-before reminders"
                                      }
                                    ]
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-162",
                                    "style": {
                                      "base": {
                                        "display": "flex",
                                        "row-gap": "10px",
                                        "column-gap": "10px",
                                        "font-size": "15px"
                                      }
                                    },
                                    "children": [
                                      {
                                        "tag": "div",
                                        "key": "div-160",
                                        "attrs": {
                                          "aria-hidden": "true"
                                        },
                                        "text": "✓"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "text-161",
                                        "text": "On-the-way alerts"
                                      }
                                    ]
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-165",
                                    "style": {
                                      "base": {
                                        "display": "flex",
                                        "row-gap": "10px",
                                        "column-gap": "10px",
                                        "font-size": "15px"
                                      }
                                    },
                                    "children": [
                                      {
                                        "tag": "div",
                                        "key": "div-163",
                                        "attrs": {
                                          "aria-hidden": "true"
                                        },
                                        "text": "✓"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "text-164",
                                        "text": "Two-way replies"
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
                  },
                  {
                    "tag": "div",
                    "key": "div-177",
                    "style": {
                      "base": {
                        "grid-column-start": "span 1",
                        "grid-row-start": "span 1",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
                        "overflow": "hidden",
                        "background-color": "#FFFFFF",
                        "color": "#0F1115",
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
                        "key": "div-176",
                        "style": {
                          "base": {
                            "width": "100%",
                            "height": "100%",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
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
                            "color": "inherit",
                            "cursor": "pointer",
                            "text-align": "left",
                            "display": "flex",
                            "flex-direction": "column",
                            "justify-content": "space-between",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "center",
                            "line-height": "1",
                            "flex-shrink": "0"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "false"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-172",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "width": "100%"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-170",
                                "style": {
                                  "base": {
                                    "width": "40px",
                                    "height": "40px",
                                    "border-top-left-radius": "11px",
                                    "border-top-right-radius": "11px",
                                    "border-bottom-right-radius": "11px",
                                    "border-bottom-left-radius": "11px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "background-color": "#F4F5F1"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "$"
                              },
                              {
                                "tag": "div",
                                "key": "div-171",
                                "style": {
                                  "base": {
                                    "width": "32px",
                                    "height": "32px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
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
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-175",
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
                                "key": "div-173",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "line-height": "1.1",
                                    "letter-spacing": "-0.025em",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Invoices and payments"
                              },
                              {
                                "tag": "div",
                                "key": "div-174",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "opacity": "0.75"
                                  }
                                },
                                "text": "Paid from a text."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-185",
                    "style": {
                      "base": {
                        "grid-column-start": "span 1",
                        "grid-row-start": "span 1",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
                        "overflow": "hidden",
                        "background-color": "#FFFFFF",
                        "color": "#0F1115",
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
                        "key": "div-184",
                        "style": {
                          "base": {
                            "width": "100%",
                            "height": "100%",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
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
                            "color": "inherit",
                            "cursor": "pointer",
                            "text-align": "left",
                            "display": "flex",
                            "flex-direction": "column",
                            "justify-content": "space-between",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "center",
                            "line-height": "1",
                            "flex-shrink": "0"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "false"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-180",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "width": "100%"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-178",
                                "style": {
                                  "base": {
                                    "width": "40px",
                                    "height": "40px",
                                    "border-top-left-radius": "11px",
                                    "border-top-right-radius": "11px",
                                    "border-bottom-right-radius": "11px",
                                    "border-bottom-left-radius": "11px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "background-color": "#F4F5F1"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "◉"
                              },
                              {
                                "tag": "div",
                                "key": "div-179",
                                "style": {
                                  "base": {
                                    "width": "32px",
                                    "height": "32px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
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
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-183",
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
                                "key": "div-181",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "line-height": "1.1",
                                    "letter-spacing": "-0.025em",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Job photos"
                              },
                              {
                                "tag": "div",
                                "key": "div-182",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "opacity": "0.75"
                                  }
                                },
                                "text": "Proof for every visit."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-193",
                    "style": {
                      "base": {
                        "grid-column-start": "span 1",
                        "grid-row-start": "span 1",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
                        "overflow": "hidden",
                        "background-color": "#E8ECFE",
                        "color": "#0F1115",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E8ECFE",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E8ECFE",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E8ECFE",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E8ECFE"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-192",
                        "style": {
                          "base": {
                            "width": "100%",
                            "height": "100%",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
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
                            "color": "inherit",
                            "cursor": "pointer",
                            "text-align": "left",
                            "display": "flex",
                            "flex-direction": "column",
                            "justify-content": "space-between",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "center",
                            "line-height": "1",
                            "flex-shrink": "0"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "false"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-188",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "width": "100%"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-186",
                                "style": {
                                  "base": {
                                    "width": "40px",
                                    "height": "40px",
                                    "border-top-left-radius": "11px",
                                    "border-top-right-radius": "11px",
                                    "border-bottom-right-radius": "11px",
                                    "border-bottom-left-radius": "11px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "background-color": "#FFFFFF"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "≡"
                              },
                              {
                                "tag": "div",
                                "key": "div-187",
                                "style": {
                                  "base": {
                                    "width": "32px",
                                    "height": "32px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#C5CFFB",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#C5CFFB",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#C5CFFB",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#C5CFFB"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-191",
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
                                "key": "div-189",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "line-height": "1.1",
                                    "letter-spacing": "-0.025em",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Reports"
                              },
                              {
                                "tag": "div",
                                "key": "div-190",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "opacity": "0.75"
                                  }
                                },
                                "text": "Know your numbers."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ],
                "attrs": {
                  "data-blok-panel": "",
                  "data-display": "grid"
                }
              },
              {
                "tag": "div",
                "key": "div-259",
                "style": {
                  "base": {
                    "display": "none",
                    "grid-template-columns": "repeat(4, minmax(0, 1fr))",
                    "grid-auto-rows": "200px",
                    "grid-auto-flow": "dense",
                    "row-gap": "14px",
                    "column-gap": "14px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-208",
                    "style": {
                      "base": {
                        "grid-column-start": "span 1",
                        "grid-row-start": "span 1",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
                        "overflow": "hidden",
                        "background-color": "#0F1115",
                        "color": "#FFFFFF",
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
                        "border-left-color": "#0F1115"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-207",
                        "style": {
                          "base": {
                            "width": "100%",
                            "height": "100%",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
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
                            "color": "inherit",
                            "cursor": "pointer",
                            "text-align": "left",
                            "display": "flex",
                            "flex-direction": "column",
                            "justify-content": "space-between",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "center",
                            "line-height": "1",
                            "flex-shrink": "0"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "false"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-203",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "width": "100%"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-201",
                                "style": {
                                  "base": {
                                    "width": "40px",
                                    "height": "40px",
                                    "border-top-left-radius": "11px",
                                    "border-top-right-radius": "11px",
                                    "border-bottom-right-radius": "11px",
                                    "border-bottom-left-radius": "11px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "background-color": "#262A31"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "▦"
                              },
                              {
                                "tag": "div",
                                "key": "div-202",
                                "style": {
                                  "base": {
                                    "width": "32px",
                                    "height": "32px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
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
                                    "border-left-color": "#3A3F47"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-206",
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
                                "key": "div-204",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "line-height": "1.1",
                                    "letter-spacing": "-0.025em",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Recurring schedules"
                              },
                              {
                                "tag": "div",
                                "key": "div-205",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "opacity": "0.75"
                                  }
                                },
                                "text": "Set a rhythm once."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-216",
                    "style": {
                      "base": {
                        "grid-column-start": "span 1",
                        "grid-row-start": "span 1",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
                        "overflow": "hidden",
                        "background-color": "#2D4BF0",
                        "color": "#FFFFFF",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#2D4BF0",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#2D4BF0",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#2D4BF0",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#2D4BF0"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-215",
                        "style": {
                          "base": {
                            "width": "100%",
                            "height": "100%",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
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
                            "color": "inherit",
                            "cursor": "pointer",
                            "text-align": "left",
                            "display": "flex",
                            "flex-direction": "column",
                            "justify-content": "space-between",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "center",
                            "line-height": "1",
                            "flex-shrink": "0"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "false"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-211",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "width": "100%"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-209",
                                "style": {
                                  "base": {
                                    "width": "40px",
                                    "height": "40px",
                                    "border-top-left-radius": "11px",
                                    "border-top-right-radius": "11px",
                                    "border-bottom-right-radius": "11px",
                                    "border-bottom-left-radius": "11px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "background-color": "#4562F3"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "↝"
                              },
                              {
                                "tag": "div",
                                "key": "div-210",
                                "style": {
                                  "base": {
                                    "width": "32px",
                                    "height": "32px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "rgba(255,255,255,0.35)",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "rgba(255,255,255,0.35)",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "rgba(255,255,255,0.35)",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "rgba(255,255,255,0.35)"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-214",
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
                                "key": "div-212",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "line-height": "1.1",
                                    "letter-spacing": "-0.025em",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Route ordering"
                              },
                              {
                                "tag": "div",
                                "key": "div-213",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "opacity": "0.75"
                                  }
                                },
                                "text": "Shortest drive, one click."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-224",
                    "style": {
                      "base": {
                        "grid-column-start": "span 1",
                        "grid-row-start": "span 1",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
                        "overflow": "hidden",
                        "background-color": "#FFFFFF",
                        "color": "#0F1115",
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
                        "key": "div-223",
                        "style": {
                          "base": {
                            "width": "100%",
                            "height": "100%",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
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
                            "color": "inherit",
                            "cursor": "pointer",
                            "text-align": "left",
                            "display": "flex",
                            "flex-direction": "column",
                            "justify-content": "space-between",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "center",
                            "line-height": "1",
                            "flex-shrink": "0"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "false"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-219",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "width": "100%"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-217",
                                "style": {
                                  "base": {
                                    "width": "40px",
                                    "height": "40px",
                                    "border-top-left-radius": "11px",
                                    "border-top-right-radius": "11px",
                                    "border-bottom-right-radius": "11px",
                                    "border-bottom-left-radius": "11px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "background-color": "#F4F5F1"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "✆"
                              },
                              {
                                "tag": "div",
                                "key": "div-218",
                                "style": {
                                  "base": {
                                    "width": "32px",
                                    "height": "32px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
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
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-222",
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
                                "key": "div-220",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "line-height": "1.1",
                                    "letter-spacing": "-0.025em",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Reminder texts"
                              },
                              {
                                "tag": "div",
                                "key": "div-221",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "opacity": "0.75"
                                  }
                                },
                                "text": "Fewer no-shows."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-242",
                    "style": {
                      "base": {
                        "grid-column-start": "span 2",
                        "grid-row-start": "span 2",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
                        "overflow": "hidden",
                        "background-color": "#FFFFFF",
                        "color": "#0F1115",
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
                        "key": "div-241",
                        "style": {
                          "base": {
                            "width": "100%",
                            "height": "100%",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
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
                            "color": "inherit",
                            "cursor": "pointer",
                            "text-align": "left",
                            "display": "flex",
                            "flex-direction": "column",
                            "justify-content": "space-between",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "center",
                            "line-height": "1",
                            "flex-shrink": "0"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "true"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-227",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "width": "100%"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-225",
                                "style": {
                                  "base": {
                                    "width": "40px",
                                    "height": "40px",
                                    "border-top-left-radius": "11px",
                                    "border-top-right-radius": "11px",
                                    "border-bottom-right-radius": "11px",
                                    "border-bottom-left-radius": "11px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "background-color": "#F4F5F1"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "$"
                              },
                              {
                                "tag": "div",
                                "key": "div-226",
                                "style": {
                                  "base": {
                                    "width": "32px",
                                    "height": "32px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
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
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "−"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-240",
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
                                "key": "div-228",
                                "style": {
                                  "base": {
                                    "font-size": "32px",
                                    "line-height": "1.1",
                                    "letter-spacing": "-0.025em",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Invoices and payments"
                              },
                              {
                                "tag": "div",
                                "key": "div-229",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "opacity": "0.75"
                                  }
                                },
                                "text": "Paid from a text."
                              },
                              {
                                "tag": "div",
                                "key": "div-239",
                                "style": {
                                  "base": {
                                    "display": "flex",
                                    "flex-direction": "column",
                                    "row-gap": "8px",
                                    "column-gap": "8px",
                                    "margin-top": "6px"
                                  }
                                },
                                "children": [
                                  {
                                    "tag": "div",
                                    "key": "div-232",
                                    "style": {
                                      "base": {
                                        "display": "flex",
                                        "row-gap": "10px",
                                        "column-gap": "10px",
                                        "font-size": "15px"
                                      }
                                    },
                                    "children": [
                                      {
                                        "tag": "div",
                                        "key": "div-230",
                                        "attrs": {
                                          "aria-hidden": "true"
                                        },
                                        "text": "✓"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "text-231",
                                        "text": "Sends when a job closes"
                                      }
                                    ]
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-235",
                                    "style": {
                                      "base": {
                                        "display": "flex",
                                        "row-gap": "10px",
                                        "column-gap": "10px",
                                        "font-size": "15px"
                                      }
                                    },
                                    "children": [
                                      {
                                        "tag": "div",
                                        "key": "div-233",
                                        "attrs": {
                                          "aria-hidden": "true"
                                        },
                                        "text": "✓"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "text-234",
                                        "text": "Card and bank payments"
                                      }
                                    ]
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-238",
                                    "style": {
                                      "base": {
                                        "display": "flex",
                                        "row-gap": "10px",
                                        "column-gap": "10px",
                                        "font-size": "15px"
                                      }
                                    },
                                    "children": [
                                      {
                                        "tag": "div",
                                        "key": "div-236",
                                        "attrs": {
                                          "aria-hidden": "true"
                                        },
                                        "text": "✓"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "text-237",
                                        "text": "Automatic follow-ups"
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
                  },
                  {
                    "tag": "div",
                    "key": "div-250",
                    "style": {
                      "base": {
                        "grid-column-start": "span 1",
                        "grid-row-start": "span 1",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
                        "overflow": "hidden",
                        "background-color": "#FFFFFF",
                        "color": "#0F1115",
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
                        "key": "div-249",
                        "style": {
                          "base": {
                            "width": "100%",
                            "height": "100%",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
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
                            "color": "inherit",
                            "cursor": "pointer",
                            "text-align": "left",
                            "display": "flex",
                            "flex-direction": "column",
                            "justify-content": "space-between",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "center",
                            "line-height": "1",
                            "flex-shrink": "0"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "false"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-245",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "width": "100%"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-243",
                                "style": {
                                  "base": {
                                    "width": "40px",
                                    "height": "40px",
                                    "border-top-left-radius": "11px",
                                    "border-top-right-radius": "11px",
                                    "border-bottom-right-radius": "11px",
                                    "border-bottom-left-radius": "11px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "background-color": "#F4F5F1"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "◉"
                              },
                              {
                                "tag": "div",
                                "key": "div-244",
                                "style": {
                                  "base": {
                                    "width": "32px",
                                    "height": "32px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
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
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-248",
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
                                "key": "div-246",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "line-height": "1.1",
                                    "letter-spacing": "-0.025em",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Job photos"
                              },
                              {
                                "tag": "div",
                                "key": "div-247",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "opacity": "0.75"
                                  }
                                },
                                "text": "Proof for every visit."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-258",
                    "style": {
                      "base": {
                        "grid-column-start": "span 1",
                        "grid-row-start": "span 1",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
                        "overflow": "hidden",
                        "background-color": "#E8ECFE",
                        "color": "#0F1115",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E8ECFE",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E8ECFE",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E8ECFE",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E8ECFE"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-257",
                        "style": {
                          "base": {
                            "width": "100%",
                            "height": "100%",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
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
                            "color": "inherit",
                            "cursor": "pointer",
                            "text-align": "left",
                            "display": "flex",
                            "flex-direction": "column",
                            "justify-content": "space-between",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "center",
                            "line-height": "1",
                            "flex-shrink": "0"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "false"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-253",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "width": "100%"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-251",
                                "style": {
                                  "base": {
                                    "width": "40px",
                                    "height": "40px",
                                    "border-top-left-radius": "11px",
                                    "border-top-right-radius": "11px",
                                    "border-bottom-right-radius": "11px",
                                    "border-bottom-left-radius": "11px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "background-color": "#FFFFFF"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "≡"
                              },
                              {
                                "tag": "div",
                                "key": "div-252",
                                "style": {
                                  "base": {
                                    "width": "32px",
                                    "height": "32px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#C5CFFB",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#C5CFFB",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#C5CFFB",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#C5CFFB"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-256",
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
                                "key": "div-254",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "line-height": "1.1",
                                    "letter-spacing": "-0.025em",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Reports"
                              },
                              {
                                "tag": "div",
                                "key": "div-255",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "opacity": "0.75"
                                  }
                                },
                                "text": "Know your numbers."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ],
                "attrs": {
                  "data-blok-panel": "",
                  "data-display": "grid"
                }
              },
              {
                "tag": "div",
                "key": "div-324",
                "style": {
                  "base": {
                    "display": "none",
                    "grid-template-columns": "repeat(4, minmax(0, 1fr))",
                    "grid-auto-rows": "200px",
                    "grid-auto-flow": "dense",
                    "row-gap": "14px",
                    "column-gap": "14px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-273",
                    "style": {
                      "base": {
                        "grid-column-start": "span 1",
                        "grid-row-start": "span 1",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
                        "overflow": "hidden",
                        "background-color": "#0F1115",
                        "color": "#FFFFFF",
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
                        "border-left-color": "#0F1115"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-272",
                        "style": {
                          "base": {
                            "width": "100%",
                            "height": "100%",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
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
                            "color": "inherit",
                            "cursor": "pointer",
                            "text-align": "left",
                            "display": "flex",
                            "flex-direction": "column",
                            "justify-content": "space-between",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "center",
                            "line-height": "1",
                            "flex-shrink": "0"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "false"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-268",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "width": "100%"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-266",
                                "style": {
                                  "base": {
                                    "width": "40px",
                                    "height": "40px",
                                    "border-top-left-radius": "11px",
                                    "border-top-right-radius": "11px",
                                    "border-bottom-right-radius": "11px",
                                    "border-bottom-left-radius": "11px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "background-color": "#262A31"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "▦"
                              },
                              {
                                "tag": "div",
                                "key": "div-267",
                                "style": {
                                  "base": {
                                    "width": "32px",
                                    "height": "32px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
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
                                    "border-left-color": "#3A3F47"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-271",
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
                                "key": "div-269",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "line-height": "1.1",
                                    "letter-spacing": "-0.025em",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Recurring schedules"
                              },
                              {
                                "tag": "div",
                                "key": "div-270",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "opacity": "0.75"
                                  }
                                },
                                "text": "Set a rhythm once."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-281",
                    "style": {
                      "base": {
                        "grid-column-start": "span 1",
                        "grid-row-start": "span 1",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
                        "overflow": "hidden",
                        "background-color": "#2D4BF0",
                        "color": "#FFFFFF",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#2D4BF0",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#2D4BF0",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#2D4BF0",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#2D4BF0"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-280",
                        "style": {
                          "base": {
                            "width": "100%",
                            "height": "100%",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
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
                            "color": "inherit",
                            "cursor": "pointer",
                            "text-align": "left",
                            "display": "flex",
                            "flex-direction": "column",
                            "justify-content": "space-between",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "center",
                            "line-height": "1",
                            "flex-shrink": "0"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "false"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-276",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "width": "100%"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-274",
                                "style": {
                                  "base": {
                                    "width": "40px",
                                    "height": "40px",
                                    "border-top-left-radius": "11px",
                                    "border-top-right-radius": "11px",
                                    "border-bottom-right-radius": "11px",
                                    "border-bottom-left-radius": "11px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "background-color": "#4562F3"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "↝"
                              },
                              {
                                "tag": "div",
                                "key": "div-275",
                                "style": {
                                  "base": {
                                    "width": "32px",
                                    "height": "32px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "rgba(255,255,255,0.35)",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "rgba(255,255,255,0.35)",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "rgba(255,255,255,0.35)",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "rgba(255,255,255,0.35)"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-279",
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
                                "key": "div-277",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "line-height": "1.1",
                                    "letter-spacing": "-0.025em",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Route ordering"
                              },
                              {
                                "tag": "div",
                                "key": "div-278",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "opacity": "0.75"
                                  }
                                },
                                "text": "Shortest drive, one click."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-289",
                    "style": {
                      "base": {
                        "grid-column-start": "span 1",
                        "grid-row-start": "span 1",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
                        "overflow": "hidden",
                        "background-color": "#FFFFFF",
                        "color": "#0F1115",
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
                        "key": "div-288",
                        "style": {
                          "base": {
                            "width": "100%",
                            "height": "100%",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
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
                            "color": "inherit",
                            "cursor": "pointer",
                            "text-align": "left",
                            "display": "flex",
                            "flex-direction": "column",
                            "justify-content": "space-between",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "center",
                            "line-height": "1",
                            "flex-shrink": "0"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "false"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-284",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "width": "100%"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-282",
                                "style": {
                                  "base": {
                                    "width": "40px",
                                    "height": "40px",
                                    "border-top-left-radius": "11px",
                                    "border-top-right-radius": "11px",
                                    "border-bottom-right-radius": "11px",
                                    "border-bottom-left-radius": "11px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "background-color": "#F4F5F1"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "✆"
                              },
                              {
                                "tag": "div",
                                "key": "div-283",
                                "style": {
                                  "base": {
                                    "width": "32px",
                                    "height": "32px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
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
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-287",
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
                                "key": "div-285",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "line-height": "1.1",
                                    "letter-spacing": "-0.025em",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Reminder texts"
                              },
                              {
                                "tag": "div",
                                "key": "div-286",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "opacity": "0.75"
                                  }
                                },
                                "text": "Fewer no-shows."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-297",
                    "style": {
                      "base": {
                        "grid-column-start": "span 1",
                        "grid-row-start": "span 1",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
                        "overflow": "hidden",
                        "background-color": "#FFFFFF",
                        "color": "#0F1115",
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
                        "key": "div-296",
                        "style": {
                          "base": {
                            "width": "100%",
                            "height": "100%",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
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
                            "color": "inherit",
                            "cursor": "pointer",
                            "text-align": "left",
                            "display": "flex",
                            "flex-direction": "column",
                            "justify-content": "space-between",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "center",
                            "line-height": "1",
                            "flex-shrink": "0"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "false"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-292",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "width": "100%"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-290",
                                "style": {
                                  "base": {
                                    "width": "40px",
                                    "height": "40px",
                                    "border-top-left-radius": "11px",
                                    "border-top-right-radius": "11px",
                                    "border-bottom-right-radius": "11px",
                                    "border-bottom-left-radius": "11px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "background-color": "#F4F5F1"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "$"
                              },
                              {
                                "tag": "div",
                                "key": "div-291",
                                "style": {
                                  "base": {
                                    "width": "32px",
                                    "height": "32px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
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
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-295",
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
                                "key": "div-293",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "line-height": "1.1",
                                    "letter-spacing": "-0.025em",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Invoices and payments"
                              },
                              {
                                "tag": "div",
                                "key": "div-294",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "opacity": "0.75"
                                  }
                                },
                                "text": "Paid from a text."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-315",
                    "style": {
                      "base": {
                        "grid-column-start": "span 2",
                        "grid-row-start": "span 2",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
                        "overflow": "hidden",
                        "background-color": "#FFFFFF",
                        "color": "#0F1115",
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
                        "key": "div-314",
                        "style": {
                          "base": {
                            "width": "100%",
                            "height": "100%",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
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
                            "color": "inherit",
                            "cursor": "pointer",
                            "text-align": "left",
                            "display": "flex",
                            "flex-direction": "column",
                            "justify-content": "space-between",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "center",
                            "line-height": "1",
                            "flex-shrink": "0"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "true"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-300",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "width": "100%"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-298",
                                "style": {
                                  "base": {
                                    "width": "40px",
                                    "height": "40px",
                                    "border-top-left-radius": "11px",
                                    "border-top-right-radius": "11px",
                                    "border-bottom-right-radius": "11px",
                                    "border-bottom-left-radius": "11px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "background-color": "#F4F5F1"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "◉"
                              },
                              {
                                "tag": "div",
                                "key": "div-299",
                                "style": {
                                  "base": {
                                    "width": "32px",
                                    "height": "32px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
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
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "−"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-313",
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
                                "key": "div-301",
                                "style": {
                                  "base": {
                                    "font-size": "32px",
                                    "line-height": "1.1",
                                    "letter-spacing": "-0.025em",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Job photos"
                              },
                              {
                                "tag": "div",
                                "key": "div-302",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "opacity": "0.75"
                                  }
                                },
                                "text": "Proof for every visit."
                              },
                              {
                                "tag": "div",
                                "key": "div-312",
                                "style": {
                                  "base": {
                                    "display": "flex",
                                    "flex-direction": "column",
                                    "row-gap": "8px",
                                    "column-gap": "8px",
                                    "margin-top": "6px"
                                  }
                                },
                                "children": [
                                  {
                                    "tag": "div",
                                    "key": "div-305",
                                    "style": {
                                      "base": {
                                        "display": "flex",
                                        "row-gap": "10px",
                                        "column-gap": "10px",
                                        "font-size": "15px"
                                      }
                                    },
                                    "children": [
                                      {
                                        "tag": "div",
                                        "key": "div-303",
                                        "attrs": {
                                          "aria-hidden": "true"
                                        },
                                        "text": "✓"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "text-304",
                                        "text": "Before and after shots"
                                      }
                                    ]
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-308",
                                    "style": {
                                      "base": {
                                        "display": "flex",
                                        "row-gap": "10px",
                                        "column-gap": "10px",
                                        "font-size": "15px"
                                      }
                                    },
                                    "children": [
                                      {
                                        "tag": "div",
                                        "key": "div-306",
                                        "attrs": {
                                          "aria-hidden": "true"
                                        },
                                        "text": "✓"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "text-307",
                                        "text": "Attached to the invoice"
                                      }
                                    ]
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-311",
                                    "style": {
                                      "base": {
                                        "display": "flex",
                                        "row-gap": "10px",
                                        "column-gap": "10px",
                                        "font-size": "15px"
                                      }
                                    },
                                    "children": [
                                      {
                                        "tag": "div",
                                        "key": "div-309",
                                        "attrs": {
                                          "aria-hidden": "true"
                                        },
                                        "text": "✓"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "text-310",
                                        "text": "Saved per address"
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
                  },
                  {
                    "tag": "div",
                    "key": "div-323",
                    "style": {
                      "base": {
                        "grid-column-start": "span 1",
                        "grid-row-start": "span 1",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
                        "overflow": "hidden",
                        "background-color": "#E8ECFE",
                        "color": "#0F1115",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E8ECFE",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E8ECFE",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E8ECFE",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E8ECFE"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-322",
                        "style": {
                          "base": {
                            "width": "100%",
                            "height": "100%",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
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
                            "color": "inherit",
                            "cursor": "pointer",
                            "text-align": "left",
                            "display": "flex",
                            "flex-direction": "column",
                            "justify-content": "space-between",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "center",
                            "line-height": "1",
                            "flex-shrink": "0"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "false"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-318",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "width": "100%"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-316",
                                "style": {
                                  "base": {
                                    "width": "40px",
                                    "height": "40px",
                                    "border-top-left-radius": "11px",
                                    "border-top-right-radius": "11px",
                                    "border-bottom-right-radius": "11px",
                                    "border-bottom-left-radius": "11px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "background-color": "#FFFFFF"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "≡"
                              },
                              {
                                "tag": "div",
                                "key": "div-317",
                                "style": {
                                  "base": {
                                    "width": "32px",
                                    "height": "32px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#C5CFFB",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#C5CFFB",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#C5CFFB",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#C5CFFB"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-321",
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
                                "key": "div-319",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "line-height": "1.1",
                                    "letter-spacing": "-0.025em",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Reports"
                              },
                              {
                                "tag": "div",
                                "key": "div-320",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "opacity": "0.75"
                                  }
                                },
                                "text": "Know your numbers."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ],
                "attrs": {
                  "data-blok-panel": "",
                  "data-display": "grid"
                }
              },
              {
                "tag": "div",
                "key": "div-389",
                "style": {
                  "base": {
                    "display": "none",
                    "grid-template-columns": "repeat(4, minmax(0, 1fr))",
                    "grid-auto-rows": "200px",
                    "grid-auto-flow": "dense",
                    "row-gap": "14px",
                    "column-gap": "14px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-338",
                    "style": {
                      "base": {
                        "grid-column-start": "span 1",
                        "grid-row-start": "span 1",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
                        "overflow": "hidden",
                        "background-color": "#0F1115",
                        "color": "#FFFFFF",
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
                        "border-left-color": "#0F1115"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-337",
                        "style": {
                          "base": {
                            "width": "100%",
                            "height": "100%",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
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
                            "color": "inherit",
                            "cursor": "pointer",
                            "text-align": "left",
                            "display": "flex",
                            "flex-direction": "column",
                            "justify-content": "space-between",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "center",
                            "line-height": "1",
                            "flex-shrink": "0"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "false"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-333",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "width": "100%"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-331",
                                "style": {
                                  "base": {
                                    "width": "40px",
                                    "height": "40px",
                                    "border-top-left-radius": "11px",
                                    "border-top-right-radius": "11px",
                                    "border-bottom-right-radius": "11px",
                                    "border-bottom-left-radius": "11px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "background-color": "#262A31"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "▦"
                              },
                              {
                                "tag": "div",
                                "key": "div-332",
                                "style": {
                                  "base": {
                                    "width": "32px",
                                    "height": "32px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
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
                                    "border-left-color": "#3A3F47"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-336",
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
                                "key": "div-334",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "line-height": "1.1",
                                    "letter-spacing": "-0.025em",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Recurring schedules"
                              },
                              {
                                "tag": "div",
                                "key": "div-335",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "opacity": "0.75"
                                  }
                                },
                                "text": "Set a rhythm once."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-346",
                    "style": {
                      "base": {
                        "grid-column-start": "span 1",
                        "grid-row-start": "span 1",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
                        "overflow": "hidden",
                        "background-color": "#2D4BF0",
                        "color": "#FFFFFF",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#2D4BF0",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#2D4BF0",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#2D4BF0",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#2D4BF0"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-345",
                        "style": {
                          "base": {
                            "width": "100%",
                            "height": "100%",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
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
                            "color": "inherit",
                            "cursor": "pointer",
                            "text-align": "left",
                            "display": "flex",
                            "flex-direction": "column",
                            "justify-content": "space-between",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "center",
                            "line-height": "1",
                            "flex-shrink": "0"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "false"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-341",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "width": "100%"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-339",
                                "style": {
                                  "base": {
                                    "width": "40px",
                                    "height": "40px",
                                    "border-top-left-radius": "11px",
                                    "border-top-right-radius": "11px",
                                    "border-bottom-right-radius": "11px",
                                    "border-bottom-left-radius": "11px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "background-color": "#4562F3"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "↝"
                              },
                              {
                                "tag": "div",
                                "key": "div-340",
                                "style": {
                                  "base": {
                                    "width": "32px",
                                    "height": "32px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "rgba(255,255,255,0.35)",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "rgba(255,255,255,0.35)",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "rgba(255,255,255,0.35)",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "rgba(255,255,255,0.35)"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-344",
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
                                "key": "div-342",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "line-height": "1.1",
                                    "letter-spacing": "-0.025em",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Route ordering"
                              },
                              {
                                "tag": "div",
                                "key": "div-343",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "opacity": "0.75"
                                  }
                                },
                                "text": "Shortest drive, one click."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-354",
                    "style": {
                      "base": {
                        "grid-column-start": "span 1",
                        "grid-row-start": "span 1",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
                        "overflow": "hidden",
                        "background-color": "#FFFFFF",
                        "color": "#0F1115",
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
                        "key": "div-353",
                        "style": {
                          "base": {
                            "width": "100%",
                            "height": "100%",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
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
                            "color": "inherit",
                            "cursor": "pointer",
                            "text-align": "left",
                            "display": "flex",
                            "flex-direction": "column",
                            "justify-content": "space-between",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "center",
                            "line-height": "1",
                            "flex-shrink": "0"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "false"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-349",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "width": "100%"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-347",
                                "style": {
                                  "base": {
                                    "width": "40px",
                                    "height": "40px",
                                    "border-top-left-radius": "11px",
                                    "border-top-right-radius": "11px",
                                    "border-bottom-right-radius": "11px",
                                    "border-bottom-left-radius": "11px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "background-color": "#F4F5F1"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "✆"
                              },
                              {
                                "tag": "div",
                                "key": "div-348",
                                "style": {
                                  "base": {
                                    "width": "32px",
                                    "height": "32px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
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
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-352",
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
                                "key": "div-350",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "line-height": "1.1",
                                    "letter-spacing": "-0.025em",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Reminder texts"
                              },
                              {
                                "tag": "div",
                                "key": "div-351",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "opacity": "0.75"
                                  }
                                },
                                "text": "Fewer no-shows."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-362",
                    "style": {
                      "base": {
                        "grid-column-start": "span 1",
                        "grid-row-start": "span 1",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
                        "overflow": "hidden",
                        "background-color": "#FFFFFF",
                        "color": "#0F1115",
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
                        "key": "div-361",
                        "style": {
                          "base": {
                            "width": "100%",
                            "height": "100%",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
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
                            "color": "inherit",
                            "cursor": "pointer",
                            "text-align": "left",
                            "display": "flex",
                            "flex-direction": "column",
                            "justify-content": "space-between",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "center",
                            "line-height": "1",
                            "flex-shrink": "0"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "false"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-357",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "width": "100%"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-355",
                                "style": {
                                  "base": {
                                    "width": "40px",
                                    "height": "40px",
                                    "border-top-left-radius": "11px",
                                    "border-top-right-radius": "11px",
                                    "border-bottom-right-radius": "11px",
                                    "border-bottom-left-radius": "11px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "background-color": "#F4F5F1"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "$"
                              },
                              {
                                "tag": "div",
                                "key": "div-356",
                                "style": {
                                  "base": {
                                    "width": "32px",
                                    "height": "32px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
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
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-360",
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
                                "key": "div-358",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "line-height": "1.1",
                                    "letter-spacing": "-0.025em",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Invoices and payments"
                              },
                              {
                                "tag": "div",
                                "key": "div-359",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "opacity": "0.75"
                                  }
                                },
                                "text": "Paid from a text."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-370",
                    "style": {
                      "base": {
                        "grid-column-start": "span 1",
                        "grid-row-start": "span 1",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
                        "overflow": "hidden",
                        "background-color": "#FFFFFF",
                        "color": "#0F1115",
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
                        "key": "div-369",
                        "style": {
                          "base": {
                            "width": "100%",
                            "height": "100%",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
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
                            "color": "inherit",
                            "cursor": "pointer",
                            "text-align": "left",
                            "display": "flex",
                            "flex-direction": "column",
                            "justify-content": "space-between",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "center",
                            "line-height": "1",
                            "flex-shrink": "0"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "false"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-365",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "width": "100%"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-363",
                                "style": {
                                  "base": {
                                    "width": "40px",
                                    "height": "40px",
                                    "border-top-left-radius": "11px",
                                    "border-top-right-radius": "11px",
                                    "border-bottom-right-radius": "11px",
                                    "border-bottom-left-radius": "11px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "background-color": "#F4F5F1"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "◉"
                              },
                              {
                                "tag": "div",
                                "key": "div-364",
                                "style": {
                                  "base": {
                                    "width": "32px",
                                    "height": "32px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
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
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-368",
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
                                "key": "div-366",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "line-height": "1.1",
                                    "letter-spacing": "-0.025em",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Job photos"
                              },
                              {
                                "tag": "div",
                                "key": "div-367",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "opacity": "0.75"
                                  }
                                },
                                "text": "Proof for every visit."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-388",
                    "style": {
                      "base": {
                        "grid-column-start": "span 2",
                        "grid-row-start": "span 2",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
                        "overflow": "hidden",
                        "background-color": "#E8ECFE",
                        "color": "#0F1115",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E8ECFE",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E8ECFE",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E8ECFE",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E8ECFE"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-387",
                        "style": {
                          "base": {
                            "width": "100%",
                            "height": "100%",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
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
                            "color": "inherit",
                            "cursor": "pointer",
                            "text-align": "left",
                            "display": "flex",
                            "flex-direction": "column",
                            "justify-content": "space-between",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "center",
                            "line-height": "1",
                            "flex-shrink": "0"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "true"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-373",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                                "width": "100%"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-371",
                                "style": {
                                  "base": {
                                    "width": "40px",
                                    "height": "40px",
                                    "border-top-left-radius": "11px",
                                    "border-top-right-radius": "11px",
                                    "border-bottom-right-radius": "11px",
                                    "border-bottom-left-radius": "11px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "background-color": "#FFFFFF"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "≡"
                              },
                              {
                                "tag": "div",
                                "key": "div-372",
                                "style": {
                                  "base": {
                                    "width": "32px",
                                    "height": "32px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-size": "18px",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#C5CFFB",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#C5CFFB",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#C5CFFB",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#C5CFFB"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "−"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-386",
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
                                "key": "div-374",
                                "style": {
                                  "base": {
                                    "font-size": "32px",
                                    "line-height": "1.1",
                                    "letter-spacing": "-0.025em",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Reports"
                              },
                              {
                                "tag": "div",
                                "key": "div-375",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "opacity": "0.75"
                                  }
                                },
                                "text": "Know your numbers."
                              },
                              {
                                "tag": "div",
                                "key": "div-385",
                                "style": {
                                  "base": {
                                    "display": "flex",
                                    "flex-direction": "column",
                                    "row-gap": "8px",
                                    "column-gap": "8px",
                                    "margin-top": "6px"
                                  }
                                },
                                "children": [
                                  {
                                    "tag": "div",
                                    "key": "div-378",
                                    "style": {
                                      "base": {
                                        "display": "flex",
                                        "row-gap": "10px",
                                        "column-gap": "10px",
                                        "font-size": "15px"
                                      }
                                    },
                                    "children": [
                                      {
                                        "tag": "div",
                                        "key": "div-376",
                                        "attrs": {
                                          "aria-hidden": "true"
                                        },
                                        "text": "✓"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "text-377",
                                        "text": "Revenue by service"
                                      }
                                    ]
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-381",
                                    "style": {
                                      "base": {
                                        "display": "flex",
                                        "row-gap": "10px",
                                        "column-gap": "10px",
                                        "font-size": "15px"
                                      }
                                    },
                                    "children": [
                                      {
                                        "tag": "div",
                                        "key": "div-379",
                                        "attrs": {
                                          "aria-hidden": "true"
                                        },
                                        "text": "✓"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "text-380",
                                        "text": "Crew hours"
                                      }
                                    ]
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-384",
                                    "style": {
                                      "base": {
                                        "display": "flex",
                                        "row-gap": "10px",
                                        "column-gap": "10px",
                                        "font-size": "15px"
                                      }
                                    },
                                    "children": [
                                      {
                                        "tag": "div",
                                        "key": "div-382",
                                        "attrs": {
                                          "aria-hidden": "true"
                                        },
                                        "text": "✓"
                                      },
                                      {
                                        "tag": "div",
                                        "key": "text-383",
                                        "text": "Export to CSV"
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
                ],
                "attrs": {
                  "data-blok-panel": "",
                  "data-display": "grid"
                }
              },
              {
                "tag": "div",
                "key": "div-402",
                "style": {
                  "base": {
                    "width": "100%",
                    "height": "100%",
                    "padding-top": "22px",
                    "padding-right": "22px",
                    "padding-bottom": "22px",
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
                    "color": "inherit",
                    "cursor": "pointer",
                    "text-align": "left",
                    "display": "none",
                    "flex-direction": "column",
                    "justify-content": "space-between",
                    "row-gap": "14px",
                    "column-gap": "14px",
                    "align-items": "center",
                    "line-height": "1",
                    "flex-shrink": "0"
                  }
                },
                "attrs": {
                  "aria-expanded": "false",
                  "data-blok-panel": "",
                  "data-display": "flex"
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-398",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "align-items": "center",
                        "width": "100%"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-396",
                        "style": {
                          "base": {
                            "width": "40px",
                            "height": "40px",
                            "border-top-left-radius": "11px",
                            "border-top-right-radius": "11px",
                            "border-bottom-right-radius": "11px",
                            "border-bottom-left-radius": "11px",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "font-size": "18px",
                            "background-color": "#262A31"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        },
                        "text": "▦"
                      },
                      {
                        "tag": "div",
                        "key": "div-397",
                        "style": {
                          "base": {
                            "width": "32px",
                            "height": "32px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "font-size": "18px",
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
                            "border-left-color": "#3A3F47"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        },
                        "text": "+"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-401",
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
                        "key": "div-399",
                        "style": {
                          "base": {
                            "font-size": "20px",
                            "line-height": "1.1",
                            "letter-spacing": "-0.025em",
                            "font-weight": "600"
                          }
                        },
                        "text": "Recurring schedules"
                      },
                      {
                        "tag": "div",
                        "key": "div-400",
                        "style": {
                          "base": {
                            "font-size": "15px",
                            "line-height": "1.5",
                            "opacity": "0.75"
                          }
                        },
                        "text": "Set a rhythm once."
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "attrs": {
      "data-blok-panels": ""
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
