import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "hero-60",
  "prefix": "hero60",
  "name": "Hero / Command search",
  "category": "hero",
  "collection": "saas",
  "description": "Hero / Command search for Harborline.",
  "props": {
    "icon1": {
      "type": "image",
      "default": {
        "src": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%238C929B%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20aria-hidden%3D%22true%22%3E%3Ccircle%20cx%3D%2211%22%20cy%3D%2211%22%20r%3D%227%22%3E%3C%2Fcircle%3E%3Cpath%20d%3D%22M20%2020l-3.5-3.5%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E",
        "alt": ""
      }
    },
    "heading": {
      "type": "text",
      "default": "Do anything in two keystrokes"
    },
    "subheading": {
      "type": "text",
      "default": "Press ⌘K from any screen to create a job, message a crew or send an invoice without hunting through menus."
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-7",
        "div-46"
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
        "key": "div-47",
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
            "row-gap": "56px",
            "column-gap": "56px"
          }
        },
        "children": [
          {
            "tag": "div",
            "key": "div-7",
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
                    "color": "#A7ADB6"
                  }
                },
                "text": "Keyboard first"
              },
              {
                "tag": "h1",
                "key": "heading",
                "style": {
                  "base": {
                    "margin-top": "0",
                    "margin-right": "0",
                    "margin-bottom": "0",
                    "margin-left": "0",
                    "font-size": "clamp(40px, 5.6vw, 72px)",
                    "line-height": "1",
                    "letter-spacing": "-0.045em",
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
                    "max-width": "460px",
                    "font-size": "18px",
                    "line-height": "1.6",
                    "color": "#B9BEC6"
                  }
                },
                "bind": "subheading"
              },
              {
                "tag": "div",
                "key": "div-6",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-wrap": "wrap",
                    "row-gap": "12px",
                    "column-gap": "12px"
                  }
                },
                "children": [
                  {
                    "tag": "a",
                    "key": "a-4",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "height": "48px",
                        "padding-top": "0",
                        "padding-right": "22px",
                        "padding-bottom": "0",
                        "padding-left": "22px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "background-color": "#F4F5F1",
                        "color": "#0F1115",
                        "text-decoration": "none",
                        "font-weight": "500"
                      }
                    },
                    "href": "#",
                    "text": "Start free trial"
                  },
                  {
                    "tag": "a",
                    "key": "a-5",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "height": "48px",
                        "padding-top": "0",
                        "padding-right": "22px",
                        "padding-bottom": "0",
                        "padding-left": "22px",
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
                        "color": "#F4F5F1",
                        "text-decoration": "none",
                        "font-weight": "500"
                      }
                    },
                    "href": "#",
                    "text": "See all shortcuts"
                  }
                ]
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-46",
            "style": {
              "base": {
                "flex-grow": "1",
                "flex-shrink": "1",
                "flex-basis": "480px",
                "min-width": "0",
                "background-color": "#181B20",
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
                "border-top-left-radius": "16px",
                "border-top-right-radius": "16px",
                "border-bottom-right-radius": "16px",
                "border-bottom-left-radius": "16px",
                "box-shadow": "0 40px 80px -40px rgba(0,0,0,0.8)",
                "overflow": "hidden"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-12",
                "style": {
                  "base": {
                    "display": "flex",
                    "align-items": "center",
                    "row-gap": "12px",
                    "column-gap": "12px",
                    "padding-top": "16px",
                    "padding-right": "18px",
                    "padding-bottom": "16px",
                    "padding-left": "18px",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#2C3037"
                  }
                },
                "children": [
                  {
                    "tag": "img",
                    "key": "icon-8",
                    "bind": "icon1",
                    "decorative": true,
                    "style": {
                      "base": {
                        "width": "18px",
                        "height": "18px",
                        "flex-shrink": "0"
                      }
                    }
                  },
                  {
                    "tag": "div",
                    "key": "div-9",
                    "style": {
                      "base": {
                        "position": "absolute",
                        "width": "1px",
                        "height": "1px",
                        "overflow": "hidden",
                        "clip": "rect(0 0 0 0)"
                      }
                    },
                    "text": "Search actions"
                  },
                  {
                    "tag": "div",
                    "key": "div-10",
                    "style": {
                      "base": {
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "0%",
                        "min-width": "0",
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
                        "outline": "none",
                        "background-color": "transparent",
                        "color": "#F4F5F1",
                        "font-size": "17px"
                      }
                    },
                    "text": "Type a command or search…"
                  },
                  {
                    "tag": "div",
                    "key": "div-11",
                    "style": {
                      "base": {
                        "font-family": "token(font-saas-mono)",
                        "font-size": "12px",
                        "color": "#8C929B",
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
                        "border-top-left-radius": "6px",
                        "border-top-right-radius": "6px",
                        "border-bottom-right-radius": "6px",
                        "border-bottom-left-radius": "6px",
                        "padding-top": "3px",
                        "padding-right": "7px",
                        "padding-bottom": "3px",
                        "padding-left": "7px"
                      }
                    },
                    "text": "esc"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-42",
                "style": {
                  "base": {
                    "padding-top": "8px",
                    "padding-right": "8px",
                    "padding-bottom": "8px",
                    "padding-left": "8px",
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "2px",
                    "column-gap": "2px",
                    "min-height": "320px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-13",
                    "style": {
                      "base": {
                        "padding-top": "10px",
                        "padding-right": "12px",
                        "padding-bottom": "6px",
                        "padding-left": "12px",
                        "font-family": "token(font-saas-mono)",
                        "font-size": "11px",
                        "letter-spacing": "0.08em",
                        "text-transform": "uppercase",
                        "color": "#8C929B"
                      }
                    },
                    "text": "Suggested"
                  },
                  {
                    "tag": "div",
                    "key": "div-17",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "row-gap": "12px",
                        "column-gap": "12px",
                        "width": "100%",
                        "min-height": "44px",
                        "padding-top": "0",
                        "padding-right": "12px",
                        "padding-bottom": "0",
                        "padding-left": "12px",
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
                        "text-align": "left",
                        "color": "#F4F5F1",
                        "font-size": "15px",
                        "background-color": "#262A31"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-14",
                        "style": {
                          "base": {
                            "width": "28px",
                            "height": "28px",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "border-top-left-radius": "7px",
                            "border-top-right-radius": "7px",
                            "border-bottom-right-radius": "7px",
                            "border-bottom-left-radius": "7px",
                            "background-color": "#262A31",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#AFC0FF"
                          }
                        },
                        "text": "J"
                      },
                      {
                        "tag": "div",
                        "key": "div-15",
                        "style": {
                          "base": {
                            "flex-grow": "1",
                            "flex-shrink": "1",
                            "flex-basis": "0%"
                          }
                        },
                        "text": "Create a job"
                      },
                      {
                        "tag": "div",
                        "key": "div-16",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#8C929B"
                          }
                        },
                        "text": "C then J"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-21",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "row-gap": "12px",
                        "column-gap": "12px",
                        "width": "100%",
                        "min-height": "44px",
                        "padding-top": "0",
                        "padding-right": "12px",
                        "padding-bottom": "0",
                        "padding-left": "12px",
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
                        "text-align": "left",
                        "color": "#F4F5F1",
                        "font-size": "15px",
                        "background-color": "transparent"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-18",
                        "style": {
                          "base": {
                            "width": "28px",
                            "height": "28px",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "border-top-left-radius": "7px",
                            "border-top-right-radius": "7px",
                            "border-bottom-right-radius": "7px",
                            "border-bottom-left-radius": "7px",
                            "background-color": "#262A31",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#AFC0FF"
                          }
                        },
                        "text": "R"
                      },
                      {
                        "tag": "div",
                        "key": "div-19",
                        "style": {
                          "base": {
                            "flex-grow": "1",
                            "flex-shrink": "1",
                            "flex-basis": "0%"
                          }
                        },
                        "text": "Schedule a recurring visit"
                      },
                      {
                        "tag": "div",
                        "key": "div-20",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#8C929B"
                          }
                        },
                        "text": "C then R"
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
                        "row-gap": "12px",
                        "column-gap": "12px",
                        "width": "100%",
                        "min-height": "44px",
                        "padding-top": "0",
                        "padding-right": "12px",
                        "padding-bottom": "0",
                        "padding-left": "12px",
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
                        "text-align": "left",
                        "color": "#F4F5F1",
                        "font-size": "15px",
                        "background-color": "transparent"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-22",
                        "style": {
                          "base": {
                            "width": "28px",
                            "height": "28px",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "border-top-left-radius": "7px",
                            "border-top-right-radius": "7px",
                            "border-bottom-right-radius": "7px",
                            "border-bottom-left-radius": "7px",
                            "background-color": "#262A31",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#AFC0FF"
                          }
                        },
                        "text": "$"
                      },
                      {
                        "tag": "div",
                        "key": "div-23",
                        "style": {
                          "base": {
                            "flex-grow": "1",
                            "flex-shrink": "1",
                            "flex-basis": "0%"
                          }
                        },
                        "text": "Send an invoice"
                      },
                      {
                        "tag": "div",
                        "key": "div-24",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#8C929B"
                          }
                        },
                        "text": "I"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-29",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "row-gap": "12px",
                        "column-gap": "12px",
                        "width": "100%",
                        "min-height": "44px",
                        "padding-top": "0",
                        "padding-right": "12px",
                        "padding-bottom": "0",
                        "padding-left": "12px",
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
                        "text-align": "left",
                        "color": "#F4F5F1",
                        "font-size": "15px",
                        "background-color": "transparent"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-26",
                        "style": {
                          "base": {
                            "width": "28px",
                            "height": "28px",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "border-top-left-radius": "7px",
                            "border-top-right-radius": "7px",
                            "border-bottom-right-radius": "7px",
                            "border-bottom-left-radius": "7px",
                            "background-color": "#262A31",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#AFC0FF"
                          }
                        },
                        "text": "M"
                      },
                      {
                        "tag": "div",
                        "key": "div-27",
                        "style": {
                          "base": {
                            "flex-grow": "1",
                            "flex-shrink": "1",
                            "flex-basis": "0%"
                          }
                        },
                        "text": "Message a crew"
                      },
                      {
                        "tag": "div",
                        "key": "div-28",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#8C929B"
                          }
                        },
                        "text": "M"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-33",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "row-gap": "12px",
                        "column-gap": "12px",
                        "width": "100%",
                        "min-height": "44px",
                        "padding-top": "0",
                        "padding-right": "12px",
                        "padding-bottom": "0",
                        "padding-left": "12px",
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
                        "text-align": "left",
                        "color": "#F4F5F1",
                        "font-size": "15px",
                        "background-color": "transparent"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-30",
                        "style": {
                          "base": {
                            "width": "28px",
                            "height": "28px",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "border-top-left-radius": "7px",
                            "border-top-right-radius": "7px",
                            "border-bottom-right-radius": "7px",
                            "border-bottom-left-radius": "7px",
                            "background-color": "#262A31",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#AFC0FF"
                          }
                        },
                        "text": "+"
                      },
                      {
                        "tag": "div",
                        "key": "div-31",
                        "style": {
                          "base": {
                            "flex-grow": "1",
                            "flex-shrink": "1",
                            "flex-basis": "0%"
                          }
                        },
                        "text": "Add a customer"
                      },
                      {
                        "tag": "div",
                        "key": "div-32",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#8C929B"
                          }
                        },
                        "text": "C then U"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-37",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "row-gap": "12px",
                        "column-gap": "12px",
                        "width": "100%",
                        "min-height": "44px",
                        "padding-top": "0",
                        "padding-right": "12px",
                        "padding-bottom": "0",
                        "padding-left": "12px",
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
                        "text-align": "left",
                        "color": "#F4F5F1",
                        "font-size": "15px",
                        "background-color": "transparent"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-34",
                        "style": {
                          "base": {
                            "width": "28px",
                            "height": "28px",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "border-top-left-radius": "7px",
                            "border-top-right-radius": "7px",
                            "border-bottom-right-radius": "7px",
                            "border-bottom-left-radius": "7px",
                            "background-color": "#262A31",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#AFC0FF"
                          }
                        },
                        "text": "→"
                      },
                      {
                        "tag": "div",
                        "key": "div-35",
                        "style": {
                          "base": {
                            "flex-grow": "1",
                            "flex-shrink": "1",
                            "flex-basis": "0%"
                          }
                        },
                        "text": "Open today's route"
                      },
                      {
                        "tag": "div",
                        "key": "div-36",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#8C929B"
                          }
                        },
                        "text": "G then R"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-41",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "row-gap": "12px",
                        "column-gap": "12px",
                        "width": "100%",
                        "min-height": "44px",
                        "padding-top": "0",
                        "padding-right": "12px",
                        "padding-bottom": "0",
                        "padding-left": "12px",
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
                        "text-align": "left",
                        "color": "#F4F5F1",
                        "font-size": "15px",
                        "background-color": "transparent"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-38",
                        "style": {
                          "base": {
                            "width": "28px",
                            "height": "28px",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "border-top-left-radius": "7px",
                            "border-top-right-radius": "7px",
                            "border-bottom-right-radius": "7px",
                            "border-bottom-left-radius": "7px",
                            "background-color": "#262A31",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#AFC0FF"
                          }
                        },
                        "text": "↓"
                      },
                      {
                        "tag": "div",
                        "key": "div-39",
                        "style": {
                          "base": {
                            "flex-grow": "1",
                            "flex-shrink": "1",
                            "flex-basis": "0%"
                          }
                        },
                        "text": "Export payroll hours"
                      },
                      {
                        "tag": "div",
                        "key": "div-40",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#8C929B"
                          }
                        },
                        "text": "E"
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
                    "display": "flex",
                    "justify-content": "space-between",
                    "row-gap": "12px",
                    "column-gap": "12px",
                    "padding-top": "12px",
                    "padding-right": "18px",
                    "padding-bottom": "12px",
                    "padding-left": "18px",
                    "border-top-width": "1px",
                    "border-top-style": "solid",
                    "border-top-color": "#2C3037",
                    "font-size": "13px",
                    "color": "#A7ADB6"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-43",
                    "text": "Try typing “inv”"
                  },
                  {
                    "tag": "div",
                    "key": "div-44",
                    "style": {
                      "base": {
                        "font-family": "token(font-saas-mono)"
                      }
                    },
                    "text": "↑↓ to move · ↵ to run"
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
