import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "bento-21",
  "prefix": "bento21",
  "name": "Bento / Live bento",
  "category": "bento",
  "collection": "saas",
  "description": "Bento / Live bento for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "Small tools that add up to a quiet week"
    },
    "subheading": {
      "type": "text",
      "default": "Try them. Every card on this page works."
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-3",
        "div-66"
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
        "key": "div-67",
        "style": {
          "base": {
            "max-width": "1200px",
            "margin-top": "0",
            "margin-right": "auto",
            "margin-bottom": "0",
            "margin-left": "auto",
            "display": "flex",
            "flex-direction": "column",
            "row-gap": "40px",
            "column-gap": "40px"
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
                "row-gap": "20px",
                "column-gap": "20px"
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
                    "max-width": "620px",
                    "font-size": "clamp(34px, 4.4vw, 56px)",
                    "line-height": "1.02",
                    "letter-spacing": "-0.04em",
                    "font-weight": "600"
                  }
                },
                "bind": "heading"
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
                    "max-width": "340px",
                    "font-size": "16px",
                    "line-height": "1.6",
                    "color": "#4E545D"
                  }
                },
                "bind": "subheading"
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-66",
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
                "key": "div-11",
                "style": {
                  "base": {
                    "grid-column-start": "span 1",
                    "min-height": "300px",
                    "padding-top": "26px",
                    "padding-right": "26px",
                    "padding-bottom": "26px",
                    "padding-left": "26px",
                    "border-top-left-radius": "18px",
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                    "border-bottom-left-radius": "18px",
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
                    "border-left-color": "#E2E4DE",
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "18px",
                    "column-gap": "18px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-9",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "align-items": "center",
                        "row-gap": "12px",
                        "column-gap": "12px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-6",
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
                            "key": "div-4",
                            "style": {
                              "base": {
                                "font-size": "19px",
                                "font-weight": "600",
                                "letter-spacing": "-0.015em"
                              }
                            },
                            "text": "Automatic reminders"
                          },
                          {
                            "tag": "div",
                            "key": "div-5",
                            "style": {
                              "base": {
                                "font-size": "14px",
                                "color": "#4E545D"
                              }
                            },
                            "text": "Sent the day before each visit"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-8",
                        "style": {
                          "base": {
                            "flex-shrink": "0",
                            "width": "52px",
                            "height": "30px",
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
                            "position": "relative",
                            "background-color": "#2D4BF0",
                            "display": "inline-flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "line-height": "1",
                            "padding-top": "0px",
                            "padding-right": "0px",
                            "padding-bottom": "0px",
                            "padding-left": "0px"
                          }
                        },
                        "attrs": {
                          "role": "switch",
                          "aria-checked": "true",
                          "aria-label": "Automatic reminders"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-7",
                            "style": {
                              "base": {
                                "position": "absolute",
                                "top": "3px",
                                "left": "25px",
                                "width": "24px",
                                "height": "24px",
                                "border-top-left-radius": "50%",
                                "border-top-right-radius": "50%",
                                "border-bottom-right-radius": "50%",
                                "border-bottom-left-radius": "50%",
                                "background-color": "#FFFFFF",
                                "box-shadow": "0 1px 3px rgba(15,17,21,0.3)"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-10",
                    "style": {
                      "base": {
                        "margin-top": "auto",
                        "align-self": "flex-start",
                        "max-width": "300px",
                        "padding-top": "14px",
                        "padding-right": "16px",
                        "padding-bottom": "14px",
                        "padding-left": "16px",
                        "border-top-left-radius": "16px",
                        "border-top-right-radius": "16px",
                        "border-bottom-right-radius": "16px",
                        "border-bottom-left-radius": "4px",
                        "font-size": "15px",
                        "line-height": "1.45",
                        "background-color": "#FFFFFF",
                        "color": "#0F1115"
                      }
                    },
                    "text": "Hi Dana, your crew arrives tomorrow between 8 and 10am. Reply C to confirm."
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-39",
                "style": {
                  "base": {
                    "min-height": "300px",
                    "padding-top": "26px",
                    "padding-right": "26px",
                    "padding-bottom": "26px",
                    "padding-left": "26px",
                    "border-top-left-radius": "18px",
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                    "border-bottom-left-radius": "18px",
                    "background-color": "#0F1115",
                    "color": "#F4F5F1",
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "18px",
                    "column-gap": "18px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-16",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "align-items": "center",
                        "row-gap": "12px",
                        "column-gap": "12px",
                        "flex-wrap": "wrap"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-12",
                        "style": {
                          "base": {
                            "font-size": "19px",
                            "font-weight": "600",
                            "letter-spacing": "-0.015em"
                          }
                        },
                        "text": "Your week at a glance"
                      },
                      {
                        "tag": "div",
                        "key": "div-15",
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
                            "background-color": "#22262D",
                            "row-gap": "4px",
                            "column-gap": "4px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-13",
                            "style": {
                              "base": {
                                "height": "36px",
                                "padding-top": "0",
                                "padding-right": "14px",
                                "padding-bottom": "0",
                                "padding-left": "14px",
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
                                "background-color": "#F4F5F1",
                                "color": "#0F1115",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center"
                              }
                            },
                            "attrs": {
                              "aria-pressed": "true"
                            },
                            "text": "Week"
                          },
                          {
                            "tag": "div",
                            "key": "div-14",
                            "style": {
                              "base": {
                                "height": "36px",
                                "padding-top": "0",
                                "padding-right": "14px",
                                "padding-bottom": "0",
                                "padding-left": "14px",
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
                                "color": "#C9CDD4",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center"
                              }
                            },
                            "attrs": {
                              "aria-pressed": "false"
                            },
                            "text": "Day"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-38",
                    "style": {
                      "base": {
                        "display": "grid",
                        "grid-template-columns": "repeat(7, minmax(0, 1fr))",
                        "row-gap": "6px",
                        "column-gap": "6px",
                        "margin-top": "auto"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-19",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "6px",
                            "column-gap": "6px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-17",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "11px",
                                "color": "#A7ADB6"
                              }
                            },
                            "text": "Mon"
                          },
                          {
                            "tag": "div",
                            "key": "div-18",
                            "style": {
                              "base": {
                                "height": "75px",
                                "border-top-left-radius": "6px",
                                "border-top-right-radius": "6px",
                                "border-bottom-right-radius": "6px",
                                "border-bottom-left-radius": "6px",
                                "background-color": "#3A3F47"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-22",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "6px",
                            "column-gap": "6px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-20",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "11px",
                                "color": "#A7ADB6"
                              }
                            },
                            "text": "Tue"
                          },
                          {
                            "tag": "div",
                            "key": "div-21",
                            "style": {
                              "base": {
                                "height": "107px",
                                "border-top-left-radius": "6px",
                                "border-top-right-radius": "6px",
                                "border-bottom-right-radius": "6px",
                                "border-bottom-left-radius": "6px",
                                "background-color": "#2D4BF0"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-25",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "6px",
                            "column-gap": "6px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-23",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "11px",
                                "color": "#A7ADB6"
                              }
                            },
                            "text": "Wed"
                          },
                          {
                            "tag": "div",
                            "key": "div-24",
                            "style": {
                              "base": {
                                "height": "60px",
                                "border-top-left-radius": "6px",
                                "border-top-right-radius": "6px",
                                "border-bottom-right-radius": "6px",
                                "border-bottom-left-radius": "6px",
                                "background-color": "#3A3F47"
                              }
                            }
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
                            "row-gap": "6px",
                            "column-gap": "6px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-26",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "11px",
                                "color": "#A7ADB6"
                              }
                            },
                            "text": "Thu"
                          },
                          {
                            "tag": "div",
                            "key": "div-27",
                            "style": {
                              "base": {
                                "height": "117px",
                                "border-top-left-radius": "6px",
                                "border-top-right-radius": "6px",
                                "border-bottom-right-radius": "6px",
                                "border-bottom-left-radius": "6px",
                                "background-color": "#2D4BF0"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-31",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "6px",
                            "column-gap": "6px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-29",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "11px",
                                "color": "#A7ADB6"
                              }
                            },
                            "text": "Fri"
                          },
                          {
                            "tag": "div",
                            "key": "div-30",
                            "style": {
                              "base": {
                                "height": "91px",
                                "border-top-left-radius": "6px",
                                "border-top-right-radius": "6px",
                                "border-bottom-right-radius": "6px",
                                "border-bottom-left-radius": "6px",
                                "background-color": "#3A3F47"
                              }
                            }
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
                            "row-gap": "6px",
                            "column-gap": "6px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-32",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "11px",
                                "color": "#A7ADB6"
                              }
                            },
                            "text": "Sat"
                          },
                          {
                            "tag": "div",
                            "key": "div-33",
                            "style": {
                              "base": {
                                "height": "39px",
                                "border-top-left-radius": "6px",
                                "border-top-right-radius": "6px",
                                "border-bottom-right-radius": "6px",
                                "border-bottom-left-radius": "6px",
                                "background-color": "#3A3F47"
                              }
                            }
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
                            "row-gap": "6px",
                            "column-gap": "6px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-35",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "11px",
                                "color": "#A7ADB6"
                              }
                            },
                            "text": "Sun"
                          },
                          {
                            "tag": "div",
                            "key": "div-36",
                            "style": {
                              "base": {
                                "height": "10px",
                                "border-top-left-radius": "6px",
                                "border-top-right-radius": "6px",
                                "border-bottom-right-radius": "6px",
                                "border-bottom-left-radius": "6px",
                                "background-color": "#3A3F47"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-45",
                "style": {
                  "base": {
                    "min-height": "300px",
                    "padding-top": "26px",
                    "padding-right": "26px",
                    "padding-bottom": "26px",
                    "padding-left": "26px",
                    "border-top-left-radius": "18px",
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                    "border-bottom-left-radius": "18px",
                    "background-color": "#E8ECFE",
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "14px",
                    "column-gap": "14px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-40",
                    "style": {
                      "base": {
                        "font-size": "19px",
                        "font-weight": "600",
                        "letter-spacing": "-0.015em"
                      }
                    },
                    "text": "Payment links"
                  },
                  {
                    "tag": "div",
                    "key": "div-41",
                    "style": {
                      "base": {
                        "font-size": "14px",
                        "color": "#3B4359"
                      }
                    },
                    "text": "Text a link, get paid before the crew leaves."
                  },
                  {
                    "tag": "div",
                    "key": "div-44",
                    "style": {
                      "base": {
                        "margin-top": "auto",
                        "display": "flex",
                        "row-gap": "8px",
                        "column-gap": "8px",
                        "align-items": "center",
                        "padding-top": "8px",
                        "padding-right": "8px",
                        "padding-bottom": "8px",
                        "padding-left": "14px",
                        "border-top-left-radius": "12px",
                        "border-top-right-radius": "12px",
                        "border-bottom-right-radius": "12px",
                        "border-bottom-left-radius": "12px",
                        "background-color": "#FFFFFF",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CBD3FB",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CBD3FB",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CBD3FB",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CBD3FB"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-42",
                        "style": {
                          "base": {
                            "flex-grow": "1",
                            "flex-shrink": "1",
                            "flex-basis": "0%",
                            "min-width": "0",
                            "overflow": "hidden",
                            "text-overflow": "ellipsis",
                            "white-space": "nowrap",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px",
                            "color": "#3B4359"
                          }
                        },
                        "text": "pay.harborline.example/inv-1044"
                      },
                      {
                        "tag": "div",
                        "key": "div-43",
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
                            "border-top-left-radius": "9px",
                            "border-top-right-radius": "9px",
                            "border-bottom-right-radius": "9px",
                            "border-bottom-left-radius": "9px",
                            "cursor": "pointer",
                            "font-weight": "500",
                            "background-color": "#2D4BF0",
                            "color": "#FFFFFF",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center"
                          }
                        },
                        "text": "Copy"
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-65",
                "style": {
                  "base": {
                    "grid-column-start": "1",
                    "grid-column-end": "-1",
                    "padding-top": "26px",
                    "padding-right": "26px",
                    "padding-bottom": "26px",
                    "padding-left": "26px",
                    "border-top-left-radius": "18px",
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                    "border-bottom-left-radius": "18px",
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
                    "border-left-color": "#E2E4DE",
                    "display": "flex",
                    "flex-wrap": "wrap",
                    "align-items": "center",
                    "row-gap": "24px",
                    "column-gap": "24px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-48",
                    "style": {
                      "base": {
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "280px",
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "6px",
                        "column-gap": "6px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-46",
                        "style": {
                          "base": {
                            "font-size": "19px",
                            "font-weight": "600",
                            "letter-spacing": "-0.015em"
                          }
                        },
                        "text": "Job checklists"
                      },
                      {
                        "tag": "div",
                        "key": "div-47",
                        "style": {
                          "base": {
                            "font-size": "14px",
                            "color": "#4E545D"
                          }
                        },
                        "text": "Tick items as the crew does them. Customers see the same list."
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-64",
                    "style": {
                      "base": {
                        "flex-grow": "2",
                        "flex-shrink": "1",
                        "flex-basis": "480px",
                        "display": "flex",
                        "flex-wrap": "wrap",
                        "row-gap": "8px",
                        "column-gap": "8px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-51",
                        "style": {
                          "base": {
                            "display": "flex",
                            "align-items": "center",
                            "row-gap": "8px",
                            "column-gap": "8px",
                            "min-height": "44px",
                            "padding-top": "0",
                            "padding-right": "16px",
                            "padding-bottom": "0",
                            "padding-left": "16px",
                            "border-top-left-radius": "999px",
                            "border-top-right-radius": "999px",
                            "border-bottom-right-radius": "999px",
                            "border-bottom-left-radius": "999px",
                            "cursor": "pointer",
                            "font-size": "14px",
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
                            "color": "#FFFFFF"
                          }
                        },
                        "attrs": {
                          "aria-pressed": "true",
                          "data-blok-choice": ""
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-49",
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "✓"
                          },
                          {
                            "tag": "div",
                            "key": "text-50",
                            "text": "Edge beds"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-54",
                        "style": {
                          "base": {
                            "display": "flex",
                            "align-items": "center",
                            "row-gap": "8px",
                            "column-gap": "8px",
                            "min-height": "44px",
                            "padding-top": "0",
                            "padding-right": "16px",
                            "padding-bottom": "0",
                            "padding-left": "16px",
                            "border-top-left-radius": "999px",
                            "border-top-right-radius": "999px",
                            "border-bottom-right-radius": "999px",
                            "border-bottom-left-radius": "999px",
                            "cursor": "pointer",
                            "font-size": "14px",
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
                            "color": "#FFFFFF"
                          }
                        },
                        "attrs": {
                          "aria-pressed": "true",
                          "data-blok-choice": ""
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-52",
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "✓"
                          },
                          {
                            "tag": "div",
                            "key": "text-53",
                            "text": "Blow walkways"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-57",
                        "style": {
                          "base": {
                            "display": "flex",
                            "align-items": "center",
                            "row-gap": "8px",
                            "column-gap": "8px",
                            "min-height": "44px",
                            "padding-top": "0",
                            "padding-right": "16px",
                            "padding-bottom": "0",
                            "padding-left": "16px",
                            "border-top-left-radius": "999px",
                            "border-top-right-radius": "999px",
                            "border-bottom-right-radius": "999px",
                            "border-bottom-left-radius": "999px",
                            "cursor": "pointer",
                            "font-size": "14px",
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
                            "color": "#0F1115"
                          }
                        },
                        "attrs": {
                          "aria-pressed": "false",
                          "data-blok-choice": ""
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-55",
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "○"
                          },
                          {
                            "tag": "div",
                            "key": "text-56",
                            "text": "Bag clippings"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-60",
                        "style": {
                          "base": {
                            "display": "flex",
                            "align-items": "center",
                            "row-gap": "8px",
                            "column-gap": "8px",
                            "min-height": "44px",
                            "padding-top": "0",
                            "padding-right": "16px",
                            "padding-bottom": "0",
                            "padding-left": "16px",
                            "border-top-left-radius": "999px",
                            "border-top-right-radius": "999px",
                            "border-bottom-right-radius": "999px",
                            "border-bottom-left-radius": "999px",
                            "cursor": "pointer",
                            "font-size": "14px",
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
                            "color": "#0F1115"
                          }
                        },
                        "attrs": {
                          "aria-pressed": "false",
                          "data-blok-choice": ""
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-58",
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "○"
                          },
                          {
                            "tag": "div",
                            "key": "text-59",
                            "text": "Photo before"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-63",
                        "style": {
                          "base": {
                            "display": "flex",
                            "align-items": "center",
                            "row-gap": "8px",
                            "column-gap": "8px",
                            "min-height": "44px",
                            "padding-top": "0",
                            "padding-right": "16px",
                            "padding-bottom": "0",
                            "padding-left": "16px",
                            "border-top-left-radius": "999px",
                            "border-top-right-radius": "999px",
                            "border-bottom-right-radius": "999px",
                            "border-bottom-left-radius": "999px",
                            "cursor": "pointer",
                            "font-size": "14px",
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
                            "color": "#0F1115"
                          }
                        },
                        "attrs": {
                          "aria-pressed": "false",
                          "data-blok-choice": ""
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-61",
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "○"
                          },
                          {
                            "tag": "div",
                            "key": "text-62",
                            "text": "Photo after"
                          }
                        ]
                      }
                    ],
                    "attrs": {
                      "data-blok-choices": "",
                      "data-blok-multi": ""
                    }
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
