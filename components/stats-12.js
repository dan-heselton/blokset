import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "stats-12",
  "prefix": "stats12",
  "name": "Stats / Steppers",
  "category": "stats",
  "collection": "saas",
  "description": "Stats / Steppers for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "Count your admin minutes"
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-28",
        "div-44"
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
        "padding-top": "clamp(56px, 8vw, 96px)",
        "padding-right": "clamp(20px, 4vw, 48px)",
        "padding-bottom": "clamp(56px, 8vw, 96px)",
        "padding-left": "clamp(20px, 4vw, 48px)"
      }
    },
    "children": [
      {
        "tag": "div",
        "key": "div-45",
        "style": {
          "base": {
            "max-width": "1200px",
            "margin-top": "0",
            "margin-right": "auto",
            "margin-bottom": "0",
            "margin-left": "auto",
            "display": "flex",
            "flex-wrap": "wrap",
            "row-gap": "clamp(32px, 5vw, 64px)",
            "column-gap": "clamp(32px, 5vw, 64px)",
            "align-items": "center"
          }
        },
        "children": [
          {
            "tag": "div",
            "key": "div-28",
            "style": {
              "base": {
                "flex-grow": "1",
                "flex-shrink": "1",
                "flex-basis": "420px",
                "display": "flex",
                "flex-direction": "column",
                "row-gap": "22px",
                "column-gap": "22px"
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
                "text": "Time back"
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
                "key": "div-27",
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
                    "key": "div-10",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "space-between",
                        "row-gap": "16px",
                        "column-gap": "16px",
                        "padding-top": "14px",
                        "padding-right": "16px",
                        "padding-bottom": "14px",
                        "padding-left": "16px",
                        "border-top-left-radius": "14px",
                        "border-top-right-radius": "14px",
                        "border-bottom-right-radius": "14px",
                        "border-bottom-left-radius": "14px",
                        "background-color": "#F4F5F1"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-5",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "2px",
                            "column-gap": "2px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-3",
                            "style": {
                              "base": {
                                "font-size": "16px",
                                "font-weight": "500"
                              }
                            },
                            "text": "Jobs per week"
                          },
                          {
                            "tag": "div",
                            "key": "div-4",
                            "style": {
                              "base": {
                                "font-size": "13px",
                                "color": "#5B616B"
                              }
                            },
                            "text": "Across all crews"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-9",
                        "style": {
                          "base": {
                            "display": "flex",
                            "align-items": "center",
                            "row-gap": "6px",
                            "column-gap": "6px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-6",
                            "style": {
                              "base": {
                                "width": "44px",
                                "height": "44px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
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
                                "cursor": "pointer",
                                "font-size": "20px",
                                "display": "flex",
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
                              "aria-label": "Decrease Jobs per week",
                              "data-blok-step-dec": ""
                            },
                            "text": "−"
                          },
                          {
                            "tag": "div",
                            "key": "div-7",
                            "style": {
                              "base": {
                                "min-width": "64px",
                                "text-align": "center",
                                "font-family": "token(font-saas-mono)",
                                "font-size": "20px",
                                "font-weight": "500"
                              }
                            },
                            "attrs": {
                              "aria-live": "polite",
                              "data-blok-step-value": ""
                            },
                            "text": "60"
                          },
                          {
                            "tag": "div",
                            "key": "div-8",
                            "style": {
                              "base": {
                                "width": "44px",
                                "height": "44px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
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
                                "cursor": "pointer",
                                "font-size": "20px",
                                "display": "flex",
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
                              "aria-label": "Increase Jobs per week",
                              "data-blok-step-inc": ""
                            },
                            "text": "+"
                          }
                        ],
                        "attrs": {
                          "data-blok-step": "",
                          "data-min": "10",
                          "data-max": "500",
                          "data-step": "10",
                          "data-kind": "crew"
                        }
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-18",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "space-between",
                        "row-gap": "16px",
                        "column-gap": "16px",
                        "padding-top": "14px",
                        "padding-right": "16px",
                        "padding-bottom": "14px",
                        "padding-left": "16px",
                        "border-top-left-radius": "14px",
                        "border-top-right-radius": "14px",
                        "border-bottom-right-radius": "14px",
                        "border-bottom-left-radius": "14px",
                        "background-color": "#F4F5F1"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-13",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "2px",
                            "column-gap": "2px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-11",
                            "style": {
                              "base": {
                                "font-size": "16px",
                                "font-weight": "500"
                              }
                            },
                            "text": "Admin minutes per job"
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
                            "text": "Booking, texting, invoicing"
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
                            "row-gap": "6px",
                            "column-gap": "6px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-14",
                            "style": {
                              "base": {
                                "width": "44px",
                                "height": "44px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
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
                                "cursor": "pointer",
                                "font-size": "20px",
                                "display": "flex",
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
                              "aria-label": "Decrease Admin minutes per job",
                              "data-blok-step-dec": ""
                            },
                            "text": "−"
                          },
                          {
                            "tag": "div",
                            "key": "div-15",
                            "style": {
                              "base": {
                                "min-width": "64px",
                                "text-align": "center",
                                "font-family": "token(font-saas-mono)",
                                "font-size": "20px",
                                "font-weight": "500"
                              }
                            },
                            "attrs": {
                              "aria-live": "polite",
                              "data-blok-step-value": ""
                            },
                            "text": "8"
                          },
                          {
                            "tag": "div",
                            "key": "div-16",
                            "style": {
                              "base": {
                                "width": "44px",
                                "height": "44px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
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
                                "cursor": "pointer",
                                "font-size": "20px",
                                "display": "flex",
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
                              "aria-label": "Increase Admin minutes per job",
                              "data-blok-step-inc": ""
                            },
                            "text": "+"
                          }
                        ],
                        "attrs": {
                          "data-blok-step": "",
                          "data-min": "1",
                          "data-max": "30",
                          "data-step": "1",
                          "data-kind": "crew"
                        }
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-26",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "space-between",
                        "row-gap": "16px",
                        "column-gap": "16px",
                        "padding-top": "14px",
                        "padding-right": "16px",
                        "padding-bottom": "14px",
                        "padding-left": "16px",
                        "border-top-left-radius": "14px",
                        "border-top-right-radius": "14px",
                        "border-bottom-right-radius": "14px",
                        "border-bottom-left-radius": "14px",
                        "background-color": "#F4F5F1"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-21",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "2px",
                            "column-gap": "2px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-19",
                            "style": {
                              "base": {
                                "font-size": "16px",
                                "font-weight": "500"
                              }
                            },
                            "text": "People in the office"
                          },
                          {
                            "tag": "div",
                            "key": "div-20",
                            "style": {
                              "base": {
                                "font-size": "13px",
                                "color": "#5B616B"
                              }
                            },
                            "text": "Including you"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-25",
                        "style": {
                          "base": {
                            "display": "flex",
                            "align-items": "center",
                            "row-gap": "6px",
                            "column-gap": "6px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-22",
                            "style": {
                              "base": {
                                "width": "44px",
                                "height": "44px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
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
                                "cursor": "pointer",
                                "font-size": "20px",
                                "display": "flex",
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
                              "aria-label": "Decrease People in the office",
                              "data-blok-step-dec": ""
                            },
                            "text": "−"
                          },
                          {
                            "tag": "div",
                            "key": "div-23",
                            "style": {
                              "base": {
                                "min-width": "64px",
                                "text-align": "center",
                                "font-family": "token(font-saas-mono)",
                                "font-size": "20px",
                                "font-weight": "500"
                              }
                            },
                            "attrs": {
                              "aria-live": "polite",
                              "data-blok-step-value": ""
                            },
                            "text": "2"
                          },
                          {
                            "tag": "div",
                            "key": "div-24",
                            "style": {
                              "base": {
                                "width": "44px",
                                "height": "44px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
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
                                "cursor": "pointer",
                                "font-size": "20px",
                                "display": "flex",
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
                              "aria-label": "Increase People in the office",
                              "data-blok-step-inc": ""
                            },
                            "text": "+"
                          }
                        ],
                        "attrs": {
                          "data-blok-step": "",
                          "data-min": "1",
                          "data-max": "10",
                          "data-step": "1",
                          "data-kind": "office"
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
            "key": "div-44",
            "style": {
              "base": {
                "flex-grow": "1",
                "flex-shrink": "1",
                "flex-basis": "420px",
                "padding-top": "clamp(24px, 3vw, 36px)",
                "padding-right": "clamp(24px, 3vw, 36px)",
                "padding-bottom": "clamp(24px, 3vw, 36px)",
                "padding-left": "clamp(24px, 3vw, 36px)",
                "border-top-left-radius": "22px",
                "border-top-right-radius": "22px",
                "border-bottom-right-radius": "22px",
                "border-bottom-left-radius": "22px",
                "background-color": "#E8ECFE",
                "display": "flex",
                "flex-direction": "column",
                "row-gap": "22px",
                "column-gap": "22px"
              }
            },
            "attrs": {
              "role": "status"
            },
            "children": [
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
                        "font-size": "15px",
                        "color": "#4E545D"
                      }
                    },
                    "text": "Hours back each month"
                  },
                  {
                    "tag": "div",
                    "key": "div-30",
                    "style": {
                      "base": {
                        "font-size": "clamp(64px, 8vw, 104px)",
                        "font-weight": "600",
                        "letter-spacing": "-0.05em",
                        "line-height": "0.9",
                        "color": "#2D4BF0"
                      }
                    },
                    "text": "30"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-42",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "12px",
                    "column-gap": "12px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-36",
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
                        "key": "div-34",
                        "style": {
                          "base": {
                            "display": "flex",
                            "justify-content": "space-between",
                            "font-size": "14px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-32",
                            "text": "Today"
                          },
                          {
                            "tag": "div",
                            "key": "div-33",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)"
                              }
                            },
                            "text": "48 h"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-35",
                        "style": {
                          "base": {
                            "height": "14px",
                            "border-top-left-radius": "999px",
                            "border-top-right-radius": "999px",
                            "border-bottom-right-radius": "999px",
                            "border-bottom-left-radius": "999px",
                            "background-color": "#0F1115",
                            "width": "100%"
                          }
                        }
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
                        "row-gap": "6px",
                        "column-gap": "6px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-39",
                        "style": {
                          "base": {
                            "display": "flex",
                            "justify-content": "space-between",
                            "font-size": "14px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-37",
                            "text": "With Harborline"
                          },
                          {
                            "tag": "div",
                            "key": "div-38",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)"
                              }
                            },
                            "text": "17 h"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-40",
                        "style": {
                          "base": {
                            "height": "14px",
                            "border-top-left-radius": "999px",
                            "border-top-right-radius": "999px",
                            "border-bottom-right-radius": "999px",
                            "border-bottom-left-radius": "999px",
                            "background-color": "#2D4BF0",
                            "width": "36%",
                            "min-width": "14px",
                            "transition": "width 240ms ease"
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-43",
                "style": {
                  "base": {
                    "font-size": "13px",
                    "line-height": "1.5",
                    "color": "#4E545D"
                  }
                },
                "text": "Assumes admin drops to [X] min per job and 4.33 weeks a month. Replace with your own data."
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
