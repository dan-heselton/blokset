import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "features-63",
  "prefix": "features63",
  "name": "Features / Switcher",
  "category": "features",
  "collection": "saas",
  "description": "Features / Switcher for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "From booked to paid without retyping a thing"
    },
    "subheading": {
      "type": "text",
      "default": "Customers pick a slot from your booking page, or you add the job in a few taps. Details land in one record."
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-3",
        "stack-181"
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
        "key": "div-45",
        "style": {
          "base": {
            "max-width": "1200px",
            "margin-top": "0",
            "margin-right": "auto",
            "margin-bottom": "0",
            "margin-left": "auto",
            "display": "flex",
            "flex-direction": "column",
            "row-gap": "44px",
            "column-gap": "44px"
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
                "column-gap": "16px",
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
                "text": "How it works"
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
            "key": "stack-181",
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
                "key": "div-44",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-wrap": "wrap",
                    "row-gap": "40px",
                    "column-gap": "40px",
                    "align-items": "stretch"
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
                        "flex-basis": "360px",
                        "display": "flex",
                        "flex-direction": "column",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E2E4DE"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-12",
                        "style": {
                          "base": {
                            "border-bottom-width": "1px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#E2E4DE"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-7",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "16px",
                                "column-gap": "16px",
                                "width": "100%",
                                "min-height": "64px",
                                "padding-top": "0",
                                "padding-right": "0",
                                "padding-bottom": "0",
                                "padding-left": "0",
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
                                "cursor": "pointer",
                                "text-align": "left",
                                "color": "#0F1115"
                              }
                            },
                            "attrs": {
                              "aria-expanded": "true"
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-4",
                                "style": {
                                  "base": {
                                    "font-family": "token(font-saas-mono)",
                                    "font-size": "13px",
                                    "color": "#2D4BF0"
                                  }
                                },
                                "text": "01"
                              },
                              {
                                "tag": "div",
                                "key": "div-5",
                                "style": {
                                  "base": {
                                    "flex-grow": "1",
                                    "flex-shrink": "1",
                                    "flex-basis": "0%",
                                    "font-size": "21px",
                                    "font-weight": "600",
                                    "letter-spacing": "-0.02em"
                                  }
                                },
                                "text": "Book the job"
                              },
                              {
                                "tag": "div",
                                "key": "div-6",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "color": "#5B616B"
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
                            "key": "div-11",
                            "style": {
                              "base": {
                                "padding-top": "0",
                                "padding-right": "0",
                                "padding-bottom": "22px",
                                "padding-left": "38px",
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "14px",
                                "column-gap": "14px"
                              }
                            },
                            "children": [
                              {
                                "tag": "p",
                                "key": "subheading",
                                "style": {
                                  "base": {
                                    "margin-top": "0",
                                    "margin-right": "0",
                                    "margin-bottom": "0",
                                    "margin-left": "0",
                                    "font-size": "16px",
                                    "line-height": "1.6",
                                    "color": "#4E545D"
                                  }
                                },
                                "bind": "subheading"
                              },
                              {
                                "tag": "div",
                                "key": "div-10",
                                "style": {
                                  "base": {
                                    "height": "3px",
                                    "background-color": "#EEF0EA",
                                    "border-top-left-radius": "3px",
                                    "border-top-right-radius": "3px",
                                    "border-bottom-right-radius": "3px",
                                    "border-bottom-left-radius": "3px",
                                    "overflow": "hidden"
                                  }
                                },
                                "children": [
                                  {
                                    "tag": "div",
                                    "key": "div-9",
                                    "style": {
                                      "base": {
                                        "height": "3px",
                                        "width": "25%",
                                        "background-color": "#2D4BF0"
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
                        "key": "div-17",
                        "style": {
                          "base": {
                            "border-bottom-width": "1px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#E2E4DE"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-16",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "16px",
                                "column-gap": "16px",
                                "width": "100%",
                                "min-height": "64px",
                                "padding-top": "0",
                                "padding-right": "0",
                                "padding-bottom": "0",
                                "padding-left": "0",
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
                                "cursor": "pointer",
                                "text-align": "left",
                                "color": "#4E545D"
                              }
                            },
                            "attrs": {
                              "aria-expanded": "false"
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-13",
                                "style": {
                                  "base": {
                                    "font-family": "token(font-saas-mono)",
                                    "font-size": "13px",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "02"
                              },
                              {
                                "tag": "div",
                                "key": "div-14",
                                "style": {
                                  "base": {
                                    "flex-grow": "1",
                                    "flex-shrink": "1",
                                    "flex-basis": "0%",
                                    "font-size": "21px",
                                    "font-weight": "600",
                                    "letter-spacing": "-0.02em"
                                  }
                                },
                                "text": "Send the crew"
                              },
                              {
                                "tag": "div",
                                "key": "div-15",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "color": "#5B616B"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-22",
                        "style": {
                          "base": {
                            "border-bottom-width": "1px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#E2E4DE"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-21",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "16px",
                                "column-gap": "16px",
                                "width": "100%",
                                "min-height": "64px",
                                "padding-top": "0",
                                "padding-right": "0",
                                "padding-bottom": "0",
                                "padding-left": "0",
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
                                "cursor": "pointer",
                                "text-align": "left",
                                "color": "#4E545D"
                              }
                            },
                            "attrs": {
                              "aria-expanded": "false"
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-18",
                                "style": {
                                  "base": {
                                    "font-family": "token(font-saas-mono)",
                                    "font-size": "13px",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "03"
                              },
                              {
                                "tag": "div",
                                "key": "div-19",
                                "style": {
                                  "base": {
                                    "flex-grow": "1",
                                    "flex-shrink": "1",
                                    "flex-basis": "0%",
                                    "font-size": "21px",
                                    "font-weight": "600",
                                    "letter-spacing": "-0.02em"
                                  }
                                },
                                "text": "Prove the work"
                              },
                              {
                                "tag": "div",
                                "key": "div-20",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "color": "#5B616B"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-27",
                        "style": {
                          "base": {
                            "border-bottom-width": "1px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#E2E4DE"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-26",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "16px",
                                "column-gap": "16px",
                                "width": "100%",
                                "min-height": "64px",
                                "padding-top": "0",
                                "padding-right": "0",
                                "padding-bottom": "0",
                                "padding-left": "0",
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
                                "cursor": "pointer",
                                "text-align": "left",
                                "color": "#4E545D"
                              }
                            },
                            "attrs": {
                              "aria-expanded": "false"
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-23",
                                "style": {
                                  "base": {
                                    "font-family": "token(font-saas-mono)",
                                    "font-size": "13px",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "04"
                              },
                              {
                                "tag": "div",
                                "key": "div-24",
                                "style": {
                                  "base": {
                                    "flex-grow": "1",
                                    "flex-shrink": "1",
                                    "flex-basis": "0%",
                                    "font-size": "21px",
                                    "font-weight": "600",
                                    "letter-spacing": "-0.02em"
                                  }
                                },
                                "text": "Get paid"
                              },
                              {
                                "tag": "div",
                                "key": "div-25",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "color": "#5B616B"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
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
                        "flex-grow": "1.2",
                        "flex-shrink": "1",
                        "flex-basis": "440px",
                        "min-width": "0",
                        "min-height": "420px",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
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
                        "padding-top": "clamp(20px, 3vw, 36px)",
                        "padding-right": "clamp(20px, 3vw, 36px)",
                        "padding-bottom": "clamp(20px, 3vw, 36px)",
                        "padding-left": "clamp(20px, 3vw, 36px)",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-42",
                        "style": {
                          "base": {
                            "width": "100%",
                            "max-width": "440px",
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
                            "border-top-left-radius": "16px",
                            "border-top-right-radius": "16px",
                            "border-bottom-right-radius": "16px",
                            "border-bottom-left-radius": "16px",
                            "box-shadow": "0 24px 48px -24px rgba(15,17,21,0.22)",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
                            "padding-left": "22px",
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "16px",
                            "column-gap": "16px"
                          }
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
                                "row-gap": "12px",
                                "column-gap": "12px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-29",
                                "style": {
                                  "base": {
                                    "font-weight": "600"
                                  }
                                },
                                "text": "New job"
                              },
                              {
                                "tag": "div",
                                "key": "div-30",
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
                                    "background-color": "#E8ECFE",
                                    "color": "#2D4BF0"
                                  }
                                },
                                "text": "Booked"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-34",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "row-gap": "16px",
                                "column-gap": "16px",
                                "padding-top": "12px",
                                "padding-right": "14px",
                                "padding-bottom": "12px",
                                "padding-left": "14px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "background-color": "#FAFBF8",
                                "font-size": "14px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-32",
                                "style": {
                                  "base": {
                                    "color": "#4E545D"
                                  }
                                },
                                "text": "Customer"
                              },
                              {
                                "tag": "div",
                                "key": "div-33",
                                "style": {
                                  "base": {
                                    "font-weight": "500"
                                  }
                                },
                                "text": "Okafor family"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-37",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "row-gap": "16px",
                                "column-gap": "16px",
                                "padding-top": "12px",
                                "padding-right": "14px",
                                "padding-bottom": "12px",
                                "padding-left": "14px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "background-color": "#FAFBF8",
                                "font-size": "14px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-35",
                                "style": {
                                  "base": {
                                    "color": "#4E545D"
                                  }
                                },
                                "text": "Service"
                              },
                              {
                                "tag": "div",
                                "key": "div-36",
                                "style": {
                                  "base": {
                                    "font-weight": "500"
                                  }
                                },
                                "text": "Spring planting"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-40",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "row-gap": "16px",
                                "column-gap": "16px",
                                "padding-top": "12px",
                                "padding-right": "14px",
                                "padding-bottom": "12px",
                                "padding-left": "14px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "background-color": "#FAFBF8",
                                "font-size": "14px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-38",
                                "style": {
                                  "base": {
                                    "color": "#4E545D"
                                  }
                                },
                                "text": "Window"
                              },
                              {
                                "tag": "div",
                                "key": "div-39",
                                "style": {
                                  "base": {
                                    "font-weight": "500"
                                  }
                                },
                                "text": "Thu, 9–11am"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-41",
                            "style": {
                              "base": {
                                "height": "44px",
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
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "background-color": "#0F1115",
                                "color": "#FFFFFF",
                                "font-weight": "500",
                                "cursor": "pointer",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center"
                              }
                            },
                            "text": "Assign a crew"
                          }
                        ]
                      }
                    ]
                  }
                ],
                "attrs": {
                  "data-blok-panel": "",
                  "data-display": "flex"
                }
              },
              {
                "tag": "div",
                "key": "div-89",
                "style": {
                  "base": {
                    "display": "none",
                    "flex-wrap": "wrap",
                    "row-gap": "40px",
                    "column-gap": "40px",
                    "align-items": "stretch"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-73",
                    "style": {
                      "base": {
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "360px",
                        "display": "flex",
                        "flex-direction": "column",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E2E4DE"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-53",
                        "style": {
                          "base": {
                            "border-bottom-width": "1px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#E2E4DE"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-52",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "16px",
                                "column-gap": "16px",
                                "width": "100%",
                                "min-height": "64px",
                                "padding-top": "0",
                                "padding-right": "0",
                                "padding-bottom": "0",
                                "padding-left": "0",
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
                                "cursor": "pointer",
                                "text-align": "left",
                                "color": "#4E545D"
                              }
                            },
                            "attrs": {
                              "aria-expanded": "false"
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-49",
                                "style": {
                                  "base": {
                                    "font-family": "token(font-saas-mono)",
                                    "font-size": "13px",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "01"
                              },
                              {
                                "tag": "div",
                                "key": "div-50",
                                "style": {
                                  "base": {
                                    "flex-grow": "1",
                                    "flex-shrink": "1",
                                    "flex-basis": "0%",
                                    "font-size": "21px",
                                    "font-weight": "600",
                                    "letter-spacing": "-0.02em"
                                  }
                                },
                                "text": "Book the job"
                              },
                              {
                                "tag": "div",
                                "key": "div-51",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "color": "#5B616B"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-62",
                        "style": {
                          "base": {
                            "border-bottom-width": "1px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#E2E4DE"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-57",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "16px",
                                "column-gap": "16px",
                                "width": "100%",
                                "min-height": "64px",
                                "padding-top": "0",
                                "padding-right": "0",
                                "padding-bottom": "0",
                                "padding-left": "0",
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
                                "cursor": "pointer",
                                "text-align": "left",
                                "color": "#0F1115"
                              }
                            },
                            "attrs": {
                              "aria-expanded": "true"
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-54",
                                "style": {
                                  "base": {
                                    "font-family": "token(font-saas-mono)",
                                    "font-size": "13px",
                                    "color": "#2D4BF0"
                                  }
                                },
                                "text": "02"
                              },
                              {
                                "tag": "div",
                                "key": "div-55",
                                "style": {
                                  "base": {
                                    "flex-grow": "1",
                                    "flex-shrink": "1",
                                    "flex-basis": "0%",
                                    "font-size": "21px",
                                    "font-weight": "600",
                                    "letter-spacing": "-0.02em"
                                  }
                                },
                                "text": "Send the crew"
                              },
                              {
                                "tag": "div",
                                "key": "div-56",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "color": "#5B616B"
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
                            "key": "div-61",
                            "style": {
                              "base": {
                                "padding-top": "0",
                                "padding-right": "0",
                                "padding-bottom": "22px",
                                "padding-left": "38px",
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "14px",
                                "column-gap": "14px"
                              }
                            },
                            "children": [
                              {
                                "tag": "p",
                                "key": "p-58",
                                "style": {
                                  "base": {
                                    "margin-top": "0",
                                    "margin-right": "0",
                                    "margin-bottom": "0",
                                    "margin-left": "0",
                                    "font-size": "16px",
                                    "line-height": "1.6",
                                    "color": "#4E545D"
                                  }
                                },
                                "text": "The day plan goes to every phone with addresses in driving order, gate codes and notes from the last visit."
                              },
                              {
                                "tag": "div",
                                "key": "div-60",
                                "style": {
                                  "base": {
                                    "height": "3px",
                                    "background-color": "#EEF0EA",
                                    "border-top-left-radius": "3px",
                                    "border-top-right-radius": "3px",
                                    "border-bottom-right-radius": "3px",
                                    "border-bottom-left-radius": "3px",
                                    "overflow": "hidden"
                                  }
                                },
                                "children": [
                                  {
                                    "tag": "div",
                                    "key": "div-59",
                                    "style": {
                                      "base": {
                                        "height": "3px",
                                        "width": "50%",
                                        "background-color": "#2D4BF0"
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
                        "key": "div-67",
                        "style": {
                          "base": {
                            "border-bottom-width": "1px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#E2E4DE"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-66",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "16px",
                                "column-gap": "16px",
                                "width": "100%",
                                "min-height": "64px",
                                "padding-top": "0",
                                "padding-right": "0",
                                "padding-bottom": "0",
                                "padding-left": "0",
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
                                "cursor": "pointer",
                                "text-align": "left",
                                "color": "#4E545D"
                              }
                            },
                            "attrs": {
                              "aria-expanded": "false"
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-63",
                                "style": {
                                  "base": {
                                    "font-family": "token(font-saas-mono)",
                                    "font-size": "13px",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "03"
                              },
                              {
                                "tag": "div",
                                "key": "div-64",
                                "style": {
                                  "base": {
                                    "flex-grow": "1",
                                    "flex-shrink": "1",
                                    "flex-basis": "0%",
                                    "font-size": "21px",
                                    "font-weight": "600",
                                    "letter-spacing": "-0.02em"
                                  }
                                },
                                "text": "Prove the work"
                              },
                              {
                                "tag": "div",
                                "key": "div-65",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "color": "#5B616B"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-72",
                        "style": {
                          "base": {
                            "border-bottom-width": "1px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#E2E4DE"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-71",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "16px",
                                "column-gap": "16px",
                                "width": "100%",
                                "min-height": "64px",
                                "padding-top": "0",
                                "padding-right": "0",
                                "padding-bottom": "0",
                                "padding-left": "0",
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
                                "cursor": "pointer",
                                "text-align": "left",
                                "color": "#4E545D"
                              }
                            },
                            "attrs": {
                              "aria-expanded": "false"
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-68",
                                "style": {
                                  "base": {
                                    "font-family": "token(font-saas-mono)",
                                    "font-size": "13px",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "04"
                              },
                              {
                                "tag": "div",
                                "key": "div-69",
                                "style": {
                                  "base": {
                                    "flex-grow": "1",
                                    "flex-shrink": "1",
                                    "flex-basis": "0%",
                                    "font-size": "21px",
                                    "font-weight": "600",
                                    "letter-spacing": "-0.02em"
                                  }
                                },
                                "text": "Get paid"
                              },
                              {
                                "tag": "div",
                                "key": "div-70",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "color": "#5B616B"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
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
                        "flex-grow": "1.2",
                        "flex-shrink": "1",
                        "flex-basis": "440px",
                        "min-width": "0",
                        "min-height": "420px",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
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
                        "padding-top": "clamp(20px, 3vw, 36px)",
                        "padding-right": "clamp(20px, 3vw, 36px)",
                        "padding-bottom": "clamp(20px, 3vw, 36px)",
                        "padding-left": "clamp(20px, 3vw, 36px)",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-87",
                        "style": {
                          "base": {
                            "width": "100%",
                            "max-width": "440px",
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
                            "border-top-left-radius": "16px",
                            "border-top-right-radius": "16px",
                            "border-bottom-right-radius": "16px",
                            "border-bottom-left-radius": "16px",
                            "box-shadow": "0 24px 48px -24px rgba(15,17,21,0.22)",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
                            "padding-left": "22px",
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "16px",
                            "column-gap": "16px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-76",
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
                                "key": "div-74",
                                "style": {
                                  "base": {
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Crew A today"
                              },
                              {
                                "tag": "div",
                                "key": "div-75",
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
                                    "background-color": "#E8ECFE",
                                    "color": "#2D4BF0"
                                  }
                                },
                                "text": "4 stops"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-79",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "row-gap": "16px",
                                "column-gap": "16px",
                                "padding-top": "12px",
                                "padding-right": "14px",
                                "padding-bottom": "12px",
                                "padding-left": "14px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "background-color": "#FAFBF8",
                                "font-size": "14px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-77",
                                "style": {
                                  "base": {
                                    "color": "#4E545D"
                                  }
                                },
                                "text": "First stop"
                              },
                              {
                                "tag": "div",
                                "key": "div-78",
                                "style": {
                                  "base": {
                                    "font-weight": "500"
                                  }
                                },
                                "text": "12 Granite Ln"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-82",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "row-gap": "16px",
                                "column-gap": "16px",
                                "padding-top": "12px",
                                "padding-right": "14px",
                                "padding-bottom": "12px",
                                "padding-left": "14px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "background-color": "#FAFBF8",
                                "font-size": "14px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-80",
                                "style": {
                                  "base": {
                                    "color": "#4E545D"
                                  }
                                },
                                "text": "Notes"
                              },
                              {
                                "tag": "div",
                                "key": "div-81",
                                "style": {
                                  "base": {
                                    "font-weight": "500"
                                  }
                                },
                                "text": "Side gate, code on file"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-85",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "row-gap": "16px",
                                "column-gap": "16px",
                                "padding-top": "12px",
                                "padding-right": "14px",
                                "padding-bottom": "12px",
                                "padding-left": "14px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "background-color": "#FAFBF8",
                                "font-size": "14px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-83",
                                "style": {
                                  "base": {
                                    "color": "#4E545D"
                                  }
                                },
                                "text": "Last visit"
                              },
                              {
                                "tag": "div",
                                "key": "div-84",
                                "style": {
                                  "base": {
                                    "font-weight": "500"
                                  }
                                },
                                "text": "Edged the beds"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-86",
                            "style": {
                              "base": {
                                "height": "44px",
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
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "background-color": "#0F1115",
                                "color": "#FFFFFF",
                                "font-weight": "500",
                                "cursor": "pointer",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center"
                              }
                            },
                            "text": "Start route"
                          }
                        ]
                      }
                    ]
                  }
                ],
                "attrs": {
                  "data-blok-panel": "",
                  "data-display": "flex"
                }
              },
              {
                "tag": "div",
                "key": "div-134",
                "style": {
                  "base": {
                    "display": "none",
                    "flex-wrap": "wrap",
                    "row-gap": "40px",
                    "column-gap": "40px",
                    "align-items": "stretch"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-118",
                    "style": {
                      "base": {
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "360px",
                        "display": "flex",
                        "flex-direction": "column",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E2E4DE"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-98",
                        "style": {
                          "base": {
                            "border-bottom-width": "1px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#E2E4DE"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-97",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "16px",
                                "column-gap": "16px",
                                "width": "100%",
                                "min-height": "64px",
                                "padding-top": "0",
                                "padding-right": "0",
                                "padding-bottom": "0",
                                "padding-left": "0",
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
                                "cursor": "pointer",
                                "text-align": "left",
                                "color": "#4E545D"
                              }
                            },
                            "attrs": {
                              "aria-expanded": "false"
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-94",
                                "style": {
                                  "base": {
                                    "font-family": "token(font-saas-mono)",
                                    "font-size": "13px",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "01"
                              },
                              {
                                "tag": "div",
                                "key": "div-95",
                                "style": {
                                  "base": {
                                    "flex-grow": "1",
                                    "flex-shrink": "1",
                                    "flex-basis": "0%",
                                    "font-size": "21px",
                                    "font-weight": "600",
                                    "letter-spacing": "-0.02em"
                                  }
                                },
                                "text": "Book the job"
                              },
                              {
                                "tag": "div",
                                "key": "div-96",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "color": "#5B616B"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-103",
                        "style": {
                          "base": {
                            "border-bottom-width": "1px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#E2E4DE"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-102",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "16px",
                                "column-gap": "16px",
                                "width": "100%",
                                "min-height": "64px",
                                "padding-top": "0",
                                "padding-right": "0",
                                "padding-bottom": "0",
                                "padding-left": "0",
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
                                "cursor": "pointer",
                                "text-align": "left",
                                "color": "#4E545D"
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
                                    "font-family": "token(font-saas-mono)",
                                    "font-size": "13px",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "02"
                              },
                              {
                                "tag": "div",
                                "key": "div-100",
                                "style": {
                                  "base": {
                                    "flex-grow": "1",
                                    "flex-shrink": "1",
                                    "flex-basis": "0%",
                                    "font-size": "21px",
                                    "font-weight": "600",
                                    "letter-spacing": "-0.02em"
                                  }
                                },
                                "text": "Send the crew"
                              },
                              {
                                "tag": "div",
                                "key": "div-101",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "color": "#5B616B"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
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
                            "border-bottom-width": "1px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#E2E4DE"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-107",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "16px",
                                "column-gap": "16px",
                                "width": "100%",
                                "min-height": "64px",
                                "padding-top": "0",
                                "padding-right": "0",
                                "padding-bottom": "0",
                                "padding-left": "0",
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
                                "cursor": "pointer",
                                "text-align": "left",
                                "color": "#0F1115"
                              }
                            },
                            "attrs": {
                              "aria-expanded": "true"
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-104",
                                "style": {
                                  "base": {
                                    "font-family": "token(font-saas-mono)",
                                    "font-size": "13px",
                                    "color": "#2D4BF0"
                                  }
                                },
                                "text": "03"
                              },
                              {
                                "tag": "div",
                                "key": "div-105",
                                "style": {
                                  "base": {
                                    "flex-grow": "1",
                                    "flex-shrink": "1",
                                    "flex-basis": "0%",
                                    "font-size": "21px",
                                    "font-weight": "600",
                                    "letter-spacing": "-0.02em"
                                  }
                                },
                                "text": "Prove the work"
                              },
                              {
                                "tag": "div",
                                "key": "div-106",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "color": "#5B616B"
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
                            "key": "div-111",
                            "style": {
                              "base": {
                                "padding-top": "0",
                                "padding-right": "0",
                                "padding-bottom": "22px",
                                "padding-left": "38px",
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "14px",
                                "column-gap": "14px"
                              }
                            },
                            "children": [
                              {
                                "tag": "p",
                                "key": "p-108",
                                "style": {
                                  "base": {
                                    "margin-top": "0",
                                    "margin-right": "0",
                                    "margin-bottom": "0",
                                    "margin-left": "0",
                                    "font-size": "16px",
                                    "line-height": "1.6",
                                    "color": "#4E545D"
                                  }
                                },
                                "text": "Crews snap before and after photos and tick the checklist. Customers get a tidy summary instead of a phone call."
                              },
                              {
                                "tag": "div",
                                "key": "div-110",
                                "style": {
                                  "base": {
                                    "height": "3px",
                                    "background-color": "#EEF0EA",
                                    "border-top-left-radius": "3px",
                                    "border-top-right-radius": "3px",
                                    "border-bottom-right-radius": "3px",
                                    "border-bottom-left-radius": "3px",
                                    "overflow": "hidden"
                                  }
                                },
                                "children": [
                                  {
                                    "tag": "div",
                                    "key": "div-109",
                                    "style": {
                                      "base": {
                                        "height": "3px",
                                        "width": "75%",
                                        "background-color": "#2D4BF0"
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
                        "key": "div-117",
                        "style": {
                          "base": {
                            "border-bottom-width": "1px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#E2E4DE"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-116",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "16px",
                                "column-gap": "16px",
                                "width": "100%",
                                "min-height": "64px",
                                "padding-top": "0",
                                "padding-right": "0",
                                "padding-bottom": "0",
                                "padding-left": "0",
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
                                "cursor": "pointer",
                                "text-align": "left",
                                "color": "#4E545D"
                              }
                            },
                            "attrs": {
                              "aria-expanded": "false"
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-113",
                                "style": {
                                  "base": {
                                    "font-family": "token(font-saas-mono)",
                                    "font-size": "13px",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "04"
                              },
                              {
                                "tag": "div",
                                "key": "div-114",
                                "style": {
                                  "base": {
                                    "flex-grow": "1",
                                    "flex-shrink": "1",
                                    "flex-basis": "0%",
                                    "font-size": "21px",
                                    "font-weight": "600",
                                    "letter-spacing": "-0.02em"
                                  }
                                },
                                "text": "Get paid"
                              },
                              {
                                "tag": "div",
                                "key": "div-115",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "color": "#5B616B"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-133",
                    "style": {
                      "base": {
                        "flex-grow": "1.2",
                        "flex-shrink": "1",
                        "flex-basis": "440px",
                        "min-width": "0",
                        "min-height": "420px",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
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
                        "padding-top": "clamp(20px, 3vw, 36px)",
                        "padding-right": "clamp(20px, 3vw, 36px)",
                        "padding-bottom": "clamp(20px, 3vw, 36px)",
                        "padding-left": "clamp(20px, 3vw, 36px)",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-132",
                        "style": {
                          "base": {
                            "width": "100%",
                            "max-width": "440px",
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
                            "border-top-left-radius": "16px",
                            "border-top-right-radius": "16px",
                            "border-bottom-right-radius": "16px",
                            "border-bottom-left-radius": "16px",
                            "box-shadow": "0 24px 48px -24px rgba(15,17,21,0.22)",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
                            "padding-left": "22px",
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "16px",
                            "column-gap": "16px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-121",
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
                                "key": "div-119",
                                "style": {
                                  "base": {
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Job summary"
                              },
                              {
                                "tag": "div",
                                "key": "div-120",
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
                                    "background-color": "#E8ECFE",
                                    "color": "#2D4BF0"
                                  }
                                },
                                "text": "Complete"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-124",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "row-gap": "16px",
                                "column-gap": "16px",
                                "padding-top": "12px",
                                "padding-right": "14px",
                                "padding-bottom": "12px",
                                "padding-left": "14px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "background-color": "#FAFBF8",
                                "font-size": "14px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-122",
                                "style": {
                                  "base": {
                                    "color": "#4E545D"
                                  }
                                },
                                "text": "Photos"
                              },
                              {
                                "tag": "div",
                                "key": "div-123",
                                "style": {
                                  "base": {
                                    "font-weight": "500"
                                  }
                                },
                                "text": "6 attached"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-127",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "row-gap": "16px",
                                "column-gap": "16px",
                                "padding-top": "12px",
                                "padding-right": "14px",
                                "padding-bottom": "12px",
                                "padding-left": "14px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "background-color": "#FAFBF8",
                                "font-size": "14px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-125",
                                "style": {
                                  "base": {
                                    "color": "#4E545D"
                                  }
                                },
                                "text": "Checklist"
                              },
                              {
                                "tag": "div",
                                "key": "div-126",
                                "style": {
                                  "base": {
                                    "font-weight": "500"
                                  }
                                },
                                "text": "All items done"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-130",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "row-gap": "16px",
                                "column-gap": "16px",
                                "padding-top": "12px",
                                "padding-right": "14px",
                                "padding-bottom": "12px",
                                "padding-left": "14px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "background-color": "#FAFBF8",
                                "font-size": "14px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-128",
                                "style": {
                                  "base": {
                                    "color": "#4E545D"
                                  }
                                },
                                "text": "Time on site"
                              },
                              {
                                "tag": "div",
                                "key": "div-129",
                                "style": {
                                  "base": {
                                    "font-weight": "500"
                                  }
                                },
                                "text": "1 h 40 m"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-131",
                            "style": {
                              "base": {
                                "height": "44px",
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
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "background-color": "#0F1115",
                                "color": "#FFFFFF",
                                "font-weight": "500",
                                "cursor": "pointer",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center"
                              }
                            },
                            "text": "Send to customer"
                          }
                        ]
                      }
                    ]
                  }
                ],
                "attrs": {
                  "data-blok-panel": "",
                  "data-display": "flex"
                }
              },
              {
                "tag": "div",
                "key": "div-179",
                "style": {
                  "base": {
                    "display": "none",
                    "flex-wrap": "wrap",
                    "row-gap": "40px",
                    "column-gap": "40px",
                    "align-items": "stretch"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-163",
                    "style": {
                      "base": {
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "360px",
                        "display": "flex",
                        "flex-direction": "column",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E2E4DE"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-143",
                        "style": {
                          "base": {
                            "border-bottom-width": "1px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#E2E4DE"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-142",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "16px",
                                "column-gap": "16px",
                                "width": "100%",
                                "min-height": "64px",
                                "padding-top": "0",
                                "padding-right": "0",
                                "padding-bottom": "0",
                                "padding-left": "0",
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
                                "cursor": "pointer",
                                "text-align": "left",
                                "color": "#4E545D"
                              }
                            },
                            "attrs": {
                              "aria-expanded": "false"
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-139",
                                "style": {
                                  "base": {
                                    "font-family": "token(font-saas-mono)",
                                    "font-size": "13px",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "01"
                              },
                              {
                                "tag": "div",
                                "key": "div-140",
                                "style": {
                                  "base": {
                                    "flex-grow": "1",
                                    "flex-shrink": "1",
                                    "flex-basis": "0%",
                                    "font-size": "21px",
                                    "font-weight": "600",
                                    "letter-spacing": "-0.02em"
                                  }
                                },
                                "text": "Book the job"
                              },
                              {
                                "tag": "div",
                                "key": "div-141",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "color": "#5B616B"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-148",
                        "style": {
                          "base": {
                            "border-bottom-width": "1px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#E2E4DE"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-147",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "16px",
                                "column-gap": "16px",
                                "width": "100%",
                                "min-height": "64px",
                                "padding-top": "0",
                                "padding-right": "0",
                                "padding-bottom": "0",
                                "padding-left": "0",
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
                                "cursor": "pointer",
                                "text-align": "left",
                                "color": "#4E545D"
                              }
                            },
                            "attrs": {
                              "aria-expanded": "false"
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-144",
                                "style": {
                                  "base": {
                                    "font-family": "token(font-saas-mono)",
                                    "font-size": "13px",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "02"
                              },
                              {
                                "tag": "div",
                                "key": "div-145",
                                "style": {
                                  "base": {
                                    "flex-grow": "1",
                                    "flex-shrink": "1",
                                    "flex-basis": "0%",
                                    "font-size": "21px",
                                    "font-weight": "600",
                                    "letter-spacing": "-0.02em"
                                  }
                                },
                                "text": "Send the crew"
                              },
                              {
                                "tag": "div",
                                "key": "div-146",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "color": "#5B616B"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-153",
                        "style": {
                          "base": {
                            "border-bottom-width": "1px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#E2E4DE"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-152",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "16px",
                                "column-gap": "16px",
                                "width": "100%",
                                "min-height": "64px",
                                "padding-top": "0",
                                "padding-right": "0",
                                "padding-bottom": "0",
                                "padding-left": "0",
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
                                "cursor": "pointer",
                                "text-align": "left",
                                "color": "#4E545D"
                              }
                            },
                            "attrs": {
                              "aria-expanded": "false"
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-149",
                                "style": {
                                  "base": {
                                    "font-family": "token(font-saas-mono)",
                                    "font-size": "13px",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "03"
                              },
                              {
                                "tag": "div",
                                "key": "div-150",
                                "style": {
                                  "base": {
                                    "flex-grow": "1",
                                    "flex-shrink": "1",
                                    "flex-basis": "0%",
                                    "font-size": "21px",
                                    "font-weight": "600",
                                    "letter-spacing": "-0.02em"
                                  }
                                },
                                "text": "Prove the work"
                              },
                              {
                                "tag": "div",
                                "key": "div-151",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "color": "#5B616B"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                },
                                "text": "+"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-162",
                        "style": {
                          "base": {
                            "border-bottom-width": "1px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#E2E4DE"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-157",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "16px",
                                "column-gap": "16px",
                                "width": "100%",
                                "min-height": "64px",
                                "padding-top": "0",
                                "padding-right": "0",
                                "padding-bottom": "0",
                                "padding-left": "0",
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
                                "cursor": "pointer",
                                "text-align": "left",
                                "color": "#0F1115"
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
                                    "font-family": "token(font-saas-mono)",
                                    "font-size": "13px",
                                    "color": "#2D4BF0"
                                  }
                                },
                                "text": "04"
                              },
                              {
                                "tag": "div",
                                "key": "div-155",
                                "style": {
                                  "base": {
                                    "flex-grow": "1",
                                    "flex-shrink": "1",
                                    "flex-basis": "0%",
                                    "font-size": "21px",
                                    "font-weight": "600",
                                    "letter-spacing": "-0.02em"
                                  }
                                },
                                "text": "Get paid"
                              },
                              {
                                "tag": "div",
                                "key": "div-156",
                                "style": {
                                  "base": {
                                    "font-size": "20px",
                                    "color": "#5B616B"
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
                            "key": "div-161",
                            "style": {
                              "base": {
                                "padding-top": "0",
                                "padding-right": "0",
                                "padding-bottom": "22px",
                                "padding-left": "38px",
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "14px",
                                "column-gap": "14px"
                              }
                            },
                            "children": [
                              {
                                "tag": "p",
                                "key": "p-158",
                                "style": {
                                  "base": {
                                    "margin-top": "0",
                                    "margin-right": "0",
                                    "margin-bottom": "0",
                                    "margin-left": "0",
                                    "font-size": "16px",
                                    "line-height": "1.6",
                                    "color": "#4E545D"
                                  }
                                },
                                "text": "Closing the job writes the invoice. Card on file pays it on the due date, and your books update themselves."
                              },
                              {
                                "tag": "div",
                                "key": "div-160",
                                "style": {
                                  "base": {
                                    "height": "3px",
                                    "background-color": "#EEF0EA",
                                    "border-top-left-radius": "3px",
                                    "border-top-right-radius": "3px",
                                    "border-bottom-right-radius": "3px",
                                    "border-bottom-left-radius": "3px",
                                    "overflow": "hidden"
                                  }
                                },
                                "children": [
                                  {
                                    "tag": "div",
                                    "key": "div-159",
                                    "style": {
                                      "base": {
                                        "height": "3px",
                                        "width": "100%",
                                        "background-color": "#2D4BF0"
                                      }
                                    }
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
                    "key": "div-178",
                    "style": {
                      "base": {
                        "flex-grow": "1.2",
                        "flex-shrink": "1",
                        "flex-basis": "440px",
                        "min-width": "0",
                        "min-height": "420px",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        "border-bottom-right-radius": "20px",
                        "border-bottom-left-radius": "20px",
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
                        "padding-top": "clamp(20px, 3vw, 36px)",
                        "padding-right": "clamp(20px, 3vw, 36px)",
                        "padding-bottom": "clamp(20px, 3vw, 36px)",
                        "padding-left": "clamp(20px, 3vw, 36px)",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-177",
                        "style": {
                          "base": {
                            "width": "100%",
                            "max-width": "440px",
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
                            "border-top-left-radius": "16px",
                            "border-top-right-radius": "16px",
                            "border-bottom-right-radius": "16px",
                            "border-bottom-left-radius": "16px",
                            "box-shadow": "0 24px 48px -24px rgba(15,17,21,0.22)",
                            "padding-top": "22px",
                            "padding-right": "22px",
                            "padding-bottom": "22px",
                            "padding-left": "22px",
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "16px",
                            "column-gap": "16px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-166",
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
                                "key": "div-164",
                                "style": {
                                  "base": {
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Invoice #1044"
                              },
                              {
                                "tag": "div",
                                "key": "div-165",
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
                                    "background-color": "#E8ECFE",
                                    "color": "#2D4BF0"
                                  }
                                },
                                "text": "Sent"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-169",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "row-gap": "16px",
                                "column-gap": "16px",
                                "padding-top": "12px",
                                "padding-right": "14px",
                                "padding-bottom": "12px",
                                "padding-left": "14px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "background-color": "#FAFBF8",
                                "font-size": "14px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-167",
                                "style": {
                                  "base": {
                                    "color": "#4E545D"
                                  }
                                },
                                "text": "Amount"
                              },
                              {
                                "tag": "div",
                                "key": "div-168",
                                "style": {
                                  "base": {
                                    "font-weight": "500"
                                  }
                                },
                                "text": "[AMOUNT]"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-172",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "row-gap": "16px",
                                "column-gap": "16px",
                                "padding-top": "12px",
                                "padding-right": "14px",
                                "padding-bottom": "12px",
                                "padding-left": "14px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "background-color": "#FAFBF8",
                                "font-size": "14px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-170",
                                "style": {
                                  "base": {
                                    "color": "#4E545D"
                                  }
                                },
                                "text": "Due"
                              },
                              {
                                "tag": "div",
                                "key": "div-171",
                                "style": {
                                  "base": {
                                    "font-weight": "500"
                                  }
                                },
                                "text": "On receipt"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-175",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "row-gap": "16px",
                                "column-gap": "16px",
                                "padding-top": "12px",
                                "padding-right": "14px",
                                "padding-bottom": "12px",
                                "padding-left": "14px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "background-color": "#FAFBF8",
                                "font-size": "14px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-173",
                                "style": {
                                  "base": {
                                    "color": "#4E545D"
                                  }
                                },
                                "text": "Method"
                              },
                              {
                                "tag": "div",
                                "key": "div-174",
                                "style": {
                                  "base": {
                                    "font-weight": "500"
                                  }
                                },
                                "text": "Card on file"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-176",
                            "style": {
                              "base": {
                                "height": "44px",
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
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "background-color": "#0F1115",
                                "color": "#FFFFFF",
                                "font-weight": "500",
                                "cursor": "pointer",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center"
                              }
                            },
                            "text": "View payment"
                          }
                        ]
                      }
                    ]
                  }
                ],
                "attrs": {
                  "data-blok-panel": "",
                  "data-display": "flex"
                }
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
