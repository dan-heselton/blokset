import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "pricing-12",
  "prefix": "pricing12",
  "name": "Pricing / Feature finder",
  "category": "pricing",
  "collection": "saas",
  "description": "Pricing / Feature finder for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "Tick what you need. We’ll point."
    },
    "subheading": {
      "type": "text",
      "default": "Example plans and prices. [Replace with your own.]"
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-3",
        "div-12",
        "div-43"
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
                "row-gap": "14px",
                "column-gap": "14px",
                "max-width": "680px"
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
                "text": "Which plan?"
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
            "key": "div-12",
            "style": {
              "base": {
                "display": "flex",
                "flex-wrap": "wrap",
                "row-gap": "8px",
                "column-gap": "8px"
              }
            },
            "attrs": {
              "role": "group",
              "aria-label": "Features you need",
              "data-blok-choices": "",
              "data-blok-multi": ""
            },
            "children": [
              {
                "tag": "div",
                "key": "div-4",
                "style": {
                  "base": {
                    "height": "44px",
                    "padding-top": "0",
                    "padding-right": "16px",
                    "padding-bottom": "0",
                    "padding-left": "16px",
                    "border-top-left-radius": "999px",
                    "border-top-right-radius": "999px",
                    "border-bottom-right-radius": "999px",
                    "border-bottom-left-radius": "999px",
                    "cursor": "pointer",
                    "font-size": "15px",
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
                    "color": "#FFFFFF",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center"
                  }
                },
                "attrs": {
                  "aria-pressed": "true",
                  "data-blok-choice": ""
                },
                "text": "✓ Recurring jobs"
              },
              {
                "tag": "div",
                "key": "div-5",
                "style": {
                  "base": {
                    "height": "44px",
                    "padding-top": "0",
                    "padding-right": "16px",
                    "padding-bottom": "0",
                    "padding-left": "16px",
                    "border-top-left-radius": "999px",
                    "border-top-right-radius": "999px",
                    "border-bottom-right-radius": "999px",
                    "border-bottom-left-radius": "999px",
                    "cursor": "pointer",
                    "font-size": "15px",
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
                    "color": "#0F1115",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center"
                  }
                },
                "attrs": {
                  "aria-pressed": "false",
                  "data-blok-choice": ""
                },
                "text": "Online booking"
              },
              {
                "tag": "div",
                "key": "div-6",
                "style": {
                  "base": {
                    "height": "44px",
                    "padding-top": "0",
                    "padding-right": "16px",
                    "padding-bottom": "0",
                    "padding-left": "16px",
                    "border-top-left-radius": "999px",
                    "border-top-right-radius": "999px",
                    "border-bottom-right-radius": "999px",
                    "border-bottom-left-radius": "999px",
                    "cursor": "pointer",
                    "font-size": "15px",
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
                    "color": "#FFFFFF",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center"
                  }
                },
                "attrs": {
                  "aria-pressed": "true",
                  "data-blok-choice": ""
                },
                "text": "✓ Reminder texts"
              },
              {
                "tag": "div",
                "key": "div-7",
                "style": {
                  "base": {
                    "height": "44px",
                    "padding-top": "0",
                    "padding-right": "16px",
                    "padding-bottom": "0",
                    "padding-left": "16px",
                    "border-top-left-radius": "999px",
                    "border-top-right-radius": "999px",
                    "border-bottom-right-radius": "999px",
                    "border-bottom-left-radius": "999px",
                    "cursor": "pointer",
                    "font-size": "15px",
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
                    "color": "#0F1115",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center"
                  }
                },
                "attrs": {
                  "aria-pressed": "false",
                  "data-blok-choice": ""
                },
                "text": "Dispatch board"
              },
              {
                "tag": "div",
                "key": "div-8",
                "style": {
                  "base": {
                    "height": "44px",
                    "padding-top": "0",
                    "padding-right": "16px",
                    "padding-bottom": "0",
                    "padding-left": "16px",
                    "border-top-left-radius": "999px",
                    "border-top-right-radius": "999px",
                    "border-bottom-right-radius": "999px",
                    "border-bottom-left-radius": "999px",
                    "cursor": "pointer",
                    "font-size": "15px",
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
                    "color": "#0F1115",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center"
                  }
                },
                "attrs": {
                  "aria-pressed": "false",
                  "data-blok-choice": ""
                },
                "text": "Route optimization"
              },
              {
                "tag": "div",
                "key": "div-9",
                "style": {
                  "base": {
                    "height": "44px",
                    "padding-top": "0",
                    "padding-right": "16px",
                    "padding-bottom": "0",
                    "padding-left": "16px",
                    "border-top-left-radius": "999px",
                    "border-top-right-radius": "999px",
                    "border-bottom-right-radius": "999px",
                    "border-bottom-left-radius": "999px",
                    "cursor": "pointer",
                    "font-size": "15px",
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
                    "color": "#0F1115",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center"
                  }
                },
                "attrs": {
                  "aria-pressed": "false",
                  "data-blok-choice": ""
                },
                "text": "Roles and permissions"
              },
              {
                "tag": "div",
                "key": "div-10",
                "style": {
                  "base": {
                    "height": "44px",
                    "padding-top": "0",
                    "padding-right": "16px",
                    "padding-bottom": "0",
                    "padding-left": "16px",
                    "border-top-left-radius": "999px",
                    "border-top-right-radius": "999px",
                    "border-bottom-right-radius": "999px",
                    "border-bottom-left-radius": "999px",
                    "cursor": "pointer",
                    "font-size": "15px",
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
                    "color": "#0F1115",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center"
                  }
                },
                "attrs": {
                  "aria-pressed": "false",
                  "data-blok-choice": ""
                },
                "text": "Reports"
              },
              {
                "tag": "div",
                "key": "div-11",
                "style": {
                  "base": {
                    "height": "44px",
                    "padding-top": "0",
                    "padding-right": "16px",
                    "padding-bottom": "0",
                    "padding-left": "16px",
                    "border-top-left-radius": "999px",
                    "border-top-right-radius": "999px",
                    "border-bottom-right-radius": "999px",
                    "border-bottom-left-radius": "999px",
                    "cursor": "pointer",
                    "font-size": "15px",
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
                    "color": "#0F1115",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center"
                  }
                },
                "attrs": {
                  "aria-pressed": "false",
                  "data-blok-choice": ""
                },
                "text": "Single sign-on"
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-43",
            "style": {
              "base": {
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
                "key": "div-20",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "14px",
                    "column-gap": "14px",
                    "padding-top": "22px",
                    "padding-right": "22px",
                    "padding-bottom": "22px",
                    "padding-left": "22px",
                    "border-top-left-radius": "18px",
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                    "border-bottom-left-radius": "18px",
                    "border-top-width": "2px",
                    "border-top-style": "solid",
                    "border-top-color": "#E2E4DE",
                    "border-right-width": "2px",
                    "border-right-style": "solid",
                    "border-right-color": "#E2E4DE",
                    "border-bottom-width": "2px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#E2E4DE",
                    "border-left-width": "2px",
                    "border-left-style": "solid",
                    "border-left-color": "#E2E4DE",
                    "background-color": "#FFFFFF",
                    "opacity": "0.55",
                    "transition": "opacity 200ms ease"
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
                        "align-items": "center",
                        "min-height": "26px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-13",
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
                    "key": "div-15",
                    "style": {
                      "base": {
                        "font-size": "36px",
                        "font-weight": "600",
                        "letter-spacing": "-0.04em"
                      }
                    },
                    "text": "$29"
                  },
                  {
                    "tag": "div",
                    "key": "div-16",
                    "style": {
                      "base": {
                        "font-size": "14px",
                        "color": "#5B616B"
                      }
                    },
                    "text": "Missing 1"
                  },
                  {
                    "tag": "div",
                    "key": "div-18",
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
                        "row-gap": "6px",
                        "column-gap": "6px",
                        "font-size": "14px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-17",
                        "style": {
                          "base": {
                            "color": "#9A4A12"
                          }
                        },
                        "text": "✕ Reminder texts"
                      }
                    ]
                  },
                  {
                    "tag": "a",
                    "key": "a-19",
                    "style": {
                      "base": {
                        "margin-top": "auto",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "height": "44px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "font-weight": "500",
                        "text-decoration": "none",
                        "background-color": "#F4F5F1",
                        "color": "#0F1115"
                      }
                    },
                    "href": "#",
                    "text": "Choose Starter"
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
                    "column-gap": "14px",
                    "padding-top": "22px",
                    "padding-right": "22px",
                    "padding-bottom": "22px",
                    "padding-left": "22px",
                    "border-top-left-radius": "18px",
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                    "border-bottom-left-radius": "18px",
                    "border-top-width": "2px",
                    "border-top-style": "solid",
                    "border-top-color": "#2D4BF0",
                    "border-right-width": "2px",
                    "border-right-style": "solid",
                    "border-right-color": "#2D4BF0",
                    "border-bottom-width": "2px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#2D4BF0",
                    "border-left-width": "2px",
                    "border-left-style": "solid",
                    "border-left-color": "#2D4BF0",
                    "background-color": "#F7F8FE",
                    "opacity": "1",
                    "transition": "opacity 200ms ease"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-23",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "align-items": "center",
                        "min-height": "26px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-21",
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
                        "key": "div-22",
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
                        "text": "Best fit"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-24",
                    "style": {
                      "base": {
                        "font-size": "36px",
                        "font-weight": "600",
                        "letter-spacing": "-0.04em"
                      }
                    },
                    "text": "$79"
                  },
                  {
                    "tag": "div",
                    "key": "div-25",
                    "style": {
                      "base": {
                        "font-size": "14px",
                        "color": "#1D6B3A"
                      }
                    },
                    "text": "Covers everything you ticked"
                  },
                  {
                    "tag": "div",
                    "key": "div-26",
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
                        "row-gap": "6px",
                        "column-gap": "6px",
                        "font-size": "14px"
                      }
                    }
                  },
                  {
                    "tag": "a",
                    "key": "a-27",
                    "style": {
                      "base": {
                        "margin-top": "auto",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "height": "44px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "font-weight": "500",
                        "text-decoration": "none",
                        "background-color": "#2D4BF0",
                        "color": "#FFFFFF"
                      }
                    },
                    "href": "#",
                    "text": "Choose Team"
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
                    "row-gap": "14px",
                    "column-gap": "14px",
                    "padding-top": "22px",
                    "padding-right": "22px",
                    "padding-bottom": "22px",
                    "padding-left": "22px",
                    "border-top-left-radius": "18px",
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                    "border-bottom-left-radius": "18px",
                    "border-top-width": "2px",
                    "border-top-style": "solid",
                    "border-top-color": "#E2E4DE",
                    "border-right-width": "2px",
                    "border-right-style": "solid",
                    "border-right-color": "#E2E4DE",
                    "border-bottom-width": "2px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#E2E4DE",
                    "border-left-width": "2px",
                    "border-left-style": "solid",
                    "border-left-color": "#E2E4DE",
                    "background-color": "#FFFFFF",
                    "opacity": "1",
                    "transition": "opacity 200ms ease"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-30",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "align-items": "center",
                        "min-height": "26px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-29",
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
                    "key": "div-31",
                    "style": {
                      "base": {
                        "font-size": "36px",
                        "font-weight": "600",
                        "letter-spacing": "-0.04em"
                      }
                    },
                    "text": "$149"
                  },
                  {
                    "tag": "div",
                    "key": "div-32",
                    "style": {
                      "base": {
                        "font-size": "14px",
                        "color": "#1D6B3A"
                      }
                    },
                    "text": "Covers it, with room to grow"
                  },
                  {
                    "tag": "div",
                    "key": "div-33",
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
                        "row-gap": "6px",
                        "column-gap": "6px",
                        "font-size": "14px"
                      }
                    }
                  },
                  {
                    "tag": "a",
                    "key": "a-34",
                    "style": {
                      "base": {
                        "margin-top": "auto",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "height": "44px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "font-weight": "500",
                        "text-decoration": "none",
                        "background-color": "#F4F5F1",
                        "color": "#0F1115"
                      }
                    },
                    "href": "#",
                    "text": "Choose Business"
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
                    "row-gap": "14px",
                    "column-gap": "14px",
                    "padding-top": "22px",
                    "padding-right": "22px",
                    "padding-bottom": "22px",
                    "padding-left": "22px",
                    "border-top-left-radius": "18px",
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                    "border-bottom-left-radius": "18px",
                    "border-top-width": "2px",
                    "border-top-style": "solid",
                    "border-top-color": "#E2E4DE",
                    "border-right-width": "2px",
                    "border-right-style": "solid",
                    "border-right-color": "#E2E4DE",
                    "border-bottom-width": "2px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#E2E4DE",
                    "border-left-width": "2px",
                    "border-left-style": "solid",
                    "border-left-color": "#E2E4DE",
                    "background-color": "#FFFFFF",
                    "opacity": "1",
                    "transition": "opacity 200ms ease"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-37",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "align-items": "center",
                        "min-height": "26px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-36",
                        "style": {
                          "base": {
                            "font-size": "18px",
                            "font-weight": "600"
                          }
                        },
                        "text": "Enterprise"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-38",
                    "style": {
                      "base": {
                        "font-size": "36px",
                        "font-weight": "600",
                        "letter-spacing": "-0.04em"
                      }
                    },
                    "text": "Custom"
                  },
                  {
                    "tag": "div",
                    "key": "div-39",
                    "style": {
                      "base": {
                        "font-size": "14px",
                        "color": "#1D6B3A"
                      }
                    },
                    "text": "Covers it, with room to grow"
                  },
                  {
                    "tag": "div",
                    "key": "div-40",
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
                        "row-gap": "6px",
                        "column-gap": "6px",
                        "font-size": "14px"
                      }
                    }
                  },
                  {
                    "tag": "a",
                    "key": "a-41",
                    "style": {
                      "base": {
                        "margin-top": "auto",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "height": "44px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "font-weight": "500",
                        "text-decoration": "none",
                        "background-color": "#F4F5F1",
                        "color": "#0F1115"
                      }
                    },
                    "href": "#",
                    "text": "Choose Enterprise"
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
