import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "changelog-03",
  "prefix": "changelog03",
  "name": "Changelog / Unread cards",
  "category": "changelog",
  "collection": "saas",
  "description": "Changelog / Unread cards for Harborline.",
  "props": {
    "icon1": {
      "type": "image",
      "default": {
        "src": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%235B616B%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20aria-hidden%3D%22true%22%3E%3Ccircle%20cx%3D%2211%22%20cy%3D%2211%22%20r%3D%227%22%3E%3C%2Fcircle%3E%3Cpath%20d%3D%22M20%2020l-3.5-3.5%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E",
        "alt": ""
      }
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "div-12",
        "div-61"
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
        "key": "div-62",
        "style": {
          "base": {
            "max-width": "1200px",
            "margin-top": "0",
            "margin-right": "auto",
            "margin-bottom": "0",
            "margin-left": "auto",
            "display": "flex",
            "flex-direction": "column",
            "row-gap": "26px",
            "column-gap": "26px"
          }
        },
        "children": [
          {
            "tag": "div",
            "key": "div-12",
            "style": {
              "base": {
                "display": "flex",
                "flex-wrap": "wrap",
                "justify-content": "space-between",
                "align-items": "flex-end",
                "row-gap": "16px",
                "column-gap": "16px"
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
                    "text": "What’s new"
                  },
                  {
                    "tag": "h2",
                    "key": "h2-4",
                    "style": {
                      "base": {
                        "margin-top": "0",
                        "margin-right": "0",
                        "margin-bottom": "0",
                        "margin-left": "0",
                        "display": "flex",
                        "align-items": "center",
                        "row-gap": "14px",
                        "column-gap": "14px",
                        "font-size": "clamp(34px, 4.4vw, 56px)",
                        "line-height": "1.02",
                        "letter-spacing": "-0.04em",
                        "font-weight": "600"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "text-3",
                        "text": "Updates"
                      },
                      {
                        "tag": "div",
                        "key": "div-2",
                        "style": {
                          "base": {
                            "padding-top": "6px",
                            "padding-right": "14px",
                            "padding-bottom": "6px",
                            "padding-left": "14px",
                            "border-top-left-radius": "999px",
                            "border-top-right-radius": "999px",
                            "border-bottom-right-radius": "999px",
                            "border-bottom-left-radius": "999px",
                            "font-size": "18px",
                            "letter-spacing": "0",
                            "background-color": "#2D4BF0",
                            "color": "#FFFFFF"
                          }
                        },
                        "text": "3 unread"
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-11",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-wrap": "wrap",
                    "row-gap": "10px",
                    "column-gap": "10px",
                    "align-items": "center"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-9",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "row-gap": "10px",
                        "column-gap": "10px",
                        "height": "48px",
                        "padding-top": "0",
                        "padding-right": "14px",
                        "padding-bottom": "0",
                        "padding-left": "14px",
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
                        "border-left-color": "#DDE0D8",
                        "min-width": "260px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-6",
                        "style": {
                          "base": {
                            "position": "absolute",
                            "width": "1px",
                            "height": "1px",
                            "overflow": "hidden",
                            "clip": "rect(0 0 0 0)"
                          }
                        },
                        "text": "Search updates"
                      },
                      {
                        "tag": "img",
                        "key": "icon-7",
                        "bind": "icon1",
                        "decorative": true,
                        "style": {
                          "base": {
                            "width": "16px",
                            "height": "16px",
                            "flex-shrink": "0"
                          }
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-8",
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
                            "font-size": "15px",
                            "color": "#0F1115"
                          }
                        },
                        "text": "Search updates"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-10",
                    "style": {
                      "base": {
                        "height": "48px",
                        "padding-top": "0",
                        "padding-right": "16px",
                        "padding-bottom": "0",
                        "padding-left": "16px",
                        "border-top-left-radius": "12px",
                        "border-top-right-radius": "12px",
                        "border-bottom-right-radius": "12px",
                        "border-bottom-left-radius": "12px",
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
                        "font-weight": "500",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "text": "Mark all read"
                  }
                ]
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-61",
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
                "grid-template-columns": "repeat(3, minmax(0, 1fr))"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-20",
                "style": {
                  "base": {
                    "position": "relative",
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "12px",
                    "column-gap": "12px",
                    "padding-top": "22px",
                    "padding-right": "22px",
                    "padding-bottom": "22px",
                    "padding-left": "22px",
                    "border-top-left-radius": "18px",
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                    "border-bottom-left-radius": "18px",
                    "background-color": "#FFFFFF",
                    "border-top-width": "1px",
                    "border-top-style": "solid",
                    "border-top-color": "#C5CFFB",
                    "border-right-width": "1px",
                    "border-right-style": "solid",
                    "border-right-color": "#C5CFFB",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#C5CFFB",
                    "border-left-width": "1px",
                    "border-left-style": "solid",
                    "border-left-color": "#C5CFFB"
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
                        "row-gap": "10px",
                        "column-gap": "10px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-13",
                        "style": {
                          "base": {
                            "width": "10px",
                            "height": "10px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "background-color": "#2D4BF0"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-14",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Oct 8"
                      },
                      {
                        "tag": "div",
                        "key": "div-15",
                        "style": {
                          "base": {
                            "margin-left": "auto",
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
                        "text": "New"
                      }
                    ]
                  },
                  {
                    "tag": "h3",
                    "key": "h3-17",
                    "style": {
                      "base": {
                        "margin-top": "0",
                        "margin-right": "0",
                        "margin-bottom": "0",
                        "margin-left": "0",
                        "font-size": "20px",
                        "letter-spacing": "-0.02em",
                        "font-weight": "600"
                      }
                    },
                    "text": "Route optimization"
                  },
                  {
                    "tag": "p",
                    "key": "p-18",
                    "style": {
                      "base": {
                        "margin-top": "0",
                        "margin-right": "0",
                        "margin-bottom": "0",
                        "margin-left": "0",
                        "font-size": "15px",
                        "line-height": "1.55",
                        "color": "#4E545D"
                      }
                    },
                    "text": "Reorder a crew’s day for the shortest drive."
                  },
                  {
                    "tag": "div",
                    "key": "div-19",
                    "style": {
                      "base": {
                        "align-self": "flex-start",
                        "height": "36px",
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
                        "font-size": "14px",
                        "font-weight": "500",
                        "color": "#2D4BF0",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "text": "Mark read"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-28",
                "style": {
                  "base": {
                    "position": "relative",
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "12px",
                    "column-gap": "12px",
                    "padding-top": "22px",
                    "padding-right": "22px",
                    "padding-bottom": "22px",
                    "padding-left": "22px",
                    "border-top-left-radius": "18px",
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                    "border-bottom-left-radius": "18px",
                    "background-color": "#FFFFFF",
                    "border-top-width": "1px",
                    "border-top-style": "solid",
                    "border-top-color": "#C5CFFB",
                    "border-right-width": "1px",
                    "border-right-style": "solid",
                    "border-right-color": "#C5CFFB",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#C5CFFB",
                    "border-left-width": "1px",
                    "border-left-style": "solid",
                    "border-left-color": "#C5CFFB"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-24",
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
                        "key": "div-21",
                        "style": {
                          "base": {
                            "width": "10px",
                            "height": "10px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "background-color": "#2D4BF0"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-22",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Oct 1"
                      },
                      {
                        "tag": "div",
                        "key": "div-23",
                        "style": {
                          "base": {
                            "margin-left": "auto",
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
                        "text": "Improved"
                      }
                    ]
                  },
                  {
                    "tag": "h3",
                    "key": "h3-25",
                    "style": {
                      "base": {
                        "margin-top": "0",
                        "margin-right": "0",
                        "margin-bottom": "0",
                        "margin-left": "0",
                        "font-size": "20px",
                        "letter-spacing": "-0.02em",
                        "font-weight": "600"
                      }
                    },
                    "text": "Faster dispatch board"
                  },
                  {
                    "tag": "p",
                    "key": "p-26",
                    "style": {
                      "base": {
                        "margin-top": "0",
                        "margin-right": "0",
                        "margin-bottom": "0",
                        "margin-left": "0",
                        "font-size": "15px",
                        "line-height": "1.55",
                        "color": "#4E545D"
                      }
                    },
                    "text": "Smoother dragging on large boards."
                  },
                  {
                    "tag": "div",
                    "key": "div-27",
                    "style": {
                      "base": {
                        "align-self": "flex-start",
                        "height": "36px",
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
                        "font-size": "14px",
                        "font-weight": "500",
                        "color": "#2D4BF0",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "text": "Mark read"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-36",
                "style": {
                  "base": {
                    "position": "relative",
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "12px",
                    "column-gap": "12px",
                    "padding-top": "22px",
                    "padding-right": "22px",
                    "padding-bottom": "22px",
                    "padding-left": "22px",
                    "border-top-left-radius": "18px",
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                    "border-bottom-left-radius": "18px",
                    "background-color": "#FFFFFF",
                    "border-top-width": "1px",
                    "border-top-style": "solid",
                    "border-top-color": "#C5CFFB",
                    "border-right-width": "1px",
                    "border-right-style": "solid",
                    "border-right-color": "#C5CFFB",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#C5CFFB",
                    "border-left-width": "1px",
                    "border-left-style": "solid",
                    "border-left-color": "#C5CFFB"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-32",
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
                        "key": "div-29",
                        "style": {
                          "base": {
                            "width": "10px",
                            "height": "10px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "background-color": "#2D4BF0"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-30",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Sep 24"
                      },
                      {
                        "tag": "div",
                        "key": "div-31",
                        "style": {
                          "base": {
                            "margin-left": "auto",
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
                        "text": "Fixed"
                      }
                    ]
                  },
                  {
                    "tag": "h3",
                    "key": "h3-33",
                    "style": {
                      "base": {
                        "margin-top": "0",
                        "margin-right": "0",
                        "margin-bottom": "0",
                        "margin-left": "0",
                        "font-size": "20px",
                        "letter-spacing": "-0.02em",
                        "font-weight": "600"
                      }
                    },
                    "text": "Reminder time zones"
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
                        "font-size": "15px",
                        "line-height": "1.55",
                        "color": "#4E545D"
                      }
                    },
                    "text": "Reminders arrive at local time."
                  },
                  {
                    "tag": "div",
                    "key": "div-35",
                    "style": {
                      "base": {
                        "align-self": "flex-start",
                        "height": "36px",
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
                        "font-size": "14px",
                        "font-weight": "500",
                        "color": "#2D4BF0",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "text": "Mark read"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-44",
                "style": {
                  "base": {
                    "position": "relative",
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "12px",
                    "column-gap": "12px",
                    "padding-top": "22px",
                    "padding-right": "22px",
                    "padding-bottom": "22px",
                    "padding-left": "22px",
                    "border-top-left-radius": "18px",
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                    "border-bottom-left-radius": "18px",
                    "background-color": "#FAFAF8",
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
                    "border-left-color": "#E9EBE5"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-40",
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
                        "key": "div-37",
                        "style": {
                          "base": {
                            "width": "10px",
                            "height": "10px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "background-color": "transparent"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-38",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Sep 17"
                      },
                      {
                        "tag": "div",
                        "key": "div-39",
                        "style": {
                          "base": {
                            "margin-left": "auto",
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
                        "text": "New"
                      }
                    ]
                  },
                  {
                    "tag": "h3",
                    "key": "h3-41",
                    "style": {
                      "base": {
                        "margin-top": "0",
                        "margin-right": "0",
                        "margin-bottom": "0",
                        "margin-left": "0",
                        "font-size": "20px",
                        "letter-spacing": "-0.02em",
                        "font-weight": "600"
                      }
                    },
                    "text": "Payment links by text"
                  },
                  {
                    "tag": "p",
                    "key": "p-42",
                    "style": {
                      "base": {
                        "margin-top": "0",
                        "margin-right": "0",
                        "margin-bottom": "0",
                        "margin-left": "0",
                        "font-size": "15px",
                        "line-height": "1.55",
                        "color": "#4E545D"
                      }
                    },
                    "text": "Invoices with a pay button, by text."
                  },
                  {
                    "tag": "div",
                    "key": "div-43",
                    "style": {
                      "base": {
                        "align-self": "flex-start",
                        "height": "36px",
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
                        "font-size": "14px",
                        "font-weight": "500",
                        "color": "#2D4BF0",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "text": "Mark unread"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-52",
                "style": {
                  "base": {
                    "position": "relative",
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "12px",
                    "column-gap": "12px",
                    "padding-top": "22px",
                    "padding-right": "22px",
                    "padding-bottom": "22px",
                    "padding-left": "22px",
                    "border-top-left-radius": "18px",
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                    "border-bottom-left-radius": "18px",
                    "background-color": "#FAFAF8",
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
                    "border-left-color": "#E9EBE5"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-48",
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
                        "key": "div-45",
                        "style": {
                          "base": {
                            "width": "10px",
                            "height": "10px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "background-color": "transparent"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-46",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Sep 10"
                      },
                      {
                        "tag": "div",
                        "key": "div-47",
                        "style": {
                          "base": {
                            "margin-left": "auto",
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
                        "text": "Improved"
                      }
                    ]
                  },
                  {
                    "tag": "h3",
                    "key": "h3-49",
                    "style": {
                      "base": {
                        "margin-top": "0",
                        "margin-right": "0",
                        "margin-bottom": "0",
                        "margin-left": "0",
                        "font-size": "20px",
                        "letter-spacing": "-0.02em",
                        "font-weight": "600"
                      }
                    },
                    "text": "Crew app offline mode"
                  },
                  {
                    "tag": "p",
                    "key": "p-50",
                    "style": {
                      "base": {
                        "margin-top": "0",
                        "margin-right": "0",
                        "margin-bottom": "0",
                        "margin-left": "0",
                        "font-size": "15px",
                        "line-height": "1.55",
                        "color": "#4E545D"
                      }
                    },
                    "text": "Photos save without signal."
                  },
                  {
                    "tag": "div",
                    "key": "div-51",
                    "style": {
                      "base": {
                        "align-self": "flex-start",
                        "height": "36px",
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
                        "font-size": "14px",
                        "font-weight": "500",
                        "color": "#2D4BF0",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "text": "Mark unread"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-60",
                "style": {
                  "base": {
                    "position": "relative",
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "12px",
                    "column-gap": "12px",
                    "padding-top": "22px",
                    "padding-right": "22px",
                    "padding-bottom": "22px",
                    "padding-left": "22px",
                    "border-top-left-radius": "18px",
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                    "border-bottom-left-radius": "18px",
                    "background-color": "#FAFAF8",
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
                    "border-left-color": "#E9EBE5"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-56",
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
                        "key": "div-53",
                        "style": {
                          "base": {
                            "width": "10px",
                            "height": "10px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "background-color": "transparent"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-54",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Aug 20"
                      },
                      {
                        "tag": "div",
                        "key": "div-55",
                        "style": {
                          "base": {
                            "margin-left": "auto",
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
                        "text": "New"
                      }
                    ]
                  },
                  {
                    "tag": "h3",
                    "key": "h3-57",
                    "style": {
                      "base": {
                        "margin-top": "0",
                        "margin-right": "0",
                        "margin-bottom": "0",
                        "margin-left": "0",
                        "font-size": "20px",
                        "letter-spacing": "-0.02em",
                        "font-weight": "600"
                      }
                    },
                    "text": "Customer booking page"
                  },
                  {
                    "tag": "p",
                    "key": "p-58",
                    "style": {
                      "base": {
                        "margin-top": "0",
                        "margin-right": "0",
                        "margin-bottom": "0",
                        "margin-left": "0",
                        "font-size": "15px",
                        "line-height": "1.55",
                        "color": "#4E545D"
                      }
                    },
                    "text": "Customers pick from your open slots."
                  },
                  {
                    "tag": "div",
                    "key": "div-59",
                    "style": {
                      "base": {
                        "align-self": "flex-start",
                        "height": "36px",
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
                        "font-size": "14px",
                        "font-weight": "500",
                        "color": "#2D4BF0",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "text": "Mark unread"
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
