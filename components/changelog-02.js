import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "changelog-02",
  "prefix": "changelog02",
  "name": "Changelog / Month timeline",
  "category": "changelog",
  "collection": "saas",
  "description": "Changelog / Month timeline for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "Shipped"
    },
    "subheading": {
      "type": "text",
      "default": "Reorder a crew’s day for the shortest drive with one click."
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-18",
        "stack-136"
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
        "key": "div-34",
        "style": {
          "base": {
            "max-width": "1100px",
            "margin-top": "0",
            "margin-right": "auto",
            "margin-bottom": "0",
            "margin-left": "auto",
            "display": "flex",
            "flex-wrap": "wrap",
            "row-gap": "clamp(28px, 5vw, 64px)",
            "column-gap": "clamp(28px, 5vw, 64px)"
          }
        },
        "children": [
          {
            "tag": "div",
            "key": "div-18",
            "style": {
              "base": {
                "flex-grow": "0",
                "flex-shrink": "1",
                "flex-basis": "240px",
                "display": "flex",
                "flex-direction": "column",
                "row-gap": "22px",
                "column-gap": "22px"
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
                    "row-gap": "12px",
                    "column-gap": "12px"
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
                        "font-size": "clamp(34px, 4vw, 48px)",
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
                "key": "div-16",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "2px",
                    "column-gap": "2px",
                    "border-left-width": "2px",
                    "border-left-style": "solid",
                    "border-left-color": "#ECEEE8"
                  }
                },
                "attrs": {
                  "aria-label": "Months"
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-6",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "align-items": "center",
                        "min-height": "44px",
                        "margin-left": "-2px",
                        "padding-top": "0",
                        "padding-right": "14px",
                        "padding-bottom": "0",
                        "padding-left": "14px",
                        "border-top-width": "0",
                        "border-top-style": "none",
                        "border-top-color": "transparent",
                        "border-right-width": "0",
                        "border-right-style": "none",
                        "border-right-color": "transparent",
                        "border-bottom-width": "0",
                        "border-bottom-style": "none",
                        "border-bottom-color": "transparent",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#2D4BF0",
                        "background-color": "transparent",
                        "cursor": "pointer",
                        "text-align": "left",
                        "color": "#0F1115",
                        "font-weight": "600"
                      }
                    },
                    "attrs": {
                      "aria-current": "page",
                      "data-blok-panel-go": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-4",
                        "style": {
                          "base": {
                            "font-size": "16px"
                          }
                        },
                        "text": "October 2026"
                      },
                      {
                        "tag": "div",
                        "key": "div-5",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#7A808A"
                          }
                        },
                        "text": "2"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-9",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "align-items": "center",
                        "min-height": "44px",
                        "margin-left": "-2px",
                        "padding-top": "0",
                        "padding-right": "14px",
                        "padding-bottom": "0",
                        "padding-left": "14px",
                        "border-top-width": "0",
                        "border-top-style": "none",
                        "border-top-color": "transparent",
                        "border-right-width": "0",
                        "border-right-style": "none",
                        "border-right-color": "transparent",
                        "border-bottom-width": "0",
                        "border-bottom-style": "none",
                        "border-bottom-color": "transparent",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "transparent",
                        "background-color": "transparent",
                        "cursor": "pointer",
                        "text-align": "left",
                        "color": "#5B616B",
                        "font-weight": "400"
                      }
                    },
                    "attrs": {
                      "aria-current": "false",
                      "data-blok-panel-go": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-7",
                        "style": {
                          "base": {
                            "font-size": "16px"
                          }
                        },
                        "text": "September 2026"
                      },
                      {
                        "tag": "div",
                        "key": "div-8",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#7A808A"
                          }
                        },
                        "text": "3"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-12",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "align-items": "center",
                        "min-height": "44px",
                        "margin-left": "-2px",
                        "padding-top": "0",
                        "padding-right": "14px",
                        "padding-bottom": "0",
                        "padding-left": "14px",
                        "border-top-width": "0",
                        "border-top-style": "none",
                        "border-top-color": "transparent",
                        "border-right-width": "0",
                        "border-right-style": "none",
                        "border-right-color": "transparent",
                        "border-bottom-width": "0",
                        "border-bottom-style": "none",
                        "border-bottom-color": "transparent",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "transparent",
                        "background-color": "transparent",
                        "cursor": "pointer",
                        "text-align": "left",
                        "color": "#5B616B",
                        "font-weight": "400"
                      }
                    },
                    "attrs": {
                      "aria-current": "false",
                      "data-blok-panel-go": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-10",
                        "style": {
                          "base": {
                            "font-size": "16px"
                          }
                        },
                        "text": "August 2026"
                      },
                      {
                        "tag": "div",
                        "key": "div-11",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#7A808A"
                          }
                        },
                        "text": "1"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-15",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "align-items": "center",
                        "min-height": "44px",
                        "margin-left": "-2px",
                        "padding-top": "0",
                        "padding-right": "14px",
                        "padding-bottom": "0",
                        "padding-left": "14px",
                        "border-top-width": "0",
                        "border-top-style": "none",
                        "border-top-color": "transparent",
                        "border-right-width": "0",
                        "border-right-style": "none",
                        "border-right-color": "transparent",
                        "border-bottom-width": "0",
                        "border-bottom-style": "none",
                        "border-bottom-color": "transparent",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "transparent",
                        "background-color": "transparent",
                        "cursor": "pointer",
                        "text-align": "left",
                        "color": "#5B616B",
                        "font-weight": "400"
                      }
                    },
                    "attrs": {
                      "aria-current": "false",
                      "data-blok-panel-go": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-13",
                        "style": {
                          "base": {
                            "font-size": "16px"
                          }
                        },
                        "text": "July 2026"
                      },
                      {
                        "tag": "div",
                        "key": "div-14",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#7A808A"
                          }
                        },
                        "text": "2"
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "a",
                "key": "a-17",
                "style": {
                  "base": {
                    "font-weight": "500",
                    "text-decoration": "none",
                    "color": "#2D4BF0"
                  }
                },
                "href": "#",
                "text": "RSS feed"
              }
            ]
          },
          {
            "tag": "div",
            "key": "stack-136",
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
                "key": "div-33",
                "style": {
                  "base": {
                    "flex-grow": "999",
                    "flex-shrink": "1",
                    "flex-basis": "520px",
                    "min-width": "0",
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "18px",
                    "column-gap": "18px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-19",
                    "style": {
                      "base": {
                        "font-size": "28px",
                        "font-weight": "600",
                        "letter-spacing": "-0.03em"
                      }
                    },
                    "text": "October 2026"
                  },
                  {
                    "tag": "div",
                    "key": "div-26",
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
                        "border-left-color": "#E2E4DE"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-22",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-wrap": "wrap",
                            "align-items": "center",
                            "row-gap": "10px",
                            "column-gap": "10px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-20",
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
                            "key": "div-21",
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
                          }
                        ]
                      },
                      {
                        "tag": "h3",
                        "key": "h3-23",
                        "style": {
                          "base": {
                            "margin-top": "0",
                            "margin-right": "0",
                            "margin-bottom": "0",
                            "margin-left": "0",
                            "font-size": "22px",
                            "letter-spacing": "-0.02em",
                            "font-weight": "600"
                          }
                        },
                        "text": "Route optimization"
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
                            "line-height": "1.6",
                            "color": "#4E545D"
                          }
                        },
                        "bind": "subheading"
                      },
                      {
                        "tag": "div",
                        "key": "div-25",
                        "style": {
                          "base": {
                            "height": "180px",
                            "border-top-left-radius": "12px",
                            "border-top-right-radius": "12px",
                            "border-bottom-right-radius": "12px",
                            "border-bottom-left-radius": "12px",
                            "background-color": "#E8ECFE",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "[Screenshot]"
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
                        "padding-top": "22px",
                        "padding-right": "22px",
                        "padding-bottom": "22px",
                        "padding-left": "22px",
                        "border-top-left-radius": "18px",
                        "border-top-right-radius": "18px",
                        "border-bottom-right-radius": "18px",
                        "border-bottom-left-radius": "18px",
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
                        "border-left-color": "#E2E4DE"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-29",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-wrap": "wrap",
                            "align-items": "center",
                            "row-gap": "10px",
                            "column-gap": "10px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-27",
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
                          }
                        ]
                      },
                      {
                        "tag": "h3",
                        "key": "h3-30",
                        "style": {
                          "base": {
                            "margin-top": "0",
                            "margin-right": "0",
                            "margin-bottom": "0",
                            "margin-left": "0",
                            "font-size": "22px",
                            "letter-spacing": "-0.02em",
                            "font-weight": "600"
                          }
                        },
                        "text": "Faster dispatch board"
                      },
                      {
                        "tag": "p",
                        "key": "p-31",
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
                        "text": "Dragging jobs between crews is smoother on large boards."
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
                "key": "div-73",
                "style": {
                  "base": {
                    "flex-grow": "999",
                    "flex-shrink": "1",
                    "flex-basis": "520px",
                    "min-width": "0",
                    "display": "none",
                    "flex-direction": "column",
                    "row-gap": "18px",
                    "column-gap": "18px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-53",
                    "style": {
                      "base": {
                        "font-size": "28px",
                        "font-weight": "600",
                        "letter-spacing": "-0.03em"
                      }
                    },
                    "text": "September 2026"
                  },
                  {
                    "tag": "div",
                    "key": "div-59",
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
                        "border-left-color": "#E2E4DE"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-56",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-wrap": "wrap",
                            "align-items": "center",
                            "row-gap": "10px",
                            "column-gap": "10px"
                          }
                        },
                        "children": [
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
                            "text": "Sep 24"
                          },
                          {
                            "tag": "div",
                            "key": "div-55",
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
                            "font-size": "22px",
                            "letter-spacing": "-0.02em",
                            "font-weight": "600"
                          }
                        },
                        "text": "Reminder time zones"
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
                            "font-size": "16px",
                            "line-height": "1.6",
                            "color": "#4E545D"
                          }
                        },
                        "text": "Reminders now go out at the customer’s local time."
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-66",
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
                        "border-left-color": "#E2E4DE"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-62",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-wrap": "wrap",
                            "align-items": "center",
                            "row-gap": "10px",
                            "column-gap": "10px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-60",
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
                            "key": "div-61",
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
                          }
                        ]
                      },
                      {
                        "tag": "h3",
                        "key": "h3-63",
                        "style": {
                          "base": {
                            "margin-top": "0",
                            "margin-right": "0",
                            "margin-bottom": "0",
                            "margin-left": "0",
                            "font-size": "22px",
                            "letter-spacing": "-0.02em",
                            "font-weight": "600"
                          }
                        },
                        "text": "Payment links by text"
                      },
                      {
                        "tag": "p",
                        "key": "p-64",
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
                        "text": "Send an invoice as a text with a pay button."
                      },
                      {
                        "tag": "div",
                        "key": "div-65",
                        "style": {
                          "base": {
                            "height": "180px",
                            "border-top-left-radius": "12px",
                            "border-top-right-radius": "12px",
                            "border-bottom-right-radius": "12px",
                            "border-bottom-left-radius": "12px",
                            "background-color": "#E8ECFE",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "[Screenshot]"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-72",
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
                        "border-left-color": "#E2E4DE"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-69",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-wrap": "wrap",
                            "align-items": "center",
                            "row-gap": "10px",
                            "column-gap": "10px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-67",
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
                            "key": "div-68",
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
                          }
                        ]
                      },
                      {
                        "tag": "h3",
                        "key": "h3-70",
                        "style": {
                          "base": {
                            "margin-top": "0",
                            "margin-right": "0",
                            "margin-bottom": "0",
                            "margin-left": "0",
                            "font-size": "22px",
                            "letter-spacing": "-0.02em",
                            "font-weight": "600"
                          }
                        },
                        "text": "Crew app offline mode"
                      },
                      {
                        "tag": "p",
                        "key": "p-71",
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
                        "text": "Checklists and photos save without signal."
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
                "key": "div-101",
                "style": {
                  "base": {
                    "flex-grow": "999",
                    "flex-shrink": "1",
                    "flex-basis": "520px",
                    "min-width": "0",
                    "display": "none",
                    "flex-direction": "column",
                    "row-gap": "18px",
                    "column-gap": "18px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-93",
                    "style": {
                      "base": {
                        "font-size": "28px",
                        "font-weight": "600",
                        "letter-spacing": "-0.03em"
                      }
                    },
                    "text": "August 2026"
                  },
                  {
                    "tag": "div",
                    "key": "div-100",
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
                        "border-left-color": "#E2E4DE"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-96",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-wrap": "wrap",
                            "align-items": "center",
                            "row-gap": "10px",
                            "column-gap": "10px"
                          }
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
                            "text": "Aug 20"
                          },
                          {
                            "tag": "div",
                            "key": "div-95",
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
                          }
                        ]
                      },
                      {
                        "tag": "h3",
                        "key": "h3-97",
                        "style": {
                          "base": {
                            "margin-top": "0",
                            "margin-right": "0",
                            "margin-bottom": "0",
                            "margin-left": "0",
                            "font-size": "22px",
                            "letter-spacing": "-0.02em",
                            "font-weight": "600"
                          }
                        },
                        "text": "Customer booking page"
                      },
                      {
                        "tag": "p",
                        "key": "p-98",
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
                        "text": "Let customers pick from the slots you open."
                      },
                      {
                        "tag": "div",
                        "key": "div-99",
                        "style": {
                          "base": {
                            "height": "180px",
                            "border-top-left-radius": "12px",
                            "border-top-right-radius": "12px",
                            "border-bottom-right-radius": "12px",
                            "border-bottom-left-radius": "12px",
                            "background-color": "#E8ECFE",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "[Screenshot]"
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
                    "flex-grow": "999",
                    "flex-shrink": "1",
                    "flex-basis": "520px",
                    "min-width": "0",
                    "display": "none",
                    "flex-direction": "column",
                    "row-gap": "18px",
                    "column-gap": "18px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-121",
                    "style": {
                      "base": {
                        "font-size": "28px",
                        "font-weight": "600",
                        "letter-spacing": "-0.03em"
                      }
                    },
                    "text": "July 2026"
                  },
                  {
                    "tag": "div",
                    "key": "div-127",
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
                        "border-left-color": "#E2E4DE"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-124",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-wrap": "wrap",
                            "align-items": "center",
                            "row-gap": "10px",
                            "column-gap": "10px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-122",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "13px",
                                "color": "#5B616B"
                              }
                            },
                            "text": "Jul 30"
                          },
                          {
                            "tag": "div",
                            "key": "div-123",
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
                          }
                        ]
                      },
                      {
                        "tag": "h3",
                        "key": "h3-125",
                        "style": {
                          "base": {
                            "margin-top": "0",
                            "margin-right": "0",
                            "margin-bottom": "0",
                            "margin-left": "0",
                            "font-size": "22px",
                            "letter-spacing": "-0.02em",
                            "font-weight": "600"
                          }
                        },
                        "text": "Bulk reschedule"
                      },
                      {
                        "tag": "p",
                        "key": "p-126",
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
                        "text": "Shift a whole day of jobs when weather turns."
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-133",
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
                        "border-left-color": "#E2E4DE"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-130",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-wrap": "wrap",
                            "align-items": "center",
                            "row-gap": "10px",
                            "column-gap": "10px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-128",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "13px",
                                "color": "#5B616B"
                              }
                            },
                            "text": "Jul 12"
                          },
                          {
                            "tag": "div",
                            "key": "div-129",
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
                          }
                        ]
                      },
                      {
                        "tag": "h3",
                        "key": "h3-131",
                        "style": {
                          "base": {
                            "margin-top": "0",
                            "margin-right": "0",
                            "margin-bottom": "0",
                            "margin-left": "0",
                            "font-size": "22px",
                            "letter-spacing": "-0.02em",
                            "font-weight": "600"
                          }
                        },
                        "text": "Duplicate invoices"
                      },
                      {
                        "tag": "p",
                        "key": "p-132",
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
                        "text": "Rare double sends on spotty connections are gone."
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
