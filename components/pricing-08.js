import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "pricing-08",
  "prefix": "pricing08",
  "name": "Pricing / Cards and add ons",
  "category": "pricing",
  "collection": "saas",
  "description": "Pricing / Cards and add ons for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "Simple plans. Add only what you use."
    },
    "subheading": {
      "type": "text",
      "default": "Example prices. [Replace with your pricing.] Prices above include selected add-ons."
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-9",
        "div-74",
        "div-88"
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
        "key": "div-90",
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
            "key": "div-9",
            "style": {
              "base": {
                "display": "flex",
                "flex-direction": "column",
                "align-items": "center",
                "row-gap": "18px",
                "column-gap": "18px",
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
                "text": "Pricing"
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
              },
              {
                "tag": "div",
                "key": "div-8",
                "style": {
                  "base": {
                    "display": "flex",
                    "align-items": "center",
                    "row-gap": "12px",
                    "column-gap": "12px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-3",
                    "style": {
                      "base": {
                        "font-size": "15px",
                        "color": "#0F1115"
                      }
                    },
                    "text": "Monthly"
                  },
                  {
                    "tag": "div",
                    "key": "div-5",
                    "style": {
                      "base": {
                        "position": "relative",
                        "width": "56px",
                        "height": "32px",
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
                        "border-top-left-radius": "999px",
                        "border-top-right-radius": "999px",
                        "border-bottom-right-radius": "999px",
                        "border-bottom-left-radius": "999px",
                        "cursor": "pointer",
                        "background-color": "#0F1115",
                        "display": "inline-flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "line-height": "1",
                        "flex-shrink": "0",
                        "padding-top": "0px",
                        "padding-right": "0px",
                        "padding-bottom": "0px",
                        "padding-left": "0px"
                      }
                    },
                    "attrs": {
                      "role": "switch",
                      "aria-checked": "false",
                      "aria-label": "Bill yearly"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-4",
                        "style": {
                          "base": {
                            "position": "absolute",
                            "top": "4px",
                            "left": "4px",
                            "width": "24px",
                            "height": "24px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "background-color": "#FFFFFF",
                            "transition": "left 160ms ease"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        }
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-6",
                    "style": {
                      "base": {
                        "font-size": "15px",
                        "color": "#7A808A"
                      }
                    },
                    "text": "Yearly"
                  },
                  {
                    "tag": "div",
                    "key": "div-7",
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
                        "background-color": "#E5F4EA",
                        "color": "#1D6B3A"
                      }
                    },
                    "text": "2 months free"
                  }
                ]
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-74",
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
                "grid-template-columns": "repeat(3, minmax(0, 1fr))"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-30",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "18px",
                    "column-gap": "18px",
                    "padding-top": "26px",
                    "padding-right": "26px",
                    "padding-bottom": "26px",
                    "padding-left": "26px",
                    "border-top-left-radius": "20px",
                    "border-top-right-radius": "20px",
                    "border-bottom-right-radius": "20px",
                    "border-bottom-left-radius": "20px",
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
                    "key": "div-11",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "align-items": "center"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-10",
                        "style": {
                          "base": {
                            "font-size": "20px",
                            "font-weight": "600"
                          }
                        },
                        "text": "Starter"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-14",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "baseline",
                        "row-gap": "6px",
                        "column-gap": "6px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-12",
                        "style": {
                          "base": {
                            "font-size": "52px",
                            "font-weight": "600",
                            "letter-spacing": "-0.04em",
                            "line-height": "1"
                          }
                        },
                        "text": "$44"
                      },
                      {
                        "tag": "div",
                        "key": "div-13",
                        "style": {
                          "base": {
                            "font-size": "15px",
                            "opacity": "0.7"
                          }
                        },
                        "text": "/ month"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-15",
                    "style": {
                      "base": {
                        "font-size": "15px",
                        "opacity": "0.75"
                      }
                    },
                    "text": "For one truck getting organized."
                  },
                  {
                    "tag": "div",
                    "key": "div-28",
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
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "10px",
                        "column-gap": "10px",
                        "font-size": "15px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-18",
                        "style": {
                          "base": {
                            "display": "flex",
                            "row-gap": "10px",
                            "column-gap": "10px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-16",
                            "style": {
                              "base": {
                                "color": "#2D4BF0"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "✓"
                          },
                          {
                            "tag": "div",
                            "key": "text-17",
                            "text": "1 crew"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-21",
                        "style": {
                          "base": {
                            "display": "flex",
                            "row-gap": "10px",
                            "column-gap": "10px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-19",
                            "style": {
                              "base": {
                                "color": "#2D4BF0"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "✓"
                          },
                          {
                            "tag": "div",
                            "key": "text-20",
                            "text": "Recurring jobs"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-24",
                        "style": {
                          "base": {
                            "display": "flex",
                            "row-gap": "10px",
                            "column-gap": "10px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-22",
                            "style": {
                              "base": {
                                "color": "#2D4BF0"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "✓"
                          },
                          {
                            "tag": "div",
                            "key": "text-23",
                            "text": "Invoices"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-27",
                        "style": {
                          "base": {
                            "display": "flex",
                            "row-gap": "10px",
                            "column-gap": "10px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-25",
                            "style": {
                              "base": {
                                "color": "#2D4BF0"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "✓"
                          },
                          {
                            "tag": "div",
                            "key": "text-26",
                            "text": "Email support"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "a",
                    "key": "a-29",
                    "style": {
                      "base": {
                        "margin-top": "auto",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "height": "48px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "font-weight": "500",
                        "text-decoration": "none",
                        "background-color": "#F4F5F1",
                        "color": "#0F1115"
                      }
                    },
                    "href": "#",
                    "text": "Choose Starter"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-52",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "18px",
                    "column-gap": "18px",
                    "padding-top": "26px",
                    "padding-right": "26px",
                    "padding-bottom": "26px",
                    "padding-left": "26px",
                    "border-top-left-radius": "20px",
                    "border-top-right-radius": "20px",
                    "border-bottom-right-radius": "20px",
                    "border-bottom-left-radius": "20px",
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
                    "key": "div-33",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "align-items": "center"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-31",
                        "style": {
                          "base": {
                            "font-size": "20px",
                            "font-weight": "600"
                          }
                        },
                        "text": "Team"
                      },
                      {
                        "tag": "div",
                        "key": "div-32",
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
                            "background-color": "#2D4BF0",
                            "color": "#FFFFFF"
                          }
                        },
                        "text": "Most picked"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-36",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "baseline",
                        "row-gap": "6px",
                        "column-gap": "6px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-34",
                        "style": {
                          "base": {
                            "font-size": "52px",
                            "font-weight": "600",
                            "letter-spacing": "-0.04em",
                            "line-height": "1"
                          }
                        },
                        "text": "$94"
                      },
                      {
                        "tag": "div",
                        "key": "div-35",
                        "style": {
                          "base": {
                            "font-size": "15px",
                            "opacity": "0.7"
                          }
                        },
                        "text": "/ month"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-37",
                    "style": {
                      "base": {
                        "font-size": "15px",
                        "opacity": "0.75"
                      }
                    },
                    "text": "For a few crews and an office."
                  },
                  {
                    "tag": "div",
                    "key": "div-50",
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
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "10px",
                        "column-gap": "10px",
                        "font-size": "15px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-40",
                        "style": {
                          "base": {
                            "display": "flex",
                            "row-gap": "10px",
                            "column-gap": "10px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-38",
                            "style": {
                              "base": {
                                "color": "#AFC0FF"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "✓"
                          },
                          {
                            "tag": "div",
                            "key": "text-39",
                            "text": "Up to 5 crews"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-43",
                        "style": {
                          "base": {
                            "display": "flex",
                            "row-gap": "10px",
                            "column-gap": "10px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-41",
                            "style": {
                              "base": {
                                "color": "#AFC0FF"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "✓"
                          },
                          {
                            "tag": "div",
                            "key": "text-42",
                            "text": "Dispatch board"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-46",
                        "style": {
                          "base": {
                            "display": "flex",
                            "row-gap": "10px",
                            "column-gap": "10px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-44",
                            "style": {
                              "base": {
                                "color": "#AFC0FF"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "✓"
                          },
                          {
                            "tag": "div",
                            "key": "text-45",
                            "text": "Reminder texts"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-49",
                        "style": {
                          "base": {
                            "display": "flex",
                            "row-gap": "10px",
                            "column-gap": "10px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-47",
                            "style": {
                              "base": {
                                "color": "#AFC0FF"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "✓"
                          },
                          {
                            "tag": "div",
                            "key": "text-48",
                            "text": "Payments"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "a",
                    "key": "a-51",
                    "style": {
                      "base": {
                        "margin-top": "auto",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "height": "48px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "font-weight": "500",
                        "text-decoration": "none",
                        "background-color": "#2D4BF0",
                        "color": "#FFFFFF"
                      }
                    },
                    "href": "#",
                    "text": "Choose Team"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-73",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "18px",
                    "column-gap": "18px",
                    "padding-top": "26px",
                    "padding-right": "26px",
                    "padding-bottom": "26px",
                    "padding-left": "26px",
                    "border-top-left-radius": "20px",
                    "border-top-right-radius": "20px",
                    "border-bottom-right-radius": "20px",
                    "border-bottom-left-radius": "20px",
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
                        "display": "flex",
                        "justify-content": "space-between",
                        "align-items": "center"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-53",
                        "style": {
                          "base": {
                            "font-size": "20px",
                            "font-weight": "600"
                          }
                        },
                        "text": "Business"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-57",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "baseline",
                        "row-gap": "6px",
                        "column-gap": "6px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-55",
                        "style": {
                          "base": {
                            "font-size": "52px",
                            "font-weight": "600",
                            "letter-spacing": "-0.04em",
                            "line-height": "1"
                          }
                        },
                        "text": "$164"
                      },
                      {
                        "tag": "div",
                        "key": "div-56",
                        "style": {
                          "base": {
                            "font-size": "15px",
                            "opacity": "0.7"
                          }
                        },
                        "text": "/ month"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-58",
                    "style": {
                      "base": {
                        "font-size": "15px",
                        "opacity": "0.75"
                      }
                    },
                    "text": "For fleets and multiple locations."
                  },
                  {
                    "tag": "div",
                    "key": "div-71",
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
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "10px",
                        "column-gap": "10px",
                        "font-size": "15px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-61",
                        "style": {
                          "base": {
                            "display": "flex",
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
                                "color": "#2D4BF0"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "✓"
                          },
                          {
                            "tag": "div",
                            "key": "text-60",
                            "text": "Unlimited crews"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-64",
                        "style": {
                          "base": {
                            "display": "flex",
                            "row-gap": "10px",
                            "column-gap": "10px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-62",
                            "style": {
                              "base": {
                                "color": "#2D4BF0"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "✓"
                          },
                          {
                            "tag": "div",
                            "key": "text-63",
                            "text": "Roles and permissions"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-67",
                        "style": {
                          "base": {
                            "display": "flex",
                            "row-gap": "10px",
                            "column-gap": "10px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-65",
                            "style": {
                              "base": {
                                "color": "#2D4BF0"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "✓"
                          },
                          {
                            "tag": "div",
                            "key": "text-66",
                            "text": "Reports"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-70",
                        "style": {
                          "base": {
                            "display": "flex",
                            "row-gap": "10px",
                            "column-gap": "10px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-68",
                            "style": {
                              "base": {
                                "color": "#2D4BF0"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "✓"
                          },
                          {
                            "tag": "div",
                            "key": "text-69",
                            "text": "Priority support"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "a",
                    "key": "a-72",
                    "style": {
                      "base": {
                        "margin-top": "auto",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "height": "48px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "font-weight": "500",
                        "text-decoration": "none",
                        "background-color": "#F4F5F1",
                        "color": "#0F1115"
                      }
                    },
                    "href": "#",
                    "text": "Choose Business"
                  }
                ]
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-88",
            "style": {
              "base": {
                "display": "flex",
                "flex-wrap": "wrap",
                "row-gap": "16px",
                "column-gap": "16px",
                "align-items": "center",
                "padding-top": "22px",
                "padding-right": "22px",
                "padding-bottom": "22px",
                "padding-left": "22px",
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
                "border-left-color": "#DDE0D8"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-75",
                "style": {
                  "base": {
                    "flex-grow": "1",
                    "flex-shrink": "1",
                    "flex-basis": "200px",
                    "font-size": "18px",
                    "font-weight": "600"
                  }
                },
                "text": "Add-ons"
              },
              {
                "tag": "div",
                "key": "div-79",
                "style": {
                  "base": {
                    "flex-grow": "1",
                    "flex-shrink": "1",
                    "flex-basis": "220px",
                    "display": "flex",
                    "align-items": "center",
                    "row-gap": "12px",
                    "column-gap": "12px",
                    "min-height": "56px",
                    "padding-top": "0",
                    "padding-right": "14px",
                    "padding-bottom": "0",
                    "padding-left": "14px",
                    "border-top-left-radius": "12px",
                    "border-top-right-radius": "12px",
                    "border-bottom-right-radius": "12px",
                    "border-bottom-left-radius": "12px",
                    "cursor": "pointer",
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
                    "background-color": "#E8ECFE"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-76",
                    "style": {
                      "base": {
                        "width": "20px",
                        "height": "20px",
                        "accent-color": "#2D4BF0"
                      }
                    },
                    "attrs": {
                      "aria-checked": "true"
                    }
                  },
                  {
                    "tag": "div",
                    "key": "div-77",
                    "style": {
                      "base": {
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "0%",
                        "font-size": "15px"
                      }
                    },
                    "text": "Extra text messages"
                  },
                  {
                    "tag": "div",
                    "key": "div-78",
                    "style": {
                      "base": {
                        "font-family": "token(font-saas-mono)",
                        "font-size": "14px",
                        "color": "#5B616B"
                      }
                    },
                    "text": "+$15"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-83",
                "style": {
                  "base": {
                    "flex-grow": "1",
                    "flex-shrink": "1",
                    "flex-basis": "220px",
                    "display": "flex",
                    "align-items": "center",
                    "row-gap": "12px",
                    "column-gap": "12px",
                    "min-height": "56px",
                    "padding-top": "0",
                    "padding-right": "14px",
                    "padding-bottom": "0",
                    "padding-left": "14px",
                    "border-top-left-radius": "12px",
                    "border-top-right-radius": "12px",
                    "border-bottom-right-radius": "12px",
                    "border-bottom-left-radius": "12px",
                    "cursor": "pointer",
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
                    "border-left-color": "#E2E4DE",
                    "background-color": "#FFFFFF"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-80",
                    "style": {
                      "base": {
                        "width": "20px",
                        "height": "20px",
                        "accent-color": "#2D4BF0"
                      }
                    }
                  },
                  {
                    "tag": "div",
                    "key": "div-81",
                    "style": {
                      "base": {
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "0%",
                        "font-size": "15px"
                      }
                    },
                    "text": "Route optimization"
                  },
                  {
                    "tag": "div",
                    "key": "div-82",
                    "style": {
                      "base": {
                        "font-family": "token(font-saas-mono)",
                        "font-size": "14px",
                        "color": "#5B616B"
                      }
                    },
                    "text": "+$20"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-87",
                "style": {
                  "base": {
                    "flex-grow": "1",
                    "flex-shrink": "1",
                    "flex-basis": "220px",
                    "display": "flex",
                    "align-items": "center",
                    "row-gap": "12px",
                    "column-gap": "12px",
                    "min-height": "56px",
                    "padding-top": "0",
                    "padding-right": "14px",
                    "padding-bottom": "0",
                    "padding-left": "14px",
                    "border-top-left-radius": "12px",
                    "border-top-right-radius": "12px",
                    "border-bottom-right-radius": "12px",
                    "border-bottom-left-radius": "12px",
                    "cursor": "pointer",
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
                    "border-left-color": "#E2E4DE",
                    "background-color": "#FFFFFF"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-84",
                    "style": {
                      "base": {
                        "width": "20px",
                        "height": "20px",
                        "accent-color": "#2D4BF0"
                      }
                    }
                  },
                  {
                    "tag": "div",
                    "key": "div-85",
                    "style": {
                      "base": {
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "0%",
                        "font-size": "15px"
                      }
                    },
                    "text": "Customer portal"
                  },
                  {
                    "tag": "div",
                    "key": "div-86",
                    "style": {
                      "base": {
                        "font-family": "token(font-saas-mono)",
                        "font-size": "14px",
                        "color": "#5B616B"
                      }
                    },
                    "text": "+$10"
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
