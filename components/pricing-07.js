import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "pricing-07",
  "prefix": "pricing07",
  "name": "Pricing / Seat slider",
  "category": "pricing",
  "collection": "saas",
  "description": "Pricing / Seat slider for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "Pay for the people who use it"
    },
    "subheading": {
      "type": "text",
      "default": "For owner-operators and very small crews."
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-3",
        "div-15",
        "div-77"
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
        "padding-top": "clamp(56px, 8vw, 104px)",
        "padding-right": "clamp(20px, 4vw, 48px)",
        "padding-bottom": "clamp(56px, 8vw, 104px)",
        "padding-left": "clamp(20px, 4vw, 48px)"
      }
    },
    "children": [
      {
        "tag": "div",
        "key": "div-79",
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
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-15",
            "style": {
              "base": {
                "display": "flex",
                "flex-wrap": "wrap",
                "justify-content": "center",
                "align-items": "center",
                "row-gap": "20px",
                "column-gap": "32px",
                "padding-top": "20px",
                "padding-right": "24px",
                "padding-bottom": "20px",
                "padding-left": "24px",
                "border-top-left-radius": "16px",
                "border-top-right-radius": "16px",
                "border-bottom-right-radius": "16px",
                "border-bottom-left-radius": "16px",
                "background-color": "#F4F5F1",
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
                "key": "div-11",
                "style": {
                  "base": {
                    "flex-grow": "1",
                    "flex-shrink": "1",
                    "flex-basis": "320px",
                    "max-width": "520px",
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "8px",
                    "column-gap": "8px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-6",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "font-size": "15px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-4",
                        "text": "Team size"
                      },
                      {
                        "tag": "div",
                        "key": "div-5",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-weight": "500"
                          }
                        },
                        "text": "6 people"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "range-7",
                    "style": {
                      "base": {
                        "width": "100%",
                        "height": "32px",
                        "position": "relative",
                        "display": "flex",
                        "align-items": "center"
                      }
                    },
                    "attrs": {
                      "data-blok-range": "",
                      "role": "slider",
                      "aria-valuemin": "1",
                      "aria-valuemax": "50",
                      "aria-valuenow": "6",
                      "data-min": "1",
                      "data-max": "50",
                      "data-value": "6"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "track-8",
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
                            "key": "fill-9",
                            "style": {
                              "base": {
                                "width": "10%",
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
                        "key": "thumb-10",
                        "style": {
                          "base": {
                            "position": "absolute",
                            "left": "10%",
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
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-14",
                "style": {
                  "base": {
                    "display": "flex",
                    "padding-top": "4px",
                    "padding-right": "4px",
                    "padding-bottom": "4px",
                    "padding-left": "4px",
                    "border-top-left-radius": "10px",
                    "border-top-right-radius": "10px",
                    "border-bottom-right-radius": "10px",
                    "border-bottom-left-radius": "10px",
                    "background-color": "#E5E7E1",
                    "row-gap": "4px",
                    "column-gap": "4px"
                  }
                },
                "attrs": {
                  "role": "radiogroup",
                  "aria-label": "Billing period",
                  "data-blok-choices": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-12",
                    "style": {
                      "base": {
                        "height": "40px",
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
                        "border-top-left-radius": "7px",
                        "border-top-right-radius": "7px",
                        "border-bottom-right-radius": "7px",
                        "border-bottom-left-radius": "7px",
                        "cursor": "pointer",
                        "font-size": "14px",
                        "font-weight": "500",
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
                    "text": "Monthly"
                  },
                  {
                    "tag": "div",
                    "key": "div-13",
                    "style": {
                      "base": {
                        "height": "40px",
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
                        "border-top-left-radius": "7px",
                        "border-top-right-radius": "7px",
                        "border-bottom-right-radius": "7px",
                        "border-bottom-left-radius": "7px",
                        "cursor": "pointer",
                        "font-size": "14px",
                        "font-weight": "500",
                        "background-color": "#FFFFFF",
                        "color": "#0F1115",
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
                    "text": "Yearly · 2 months free"
                  }
                ]
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-77",
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
                "key": "div-33",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "20px",
                    "column-gap": "20px",
                    "padding-top": "28px",
                    "padding-right": "28px",
                    "padding-bottom": "28px",
                    "padding-left": "28px",
                    "border-top-left-radius": "20px",
                    "border-top-right-radius": "20px",
                    "border-bottom-right-radius": "20px",
                    "border-bottom-left-radius": "20px",
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
                    "color": "#0F1115"
                  }
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
                            "font-size": "18px",
                            "font-weight": "600"
                          }
                        },
                        "text": "Starter"
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
                        "row-gap": "4px",
                        "column-gap": "4px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-18",
                        "style": {
                          "base": {
                            "font-size": "48px",
                            "line-height": "1",
                            "letter-spacing": "-0.045em",
                            "font-weight": "600"
                          }
                        },
                        "text": "$60",
                        "attrs": {
                          "data-blok-sum": ""
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-19",
                        "style": {
                          "base": {
                            "font-size": "14px",
                            "color": "#4E545D"
                          }
                        },
                        "text": "$10 per person / month, billed yearly"
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
                        "line-height": "1.55",
                        "color": "#4E545D"
                      }
                    },
                    "bind": "subheading"
                  },
                  {
                    "tag": "div",
                    "key": "div-31",
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
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "0%"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-24",
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
                            "text": "Scheduling and routes"
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
                            "column-gap": "10px",
                            "font-size": "15px"
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
                            "text": "Invoices and card payments"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-30",
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
                            "key": "div-28",
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
                            "key": "text-29",
                            "text": "Crew app"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "a",
                    "key": "a-32",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "height": "48px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "text-decoration": "none",
                        "font-weight": "500",
                        "background-color": "#FFFFFF",
                        "color": "#0F1115",
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
                    "href": "#",
                    "text": "Start free trial"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-55",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "20px",
                    "column-gap": "20px",
                    "padding-top": "28px",
                    "padding-right": "28px",
                    "padding-bottom": "28px",
                    "padding-left": "28px",
                    "border-top-left-radius": "20px",
                    "border-top-right-radius": "20px",
                    "border-bottom-right-radius": "20px",
                    "border-bottom-left-radius": "20px",
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
                    "color": "#F4F5F1"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-36",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "align-items": "center",
                        "row-gap": "8px",
                        "column-gap": "8px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-34",
                        "style": {
                          "base": {
                            "font-size": "18px",
                            "font-weight": "600"
                          }
                        },
                        "text": "Team"
                      },
                      {
                        "tag": "div",
                        "key": "div-35",
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
                        "text": "Most teams"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-39",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "4px",
                        "column-gap": "4px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-37",
                        "style": {
                          "base": {
                            "font-size": "48px",
                            "line-height": "1",
                            "letter-spacing": "-0.045em",
                            "font-weight": "600"
                          }
                        },
                        "text": "$120",
                        "attrs": {
                          "data-blok-sum": ""
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-38",
                        "style": {
                          "base": {
                            "font-size": "14px",
                            "color": "#B9BEC6"
                          }
                        },
                        "text": "$20 per person / month, billed yearly"
                      }
                    ]
                  },
                  {
                    "tag": "p",
                    "key": "p-40",
                    "style": {
                      "base": {
                        "margin-top": "0",
                        "margin-right": "0",
                        "margin-bottom": "0",
                        "margin-left": "0",
                        "font-size": "15px",
                        "line-height": "1.55",
                        "color": "#B9BEC6"
                      }
                    },
                    "text": "For businesses running several crews a day."
                  },
                  {
                    "tag": "div",
                    "key": "div-53",
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
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "0%"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-43",
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
                            "text": "Everything in Starter"
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
                            "column-gap": "10px",
                            "font-size": "15px"
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
                            "text": "Dispatch board"
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
                            "column-gap": "10px",
                            "font-size": "15px"
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
                            "text": "Automatic reminders"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-52",
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
                            "key": "div-50",
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
                            "key": "text-51",
                            "text": "Recurring billing"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "a",
                    "key": "a-54",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "height": "48px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "text-decoration": "none",
                        "font-weight": "500",
                        "background-color": "#F4F5F1",
                        "color": "#0F1115",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#F4F5F1",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#F4F5F1",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#F4F5F1",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#F4F5F1"
                      }
                    },
                    "href": "#",
                    "text": "Start free trial"
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
                    "row-gap": "20px",
                    "column-gap": "20px",
                    "padding-top": "28px",
                    "padding-right": "28px",
                    "padding-bottom": "28px",
                    "padding-left": "28px",
                    "border-top-left-radius": "20px",
                    "border-top-right-radius": "20px",
                    "border-bottom-right-radius": "20px",
                    "border-bottom-left-radius": "20px",
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
                    "color": "#0F1115"
                  }
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
                        "row-gap": "8px",
                        "column-gap": "8px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-56",
                        "style": {
                          "base": {
                            "font-size": "18px",
                            "font-weight": "600"
                          }
                        },
                        "text": "Business"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-60",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "4px",
                        "column-gap": "4px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-58",
                        "style": {
                          "base": {
                            "font-size": "48px",
                            "line-height": "1",
                            "letter-spacing": "-0.045em",
                            "font-weight": "600"
                          }
                        },
                        "text": "Custom"
                      },
                      {
                        "tag": "div",
                        "key": "div-59",
                        "style": {
                          "base": {
                            "font-size": "14px",
                            "color": "#4E545D"
                          }
                        },
                        "text": "Priced for your locations"
                      }
                    ]
                  },
                  {
                    "tag": "p",
                    "key": "p-61",
                    "style": {
                      "base": {
                        "margin-top": "0",
                        "margin-right": "0",
                        "margin-bottom": "0",
                        "margin-left": "0",
                        "font-size": "15px",
                        "line-height": "1.55",
                        "color": "#4E545D"
                      }
                    },
                    "text": "For multi-location operators with special needs."
                  },
                  {
                    "tag": "div",
                    "key": "div-74",
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
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "0%"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-64",
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
                            "text": "Everything in Team"
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
                            "column-gap": "10px",
                            "font-size": "15px"
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
                            "text": "Multiple locations"
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
                            "column-gap": "10px",
                            "font-size": "15px"
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
                            "text": "API and SSO"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-73",
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
                            "key": "div-71",
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
                            "key": "text-72",
                            "text": "Dedicated onboarding"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "a",
                    "key": "a-75",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "height": "48px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "text-decoration": "none",
                        "font-weight": "500",
                        "background-color": "#FFFFFF",
                        "color": "#0F1115",
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
                    "href": "#",
                    "text": "Talk to sales"
                  }
                ]
              }
            ]
          },
          {
            "tag": "p",
            "key": "p-78",
            "style": {
              "base": {
                "margin-top": "0",
                "margin-right": "0",
                "margin-bottom": "0",
                "margin-left": "0",
                "text-align": "center",
                "font-size": "13px",
                "color": "#5B616B"
              }
            },
            "text": "Example prices. Replace them with yours in the component props."
          }
        ]
      }
    ],
    "attrs": {
      "data-blok-plan": ""
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
