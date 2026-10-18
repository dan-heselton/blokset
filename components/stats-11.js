import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "stats-11",
  "prefix": "stats11",
  "name": "Stats / Time calculator",
  "category": "stats",
  "collection": "saas",
  "description": "Stats / Time calculator for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "What does paperwork cost you?"
    },
    "subheading": {
      "type": "text",
      "default": "Your numbers, not ours. Based on 4.33 weeks per month. How much of this Harborline removes depends on your workflow, so we don’t guess."
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-24",
        "div-33"
      ]
    }
  },
  "tree": {
    "role": "section",
    "style": {
      "base": {
        "font-family": "token(font-saas)",
        "color": "#F4F5F1",
        "background-color": "#0F1115",
        "padding-top": "clamp(56px, 8vw, 104px)",
        "padding-right": "clamp(20px, 4vw, 48px)",
        "padding-bottom": "clamp(56px, 8vw, 104px)",
        "padding-left": "clamp(20px, 4vw, 48px)"
      }
    },
    "children": [
      {
        "tag": "div",
        "key": "div-34",
        "style": {
          "base": {
            "max-width": "1200px",
            "margin-top": "0",
            "margin-right": "auto",
            "margin-bottom": "0",
            "margin-left": "auto",
            "display": "flex",
            "flex-wrap": "wrap",
            "row-gap": "48px",
            "column-gap": "48px",
            "align-items": "stretch"
          }
        },
        "children": [
          {
            "tag": "div",
            "key": "div-24",
            "style": {
              "base": {
                "flex-grow": "1",
                "flex-shrink": "1",
                "flex-basis": "400px",
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
                        "color": "#A7ADB6"
                      }
                    },
                    "text": "Do the math"
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
                "key": "div-11",
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
                        "text": "Jobs per week"
                      },
                      {
                        "tag": "div",
                        "key": "div-5",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "color": "#FFFFFF"
                          }
                        },
                        "text": "40"
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
                      "aria-valuemin": "5",
                      "aria-valuemax": "200",
                      "aria-valuenow": "40",
                      "data-min": "5",
                      "data-max": "200",
                      "data-value": "40"
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
                                "width": "18%",
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
                            "left": "18%",
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
                "key": "div-20",
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
                    "key": "div-14",
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
                        "key": "div-12",
                        "text": "Admin minutes per job"
                      },
                      {
                        "tag": "div",
                        "key": "div-13",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "color": "#FFFFFF"
                          }
                        },
                        "text": "12"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "range-15",
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
                      "aria-valuemin": "2",
                      "aria-valuemax": "40",
                      "aria-valuenow": "12",
                      "data-min": "2",
                      "data-max": "40",
                      "data-value": "12"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "track-16",
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
                            "key": "fill-17",
                            "style": {
                              "base": {
                                "width": "26%",
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
                        "key": "thumb-18",
                        "style": {
                          "base": {
                            "position": "absolute",
                            "left": "26%",
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
                    "key": "div-19",
                    "style": {
                      "base": {
                        "font-size": "13px",
                        "color": "#A7ADB6"
                      }
                    },
                    "text": "Confirming, texting addresses, writing invoices, chasing payment."
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-23",
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
                    "key": "div-21",
                    "style": {
                      "base": {
                        "font-size": "15px"
                      }
                    },
                    "text": "Your hourly cost ($)"
                  },
                  {
                    "tag": "div",
                    "key": "div-22",
                    "style": {
                      "base": {
                        "height": "48px",
                        "padding-top": "0",
                        "padding-right": "14px",
                        "padding-bottom": "0",
                        "padding-left": "14px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
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
                        "border-left-color": "#3A3F47",
                        "background-color": "#181B20",
                        "color": "#FFFFFF",
                        "font-size": "17px",
                        "max-width": "200px"
                      }
                    },
                    "text": "45"
                  }
                ]
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-33",
            "style": {
              "base": {
                "flex-grow": "1",
                "flex-shrink": "1",
                "flex-basis": "400px",
                "display": "flex",
                "flex-direction": "column",
                "justify-content": "space-between",
                "row-gap": "28px",
                "column-gap": "28px",
                "padding-top": "clamp(24px, 3vw, 40px)",
                "padding-right": "clamp(24px, 3vw, 40px)",
                "padding-bottom": "clamp(24px, 3vw, 40px)",
                "padding-left": "clamp(24px, 3vw, 40px)",
                "border-top-left-radius": "20px",
                "border-top-right-radius": "20px",
                "border-bottom-right-radius": "20px",
                "border-bottom-left-radius": "20px",
                "background-color": "#F4F5F1",
                "color": "#0F1115"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-27",
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
                    "key": "div-25",
                    "style": {
                      "base": {
                        "font-size": "15px",
                        "color": "#4E545D"
                      }
                    },
                    "text": "Time spent on admin each month"
                  },
                  {
                    "tag": "div",
                    "key": "div-26",
                    "style": {
                      "base": {
                        "font-size": "clamp(56px, 7vw, 96px)",
                        "line-height": "0.95",
                        "letter-spacing": "-0.05em",
                        "font-weight": "600"
                      }
                    },
                    "text": "35 h"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-30",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "6px",
                    "column-gap": "6px",
                    "padding-top": "22px",
                    "border-top-width": "1px",
                    "border-top-style": "solid",
                    "border-top-color": "#DDE0D8"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-28",
                    "style": {
                      "base": {
                        "font-size": "15px",
                        "color": "#4E545D"
                      }
                    },
                    "text": "What that time costs"
                  },
                  {
                    "tag": "div",
                    "key": "div-29",
                    "style": {
                      "base": {
                        "font-size": "clamp(36px, 4vw, 52px)",
                        "line-height": "1",
                        "letter-spacing": "-0.04em",
                        "font-weight": "600",
                        "color": "#2D4BF0"
                      }
                    },
                    "text": "$1,559 / month"
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
                    "font-size": "13px",
                    "line-height": "1.5",
                    "color": "#5B616B"
                  }
                },
                "bind": "subheading"
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
                    "background-color": "#0F1115",
                    "color": "#FFFFFF",
                    "text-decoration": "none",
                    "font-weight": "500"
                  }
                },
                "href": "#",
                "text": "Win those hours back"
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
    default: "dark",
    map: { section: { "background-color": "bg", color: "fg" } },
  }),
};
export default spec;
