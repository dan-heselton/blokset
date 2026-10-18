import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "features-65",
  "prefix": "features65",
  "name": "Features / Card slider",
  "category": "features",
  "collection": "saas",
  "description": "Features / Card slider for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "Six things you’ll stop doing on Mondays"
    },
    "subheading": {
      "type": "text",
      "default": "Recurring jobs land on the calendar by themselves."
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-8",
        "div-52",
        "div-59"
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
        "padding-right": "0",
        "padding-bottom": "clamp(56px, 8vw, 96px)",
        "padding-left": "0",
        "overflow": "hidden"
      }
    },
    "children": [
      {
        "tag": "div",
        "key": "div-60",
        "style": {
          "base": {
            "max-width": "1200px",
            "margin-top": "0",
            "margin-right": "auto",
            "margin-bottom": "0",
            "margin-left": "auto",
            "padding-top": "0",
            "padding-right": "clamp(20px, 4vw, 48px)",
            "padding-bottom": "0",
            "padding-left": "clamp(20px, 4vw, 48px)",
            "display": "flex",
            "flex-direction": "column",
            "row-gap": "32px",
            "column-gap": "32px"
          }
        },
        "children": [
          {
            "tag": "div",
            "key": "div-8",
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
                    "max-width": "620px"
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
                "key": "div-7",
                "style": {
                  "base": {
                    "display": "flex",
                    "align-items": "center",
                    "row-gap": "10px",
                    "column-gap": "10px"
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
                    "text": "01 / 06",
                    "attrs": {
                      "data-blok-slider-count": ""
                    }
                  },
                  {
                    "tag": "div",
                    "key": "div-5",
                    "style": {
                      "base": {
                        "width": "48px",
                        "height": "48px",
                        "border-top-left-radius": "50%",
                        "border-top-right-radius": "50%",
                        "border-bottom-right-radius": "50%",
                        "border-bottom-left-radius": "50%",
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
                        "font-size": "18px",
                        "opacity": "0.4",
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
                      "aria-label": "Previous",
                      "aria-disabled": "true",
                      "data-blok-slider-prev": ""
                    },
                    "text": "←"
                  },
                  {
                    "tag": "div",
                    "key": "div-6",
                    "style": {
                      "base": {
                        "width": "48px",
                        "height": "48px",
                        "border-top-left-radius": "50%",
                        "border-top-right-radius": "50%",
                        "border-bottom-right-radius": "50%",
                        "border-bottom-left-radius": "50%",
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
                        "font-size": "18px",
                        "opacity": "1",
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
                      "aria-label": "Next",
                      "data-blok-slider-next": ""
                    },
                    "text": "→"
                  }
                ]
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-52",
            "style": {
              "base": {
                "overflow": "visible"
              }
            },
            "attrs": {
              "aria-roledescription": "carousel"
            },
            "children": [
              {
                "tag": "div",
                "key": "div-51",
                "style": {
                  "base": {
                    "display": "flex",
                    "row-gap": "20px",
                    "column-gap": "20px",
                    "transition": "transform 360ms cubic-bezier(.2,.7,.2,1)"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-15",
                    "style": {
                      "base": {
                        "flex-grow": "0",
                        "flex-shrink": "0",
                        "flex-basis": "360px",
                        "min-height": "420px",
                        "border-top-left-radius": "22px",
                        "border-top-right-radius": "22px",
                        "border-bottom-right-radius": "22px",
                        "border-bottom-left-radius": "22px",
                        "padding-top": "26px",
                        "padding-right": "26px",
                        "padding-bottom": "26px",
                        "padding-left": "26px",
                        "display": "flex",
                        "flex-direction": "column",
                        "justify-content": "space-between",
                        "row-gap": "20px",
                        "column-gap": "20px",
                        "background-color": "#0F1115",
                        "color": "#FFFFFF",
                        "opacity": "1",
                        "transition": "opacity 300ms ease"
                      }
                    },
                    "attrs": {
                      "aria-label": "Building the week",
                      "data-blok-slider-card": ""
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
                                "font-family": "token(font-saas-mono)",
                                "font-size": "13px",
                                "opacity": "0.7"
                              }
                            },
                            "text": "01"
                          },
                          {
                            "tag": "div",
                            "key": "div-10",
                            "style": {
                              "base": {
                                "width": "44px",
                                "height": "44px",
                                "border-top-left-radius": "12px",
                                "border-top-right-radius": "12px",
                                "border-bottom-right-radius": "12px",
                                "border-bottom-left-radius": "12px",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center",
                                "font-size": "20px",
                                "background-color": "#262A31"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "▦"
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
                            "row-gap": "12px",
                            "column-gap": "12px"
                          }
                        },
                        "children": [
                          {
                            "tag": "h3",
                            "key": "h3-12",
                            "style": {
                              "base": {
                                "margin-top": "0",
                                "margin-right": "0",
                                "margin-bottom": "0",
                                "margin-left": "0",
                                "font-size": "28px",
                                "line-height": "1.08",
                                "letter-spacing": "-0.03em",
                                "font-weight": "600"
                              }
                            },
                            "text": "Building the week"
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
                                "font-size": "16px",
                                "line-height": "1.55",
                                "opacity": "0.8"
                              }
                            },
                            "bind": "subheading"
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
                        "flex-grow": "0",
                        "flex-shrink": "0",
                        "flex-basis": "360px",
                        "min-height": "420px",
                        "border-top-left-radius": "22px",
                        "border-top-right-radius": "22px",
                        "border-bottom-right-radius": "22px",
                        "border-bottom-left-radius": "22px",
                        "padding-top": "26px",
                        "padding-right": "26px",
                        "padding-bottom": "26px",
                        "padding-left": "26px",
                        "display": "flex",
                        "flex-direction": "column",
                        "justify-content": "space-between",
                        "row-gap": "20px",
                        "column-gap": "20px",
                        "background-color": "#E8ECFE",
                        "color": "#0F1115",
                        "opacity": "1",
                        "transition": "opacity 300ms ease"
                      }
                    },
                    "attrs": {
                      "aria-label": "Calling to confirm",
                      "data-blok-slider-card": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-18",
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
                            "key": "div-16",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "13px",
                                "opacity": "0.7"
                              }
                            },
                            "text": "02"
                          },
                          {
                            "tag": "div",
                            "key": "div-17",
                            "style": {
                              "base": {
                                "width": "44px",
                                "height": "44px",
                                "border-top-left-radius": "12px",
                                "border-top-right-radius": "12px",
                                "border-bottom-right-radius": "12px",
                                "border-bottom-left-radius": "12px",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center",
                                "font-size": "20px",
                                "background-color": "#FFFFFF"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "✆"
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
                            "row-gap": "12px",
                            "column-gap": "12px"
                          }
                        },
                        "children": [
                          {
                            "tag": "h3",
                            "key": "h3-19",
                            "style": {
                              "base": {
                                "margin-top": "0",
                                "margin-right": "0",
                                "margin-bottom": "0",
                                "margin-left": "0",
                                "font-size": "28px",
                                "line-height": "1.08",
                                "letter-spacing": "-0.03em",
                                "font-weight": "600"
                              }
                            },
                            "text": "Calling to confirm"
                          },
                          {
                            "tag": "p",
                            "key": "p-20",
                            "style": {
                              "base": {
                                "margin-top": "0",
                                "margin-right": "0",
                                "margin-bottom": "0",
                                "margin-left": "0",
                                "font-size": "16px",
                                "line-height": "1.55",
                                "opacity": "0.8"
                              }
                            },
                            "text": "Customers get a reminder text and reply to confirm."
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-29",
                    "style": {
                      "base": {
                        "flex-grow": "0",
                        "flex-shrink": "0",
                        "flex-basis": "360px",
                        "min-height": "420px",
                        "border-top-left-radius": "22px",
                        "border-top-right-radius": "22px",
                        "border-bottom-right-radius": "22px",
                        "border-bottom-left-radius": "22px",
                        "padding-top": "26px",
                        "padding-right": "26px",
                        "padding-bottom": "26px",
                        "padding-left": "26px",
                        "display": "flex",
                        "flex-direction": "column",
                        "justify-content": "space-between",
                        "row-gap": "20px",
                        "column-gap": "20px",
                        "background-color": "#F4F5F1",
                        "color": "#0F1115",
                        "opacity": "1",
                        "transition": "opacity 300ms ease"
                      }
                    },
                    "attrs": {
                      "aria-label": "Drawing routes",
                      "data-blok-slider-card": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-25",
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
                            "key": "div-23",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "13px",
                                "opacity": "0.7"
                              }
                            },
                            "text": "03"
                          },
                          {
                            "tag": "div",
                            "key": "div-24",
                            "style": {
                              "base": {
                                "width": "44px",
                                "height": "44px",
                                "border-top-left-radius": "12px",
                                "border-top-right-radius": "12px",
                                "border-bottom-right-radius": "12px",
                                "border-bottom-left-radius": "12px",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center",
                                "font-size": "20px",
                                "background-color": "#FFFFFF"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "↝"
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
                            "row-gap": "12px",
                            "column-gap": "12px"
                          }
                        },
                        "children": [
                          {
                            "tag": "h3",
                            "key": "h3-26",
                            "style": {
                              "base": {
                                "margin-top": "0",
                                "margin-right": "0",
                                "margin-bottom": "0",
                                "margin-left": "0",
                                "font-size": "28px",
                                "line-height": "1.08",
                                "letter-spacing": "-0.03em",
                                "font-weight": "600"
                              }
                            },
                            "text": "Drawing routes"
                          },
                          {
                            "tag": "p",
                            "key": "p-27",
                            "style": {
                              "base": {
                                "margin-top": "0",
                                "margin-right": "0",
                                "margin-bottom": "0",
                                "margin-left": "0",
                                "font-size": "16px",
                                "line-height": "1.55",
                                "opacity": "0.8"
                              }
                            },
                            "text": "Each crew’s day is ordered for the shortest drive."
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
                        "flex-grow": "0",
                        "flex-shrink": "0",
                        "flex-basis": "360px",
                        "min-height": "420px",
                        "border-top-left-radius": "22px",
                        "border-top-right-radius": "22px",
                        "border-bottom-right-radius": "22px",
                        "border-bottom-left-radius": "22px",
                        "padding-top": "26px",
                        "padding-right": "26px",
                        "padding-bottom": "26px",
                        "padding-left": "26px",
                        "display": "flex",
                        "flex-direction": "column",
                        "justify-content": "space-between",
                        "row-gap": "20px",
                        "column-gap": "20px",
                        "background-color": "#2D4BF0",
                        "color": "#FFFFFF",
                        "opacity": "1",
                        "transition": "opacity 300ms ease"
                      }
                    },
                    "attrs": {
                      "aria-label": "Writing invoices",
                      "data-blok-slider-card": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-32",
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
                            "key": "div-30",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "13px",
                                "opacity": "0.7"
                              }
                            },
                            "text": "04"
                          },
                          {
                            "tag": "div",
                            "key": "div-31",
                            "style": {
                              "base": {
                                "width": "44px",
                                "height": "44px",
                                "border-top-left-radius": "12px",
                                "border-top-right-radius": "12px",
                                "border-bottom-right-radius": "12px",
                                "border-bottom-left-radius": "12px",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center",
                                "font-size": "20px",
                                "background-color": "#4562F3"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "$"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-35",
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
                            "tag": "h3",
                            "key": "h3-33",
                            "style": {
                              "base": {
                                "margin-top": "0",
                                "margin-right": "0",
                                "margin-bottom": "0",
                                "margin-left": "0",
                                "font-size": "28px",
                                "line-height": "1.08",
                                "letter-spacing": "-0.03em",
                                "font-weight": "600"
                              }
                            },
                            "text": "Writing invoices"
                          },
                          {
                            "tag": "p",
                            "key": "p-34",
                            "style": {
                              "base": {
                                "margin-top": "0",
                                "margin-right": "0",
                                "margin-bottom": "0",
                                "margin-left": "0",
                                "font-size": "16px",
                                "line-height": "1.55",
                                "opacity": "0.8"
                              }
                            },
                            "text": "Invoices go out the moment a job is marked done."
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
                        "flex-grow": "0",
                        "flex-shrink": "0",
                        "flex-basis": "360px",
                        "min-height": "420px",
                        "border-top-left-radius": "22px",
                        "border-top-right-radius": "22px",
                        "border-bottom-right-radius": "22px",
                        "border-bottom-left-radius": "22px",
                        "padding-top": "26px",
                        "padding-right": "26px",
                        "padding-bottom": "26px",
                        "padding-left": "26px",
                        "display": "flex",
                        "flex-direction": "column",
                        "justify-content": "space-between",
                        "row-gap": "20px",
                        "column-gap": "20px",
                        "background-color": "#E5F4EA",
                        "color": "#0F1115",
                        "opacity": "1",
                        "transition": "opacity 300ms ease"
                      }
                    },
                    "attrs": {
                      "aria-label": "Chasing payments",
                      "data-blok-slider-card": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-39",
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
                            "key": "div-37",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "13px",
                                "opacity": "0.7"
                              }
                            },
                            "text": "05"
                          },
                          {
                            "tag": "div",
                            "key": "div-38",
                            "style": {
                              "base": {
                                "width": "44px",
                                "height": "44px",
                                "border-top-left-radius": "12px",
                                "border-top-right-radius": "12px",
                                "border-bottom-right-radius": "12px",
                                "border-bottom-left-radius": "12px",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center",
                                "font-size": "20px",
                                "background-color": "#FFFFFF"
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
                            "tag": "h3",
                            "key": "h3-40",
                            "style": {
                              "base": {
                                "margin-top": "0",
                                "margin-right": "0",
                                "margin-bottom": "0",
                                "margin-left": "0",
                                "font-size": "28px",
                                "line-height": "1.08",
                                "letter-spacing": "-0.03em",
                                "font-weight": "600"
                              }
                            },
                            "text": "Chasing payments"
                          },
                          {
                            "tag": "p",
                            "key": "p-41",
                            "style": {
                              "base": {
                                "margin-top": "0",
                                "margin-right": "0",
                                "margin-bottom": "0",
                                "margin-left": "0",
                                "font-size": "16px",
                                "line-height": "1.55",
                                "opacity": "0.8"
                              }
                            },
                            "text": "Polite reminders send until the bill is paid."
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
                        "flex-grow": "0",
                        "flex-shrink": "0",
                        "flex-basis": "360px",
                        "min-height": "420px",
                        "border-top-left-radius": "22px",
                        "border-top-right-radius": "22px",
                        "border-bottom-right-radius": "22px",
                        "border-bottom-left-radius": "22px",
                        "padding-top": "26px",
                        "padding-right": "26px",
                        "padding-bottom": "26px",
                        "padding-left": "26px",
                        "display": "flex",
                        "flex-direction": "column",
                        "justify-content": "space-between",
                        "row-gap": "20px",
                        "column-gap": "20px",
                        "background-color": "#FDEFE4",
                        "color": "#0F1115",
                        "opacity": "1",
                        "transition": "opacity 300ms ease"
                      }
                    },
                    "attrs": {
                      "aria-label": "Updating the books",
                      "data-blok-slider-card": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-46",
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
                            "key": "div-44",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "13px",
                                "opacity": "0.7"
                              }
                            },
                            "text": "06"
                          },
                          {
                            "tag": "div",
                            "key": "div-45",
                            "style": {
                              "base": {
                                "width": "44px",
                                "height": "44px",
                                "border-top-left-radius": "12px",
                                "border-top-right-radius": "12px",
                                "border-bottom-right-radius": "12px",
                                "border-bottom-left-radius": "12px",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center",
                                "font-size": "20px",
                                "background-color": "#FFFFFF"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "≡"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-49",
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
                            "tag": "h3",
                            "key": "h3-47",
                            "style": {
                              "base": {
                                "margin-top": "0",
                                "margin-right": "0",
                                "margin-bottom": "0",
                                "margin-left": "0",
                                "font-size": "28px",
                                "line-height": "1.08",
                                "letter-spacing": "-0.03em",
                                "font-weight": "600"
                              }
                            },
                            "text": "Updating the books"
                          },
                          {
                            "tag": "p",
                            "key": "p-48",
                            "style": {
                              "base": {
                                "margin-top": "0",
                                "margin-right": "0",
                                "margin-bottom": "0",
                                "margin-left": "0",
                                "font-size": "16px",
                                "line-height": "1.55",
                                "opacity": "0.8"
                              }
                            },
                            "text": "Payments sync to your accounting app overnight."
                          }
                        ]
                      }
                    ]
                  }
                ],
                "attrs": {
                  "data-blok-slider-track": ""
                }
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-59",
            "style": {
              "base": {
                "display": "flex",
                "row-gap": "8px",
                "column-gap": "8px"
              }
            },
            "attrs": {
              "role": "tablist",
              "aria-label": "Choose card"
            },
            "children": [
              {
                "tag": "div",
                "key": "div-53",
                "style": {
                  "base": {
                    "width": "28px",
                    "height": "8px",
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
                    "border-top-left-radius": "999px",
                    "border-top-right-radius": "999px",
                    "border-bottom-right-radius": "999px",
                    "border-bottom-left-radius": "999px",
                    "cursor": "pointer",
                    "background-color": "#0F1115",
                    "transition": "width 200ms ease",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center",
                    "line-height": "1",
                    "flex-shrink": "0"
                  }
                },
                "attrs": {
                  "role": "tab",
                  "aria-selected": "true",
                  "aria-label": "Building the week",
                  "data-blok-slider-dot": "",
                  "data-w-on": "28px",
                  "data-w-off": "8px",
                  "data-bg-on": "#0F1115",
                  "data-bg-off": "#CFD3CA"
                }
              },
              {
                "tag": "div",
                "key": "div-54",
                "style": {
                  "base": {
                    "width": "8px",
                    "height": "8px",
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
                    "border-top-left-radius": "999px",
                    "border-top-right-radius": "999px",
                    "border-bottom-right-radius": "999px",
                    "border-bottom-left-radius": "999px",
                    "cursor": "pointer",
                    "background-color": "#CFD3CA",
                    "transition": "width 200ms ease",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center",
                    "line-height": "1",
                    "flex-shrink": "0"
                  }
                },
                "attrs": {
                  "role": "tab",
                  "aria-selected": "false",
                  "aria-label": "Calling to confirm",
                  "data-blok-slider-dot": "",
                  "data-w-on": "28px",
                  "data-w-off": "8px",
                  "data-bg-on": "#0F1115",
                  "data-bg-off": "#CFD3CA"
                }
              },
              {
                "tag": "div",
                "key": "div-55",
                "style": {
                  "base": {
                    "width": "8px",
                    "height": "8px",
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
                    "border-top-left-radius": "999px",
                    "border-top-right-radius": "999px",
                    "border-bottom-right-radius": "999px",
                    "border-bottom-left-radius": "999px",
                    "cursor": "pointer",
                    "background-color": "#CFD3CA",
                    "transition": "width 200ms ease",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center",
                    "line-height": "1",
                    "flex-shrink": "0"
                  }
                },
                "attrs": {
                  "role": "tab",
                  "aria-selected": "false",
                  "aria-label": "Drawing routes",
                  "data-blok-slider-dot": "",
                  "data-w-on": "28px",
                  "data-w-off": "8px",
                  "data-bg-on": "#0F1115",
                  "data-bg-off": "#CFD3CA"
                }
              },
              {
                "tag": "div",
                "key": "div-56",
                "style": {
                  "base": {
                    "width": "8px",
                    "height": "8px",
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
                    "border-top-left-radius": "999px",
                    "border-top-right-radius": "999px",
                    "border-bottom-right-radius": "999px",
                    "border-bottom-left-radius": "999px",
                    "cursor": "pointer",
                    "background-color": "#CFD3CA",
                    "transition": "width 200ms ease",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center",
                    "line-height": "1",
                    "flex-shrink": "0"
                  }
                },
                "attrs": {
                  "role": "tab",
                  "aria-selected": "false",
                  "aria-label": "Writing invoices",
                  "data-blok-slider-dot": "",
                  "data-w-on": "28px",
                  "data-w-off": "8px",
                  "data-bg-on": "#0F1115",
                  "data-bg-off": "#CFD3CA"
                }
              },
              {
                "tag": "div",
                "key": "div-57",
                "style": {
                  "base": {
                    "width": "8px",
                    "height": "8px",
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
                    "border-top-left-radius": "999px",
                    "border-top-right-radius": "999px",
                    "border-bottom-right-radius": "999px",
                    "border-bottom-left-radius": "999px",
                    "cursor": "pointer",
                    "background-color": "#CFD3CA",
                    "transition": "width 200ms ease",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center",
                    "line-height": "1",
                    "flex-shrink": "0"
                  }
                },
                "attrs": {
                  "role": "tab",
                  "aria-selected": "false",
                  "aria-label": "Chasing payments",
                  "data-blok-slider-dot": "",
                  "data-w-on": "28px",
                  "data-w-off": "8px",
                  "data-bg-on": "#0F1115",
                  "data-bg-off": "#CFD3CA"
                }
              },
              {
                "tag": "div",
                "key": "div-58",
                "style": {
                  "base": {
                    "width": "8px",
                    "height": "8px",
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
                    "border-top-left-radius": "999px",
                    "border-top-right-radius": "999px",
                    "border-bottom-right-radius": "999px",
                    "border-bottom-left-radius": "999px",
                    "cursor": "pointer",
                    "background-color": "#CFD3CA",
                    "transition": "width 200ms ease",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center",
                    "line-height": "1",
                    "flex-shrink": "0"
                  }
                },
                "attrs": {
                  "role": "tab",
                  "aria-selected": "false",
                  "aria-label": "Updating the books",
                  "data-blok-slider-dot": "",
                  "data-w-on": "28px",
                  "data-w-off": "8px",
                  "data-bg-on": "#0F1115",
                  "data-bg-off": "#CFD3CA"
                }
              }
            ]
          }
        ]
      }
    ],
    "attrs": {
      "data-blok-slider": "",
      "data-blok-slider-index": ""
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
