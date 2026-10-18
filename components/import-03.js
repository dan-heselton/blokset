import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "import-03",
  "prefix": "import03",
  "name": "Import / Switch timeline",
  "category": "import",
  "collection": "saas",
  "description": "Import / Switch timeline for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "See your switch, day by day"
    },
    "subheading": {
      "type": "text",
      "default": "Timelines are typical, not promised. [Confirm with your onboarding team.]"
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
        "div-42"
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
        "key": "div-44",
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
                "flex-direction": "column",
                "row-gap": "14px",
                "column-gap": "14px",
                "max-width": "700px"
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
                "text": "Switching over"
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
                "row-gap": "24px",
                "column-gap": "24px"
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
                    "row-gap": "8px",
                    "column-gap": "8px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-4",
                    "style": {
                      "base": {
                        "font-size": "14px",
                        "color": "#4E545D"
                      }
                    },
                    "text": "How many customers?"
                  },
                  {
                    "tag": "div",
                    "key": "div-8",
                    "style": {
                      "base": {
                        "display": "flex",
                        "padding-top": "4px",
                        "padding-right": "4px",
                        "padding-bottom": "4px",
                        "padding-left": "4px",
                        "border-top-left-radius": "12px",
                        "border-top-right-radius": "12px",
                        "border-bottom-right-radius": "12px",
                        "border-bottom-left-radius": "12px",
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
                      "role": "radiogroup",
                      "aria-label": "Customer count",
                      "data-blok-choices": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-5",
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
                            "border-top-left-radius": "8px",
                            "border-top-right-radius": "8px",
                            "border-bottom-right-radius": "8px",
                            "border-bottom-left-radius": "8px",
                            "cursor": "pointer",
                            "font-size": "15px",
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
                        "text": "Under 100"
                      },
                      {
                        "tag": "div",
                        "key": "div-6",
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
                            "border-top-left-radius": "8px",
                            "border-top-right-radius": "8px",
                            "border-bottom-right-radius": "8px",
                            "border-bottom-left-radius": "8px",
                            "cursor": "pointer",
                            "font-size": "15px",
                            "background-color": "#0F1115",
                            "color": "#FFFFFF",
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
                        "text": "100–1,000"
                      },
                      {
                        "tag": "div",
                        "key": "div-7",
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
                            "border-top-left-radius": "8px",
                            "border-top-right-radius": "8px",
                            "border-bottom-right-radius": "8px",
                            "border-bottom-left-radius": "8px",
                            "cursor": "pointer",
                            "font-size": "15px",
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
                        "text": "1,000+"
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
                    "flex-direction": "column",
                    "row-gap": "8px",
                    "column-gap": "8px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-10",
                    "style": {
                      "base": {
                        "font-size": "14px",
                        "color": "#4E545D"
                      }
                    },
                    "text": "Who moves the data?"
                  },
                  {
                    "tag": "div",
                    "key": "div-13",
                    "style": {
                      "base": {
                        "display": "flex",
                        "padding-top": "4px",
                        "padding-right": "4px",
                        "padding-bottom": "4px",
                        "padding-left": "4px",
                        "border-top-left-radius": "12px",
                        "border-top-right-radius": "12px",
                        "border-bottom-right-radius": "12px",
                        "border-bottom-left-radius": "12px",
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
                      "role": "radiogroup",
                      "aria-label": "Who moves the data",
                      "data-blok-choices": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-11",
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
                            "border-top-left-radius": "8px",
                            "border-top-right-radius": "8px",
                            "border-bottom-right-radius": "8px",
                            "border-bottom-left-radius": "8px",
                            "cursor": "pointer",
                            "font-size": "15px",
                            "background-color": "#0F1115",
                            "color": "#FFFFFF",
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
                        "text": "We do it"
                      },
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
                            "border-top-left-radius": "8px",
                            "border-top-right-radius": "8px",
                            "border-bottom-right-radius": "8px",
                            "border-bottom-left-radius": "8px",
                            "cursor": "pointer",
                            "font-size": "15px",
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
                        "text": "I’ll do it"
                      }
                    ]
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
                "position": "relative",
                "padding-top": "8px"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-16",
                "style": {
                  "base": {
                    "position": "absolute",
                    "left": "0",
                    "right": "0",
                    "top": "28px",
                    "height": "2px",
                    "background-color": "#DDE0D8"
                  }
                },
                "attrs": {
                  "aria-hidden": "true"
                }
              },
              {
                "tag": "div",
                "key": "div-41",
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
                    "position": "relative",
                    "display": "grid",
                    "grid-template-columns": "repeat(4, minmax(0, 1fr))",
                    "row-gap": "14px",
                    "column-gap": "14px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-22",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "14px",
                        "column-gap": "14px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-17",
                        "style": {
                          "base": {
                            "align-self": "flex-start",
                            "height": "40px",
                            "padding-top": "0",
                            "padding-right": "14px",
                            "padding-bottom": "0",
                            "padding-left": "14px",
                            "border-top-left-radius": "999px",
                            "border-top-right-radius": "999px",
                            "border-bottom-right-radius": "999px",
                            "border-bottom-left-radius": "999px",
                            "display": "flex",
                            "align-items": "center",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px",
                            "background-color": "#0F1115",
                            "color": "#FFFFFF"
                          }
                        },
                        "text": "Day 1"
                      },
                      {
                        "tag": "div",
                        "key": "div-21",
                        "style": {
                          "base": {
                            "flex-grow": "1",
                            "flex-shrink": "1",
                            "flex-basis": "0%",
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "10px",
                            "column-gap": "10px",
                            "padding-top": "18px",
                            "padding-right": "18px",
                            "padding-bottom": "18px",
                            "padding-left": "18px",
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
                            "border-left-color": "#DDE0D8"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-18",
                            "style": {
                              "base": {
                                "align-self": "flex-start",
                                "padding-top": "3px",
                                "padding-right": "10px",
                                "padding-bottom": "3px",
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
                            "text": "You"
                          },
                          {
                            "tag": "div",
                            "key": "div-19",
                            "style": {
                              "base": {
                                "font-size": "17px",
                                "font-weight": "600"
                              }
                            },
                            "text": "Send your export"
                          },
                          {
                            "tag": "div",
                            "key": "div-20",
                            "style": {
                              "base": {
                                "font-size": "14px",
                                "line-height": "1.5",
                                "color": "#4E545D"
                              }
                            },
                            "text": "Email us a file or give read access to your old tool."
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
                        "display": "flex",
                        "flex-direction": "column",
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
                            "align-self": "flex-start",
                            "height": "40px",
                            "padding-top": "0",
                            "padding-right": "14px",
                            "padding-bottom": "0",
                            "padding-left": "14px",
                            "border-top-left-radius": "999px",
                            "border-top-right-radius": "999px",
                            "border-bottom-right-radius": "999px",
                            "border-bottom-left-radius": "999px",
                            "display": "flex",
                            "align-items": "center",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px",
                            "background-color": "#0F1115",
                            "color": "#FFFFFF"
                          }
                        },
                        "text": "Day 2"
                      },
                      {
                        "tag": "div",
                        "key": "div-27",
                        "style": {
                          "base": {
                            "flex-grow": "1",
                            "flex-shrink": "1",
                            "flex-basis": "0%",
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "10px",
                            "column-gap": "10px",
                            "padding-top": "18px",
                            "padding-right": "18px",
                            "padding-bottom": "18px",
                            "padding-left": "18px",
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
                            "border-left-color": "#DDE0D8"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-24",
                            "style": {
                              "base": {
                                "align-self": "flex-start",
                                "padding-top": "3px",
                                "padding-right": "10px",
                                "padding-bottom": "3px",
                                "padding-left": "10px",
                                "border-top-left-radius": "999px",
                                "border-top-right-radius": "999px",
                                "border-bottom-right-radius": "999px",
                                "border-bottom-left-radius": "999px",
                                "font-size": "12px",
                                "font-weight": "500",
                                "background-color": "#E8ECFE",
                                "color": "#2D4BF0"
                              }
                            },
                            "text": "Us"
                          },
                          {
                            "tag": "div",
                            "key": "div-25",
                            "style": {
                              "base": {
                                "font-size": "17px",
                                "font-weight": "600"
                              }
                            },
                            "text": "We import and check"
                          },
                          {
                            "tag": "div",
                            "key": "div-26",
                            "style": {
                              "base": {
                                "font-size": "14px",
                                "line-height": "1.5",
                                "color": "#4E545D"
                              }
                            },
                            "text": "Customers, recurring jobs and open invoices come across."
                          }
                        ]
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
                        "row-gap": "14px",
                        "column-gap": "14px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-29",
                        "style": {
                          "base": {
                            "align-self": "flex-start",
                            "height": "40px",
                            "padding-top": "0",
                            "padding-right": "14px",
                            "padding-bottom": "0",
                            "padding-left": "14px",
                            "border-top-left-radius": "999px",
                            "border-top-right-radius": "999px",
                            "border-bottom-right-radius": "999px",
                            "border-bottom-left-radius": "999px",
                            "display": "flex",
                            "align-items": "center",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px",
                            "background-color": "#0F1115",
                            "color": "#FFFFFF"
                          }
                        },
                        "text": "Day 4"
                      },
                      {
                        "tag": "div",
                        "key": "div-33",
                        "style": {
                          "base": {
                            "flex-grow": "1",
                            "flex-shrink": "1",
                            "flex-basis": "0%",
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "10px",
                            "column-gap": "10px",
                            "padding-top": "18px",
                            "padding-right": "18px",
                            "padding-bottom": "18px",
                            "padding-left": "18px",
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
                            "border-left-color": "#DDE0D8"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-30",
                            "style": {
                              "base": {
                                "align-self": "flex-start",
                                "padding-top": "3px",
                                "padding-right": "10px",
                                "padding-bottom": "3px",
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
                            "text": "Together"
                          },
                          {
                            "tag": "div",
                            "key": "div-31",
                            "style": {
                              "base": {
                                "font-size": "17px",
                                "font-weight": "600"
                              }
                            },
                            "text": "Review call"
                          },
                          {
                            "tag": "div",
                            "key": "div-32",
                            "style": {
                              "base": {
                                "font-size": "14px",
                                "line-height": "1.5",
                                "color": "#4E545D"
                              }
                            },
                            "text": "A short walkthrough of your data and settings."
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-40",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "14px",
                        "column-gap": "14px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-35",
                        "style": {
                          "base": {
                            "align-self": "flex-start",
                            "height": "40px",
                            "padding-top": "0",
                            "padding-right": "14px",
                            "padding-bottom": "0",
                            "padding-left": "14px",
                            "border-top-left-radius": "999px",
                            "border-top-right-radius": "999px",
                            "border-bottom-right-radius": "999px",
                            "border-bottom-left-radius": "999px",
                            "display": "flex",
                            "align-items": "center",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px",
                            "background-color": "#0F1115",
                            "color": "#FFFFFF"
                          }
                        },
                        "text": "Day 5"
                      },
                      {
                        "tag": "div",
                        "key": "div-39",
                        "style": {
                          "base": {
                            "flex-grow": "1",
                            "flex-shrink": "1",
                            "flex-basis": "0%",
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "10px",
                            "column-gap": "10px",
                            "padding-top": "18px",
                            "padding-right": "18px",
                            "padding-bottom": "18px",
                            "padding-left": "18px",
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
                            "border-left-color": "#DDE0D8"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-36",
                            "style": {
                              "base": {
                                "align-self": "flex-start",
                                "padding-top": "3px",
                                "padding-right": "10px",
                                "padding-bottom": "3px",
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
                            "text": "You"
                          },
                          {
                            "tag": "div",
                            "key": "div-37",
                            "style": {
                              "base": {
                                "font-size": "17px",
                                "font-weight": "600"
                              }
                            },
                            "text": "Go live"
                          },
                          {
                            "tag": "div",
                            "key": "div-38",
                            "style": {
                              "base": {
                                "font-size": "14px",
                                "line-height": "1.5",
                                "color": "#4E545D"
                              }
                            },
                            "text": "Crews get their app invite. The old tool can retire."
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
