import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "faq-07",
  "prefix": "faq07",
  "name": "FAQ / Searchable",
  "category": "faq",
  "collection": "saas",
  "description": "FAQ / Searchable for Harborline.",
  "props": {
    "icon1": {
      "type": "image",
      "default": {
        "src": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%235B616B%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20aria-hidden%3D%22true%22%3E%3Ccircle%20cx%3D%2211%22%20cy%3D%2211%22%20r%3D%227%22%3E%3C%2Fcircle%3E%3Cpath%20d%3D%22M20%2020l-3.5-3.5%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E",
        "alt": ""
      }
    },
    "heading": {
      "type": "text",
      "default": "Questions, answered"
    },
    "subheading": {
      "type": "text",
      "default": "[Trial length and what it includes.] No card needed to start."
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
        "div-45"
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
        "key": "div-46",
        "style": {
          "base": {
            "max-width": "860px",
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
                "align-items": "center",
                "text-align": "center",
                "row-gap": "14px",
                "column-gap": "14px"
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
                "text": "Help"
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
                    "font-size": "clamp(34px, 4.4vw, 52px)",
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
                "align-items": "center",
                "row-gap": "12px",
                "column-gap": "12px",
                "height": "56px",
                "padding-top": "0",
                "padding-right": "18px",
                "padding-bottom": "0",
                "padding-left": "18px",
                "border-top-left-radius": "14px",
                "border-top-right-radius": "14px",
                "border-bottom-right-radius": "14px",
                "border-bottom-left-radius": "14px",
                "border-top-width": "1px",
                "border-top-style": "solid",
                "border-top-color": "#CFD3CA",
                "border-right-width": "1px",
                "border-right-style": "solid",
                "border-right-color": "#CFD3CA",
                "border-bottom-width": "1px",
                "border-bottom-style": "solid",
                "border-bottom-color": "#CFD3CA",
                "border-left-width": "1px",
                "border-left-style": "solid",
                "border-left-color": "#CFD3CA",
                "background-color": "#F4F5F1"
              }
            },
            "children": [
              {
                "tag": "img",
                "key": "icon-4",
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
                "key": "div-5",
                "style": {
                  "base": {
                    "position": "absolute",
                    "width": "1px",
                    "height": "1px",
                    "overflow": "hidden",
                    "clip": "rect(0 0 0 0)"
                  }
                },
                "text": "Search questions"
              },
              {
                "tag": "div",
                "key": "div-6",
                "style": {
                  "base": {
                    "flex-grow": "1",
                    "flex-shrink": "1",
                    "flex-basis": "0%",
                    "min-width": "0",
                    "height": "40px",
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
                    "font-size": "17px",
                    "color": "#0F1115"
                  }
                },
                "text": "Search, e.g. “crew” or “cancel”"
              },
              {
                "tag": "div",
                "key": "div-7",
                "style": {
                  "base": {
                    "font-family": "token(font-saas-mono)",
                    "font-size": "12px",
                    "color": "#5B616B"
                  }
                },
                "text": "6 questions"
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-45",
            "style": {
              "base": {
                "display": "flex",
                "flex-direction": "column",
                "row-gap": "8px",
                "column-gap": "8px"
              }
            },
            "attrs": {
              "data-blok-accordion": ""
            },
            "children": [
              {
                "tag": "div",
                "key": "div-14",
                "style": {
                  "base": {
                    "border-top-left-radius": "14px",
                    "border-top-right-radius": "14px",
                    "border-bottom-right-radius": "14px",
                    "border-bottom-left-radius": "14px",
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
                    "background-color": "#F4F5F1"
                  }
                },
                "attrs": {
                  "data-blok-acc-item": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-11",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "align-items": "center",
                        "row-gap": "16px",
                        "column-gap": "16px",
                        "width": "100%",
                        "min-height": "64px",
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
                        "background-color": "transparent",
                        "cursor": "pointer",
                        "text-align": "left",
                        "color": "#0F1115"
                      }
                    },
                    "attrs": {
                      "aria-expanded": "true",
                      "data-blok-acc-trigger": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-9",
                        "style": {
                          "base": {
                            "font-size": "17px",
                            "font-weight": "600"
                          }
                        },
                        "text": "Is there a free trial?"
                      },
                      {
                        "tag": "div",
                        "key": "div-10",
                        "style": {
                          "base": {
                            "flex-shrink": "0",
                            "width": "28px",
                            "height": "28px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "font-size": "18px",
                            "background-color": "#0F1115",
                            "color": "#FFFFFF"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true",
                          "data-blok-acc-icon": ""
                        },
                        "text": "−"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "panel-13",
                    "attrs": {
                      "data-blok-acc-panel": ""
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
                            "padding-top": "0",
                            "padding-right": "20px",
                            "padding-bottom": "20px",
                            "padding-left": "20px",
                            "font-size": "16px",
                            "line-height": "1.6",
                            "color": "#4E545D"
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
                "key": "div-20",
                "style": {
                  "base": {
                    "border-top-left-radius": "14px",
                    "border-top-right-radius": "14px",
                    "border-bottom-right-radius": "14px",
                    "border-bottom-left-radius": "14px",
                    "border-top-width": "1px",
                    "border-top-style": "solid",
                    "border-top-color": "#E9EBE5",
                    "border-right-width": "1px",
                    "border-right-style": "solid",
                    "border-right-color": "#E9EBE5",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#E9EBE5",
                    "border-left-width": "1px",
                    "border-left-style": "solid",
                    "border-left-color": "#E9EBE5",
                    "background-color": "#FFFFFF"
                  }
                },
                "attrs": {
                  "data-blok-acc-item": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-17",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "align-items": "center",
                        "row-gap": "16px",
                        "column-gap": "16px",
                        "width": "100%",
                        "min-height": "64px",
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
                        "background-color": "transparent",
                        "cursor": "pointer",
                        "text-align": "left",
                        "color": "#0F1115"
                      }
                    },
                    "attrs": {
                      "aria-expanded": "false",
                      "data-blok-acc-trigger": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-15",
                        "style": {
                          "base": {
                            "font-size": "17px",
                            "font-weight": "600"
                          }
                        },
                        "text": "Do my crews need to pay for the app?"
                      },
                      {
                        "tag": "div",
                        "key": "div-16",
                        "style": {
                          "base": {
                            "flex-shrink": "0",
                            "width": "28px",
                            "height": "28px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "font-size": "18px",
                            "background-color": "#F1F2EE",
                            "color": "#0F1115"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true",
                          "data-blok-acc-icon": ""
                        },
                        "text": "+"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "panel-19",
                    "attrs": {
                      "data-blok-acc-panel": ""
                    },
                    "children": [
                      {
                        "tag": "p",
                        "key": "p-18",
                        "style": {
                          "base": {
                            "margin-top": "0",
                            "margin-right": "0",
                            "margin-bottom": "0",
                            "margin-left": "0",
                            "padding-top": "0",
                            "padding-right": "20px",
                            "padding-bottom": "20px",
                            "padding-left": "20px",
                            "font-size": "16px",
                            "line-height": "1.6",
                            "color": "#4E545D"
                          }
                        },
                        "text": "No. Crews download the app for free and sign in with the invite you send them."
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-26",
                "style": {
                  "base": {
                    "border-top-left-radius": "14px",
                    "border-top-right-radius": "14px",
                    "border-bottom-right-radius": "14px",
                    "border-bottom-left-radius": "14px",
                    "border-top-width": "1px",
                    "border-top-style": "solid",
                    "border-top-color": "#E9EBE5",
                    "border-right-width": "1px",
                    "border-right-style": "solid",
                    "border-right-color": "#E9EBE5",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#E9EBE5",
                    "border-left-width": "1px",
                    "border-left-style": "solid",
                    "border-left-color": "#E9EBE5",
                    "background-color": "#FFFFFF"
                  }
                },
                "attrs": {
                  "data-blok-acc-item": ""
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
                        "row-gap": "16px",
                        "column-gap": "16px",
                        "width": "100%",
                        "min-height": "64px",
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
                        "background-color": "transparent",
                        "cursor": "pointer",
                        "text-align": "left",
                        "color": "#0F1115"
                      }
                    },
                    "attrs": {
                      "aria-expanded": "false",
                      "data-blok-acc-trigger": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-21",
                        "style": {
                          "base": {
                            "font-size": "17px",
                            "font-weight": "600"
                          }
                        },
                        "text": "Can customers book online?"
                      },
                      {
                        "tag": "div",
                        "key": "div-22",
                        "style": {
                          "base": {
                            "flex-shrink": "0",
                            "width": "28px",
                            "height": "28px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "font-size": "18px",
                            "background-color": "#F1F2EE",
                            "color": "#0F1115"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true",
                          "data-blok-acc-icon": ""
                        },
                        "text": "+"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "panel-25",
                    "attrs": {
                      "data-blok-acc-panel": ""
                    },
                    "children": [
                      {
                        "tag": "p",
                        "key": "p-24",
                        "style": {
                          "base": {
                            "margin-top": "0",
                            "margin-right": "0",
                            "margin-bottom": "0",
                            "margin-left": "0",
                            "padding-top": "0",
                            "padding-right": "20px",
                            "padding-bottom": "20px",
                            "padding-left": "20px",
                            "font-size": "16px",
                            "line-height": "1.6",
                            "color": "#4E545D"
                          }
                        },
                        "text": "Yes. Turn on your booking page and customers pick from the slots you open."
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-32",
                "style": {
                  "base": {
                    "border-top-left-radius": "14px",
                    "border-top-right-radius": "14px",
                    "border-bottom-right-radius": "14px",
                    "border-bottom-left-radius": "14px",
                    "border-top-width": "1px",
                    "border-top-style": "solid",
                    "border-top-color": "#E9EBE5",
                    "border-right-width": "1px",
                    "border-right-style": "solid",
                    "border-right-color": "#E9EBE5",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#E9EBE5",
                    "border-left-width": "1px",
                    "border-left-style": "solid",
                    "border-left-color": "#E9EBE5",
                    "background-color": "#FFFFFF"
                  }
                },
                "attrs": {
                  "data-blok-acc-item": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-29",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "align-items": "center",
                        "row-gap": "16px",
                        "column-gap": "16px",
                        "width": "100%",
                        "min-height": "64px",
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
                        "background-color": "transparent",
                        "cursor": "pointer",
                        "text-align": "left",
                        "color": "#0F1115"
                      }
                    },
                    "attrs": {
                      "aria-expanded": "false",
                      "data-blok-acc-trigger": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-27",
                        "style": {
                          "base": {
                            "font-size": "17px",
                            "font-weight": "600"
                          }
                        },
                        "text": "What happens if a crew member is out sick?"
                      },
                      {
                        "tag": "div",
                        "key": "div-28",
                        "style": {
                          "base": {
                            "flex-shrink": "0",
                            "width": "28px",
                            "height": "28px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "font-size": "18px",
                            "background-color": "#F1F2EE",
                            "color": "#0F1115"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true",
                          "data-blok-acc-icon": ""
                        },
                        "text": "+"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "panel-31",
                    "attrs": {
                      "data-blok-acc-panel": ""
                    },
                    "children": [
                      {
                        "tag": "p",
                        "key": "p-30",
                        "style": {
                          "base": {
                            "margin-top": "0",
                            "margin-right": "0",
                            "margin-bottom": "0",
                            "margin-left": "0",
                            "padding-top": "0",
                            "padding-right": "20px",
                            "padding-bottom": "20px",
                            "padding-left": "20px",
                            "font-size": "16px",
                            "line-height": "1.6",
                            "color": "#4E545D"
                          }
                        },
                        "text": "Drag their jobs to another crew on the dispatch board. Routes and customer texts update together."
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
                    "border-top-left-radius": "14px",
                    "border-top-right-radius": "14px",
                    "border-bottom-right-radius": "14px",
                    "border-bottom-left-radius": "14px",
                    "border-top-width": "1px",
                    "border-top-style": "solid",
                    "border-top-color": "#E9EBE5",
                    "border-right-width": "1px",
                    "border-right-style": "solid",
                    "border-right-color": "#E9EBE5",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#E9EBE5",
                    "border-left-width": "1px",
                    "border-left-style": "solid",
                    "border-left-color": "#E9EBE5",
                    "background-color": "#FFFFFF"
                  }
                },
                "attrs": {
                  "data-blok-acc-item": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-35",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "align-items": "center",
                        "row-gap": "16px",
                        "column-gap": "16px",
                        "width": "100%",
                        "min-height": "64px",
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
                        "background-color": "transparent",
                        "cursor": "pointer",
                        "text-align": "left",
                        "color": "#0F1115"
                      }
                    },
                    "attrs": {
                      "aria-expanded": "false",
                      "data-blok-acc-trigger": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-33",
                        "style": {
                          "base": {
                            "font-size": "17px",
                            "font-weight": "600"
                          }
                        },
                        "text": "Can I cancel any time?"
                      },
                      {
                        "tag": "div",
                        "key": "div-34",
                        "style": {
                          "base": {
                            "flex-shrink": "0",
                            "width": "28px",
                            "height": "28px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "font-size": "18px",
                            "background-color": "#F1F2EE",
                            "color": "#0F1115"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true",
                          "data-blok-acc-icon": ""
                        },
                        "text": "+"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "panel-37",
                    "attrs": {
                      "data-blok-acc-panel": ""
                    },
                    "children": [
                      {
                        "tag": "p",
                        "key": "p-36",
                        "style": {
                          "base": {
                            "margin-top": "0",
                            "margin-right": "0",
                            "margin-bottom": "0",
                            "margin-left": "0",
                            "padding-top": "0",
                            "padding-right": "20px",
                            "padding-bottom": "20px",
                            "padding-left": "20px",
                            "font-size": "16px",
                            "line-height": "1.6",
                            "color": "#4E545D"
                          }
                        },
                        "text": "Yes. [Describe your cancellation and refund terms.] You can export all your data first."
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
                    "border-top-left-radius": "14px",
                    "border-top-right-radius": "14px",
                    "border-bottom-right-radius": "14px",
                    "border-bottom-left-radius": "14px",
                    "border-top-width": "1px",
                    "border-top-style": "solid",
                    "border-top-color": "#E9EBE5",
                    "border-right-width": "1px",
                    "border-right-style": "solid",
                    "border-right-color": "#E9EBE5",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#E9EBE5",
                    "border-left-width": "1px",
                    "border-left-style": "solid",
                    "border-left-color": "#E9EBE5",
                    "background-color": "#FFFFFF"
                  }
                },
                "attrs": {
                  "data-blok-acc-item": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-41",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "align-items": "center",
                        "row-gap": "16px",
                        "column-gap": "16px",
                        "width": "100%",
                        "min-height": "64px",
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
                        "background-color": "transparent",
                        "cursor": "pointer",
                        "text-align": "left",
                        "color": "#0F1115"
                      }
                    },
                    "attrs": {
                      "aria-expanded": "false",
                      "data-blok-acc-trigger": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-39",
                        "style": {
                          "base": {
                            "font-size": "17px",
                            "font-weight": "600"
                          }
                        },
                        "text": "Do you work for bin cleaning and pressure washing?"
                      },
                      {
                        "tag": "div",
                        "key": "div-40",
                        "style": {
                          "base": {
                            "flex-shrink": "0",
                            "width": "28px",
                            "height": "28px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "font-size": "18px",
                            "background-color": "#F1F2EE",
                            "color": "#0F1115"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true",
                          "data-blok-acc-icon": ""
                        },
                        "text": "+"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "panel-43",
                    "attrs": {
                      "data-blok-acc-panel": ""
                    },
                    "children": [
                      {
                        "tag": "p",
                        "key": "p-42",
                        "style": {
                          "base": {
                            "margin-top": "0",
                            "margin-right": "0",
                            "margin-bottom": "0",
                            "margin-left": "0",
                            "padding-top": "0",
                            "padding-right": "20px",
                            "padding-bottom": "20px",
                            "padding-left": "20px",
                            "font-size": "16px",
                            "line-height": "1.6",
                            "color": "#4E545D"
                          }
                        },
                        "text": "Yes. Any business that sends people to addresses on a schedule fits."
                      }
                    ]
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
