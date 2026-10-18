import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "onboard-03",
  "prefix": "onboard03",
  "name": "Onboarding / Progress ring",
  "category": "onboard",
  "collection": "saas",
  "description": "Onboarding / Progress ring for Harborline.",
  "props": {
    "icon1": {
      "type": "image",
      "default": {
        "src": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22220%22%20height%3D%22220%22%20aria-hidden%3D%22true%22%20style%3D%22transform%3A%20rotate(-90deg)%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%2260%22%20r%3D%2254%22%20fill%3D%22none%22%20stroke%3D%22%23262A31%22%20stroke-width%3D%2210%22%3E%3C%2Fcircle%3E%0A%20%20%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%2260%22%20r%3D%2254%22%20fill%3D%22none%22%20stroke%3D%22%232D4BF0%22%20stroke-width%3D%2210%22%20stroke-linecap%3D%22round%22%20stroke-dasharray%3D%22339.29%22%20stroke-dashoffset%3D%22226.19%22%20style%3D%22transition%3A%20stroke-dashoffset%20400ms%20ease%22%3E%3C%2Fcircle%3E%0A%20%20%20%20%20%20%20%20%3C%2Fsvg%3E",
        "alt": ""
      }
    },
    "heading": {
      "type": "text",
      "default": "About 8 minutes to go"
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-8",
        "div-57"
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
        "padding-top": "clamp(56px, 8vw, 96px)",
        "padding-right": "clamp(20px, 4vw, 48px)",
        "padding-bottom": "clamp(56px, 8vw, 96px)",
        "padding-left": "clamp(20px, 4vw, 48px)"
      }
    },
    "children": [
      {
        "tag": "div",
        "key": "div-58",
        "style": {
          "base": {
            "max-width": "1200px",
            "margin-top": "0",
            "margin-right": "auto",
            "margin-bottom": "0",
            "margin-left": "auto",
            "display": "flex",
            "flex-wrap": "wrap",
            "align-items": "center",
            "row-gap": "clamp(32px, 5vw, 72px)",
            "column-gap": "clamp(32px, 5vw, 72px)"
          }
        },
        "children": [
          {
            "tag": "div",
            "key": "div-8",
            "style": {
              "base": {
                "flex-grow": "0",
                "flex-shrink": "1",
                "flex-basis": "340px",
                "display": "flex",
                "flex-direction": "column",
                "align-items": "flex-start",
                "row-gap": "24px",
                "column-gap": "24px"
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
                "text": "Getting started"
              },
              {
                "tag": "div",
                "key": "div-6",
                "style": {
                  "base": {
                    "position": "relative",
                    "width": "220px",
                    "height": "220px"
                  }
                },
                "attrs": {
                  "role": "progressbar",
                  "aria-valuemin": "0",
                  "aria-valuemax": "100",
                  "aria-valuenow": "33",
                  "aria-label": "Setup progress"
                },
                "children": [
                  {
                    "tag": "img",
                    "key": "icon-2",
                    "bind": "icon1",
                    "decorative": true,
                    "style": {
                      "base": {
                        "width": "220px",
                        "height": "220px",
                        "flex-shrink": "0"
                      }
                    }
                  },
                  {
                    "tag": "div",
                    "key": "div-5",
                    "style": {
                      "base": {
                        "position": "absolute",
                        "top": "0",
                        "right": "0",
                        "bottom": "0",
                        "left": "0",
                        "display": "flex",
                        "flex-direction": "column",
                        "align-items": "center",
                        "justify-content": "center",
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
                            "font-size": "52px",
                            "font-weight": "600",
                            "letter-spacing": "-0.04em",
                            "line-height": "1"
                          }
                        },
                        "text": "33%"
                      },
                      {
                        "tag": "div",
                        "key": "div-4",
                        "style": {
                          "base": {
                            "font-size": "14px",
                            "color": "#A7ADB6"
                          }
                        },
                        "text": "2 of 6 done"
                      }
                    ]
                  }
                ]
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
                    "font-size": "clamp(30px, 3.6vw, 44px)",
                    "line-height": "1.05",
                    "letter-spacing": "-0.035em",
                    "font-weight": "600"
                  }
                },
                "bind": "heading"
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-57",
            "style": {
              "base": {
                "flex-grow": "1",
                "flex-shrink": "1",
                "flex-basis": "520px",
                "display": "grid",
                "grid-template-columns": "1fr",
                "row-gap": "12px",
                "column-gap": "12px"
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
                "key": "div-16",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "14px",
                    "column-gap": "14px",
                    "padding-top": "20px",
                    "padding-right": "20px",
                    "padding-bottom": "20px",
                    "padding-left": "20px",
                    "border-top-left-radius": "16px",
                    "border-top-right-radius": "16px",
                    "border-bottom-right-radius": "16px",
                    "border-bottom-left-radius": "16px",
                    "border-top-width": "1px",
                    "border-top-style": "solid",
                    "border-top-color": "#262A31",
                    "border-right-width": "1px",
                    "border-right-style": "solid",
                    "border-right-color": "#262A31",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#262A31",
                    "border-left-width": "1px",
                    "border-left-style": "solid",
                    "border-left-color": "#262A31",
                    "background-color": "#14171B"
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
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#8C929B"
                          }
                        },
                        "text": "2 min"
                      },
                      {
                        "tag": "div",
                        "key": "div-10",
                        "style": {
                          "base": {
                            "width": "24px",
                            "height": "24px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "font-size": "13px",
                            "background-color": "#8FD3A8",
                            "color": "#0F1115"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        },
                        "text": "✓"
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
                        "row-gap": "4px",
                        "column-gap": "4px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-12",
                        "style": {
                          "base": {
                            "font-size": "17px",
                            "font-weight": "600",
                            "text-decoration": "line-through"
                          }
                        },
                        "text": "Add your services"
                      },
                      {
                        "tag": "div",
                        "key": "div-13",
                        "style": {
                          "base": {
                            "font-size": "14px",
                            "line-height": "1.5",
                            "color": "#A7ADB6"
                          }
                        },
                        "text": "Names, prices and how long each takes."
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-15",
                    "style": {
                      "base": {
                        "align-self": "flex-start",
                        "height": "40px",
                        "padding-top": "0",
                        "padding-right": "14px",
                        "padding-bottom": "0",
                        "padding-left": "14px",
                        "border-top-left-radius": "8px",
                        "border-top-right-radius": "8px",
                        "border-bottom-right-radius": "8px",
                        "border-bottom-left-radius": "8px",
                        "cursor": "pointer",
                        "font-size": "14px",
                        "font-weight": "500",
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
                        "background-color": "transparent",
                        "color": "#A7ADB6",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "attrs": {
                      "aria-pressed": "true"
                    },
                    "text": "Undo"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-24",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "14px",
                    "column-gap": "14px",
                    "padding-top": "20px",
                    "padding-right": "20px",
                    "padding-bottom": "20px",
                    "padding-left": "20px",
                    "border-top-left-radius": "16px",
                    "border-top-right-radius": "16px",
                    "border-bottom-right-radius": "16px",
                    "border-bottom-left-radius": "16px",
                    "border-top-width": "1px",
                    "border-top-style": "solid",
                    "border-top-color": "#262A31",
                    "border-right-width": "1px",
                    "border-right-style": "solid",
                    "border-right-color": "#262A31",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#262A31",
                    "border-left-width": "1px",
                    "border-left-style": "solid",
                    "border-left-color": "#262A31",
                    "background-color": "#14171B"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-19",
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
                        "key": "div-17",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#8C929B"
                          }
                        },
                        "text": "5 min"
                      },
                      {
                        "tag": "div",
                        "key": "div-18",
                        "style": {
                          "base": {
                            "width": "24px",
                            "height": "24px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "font-size": "13px",
                            "background-color": "#8FD3A8",
                            "color": "#0F1115"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        },
                        "text": "✓"
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
                        "row-gap": "4px",
                        "column-gap": "4px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-20",
                        "style": {
                          "base": {
                            "font-size": "17px",
                            "font-weight": "600",
                            "text-decoration": "line-through"
                          }
                        },
                        "text": "Import customers"
                      },
                      {
                        "tag": "div",
                        "key": "div-21",
                        "style": {
                          "base": {
                            "font-size": "14px",
                            "line-height": "1.5",
                            "color": "#A7ADB6"
                          }
                        },
                        "text": "Upload a spreadsheet or add a few by hand."
                      }
                    ]
                  },
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
                        "border-top-left-radius": "8px",
                        "border-top-right-radius": "8px",
                        "border-bottom-right-radius": "8px",
                        "border-bottom-left-radius": "8px",
                        "cursor": "pointer",
                        "font-size": "14px",
                        "font-weight": "500",
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
                        "background-color": "transparent",
                        "color": "#A7ADB6",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "attrs": {
                      "aria-pressed": "true"
                    },
                    "text": "Undo"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-32",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "14px",
                    "column-gap": "14px",
                    "padding-top": "20px",
                    "padding-right": "20px",
                    "padding-bottom": "20px",
                    "padding-left": "20px",
                    "border-top-left-radius": "16px",
                    "border-top-right-radius": "16px",
                    "border-bottom-right-radius": "16px",
                    "border-bottom-left-radius": "16px",
                    "border-top-width": "1px",
                    "border-top-style": "solid",
                    "border-top-color": "#2C3037",
                    "border-right-width": "1px",
                    "border-right-style": "solid",
                    "border-right-color": "#2C3037",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#2C3037",
                    "border-left-width": "1px",
                    "border-left-style": "solid",
                    "border-left-color": "#2C3037",
                    "background-color": "#181B20"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-27",
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
                        "key": "div-25",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#8C929B"
                          }
                        },
                        "text": "1 min"
                      },
                      {
                        "tag": "div",
                        "key": "div-26",
                        "style": {
                          "base": {
                            "width": "24px",
                            "height": "24px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "font-size": "13px",
                            "background-color": "#262A31",
                            "color": "#0F1115"
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
                    "key": "div-30",
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
                        "key": "div-28",
                        "style": {
                          "base": {
                            "font-size": "17px",
                            "font-weight": "600",
                            "text-decoration": "none"
                          }
                        },
                        "text": "Invite your crew"
                      },
                      {
                        "tag": "div",
                        "key": "div-29",
                        "style": {
                          "base": {
                            "font-size": "14px",
                            "line-height": "1.5",
                            "color": "#A7ADB6"
                          }
                        },
                        "text": "They get a text with a link to the app."
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-31",
                    "style": {
                      "base": {
                        "align-self": "flex-start",
                        "height": "40px",
                        "padding-top": "0",
                        "padding-right": "14px",
                        "padding-bottom": "0",
                        "padding-left": "14px",
                        "border-top-left-radius": "8px",
                        "border-top-right-radius": "8px",
                        "border-bottom-right-radius": "8px",
                        "border-bottom-left-radius": "8px",
                        "cursor": "pointer",
                        "font-size": "14px",
                        "font-weight": "500",
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
                        "border-left-color": "#F4F5F1",
                        "background-color": "#F4F5F1",
                        "color": "#0F1115",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "attrs": {
                      "aria-pressed": "false"
                    },
                    "text": "Mark done"
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
                    "column-gap": "14px",
                    "padding-top": "20px",
                    "padding-right": "20px",
                    "padding-bottom": "20px",
                    "padding-left": "20px",
                    "border-top-left-radius": "16px",
                    "border-top-right-radius": "16px",
                    "border-bottom-right-radius": "16px",
                    "border-bottom-left-radius": "16px",
                    "border-top-width": "1px",
                    "border-top-style": "solid",
                    "border-top-color": "#2C3037",
                    "border-right-width": "1px",
                    "border-right-style": "solid",
                    "border-right-color": "#2C3037",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#2C3037",
                    "border-left-width": "1px",
                    "border-left-style": "solid",
                    "border-left-color": "#2C3037",
                    "background-color": "#181B20"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-35",
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
                        "key": "div-33",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#8C929B"
                          }
                        },
                        "text": "1 min"
                      },
                      {
                        "tag": "div",
                        "key": "div-34",
                        "style": {
                          "base": {
                            "width": "24px",
                            "height": "24px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "font-size": "13px",
                            "background-color": "#262A31",
                            "color": "#0F1115"
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
                    "key": "div-38",
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
                        "key": "div-36",
                        "style": {
                          "base": {
                            "font-size": "17px",
                            "font-weight": "600",
                            "text-decoration": "none"
                          }
                        },
                        "text": "Set a recurring job"
                      },
                      {
                        "tag": "div",
                        "key": "div-37",
                        "style": {
                          "base": {
                            "font-size": "14px",
                            "line-height": "1.5",
                            "color": "#A7ADB6"
                          }
                        },
                        "text": "Pick a customer and a rhythm."
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-39",
                    "style": {
                      "base": {
                        "align-self": "flex-start",
                        "height": "40px",
                        "padding-top": "0",
                        "padding-right": "14px",
                        "padding-bottom": "0",
                        "padding-left": "14px",
                        "border-top-left-radius": "8px",
                        "border-top-right-radius": "8px",
                        "border-bottom-right-radius": "8px",
                        "border-bottom-left-radius": "8px",
                        "cursor": "pointer",
                        "font-size": "14px",
                        "font-weight": "500",
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
                        "border-left-color": "#F4F5F1",
                        "background-color": "#F4F5F1",
                        "color": "#0F1115",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "attrs": {
                      "aria-pressed": "false"
                    },
                    "text": "Mark done"
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
                    "row-gap": "14px",
                    "column-gap": "14px",
                    "padding-top": "20px",
                    "padding-right": "20px",
                    "padding-bottom": "20px",
                    "padding-left": "20px",
                    "border-top-left-radius": "16px",
                    "border-top-right-radius": "16px",
                    "border-bottom-right-radius": "16px",
                    "border-bottom-left-radius": "16px",
                    "border-top-width": "1px",
                    "border-top-style": "solid",
                    "border-top-color": "#2C3037",
                    "border-right-width": "1px",
                    "border-right-style": "solid",
                    "border-right-color": "#2C3037",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#2C3037",
                    "border-left-width": "1px",
                    "border-left-style": "solid",
                    "border-left-color": "#2C3037",
                    "background-color": "#181B20"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-43",
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
                        "key": "div-41",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#8C929B"
                          }
                        },
                        "text": "3 min"
                      },
                      {
                        "tag": "div",
                        "key": "div-42",
                        "style": {
                          "base": {
                            "width": "24px",
                            "height": "24px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "font-size": "13px",
                            "background-color": "#262A31",
                            "color": "#0F1115"
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
                    "key": "div-46",
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
                        "key": "div-44",
                        "style": {
                          "base": {
                            "font-size": "17px",
                            "font-weight": "600",
                            "text-decoration": "none"
                          }
                        },
                        "text": "Connect payments"
                      },
                      {
                        "tag": "div",
                        "key": "div-45",
                        "style": {
                          "base": {
                            "font-size": "14px",
                            "line-height": "1.5",
                            "color": "#A7ADB6"
                          }
                        },
                        "text": "So customers can pay from the invoice."
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-47",
                    "style": {
                      "base": {
                        "align-self": "flex-start",
                        "height": "40px",
                        "padding-top": "0",
                        "padding-right": "14px",
                        "padding-bottom": "0",
                        "padding-left": "14px",
                        "border-top-left-radius": "8px",
                        "border-top-right-radius": "8px",
                        "border-bottom-right-radius": "8px",
                        "border-bottom-left-radius": "8px",
                        "cursor": "pointer",
                        "font-size": "14px",
                        "font-weight": "500",
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
                        "border-left-color": "#F4F5F1",
                        "background-color": "#F4F5F1",
                        "color": "#0F1115",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "attrs": {
                      "aria-pressed": "false"
                    },
                    "text": "Mark done"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-56",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "14px",
                    "column-gap": "14px",
                    "padding-top": "20px",
                    "padding-right": "20px",
                    "padding-bottom": "20px",
                    "padding-left": "20px",
                    "border-top-left-radius": "16px",
                    "border-top-right-radius": "16px",
                    "border-bottom-right-radius": "16px",
                    "border-bottom-left-radius": "16px",
                    "border-top-width": "1px",
                    "border-top-style": "solid",
                    "border-top-color": "#2C3037",
                    "border-right-width": "1px",
                    "border-right-style": "solid",
                    "border-right-color": "#2C3037",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#2C3037",
                    "border-left-width": "1px",
                    "border-left-style": "solid",
                    "border-left-color": "#2C3037",
                    "background-color": "#181B20"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-51",
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
                        "key": "div-49",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#8C929B"
                          }
                        },
                        "text": "30 sec"
                      },
                      {
                        "tag": "div",
                        "key": "div-50",
                        "style": {
                          "base": {
                            "width": "24px",
                            "height": "24px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "font-size": "13px",
                            "background-color": "#262A31",
                            "color": "#0F1115"
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
                    "key": "div-54",
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
                        "key": "div-52",
                        "style": {
                          "base": {
                            "font-size": "17px",
                            "font-weight": "600",
                            "text-decoration": "none"
                          }
                        },
                        "text": "Turn on reminders"
                      },
                      {
                        "tag": "div",
                        "key": "div-53",
                        "style": {
                          "base": {
                            "font-size": "14px",
                            "line-height": "1.5",
                            "color": "#A7ADB6"
                          }
                        },
                        "text": "Day-before texts, on by default."
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-55",
                    "style": {
                      "base": {
                        "align-self": "flex-start",
                        "height": "40px",
                        "padding-top": "0",
                        "padding-right": "14px",
                        "padding-bottom": "0",
                        "padding-left": "14px",
                        "border-top-left-radius": "8px",
                        "border-top-right-radius": "8px",
                        "border-bottom-right-radius": "8px",
                        "border-bottom-left-radius": "8px",
                        "cursor": "pointer",
                        "font-size": "14px",
                        "font-weight": "500",
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
                        "border-left-color": "#F4F5F1",
                        "background-color": "#F4F5F1",
                        "color": "#0F1115",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "attrs": {
                      "aria-pressed": "false"
                    },
                    "text": "Mark done"
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
    default: "dark",
    map: { section: { "background-color": "bg", color: "fg" } },
  }),
};
export default spec;
