import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "changelog-01",
  "prefix": "changelog01",
  "name": "Changelog / Filtered feed",
  "category": "changelog",
  "collection": "saas",
  "description": "Changelog / Filtered feed for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "What’s new"
    },
    "subheading": {
      "type": "text",
      "default": "Reorder a crew’s day for the shortest drive with one click. Customers get updated arrival windows automatically."
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-5",
        "div-18",
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
        "background-color": "#F4F5F1",
        "padding-top": "clamp(56px, 8vw, 104px)",
        "padding-right": "clamp(20px, 4vw, 48px)",
        "padding-bottom": "clamp(56px, 8vw, 104px)",
        "padding-left": "clamp(20px, 4vw, 48px)"
      }
    },
    "children": [
      {
        "tag": "div",
        "key": "div-60",
        "style": {
          "base": {
            "max-width": "900px",
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
            "key": "div-5",
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
                "key": "div-3",
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
                    "text": "Changelog"
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
                "tag": "a",
                "key": "a-4",
                "style": {
                  "base": {
                    "font-weight": "500",
                    "text-decoration": "none",
                    "color": "#2D4BF0"
                  }
                },
                "href": "#",
                "text": "Subscribe to updates"
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-18",
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
              "aria-label": "Filter updates",
              "data-blok-choices": "",
              "data-blok-multi": ""
            },
            "children": [
              {
                "tag": "div",
                "key": "div-8",
                "style": {
                  "base": {
                    "display": "flex",
                    "align-items": "center",
                    "row-gap": "8px",
                    "column-gap": "8px",
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
                    "key": "div-6",
                    "style": {
                      "base": {
                        "width": "8px",
                        "height": "8px",
                        "border-top-left-radius": "50%",
                        "border-top-right-radius": "50%",
                        "border-bottom-right-radius": "50%",
                        "border-bottom-left-radius": "50%",
                        "background-color": "#0F1115"
                      }
                    },
                    "attrs": {
                      "aria-hidden": "true"
                    }
                  },
                  {
                    "tag": "div",
                    "key": "text-7",
                    "text": "All"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-11",
                "style": {
                  "base": {
                    "display": "flex",
                    "align-items": "center",
                    "row-gap": "8px",
                    "column-gap": "8px",
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
                    "key": "div-9",
                    "style": {
                      "base": {
                        "width": "8px",
                        "height": "8px",
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
                    "key": "text-10",
                    "text": "New"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-14",
                "style": {
                  "base": {
                    "display": "flex",
                    "align-items": "center",
                    "row-gap": "8px",
                    "column-gap": "8px",
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
                    "key": "div-12",
                    "style": {
                      "base": {
                        "width": "8px",
                        "height": "8px",
                        "border-top-left-radius": "50%",
                        "border-top-right-radius": "50%",
                        "border-bottom-right-radius": "50%",
                        "border-bottom-left-radius": "50%",
                        "background-color": "#1D6B3A"
                      }
                    },
                    "attrs": {
                      "aria-hidden": "true"
                    }
                  },
                  {
                    "tag": "div",
                    "key": "text-13",
                    "text": "Improved"
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
                    "row-gap": "8px",
                    "column-gap": "8px",
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
                    "key": "div-15",
                    "style": {
                      "base": {
                        "width": "8px",
                        "height": "8px",
                        "border-top-left-radius": "50%",
                        "border-top-right-radius": "50%",
                        "border-bottom-right-radius": "50%",
                        "border-bottom-left-radius": "50%",
                        "background-color": "#9A4A12"
                      }
                    },
                    "attrs": {
                      "aria-hidden": "true"
                    }
                  },
                  {
                    "tag": "div",
                    "key": "text-16",
                    "text": "Fixed"
                  }
                ]
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-59",
            "style": {
              "base": {
                "display": "flex",
                "flex-direction": "column",
                "border-top-width": "1px",
                "border-top-style": "solid",
                "border-top-color": "#DDE0D8"
              }
            },
            "attrs": {
              "data-blok-accordion": ""
            },
            "children": [
              {
                "tag": "div",
                "key": "div-26",
                "style": {
                  "base": {
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#DDE0D8"
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
                        "flex-wrap": "wrap",
                        "align-items": "center",
                        "row-gap": "12px",
                        "column-gap": "18px",
                        "width": "100%",
                        "min-height": "72px",
                        "padding-top": "14px",
                        "padding-right": "0",
                        "padding-bottom": "14px",
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
                      "aria-expanded": "true",
                      "data-blok-acc-trigger": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-19",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px",
                            "color": "#5B616B",
                            "min-width": "92px"
                          }
                        },
                        "text": "Oct 8"
                      },
                      {
                        "tag": "div",
                        "key": "div-20",
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
                        "text": "New"
                      },
                      {
                        "tag": "div",
                        "key": "div-21",
                        "style": {
                          "base": {
                            "flex-grow": "1",
                            "flex-shrink": "1",
                            "flex-basis": "260px",
                            "font-size": "18px",
                            "font-weight": "600",
                            "letter-spacing": "-0.015em"
                          }
                        },
                        "text": "Route optimization"
                      },
                      {
                        "tag": "div",
                        "key": "div-22",
                        "style": {
                          "base": {
                            "font-size": "18px",
                            "color": "#5B616B"
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
                    "key": "panel-25",
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
                            "padding-right": "0",
                            "padding-bottom": "22px",
                            "padding-left": "110px",
                            "max-width": "640px",
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
                "key": "div-34",
                "style": {
                  "base": {
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#DDE0D8"
                  }
                },
                "attrs": {
                  "data-blok-acc-item": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-31",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-wrap": "wrap",
                        "align-items": "center",
                        "row-gap": "12px",
                        "column-gap": "18px",
                        "width": "100%",
                        "min-height": "72px",
                        "padding-top": "14px",
                        "padding-right": "0",
                        "padding-bottom": "14px",
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
                      "aria-expanded": "false",
                      "data-blok-acc-trigger": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-27",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px",
                            "color": "#5B616B",
                            "min-width": "92px"
                          }
                        },
                        "text": "Oct 1"
                      },
                      {
                        "tag": "div",
                        "key": "div-28",
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
                            "background-color": "#E5F4EA",
                            "color": "#1D6B3A"
                          }
                        },
                        "text": "Improved"
                      },
                      {
                        "tag": "div",
                        "key": "div-29",
                        "style": {
                          "base": {
                            "flex-grow": "1",
                            "flex-shrink": "1",
                            "flex-basis": "260px",
                            "font-size": "18px",
                            "font-weight": "600",
                            "letter-spacing": "-0.015em"
                          }
                        },
                        "text": "Faster dispatch board"
                      },
                      {
                        "tag": "div",
                        "key": "div-30",
                        "style": {
                          "base": {
                            "font-size": "18px",
                            "color": "#5B616B"
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
                    "key": "panel-33",
                    "attrs": {
                      "data-blok-acc-panel": ""
                    },
                    "children": [
                      {
                        "tag": "p",
                        "key": "p-32",
                        "style": {
                          "base": {
                            "margin-top": "0",
                            "margin-right": "0",
                            "margin-bottom": "0",
                            "margin-left": "0",
                            "padding-top": "0",
                            "padding-right": "0",
                            "padding-bottom": "22px",
                            "padding-left": "110px",
                            "max-width": "640px",
                            "font-size": "16px",
                            "line-height": "1.6",
                            "color": "#4E545D"
                          }
                        },
                        "text": "Dragging jobs between crews is smoother on large boards, and conflicts show before you drop."
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-42",
                "style": {
                  "base": {
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#DDE0D8"
                  }
                },
                "attrs": {
                  "data-blok-acc-item": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-39",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-wrap": "wrap",
                        "align-items": "center",
                        "row-gap": "12px",
                        "column-gap": "18px",
                        "width": "100%",
                        "min-height": "72px",
                        "padding-top": "14px",
                        "padding-right": "0",
                        "padding-bottom": "14px",
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
                      "aria-expanded": "false",
                      "data-blok-acc-trigger": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-35",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px",
                            "color": "#5B616B",
                            "min-width": "92px"
                          }
                        },
                        "text": "Sep 24"
                      },
                      {
                        "tag": "div",
                        "key": "div-36",
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
                            "background-color": "#FDEFE4",
                            "color": "#9A4A12"
                          }
                        },
                        "text": "Fixed"
                      },
                      {
                        "tag": "div",
                        "key": "div-37",
                        "style": {
                          "base": {
                            "flex-grow": "1",
                            "flex-shrink": "1",
                            "flex-basis": "260px",
                            "font-size": "18px",
                            "font-weight": "600",
                            "letter-spacing": "-0.015em"
                          }
                        },
                        "text": "Reminder time zones"
                      },
                      {
                        "tag": "div",
                        "key": "div-38",
                        "style": {
                          "base": {
                            "font-size": "18px",
                            "color": "#5B616B"
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
                    "key": "panel-41",
                    "attrs": {
                      "data-blok-acc-panel": ""
                    },
                    "children": [
                      {
                        "tag": "p",
                        "key": "p-40",
                        "style": {
                          "base": {
                            "margin-top": "0",
                            "margin-right": "0",
                            "margin-bottom": "0",
                            "margin-left": "0",
                            "padding-top": "0",
                            "padding-right": "0",
                            "padding-bottom": "22px",
                            "padding-left": "110px",
                            "max-width": "640px",
                            "font-size": "16px",
                            "line-height": "1.6",
                            "color": "#4E545D"
                          }
                        },
                        "text": "Reminders for customers in a different time zone from your business now go out at the right local time."
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
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#DDE0D8"
                  }
                },
                "attrs": {
                  "data-blok-acc-item": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-47",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-wrap": "wrap",
                        "align-items": "center",
                        "row-gap": "12px",
                        "column-gap": "18px",
                        "width": "100%",
                        "min-height": "72px",
                        "padding-top": "14px",
                        "padding-right": "0",
                        "padding-bottom": "14px",
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
                      "aria-expanded": "false",
                      "data-blok-acc-trigger": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-43",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px",
                            "color": "#5B616B",
                            "min-width": "92px"
                          }
                        },
                        "text": "Sep 17"
                      },
                      {
                        "tag": "div",
                        "key": "div-44",
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
                        "text": "New"
                      },
                      {
                        "tag": "div",
                        "key": "div-45",
                        "style": {
                          "base": {
                            "flex-grow": "1",
                            "flex-shrink": "1",
                            "flex-basis": "260px",
                            "font-size": "18px",
                            "font-weight": "600",
                            "letter-spacing": "-0.015em"
                          }
                        },
                        "text": "Payment links by text"
                      },
                      {
                        "tag": "div",
                        "key": "div-46",
                        "style": {
                          "base": {
                            "font-size": "18px",
                            "color": "#5B616B"
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
                    "key": "panel-49",
                    "attrs": {
                      "data-blok-acc-panel": ""
                    },
                    "children": [
                      {
                        "tag": "p",
                        "key": "p-48",
                        "style": {
                          "base": {
                            "margin-top": "0",
                            "margin-right": "0",
                            "margin-bottom": "0",
                            "margin-left": "0",
                            "padding-top": "0",
                            "padding-right": "0",
                            "padding-bottom": "22px",
                            "padding-left": "110px",
                            "max-width": "640px",
                            "font-size": "16px",
                            "line-height": "1.6",
                            "color": "#4E545D"
                          }
                        },
                        "text": "Send an invoice as a text message with a pay button. Works for customers without email."
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-58",
                "style": {
                  "base": {
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#DDE0D8"
                  }
                },
                "attrs": {
                  "data-blok-acc-item": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-55",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-wrap": "wrap",
                        "align-items": "center",
                        "row-gap": "12px",
                        "column-gap": "18px",
                        "width": "100%",
                        "min-height": "72px",
                        "padding-top": "14px",
                        "padding-right": "0",
                        "padding-bottom": "14px",
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
                      "aria-expanded": "false",
                      "data-blok-acc-trigger": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-51",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px",
                            "color": "#5B616B",
                            "min-width": "92px"
                          }
                        },
                        "text": "Sep 10"
                      },
                      {
                        "tag": "div",
                        "key": "div-52",
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
                            "background-color": "#E5F4EA",
                            "color": "#1D6B3A"
                          }
                        },
                        "text": "Improved"
                      },
                      {
                        "tag": "div",
                        "key": "div-53",
                        "style": {
                          "base": {
                            "flex-grow": "1",
                            "flex-shrink": "1",
                            "flex-basis": "260px",
                            "font-size": "18px",
                            "font-weight": "600",
                            "letter-spacing": "-0.015em"
                          }
                        },
                        "text": "Crew app offline mode"
                      },
                      {
                        "tag": "div",
                        "key": "div-54",
                        "style": {
                          "base": {
                            "font-size": "18px",
                            "color": "#5B616B"
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
                    "key": "panel-57",
                    "attrs": {
                      "data-blok-acc-panel": ""
                    },
                    "children": [
                      {
                        "tag": "p",
                        "key": "p-56",
                        "style": {
                          "base": {
                            "margin-top": "0",
                            "margin-right": "0",
                            "margin-bottom": "0",
                            "margin-left": "0",
                            "padding-top": "0",
                            "padding-right": "0",
                            "padding-bottom": "22px",
                            "padding-left": "110px",
                            "max-width": "640px",
                            "font-size": "16px",
                            "line-height": "1.6",
                            "color": "#4E545D"
                          }
                        },
                        "text": "Checklists and photos save in the truck and upload when the phone finds signal again."
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
