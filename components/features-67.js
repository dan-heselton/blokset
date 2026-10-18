import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "features-67",
  "prefix": "features67",
  "name": "Features / Flip cards",
  "category": "features",
  "collection": "saas",
  "description": "Features / Flip cards for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "Flip a chore to see what replaces it"
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-7",
        "div-50"
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
        "key": "div-51",
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
            "key": "div-7",
            "style": {
              "base": {
                "display": "flex",
                "flex-wrap": "wrap",
                "justify-content": "space-between",
                "align-items": "flex-end",
                "row-gap": "20px",
                "column-gap": "20px"
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
                    "text": "The difference"
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
                "key": "div-6",
                "style": {
                  "base": {
                    "display": "flex",
                    "align-items": "center",
                    "row-gap": "14px",
                    "column-gap": "14px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-4",
                    "style": {
                      "base": {
                        "font-family": "token(font-saas-mono)",
                        "font-size": "13px",
                        "color": "#5B616B"
                      }
                    },
                    "text": "1 of 6 flipped"
                  },
                  {
                    "tag": "div",
                    "key": "div-5",
                    "style": {
                      "base": {
                        "height": "44px",
                        "padding-top": "0",
                        "padding-right": "18px",
                        "padding-bottom": "0",
                        "padding-left": "18px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
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
                        "font-weight": "500",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "text": "Flip all"
                  }
                ]
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-50",
            "style": {
              "base": {
                "display": "grid",
                "grid-template-columns": "1fr",
                "row-gap": "14px",
                "column-gap": "14px"
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
                "tag": "div",
                "key": "div-14",
                "style": {
                  "base": {
                    "min-height": "220px",
                    "padding-top": "22px",
                    "padding-right": "22px",
                    "padding-bottom": "22px",
                    "padding-left": "22px",
                    "border-top-left-radius": "18px",
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                    "border-bottom-left-radius": "18px",
                    "cursor": "pointer",
                    "text-align": "left",
                    "display": "flex",
                    "flex-direction": "column",
                    "justify-content": "space-between",
                    "row-gap": "18px",
                    "column-gap": "18px",
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
                    "transition": "background 220ms ease, color 220ms ease",
                    "align-items": "center"
                  }
                },
                "attrs": {
                  "aria-pressed": "false"
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-10",
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
                        "key": "div-8",
                        "style": {
                          "base": {
                            "padding-top": "4px",
                            "padding-right": "10px",
                            "padding-bottom": "4px",
                            "padding-left": "10px",
                            "border-top-left-radius": "999px",
                            "border-top-right-radius": "999px",
                            "border-bottom-right-radius": "999px",
                            "border-bottom-left-radius": "999px",
                            "font-size": "12px",
                            "font-weight": "500",
                            "background-color": "#FDEFE4",
                            "color": "#9A4A12"
                          }
                        },
                        "text": "Without"
                      },
                      {
                        "tag": "div",
                        "key": "div-9",
                        "style": {
                          "base": {
                            "font-size": "18px",
                            "opacity": "0.6"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        },
                        "text": "↻"
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
                        "row-gap": "8px",
                        "column-gap": "8px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-11",
                        "style": {
                          "base": {
                            "font-size": "22px",
                            "line-height": "1.15",
                            "letter-spacing": "-0.02em",
                            "font-weight": "600"
                          }
                        },
                        "text": "Rebuilding the schedule every Sunday"
                      },
                      {
                        "tag": "div",
                        "key": "div-12",
                        "style": {
                          "base": {
                            "font-size": "15px",
                            "line-height": "1.5",
                            "opacity": "0.75"
                          }
                        },
                        "text": "Copying last week into a new spreadsheet tab."
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-21",
                "style": {
                  "base": {
                    "min-height": "220px",
                    "padding-top": "22px",
                    "padding-right": "22px",
                    "padding-bottom": "22px",
                    "padding-left": "22px",
                    "border-top-left-radius": "18px",
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                    "border-bottom-left-radius": "18px",
                    "cursor": "pointer",
                    "text-align": "left",
                    "display": "flex",
                    "flex-direction": "column",
                    "justify-content": "space-between",
                    "row-gap": "18px",
                    "column-gap": "18px",
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
                    "border-left-color": "#2D4BF0",
                    "background-color": "#2D4BF0",
                    "color": "#FFFFFF",
                    "transition": "background 220ms ease, color 220ms ease",
                    "align-items": "center"
                  }
                },
                "attrs": {
                  "aria-pressed": "true"
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
                        "width": "100%"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-15",
                        "style": {
                          "base": {
                            "padding-top": "4px",
                            "padding-right": "10px",
                            "padding-bottom": "4px",
                            "padding-left": "10px",
                            "border-top-left-radius": "999px",
                            "border-top-right-radius": "999px",
                            "border-bottom-right-radius": "999px",
                            "border-bottom-left-radius": "999px",
                            "font-size": "12px",
                            "font-weight": "500",
                            "background-color": "rgba(255,255,255,0.18)",
                            "color": "#FFFFFF"
                          }
                        },
                        "text": "With Harborline"
                      },
                      {
                        "tag": "div",
                        "key": "div-16",
                        "style": {
                          "base": {
                            "font-size": "18px",
                            "opacity": "0.6"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        },
                        "text": "↻"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-20",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "8px",
                        "column-gap": "8px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-18",
                        "style": {
                          "base": {
                            "font-size": "22px",
                            "line-height": "1.15",
                            "letter-spacing": "-0.02em",
                            "font-weight": "600"
                          }
                        },
                        "text": "Reminder texts"
                      },
                      {
                        "tag": "div",
                        "key": "div-19",
                        "style": {
                          "base": {
                            "font-size": "15px",
                            "line-height": "1.5",
                            "opacity": "0.75"
                          }
                        },
                        "text": "Customers confirm with a one-word reply."
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-28",
                "style": {
                  "base": {
                    "min-height": "220px",
                    "padding-top": "22px",
                    "padding-right": "22px",
                    "padding-bottom": "22px",
                    "padding-left": "22px",
                    "border-top-left-radius": "18px",
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                    "border-bottom-left-radius": "18px",
                    "cursor": "pointer",
                    "text-align": "left",
                    "display": "flex",
                    "flex-direction": "column",
                    "justify-content": "space-between",
                    "row-gap": "18px",
                    "column-gap": "18px",
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
                    "transition": "background 220ms ease, color 220ms ease",
                    "align-items": "center"
                  }
                },
                "attrs": {
                  "aria-pressed": "false"
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-24",
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
                        "key": "div-22",
                        "style": {
                          "base": {
                            "padding-top": "4px",
                            "padding-right": "10px",
                            "padding-bottom": "4px",
                            "padding-left": "10px",
                            "border-top-left-radius": "999px",
                            "border-top-right-radius": "999px",
                            "border-bottom-right-radius": "999px",
                            "border-bottom-left-radius": "999px",
                            "font-size": "12px",
                            "font-weight": "500",
                            "background-color": "#FDEFE4",
                            "color": "#9A4A12"
                          }
                        },
                        "text": "Without"
                      },
                      {
                        "tag": "div",
                        "key": "div-23",
                        "style": {
                          "base": {
                            "font-size": "18px",
                            "opacity": "0.6"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        },
                        "text": "↻"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-27",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "8px",
                        "column-gap": "8px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-25",
                        "style": {
                          "base": {
                            "font-size": "22px",
                            "line-height": "1.15",
                            "letter-spacing": "-0.02em",
                            "font-weight": "600"
                          }
                        },
                        "text": "Group texts to crews"
                      },
                      {
                        "tag": "div",
                        "key": "div-26",
                        "style": {
                          "base": {
                            "font-size": "15px",
                            "line-height": "1.5",
                            "opacity": "0.75"
                          }
                        },
                        "text": "Typing addresses into a thread each morning."
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-35",
                "style": {
                  "base": {
                    "min-height": "220px",
                    "padding-top": "22px",
                    "padding-right": "22px",
                    "padding-bottom": "22px",
                    "padding-left": "22px",
                    "border-top-left-radius": "18px",
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                    "border-bottom-left-radius": "18px",
                    "cursor": "pointer",
                    "text-align": "left",
                    "display": "flex",
                    "flex-direction": "column",
                    "justify-content": "space-between",
                    "row-gap": "18px",
                    "column-gap": "18px",
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
                    "transition": "background 220ms ease, color 220ms ease",
                    "align-items": "center"
                  }
                },
                "attrs": {
                  "aria-pressed": "false"
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-31",
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
                        "key": "div-29",
                        "style": {
                          "base": {
                            "padding-top": "4px",
                            "padding-right": "10px",
                            "padding-bottom": "4px",
                            "padding-left": "10px",
                            "border-top-left-radius": "999px",
                            "border-top-right-radius": "999px",
                            "border-bottom-right-radius": "999px",
                            "border-bottom-left-radius": "999px",
                            "font-size": "12px",
                            "font-weight": "500",
                            "background-color": "#FDEFE4",
                            "color": "#9A4A12"
                          }
                        },
                        "text": "Without"
                      },
                      {
                        "tag": "div",
                        "key": "div-30",
                        "style": {
                          "base": {
                            "font-size": "18px",
                            "opacity": "0.6"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        },
                        "text": "↻"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-34",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "8px",
                        "column-gap": "8px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-32",
                        "style": {
                          "base": {
                            "font-size": "22px",
                            "line-height": "1.15",
                            "letter-spacing": "-0.02em",
                            "font-weight": "600"
                          }
                        },
                        "text": "Invoices on Friday night"
                      },
                      {
                        "tag": "div",
                        "key": "div-33",
                        "style": {
                          "base": {
                            "font-size": "15px",
                            "line-height": "1.5",
                            "opacity": "0.75"
                          }
                        },
                        "text": "Typing up paper tickets from the week."
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-42",
                "style": {
                  "base": {
                    "min-height": "220px",
                    "padding-top": "22px",
                    "padding-right": "22px",
                    "padding-bottom": "22px",
                    "padding-left": "22px",
                    "border-top-left-radius": "18px",
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                    "border-bottom-left-radius": "18px",
                    "cursor": "pointer",
                    "text-align": "left",
                    "display": "flex",
                    "flex-direction": "column",
                    "justify-content": "space-between",
                    "row-gap": "18px",
                    "column-gap": "18px",
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
                    "transition": "background 220ms ease, color 220ms ease",
                    "align-items": "center"
                  }
                },
                "attrs": {
                  "aria-pressed": "false"
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-38",
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
                        "key": "div-36",
                        "style": {
                          "base": {
                            "padding-top": "4px",
                            "padding-right": "10px",
                            "padding-bottom": "4px",
                            "padding-left": "10px",
                            "border-top-left-radius": "999px",
                            "border-top-right-radius": "999px",
                            "border-bottom-right-radius": "999px",
                            "border-bottom-left-radius": "999px",
                            "font-size": "12px",
                            "font-weight": "500",
                            "background-color": "#FDEFE4",
                            "color": "#9A4A12"
                          }
                        },
                        "text": "Without"
                      },
                      {
                        "tag": "div",
                        "key": "div-37",
                        "style": {
                          "base": {
                            "font-size": "18px",
                            "opacity": "0.6"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        },
                        "text": "↻"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-41",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "8px",
                        "column-gap": "8px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-39",
                        "style": {
                          "base": {
                            "font-size": "22px",
                            "line-height": "1.15",
                            "letter-spacing": "-0.02em",
                            "font-weight": "600"
                          }
                        },
                        "text": "Awkward payment calls"
                      },
                      {
                        "tag": "div",
                        "key": "div-40",
                        "style": {
                          "base": {
                            "font-size": "15px",
                            "line-height": "1.5",
                            "opacity": "0.75"
                          }
                        },
                        "text": "Remembering who owes what, then calling."
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-49",
                "style": {
                  "base": {
                    "min-height": "220px",
                    "padding-top": "22px",
                    "padding-right": "22px",
                    "padding-bottom": "22px",
                    "padding-left": "22px",
                    "border-top-left-radius": "18px",
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                    "border-bottom-left-radius": "18px",
                    "cursor": "pointer",
                    "text-align": "left",
                    "display": "flex",
                    "flex-direction": "column",
                    "justify-content": "space-between",
                    "row-gap": "18px",
                    "column-gap": "18px",
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
                    "transition": "background 220ms ease, color 220ms ease",
                    "align-items": "center"
                  }
                },
                "attrs": {
                  "aria-pressed": "false"
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-45",
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
                        "key": "div-43",
                        "style": {
                          "base": {
                            "padding-top": "4px",
                            "padding-right": "10px",
                            "padding-bottom": "4px",
                            "padding-left": "10px",
                            "border-top-left-radius": "999px",
                            "border-top-right-radius": "999px",
                            "border-bottom-right-radius": "999px",
                            "border-bottom-left-radius": "999px",
                            "font-size": "12px",
                            "font-weight": "500",
                            "background-color": "#FDEFE4",
                            "color": "#9A4A12"
                          }
                        },
                        "text": "Without"
                      },
                      {
                        "tag": "div",
                        "key": "div-44",
                        "style": {
                          "base": {
                            "font-size": "18px",
                            "opacity": "0.6"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        },
                        "text": "↻"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-48",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "8px",
                        "column-gap": "8px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-46",
                        "style": {
                          "base": {
                            "font-size": "22px",
                            "line-height": "1.15",
                            "letter-spacing": "-0.02em",
                            "font-weight": "600"
                          }
                        },
                        "text": "Who was there last time?"
                      },
                      {
                        "tag": "div",
                        "key": "div-47",
                        "style": {
                          "base": {
                            "font-size": "15px",
                            "line-height": "1.5",
                            "opacity": "0.75"
                          }
                        },
                        "text": "Digging through notes and old messages."
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
