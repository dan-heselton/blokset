import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "features-64",
  "prefix": "features64",
  "name": "Features / Pill tabs",
  "category": "features",
  "collection": "saas",
  "description": "Features / Pill tabs for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "Built for the way a service day actually goes"
    },
    "subheading": {
      "type": "text",
      "default": "Weekly, monthly or every other Tuesday. Set the rhythm once and the calendar fills itself."
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-3",
        "div-8",
        "stack-153"
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
        "key": "div-38",
        "style": {
          "base": {
            "max-width": "1200px",
            "margin-top": "0",
            "margin-right": "auto",
            "margin-bottom": "0",
            "margin-left": "auto",
            "display": "flex",
            "flex-direction": "column",
            "align-items": "center",
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
                "text": "Features"
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
            "key": "div-8",
            "style": {
              "base": {
                "display": "flex",
                "flex-wrap": "wrap",
                "justify-content": "center",
                "row-gap": "4px",
                "column-gap": "4px",
                "padding-top": "5px",
                "padding-right": "5px",
                "padding-bottom": "5px",
                "padding-left": "5px",
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
                "border-left-color": "#DDE0D8"
              }
            },
            "attrs": {
              "role": "tablist",
              "aria-label": "Features",
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
                    "padding-right": "20px",
                    "padding-bottom": "0",
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
                    "border-top-left-radius": "999px",
                    "border-top-right-radius": "999px",
                    "border-bottom-right-radius": "999px",
                    "border-bottom-left-radius": "999px",
                    "cursor": "pointer",
                    "font-size": "15px",
                    "font-weight": "500",
                    "background-color": "#0F1115",
                    "color": "#FFFFFF",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center"
                  }
                },
                "attrs": {
                  "role": "tab",
                  "aria-selected": "true",
                  "data-blok-panel-go": "",
                  "data-blok-choice": ""
                },
                "text": "Scheduling"
              },
              {
                "tag": "div",
                "key": "div-5",
                "style": {
                  "base": {
                    "height": "44px",
                    "padding-top": "0",
                    "padding-right": "20px",
                    "padding-bottom": "0",
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
                    "border-top-left-radius": "999px",
                    "border-top-right-radius": "999px",
                    "border-bottom-right-radius": "999px",
                    "border-bottom-left-radius": "999px",
                    "cursor": "pointer",
                    "font-size": "15px",
                    "font-weight": "500",
                    "background-color": "transparent",
                    "color": "#4E545D",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center"
                  }
                },
                "attrs": {
                  "role": "tab",
                  "aria-selected": "false",
                  "data-blok-panel-go": "",
                  "data-blok-choice": ""
                },
                "text": "Dispatch"
              },
              {
                "tag": "div",
                "key": "div-6",
                "style": {
                  "base": {
                    "height": "44px",
                    "padding-top": "0",
                    "padding-right": "20px",
                    "padding-bottom": "0",
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
                    "border-top-left-radius": "999px",
                    "border-top-right-radius": "999px",
                    "border-bottom-right-radius": "999px",
                    "border-bottom-left-radius": "999px",
                    "cursor": "pointer",
                    "font-size": "15px",
                    "font-weight": "500",
                    "background-color": "transparent",
                    "color": "#4E545D",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center"
                  }
                },
                "attrs": {
                  "role": "tab",
                  "aria-selected": "false",
                  "data-blok-panel-go": "",
                  "data-blok-choice": ""
                },
                "text": "Invoicing"
              },
              {
                "tag": "div",
                "key": "div-7",
                "style": {
                  "base": {
                    "height": "44px",
                    "padding-top": "0",
                    "padding-right": "20px",
                    "padding-bottom": "0",
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
                    "border-top-left-radius": "999px",
                    "border-top-right-radius": "999px",
                    "border-bottom-right-radius": "999px",
                    "border-bottom-left-radius": "999px",
                    "cursor": "pointer",
                    "font-size": "15px",
                    "font-weight": "500",
                    "background-color": "transparent",
                    "color": "#4E545D",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center"
                  }
                },
                "attrs": {
                  "role": "tab",
                  "aria-selected": "false",
                  "data-blok-panel-go": "",
                  "data-blok-choice": ""
                },
                "text": "Messaging"
              }
            ]
          },
          {
            "tag": "div",
            "key": "stack-153",
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
                "key": "div-37",
                "style": {
                  "base": {
                    "width": "100%",
                    "display": "flex",
                    "flex-wrap": "wrap",
                    "row-gap": "20px",
                    "column-gap": "20px",
                    "align-items": "stretch"
                  }
                },
                "attrs": {
                  "role": "tabpanel",
                  "data-blok-panel": "",
                  "data-display": "flex"
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-22",
                    "style": {
                      "base": {
                        "flex-grow": "999",
                        "flex-shrink": "1",
                        "flex-basis": "560px",
                        "min-width": "0",
                        "min-height": "380px",
                        "border-top-left-radius": "22px",
                        "border-top-right-radius": "22px",
                        "border-bottom-right-radius": "22px",
                        "border-bottom-left-radius": "22px",
                        "padding-top": "clamp(20px, 3vw, 32px)",
                        "padding-right": "clamp(20px, 3vw, 32px)",
                        "padding-bottom": "clamp(20px, 3vw, 32px)",
                        "padding-left": "clamp(20px, 3vw, 32px)",
                        "background-color": "#E8ECFE",
                        "display": "flex",
                        "align-items": "flex-end"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-21",
                        "style": {
                          "base": {
                            "width": "100%",
                            "padding-top": "18px",
                            "padding-right": "18px",
                            "padding-bottom": "18px",
                            "padding-left": "18px",
                            "border-top-left-radius": "16px",
                            "border-top-right-radius": "16px",
                            "border-bottom-right-radius": "16px",
                            "border-bottom-left-radius": "16px",
                            "background-color": "#FFFFFF",
                            "box-shadow": "0 20px 40px -28px rgba(15,17,21,0.45)",
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
                                "justify-content": "space-between",
                                "align-items": "center"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-9",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Next week"
                              },
                              {
                                "tag": "div",
                                "key": "div-10",
                                "style": {
                                  "base": {
                                    "font-family": "token(font-saas-mono)",
                                    "font-size": "12px",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "42 jobs"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-14",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "10px",
                                "column-gap": "10px",
                                "padding-top": "10px",
                                "padding-right": "12px",
                                "padding-bottom": "10px",
                                "padding-left": "12px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "background-color": "#F4F5F1",
                                "font-size": "14px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-12",
                                "style": {
                                  "base": {
                                    "width": "8px",
                                    "height": "8px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "background-color": "#2D4BF0"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                }
                              },
                              {
                                "tag": "div",
                                "key": "text-13",
                                "text": "Mon · 9 recurring jobs"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-17",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "10px",
                                "column-gap": "10px",
                                "padding-top": "10px",
                                "padding-right": "12px",
                                "padding-bottom": "10px",
                                "padding-left": "12px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "background-color": "#F4F5F1",
                                "font-size": "14px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-15",
                                "style": {
                                  "base": {
                                    "width": "8px",
                                    "height": "8px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "background-color": "#2D4BF0"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                }
                              },
                              {
                                "tag": "div",
                                "key": "text-16",
                                "text": "Tue · 11 recurring jobs"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-20",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "10px",
                                "column-gap": "10px",
                                "padding-top": "10px",
                                "padding-right": "12px",
                                "padding-bottom": "10px",
                                "padding-left": "12px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "background-color": "#F4F5F1",
                                "font-size": "14px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-18",
                                "style": {
                                  "base": {
                                    "width": "8px",
                                    "height": "8px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "background-color": "#2D4BF0"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                }
                              },
                              {
                                "tag": "div",
                                "key": "text-19",
                                "text": "Wed · 2 new bookings"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-36",
                    "style": {
                      "base": {
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "320px",
                        "display": "flex",
                        "flex-direction": "column",
                        "justify-content": "center",
                        "row-gap": "18px",
                        "column-gap": "18px",
                        "padding-top": "8px",
                        "padding-right": "clamp(0px, 2vw, 16px)",
                        "padding-bottom": "8px",
                        "padding-left": "clamp(0px, 2vw, 16px)"
                      }
                    },
                    "children": [
                      {
                        "tag": "h3",
                        "key": "h3-23",
                        "style": {
                          "base": {
                            "margin-top": "0",
                            "margin-right": "0",
                            "margin-bottom": "0",
                            "margin-left": "0",
                            "font-size": "28px",
                            "line-height": "1.1",
                            "letter-spacing": "-0.03em",
                            "font-weight": "600"
                          }
                        },
                        "text": "Recurring work on autopilot"
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
                            "font-size": "17px",
                            "line-height": "1.6",
                            "color": "#4E545D"
                          }
                        },
                        "bind": "subheading"
                      },
                      {
                        "tag": "div",
                        "key": "div-34",
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
                            "column-gap": "10px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-27",
                            "style": {
                              "base": {
                                "display": "flex",
                                "row-gap": "10px",
                                "column-gap": "10px",
                                "font-size": "16px"
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
                                "text": "Skip or shift a single visit"
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
                                "font-size": "16px"
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
                                "text": "Holiday rules"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-33",
                            "style": {
                              "base": {
                                "display": "flex",
                                "row-gap": "10px",
                                "column-gap": "10px",
                                "font-size": "16px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-31",
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
                                "key": "text-32",
                                "text": "Online booking"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "a",
                        "key": "a-35",
                        "style": {
                          "base": {
                            "font-weight": "500",
                            "text-decoration": "none",
                            "color": "#2D4BF0"
                          }
                        },
                        "href": "#",
                        "text": "Learn more about Scheduling →"
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-75",
                "style": {
                  "base": {
                    "width": "100%",
                    "display": "none",
                    "flex-wrap": "wrap",
                    "row-gap": "20px",
                    "column-gap": "20px",
                    "align-items": "stretch"
                  }
                },
                "attrs": {
                  "role": "tabpanel",
                  "data-blok-panel": "",
                  "data-display": "flex"
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-60",
                    "style": {
                      "base": {
                        "flex-grow": "999",
                        "flex-shrink": "1",
                        "flex-basis": "560px",
                        "min-width": "0",
                        "min-height": "380px",
                        "border-top-left-radius": "22px",
                        "border-top-right-radius": "22px",
                        "border-bottom-right-radius": "22px",
                        "border-bottom-left-radius": "22px",
                        "padding-top": "clamp(20px, 3vw, 32px)",
                        "padding-right": "clamp(20px, 3vw, 32px)",
                        "padding-bottom": "clamp(20px, 3vw, 32px)",
                        "padding-left": "clamp(20px, 3vw, 32px)",
                        "background-color": "#FDEFE4",
                        "display": "flex",
                        "align-items": "flex-end"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-59",
                        "style": {
                          "base": {
                            "width": "100%",
                            "padding-top": "18px",
                            "padding-right": "18px",
                            "padding-bottom": "18px",
                            "padding-left": "18px",
                            "border-top-left-radius": "16px",
                            "border-top-right-radius": "16px",
                            "border-bottom-right-radius": "16px",
                            "border-bottom-left-radius": "16px",
                            "background-color": "#FFFFFF",
                            "box-shadow": "0 20px 40px -28px rgba(15,17,21,0.45)",
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "10px",
                            "column-gap": "10px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-49",
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
                                "key": "div-47",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Crew B"
                              },
                              {
                                "tag": "div",
                                "key": "div-48",
                                "style": {
                                  "base": {
                                    "font-family": "token(font-saas-mono)",
                                    "font-size": "12px",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "On site"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-52",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "10px",
                                "column-gap": "10px",
                                "padding-top": "10px",
                                "padding-right": "12px",
                                "padding-bottom": "10px",
                                "padding-left": "12px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "background-color": "#F4F5F1",
                                "font-size": "14px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-50",
                                "style": {
                                  "base": {
                                    "width": "8px",
                                    "height": "8px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "background-color": "#9A4A12"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                }
                              },
                              {
                                "tag": "div",
                                "key": "text-51",
                                "text": "77 Shore Dr · in progress"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-55",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "10px",
                                "column-gap": "10px",
                                "padding-top": "10px",
                                "padding-right": "12px",
                                "padding-bottom": "10px",
                                "padding-left": "12px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "background-color": "#F4F5F1",
                                "font-size": "14px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-53",
                                "style": {
                                  "base": {
                                    "width": "8px",
                                    "height": "8px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "background-color": "#9A4A12"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                }
                              },
                              {
                                "tag": "div",
                                "key": "text-54",
                                "text": "3 Elm Pl · done"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-58",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "10px",
                                "column-gap": "10px",
                                "padding-top": "10px",
                                "padding-right": "12px",
                                "padding-bottom": "10px",
                                "padding-left": "12px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "background-color": "#F4F5F1",
                                "font-size": "14px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-56",
                                "style": {
                                  "base": {
                                    "width": "8px",
                                    "height": "8px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "background-color": "#9A4A12"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                }
                              },
                              {
                                "tag": "div",
                                "key": "text-57",
                                "text": "5 Oak Ln · next"
                              }
                            ]
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
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "320px",
                        "display": "flex",
                        "flex-direction": "column",
                        "justify-content": "center",
                        "row-gap": "18px",
                        "column-gap": "18px",
                        "padding-top": "8px",
                        "padding-right": "clamp(0px, 2vw, 16px)",
                        "padding-bottom": "8px",
                        "padding-left": "clamp(0px, 2vw, 16px)"
                      }
                    },
                    "children": [
                      {
                        "tag": "h3",
                        "key": "h3-61",
                        "style": {
                          "base": {
                            "margin-top": "0",
                            "margin-right": "0",
                            "margin-bottom": "0",
                            "margin-left": "0",
                            "font-size": "28px",
                            "line-height": "1.1",
                            "letter-spacing": "-0.03em",
                            "font-weight": "600"
                          }
                        },
                        "text": "One board for every crew"
                      },
                      {
                        "tag": "p",
                        "key": "p-62",
                        "style": {
                          "base": {
                            "margin-top": "0",
                            "margin-right": "0",
                            "margin-bottom": "0",
                            "margin-left": "0",
                            "font-size": "17px",
                            "line-height": "1.6",
                            "color": "#4E545D"
                          }
                        },
                        "text": "See who is where and move work around without a single phone call."
                      },
                      {
                        "tag": "div",
                        "key": "div-72",
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
                            "column-gap": "10px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-65",
                            "style": {
                              "base": {
                                "display": "flex",
                                "row-gap": "10px",
                                "column-gap": "10px",
                                "font-size": "16px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-63",
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
                                "key": "text-64",
                                "text": "Drag between crews"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-68",
                            "style": {
                              "base": {
                                "display": "flex",
                                "row-gap": "10px",
                                "column-gap": "10px",
                                "font-size": "16px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-66",
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
                                "key": "text-67",
                                "text": "Live crew locations"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-71",
                            "style": {
                              "base": {
                                "display": "flex",
                                "row-gap": "10px",
                                "column-gap": "10px",
                                "font-size": "16px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-69",
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
                                "key": "text-70",
                                "text": "Conflict warnings"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "a",
                        "key": "a-73",
                        "style": {
                          "base": {
                            "font-weight": "500",
                            "text-decoration": "none",
                            "color": "#2D4BF0"
                          }
                        },
                        "href": "#",
                        "text": "Learn more about Dispatch →"
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-113",
                "style": {
                  "base": {
                    "width": "100%",
                    "display": "none",
                    "flex-wrap": "wrap",
                    "row-gap": "20px",
                    "column-gap": "20px",
                    "align-items": "stretch"
                  }
                },
                "attrs": {
                  "role": "tabpanel",
                  "data-blok-panel": "",
                  "data-display": "flex"
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-98",
                    "style": {
                      "base": {
                        "flex-grow": "999",
                        "flex-shrink": "1",
                        "flex-basis": "560px",
                        "min-width": "0",
                        "min-height": "380px",
                        "border-top-left-radius": "22px",
                        "border-top-right-radius": "22px",
                        "border-bottom-right-radius": "22px",
                        "border-bottom-left-radius": "22px",
                        "padding-top": "clamp(20px, 3vw, 32px)",
                        "padding-right": "clamp(20px, 3vw, 32px)",
                        "padding-bottom": "clamp(20px, 3vw, 32px)",
                        "padding-left": "clamp(20px, 3vw, 32px)",
                        "background-color": "#E5F4EA",
                        "display": "flex",
                        "align-items": "flex-end"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-97",
                        "style": {
                          "base": {
                            "width": "100%",
                            "padding-top": "18px",
                            "padding-right": "18px",
                            "padding-bottom": "18px",
                            "padding-left": "18px",
                            "border-top-left-radius": "16px",
                            "border-top-right-radius": "16px",
                            "border-bottom-right-radius": "16px",
                            "border-bottom-left-radius": "16px",
                            "background-color": "#FFFFFF",
                            "box-shadow": "0 20px 40px -28px rgba(15,17,21,0.45)",
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "10px",
                            "column-gap": "10px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-87",
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
                                "key": "div-85",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Invoice #1042"
                              },
                              {
                                "tag": "div",
                                "key": "div-86",
                                "style": {
                                  "base": {
                                    "font-family": "token(font-saas-mono)",
                                    "font-size": "12px",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "Sent"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-90",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "10px",
                                "column-gap": "10px",
                                "padding-top": "10px",
                                "padding-right": "12px",
                                "padding-bottom": "10px",
                                "padding-left": "12px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "background-color": "#F4F5F1",
                                "font-size": "14px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-88",
                                "style": {
                                  "base": {
                                    "width": "8px",
                                    "height": "8px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "background-color": "#1D6B3A"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                }
                              },
                              {
                                "tag": "div",
                                "key": "text-89",
                                "text": "Bin wash × 3"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-93",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "10px",
                                "column-gap": "10px",
                                "padding-top": "10px",
                                "padding-right": "12px",
                                "padding-bottom": "10px",
                                "padding-left": "12px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "background-color": "#F4F5F1",
                                "font-size": "14px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-91",
                                "style": {
                                  "base": {
                                    "width": "8px",
                                    "height": "8px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "background-color": "#1D6B3A"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                }
                              },
                              {
                                "tag": "div",
                                "key": "text-92",
                                "text": "Deodorize"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-96",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "10px",
                                "column-gap": "10px",
                                "padding-top": "10px",
                                "padding-right": "12px",
                                "padding-bottom": "10px",
                                "padding-left": "12px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "background-color": "#F4F5F1",
                                "font-size": "14px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-94",
                                "style": {
                                  "base": {
                                    "width": "8px",
                                    "height": "8px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "background-color": "#1D6B3A"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                }
                              },
                              {
                                "tag": "div",
                                "key": "text-95",
                                "text": "Pay link opened"
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
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "320px",
                        "display": "flex",
                        "flex-direction": "column",
                        "justify-content": "center",
                        "row-gap": "18px",
                        "column-gap": "18px",
                        "padding-top": "8px",
                        "padding-right": "clamp(0px, 2vw, 16px)",
                        "padding-bottom": "8px",
                        "padding-left": "clamp(0px, 2vw, 16px)"
                      }
                    },
                    "children": [
                      {
                        "tag": "h3",
                        "key": "h3-99",
                        "style": {
                          "base": {
                            "margin-top": "0",
                            "margin-right": "0",
                            "margin-bottom": "0",
                            "margin-left": "0",
                            "font-size": "28px",
                            "line-height": "1.1",
                            "letter-spacing": "-0.03em",
                            "font-weight": "600"
                          }
                        },
                        "text": "Paid before the truck leaves"
                      },
                      {
                        "tag": "p",
                        "key": "p-100",
                        "style": {
                          "base": {
                            "margin-top": "0",
                            "margin-right": "0",
                            "margin-bottom": "0",
                            "margin-left": "0",
                            "font-size": "17px",
                            "line-height": "1.6",
                            "color": "#4E545D"
                          }
                        },
                        "text": "Invoices send when the job closes. Customers pay from the text."
                      },
                      {
                        "tag": "div",
                        "key": "div-110",
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
                            "column-gap": "10px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-103",
                            "style": {
                              "base": {
                                "display": "flex",
                                "row-gap": "10px",
                                "column-gap": "10px",
                                "font-size": "16px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-101",
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
                                "key": "text-102",
                                "text": "Card and bank payments"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-106",
                            "style": {
                              "base": {
                                "display": "flex",
                                "row-gap": "10px",
                                "column-gap": "10px",
                                "font-size": "16px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-104",
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
                                "key": "text-105",
                                "text": "Auto reminders"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-109",
                            "style": {
                              "base": {
                                "display": "flex",
                                "row-gap": "10px",
                                "column-gap": "10px",
                                "font-size": "16px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-107",
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
                                "key": "text-108",
                                "text": "Syncs to your books"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "a",
                        "key": "a-111",
                        "style": {
                          "base": {
                            "font-weight": "500",
                            "text-decoration": "none",
                            "color": "#2D4BF0"
                          }
                        },
                        "href": "#",
                        "text": "Learn more about Invoicing →"
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
                    "width": "100%",
                    "display": "none",
                    "flex-wrap": "wrap",
                    "row-gap": "20px",
                    "column-gap": "20px",
                    "align-items": "stretch"
                  }
                },
                "attrs": {
                  "role": "tabpanel",
                  "data-blok-panel": "",
                  "data-display": "flex"
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-136",
                    "style": {
                      "base": {
                        "flex-grow": "999",
                        "flex-shrink": "1",
                        "flex-basis": "560px",
                        "min-width": "0",
                        "min-height": "380px",
                        "border-top-left-radius": "22px",
                        "border-top-right-radius": "22px",
                        "border-bottom-right-radius": "22px",
                        "border-bottom-left-radius": "22px",
                        "padding-top": "clamp(20px, 3vw, 32px)",
                        "padding-right": "clamp(20px, 3vw, 32px)",
                        "padding-bottom": "clamp(20px, 3vw, 32px)",
                        "padding-left": "clamp(20px, 3vw, 32px)",
                        "background-color": "#F1E9FB",
                        "display": "flex",
                        "align-items": "flex-end"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-135",
                        "style": {
                          "base": {
                            "width": "100%",
                            "padding-top": "18px",
                            "padding-right": "18px",
                            "padding-bottom": "18px",
                            "padding-left": "18px",
                            "border-top-left-radius": "16px",
                            "border-top-right-radius": "16px",
                            "border-bottom-right-radius": "16px",
                            "border-bottom-left-radius": "16px",
                            "background-color": "#FFFFFF",
                            "box-shadow": "0 20px 40px -28px rgba(15,17,21,0.45)",
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "10px",
                            "column-gap": "10px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-125",
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
                                "key": "div-123",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Dana Ruiz"
                              },
                              {
                                "tag": "div",
                                "key": "div-124",
                                "style": {
                                  "base": {
                                    "font-family": "token(font-saas-mono)",
                                    "font-size": "12px",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "2 min ago"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-128",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "10px",
                                "column-gap": "10px",
                                "padding-top": "10px",
                                "padding-right": "12px",
                                "padding-bottom": "10px",
                                "padding-left": "12px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "background-color": "#F4F5F1",
                                "font-size": "14px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-126",
                                "style": {
                                  "base": {
                                    "width": "8px",
                                    "height": "8px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "background-color": "#6B32A8"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                }
                              },
                              {
                                "tag": "div",
                                "key": "text-127",
                                "text": "Reminder sent"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-131",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "10px",
                                "column-gap": "10px",
                                "padding-top": "10px",
                                "padding-right": "12px",
                                "padding-bottom": "10px",
                                "padding-left": "12px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "background-color": "#F4F5F1",
                                "font-size": "14px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-129",
                                "style": {
                                  "base": {
                                    "width": "8px",
                                    "height": "8px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "background-color": "#6B32A8"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                }
                              },
                              {
                                "tag": "div",
                                "key": "text-130",
                                "text": "Customer replied: “Gate is open”"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-134",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "10px",
                                "column-gap": "10px",
                                "padding-top": "10px",
                                "padding-right": "12px",
                                "padding-bottom": "10px",
                                "padding-left": "12px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "background-color": "#F4F5F1",
                                "font-size": "14px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-132",
                                "style": {
                                  "base": {
                                    "width": "8px",
                                    "height": "8px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "background-color": "#6B32A8"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                }
                              },
                              {
                                "tag": "div",
                                "key": "text-133",
                                "text": "Crew notified"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-150",
                    "style": {
                      "base": {
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "320px",
                        "display": "flex",
                        "flex-direction": "column",
                        "justify-content": "center",
                        "row-gap": "18px",
                        "column-gap": "18px",
                        "padding-top": "8px",
                        "padding-right": "clamp(0px, 2vw, 16px)",
                        "padding-bottom": "8px",
                        "padding-left": "clamp(0px, 2vw, 16px)"
                      }
                    },
                    "children": [
                      {
                        "tag": "h3",
                        "key": "h3-137",
                        "style": {
                          "base": {
                            "margin-top": "0",
                            "margin-right": "0",
                            "margin-bottom": "0",
                            "margin-left": "0",
                            "font-size": "28px",
                            "line-height": "1.1",
                            "letter-spacing": "-0.03em",
                            "font-weight": "600"
                          }
                        },
                        "text": "Customers stay in the loop"
                      },
                      {
                        "tag": "p",
                        "key": "p-138",
                        "style": {
                          "base": {
                            "margin-top": "0",
                            "margin-right": "0",
                            "margin-bottom": "0",
                            "margin-left": "0",
                            "font-size": "17px",
                            "line-height": "1.6",
                            "color": "#4E545D"
                          }
                        },
                        "text": "Reminders, on-the-way texts and replies in one shared inbox."
                      },
                      {
                        "tag": "div",
                        "key": "div-148",
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
                            "column-gap": "10px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-141",
                            "style": {
                              "base": {
                                "display": "flex",
                                "row-gap": "10px",
                                "column-gap": "10px",
                                "font-size": "16px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-139",
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
                                "key": "text-140",
                                "text": "Day-before reminders"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-144",
                            "style": {
                              "base": {
                                "display": "flex",
                                "row-gap": "10px",
                                "column-gap": "10px",
                                "font-size": "16px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-142",
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
                                "key": "text-143",
                                "text": "On-the-way alerts"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-147",
                            "style": {
                              "base": {
                                "display": "flex",
                                "row-gap": "10px",
                                "column-gap": "10px",
                                "font-size": "16px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-145",
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
                                "key": "text-146",
                                "text": "Shared inbox"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "a",
                        "key": "a-149",
                        "style": {
                          "base": {
                            "font-weight": "500",
                            "text-decoration": "none",
                            "color": "#2D4BF0"
                          }
                        },
                        "href": "#",
                        "text": "Learn more about Messaging →"
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
