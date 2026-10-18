import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "templates-02",
  "prefix": "templates02",
  "name": "Templates / Search and view toggle",
  "category": "templates",
  "collection": "saas",
  "description": "Templates / Search and view toggle for Harborline.",
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
      "default": "Start from something that already works"
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
        "div-85"
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
        "key": "div-86",
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
                "text": "Templates"
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
                "row-gap": "12px",
                "column-gap": "12px",
                "align-items": "center"
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
                    "flex-basis": "320px",
                    "display": "flex",
                    "align-items": "center",
                    "row-gap": "10px",
                    "column-gap": "10px",
                    "height": "52px",
                    "padding-top": "0",
                    "padding-right": "16px",
                    "padding-bottom": "0",
                    "padding-left": "16px",
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
                    "border-left-color": "#DDE0D8"
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
                    "text": "Search templates"
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
                        "font-size": "16px",
                        "color": "#0F1115"
                      }
                    },
                    "text": "Search checklists, invoices, messages…"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-8",
                "style": {
                  "base": {
                    "font-family": "token(font-saas-mono)",
                    "font-size": "13px",
                    "color": "#5B616B"
                  }
                },
                "text": "8 templates"
              },
              {
                "tag": "div",
                "key": "div-11",
                "style": {
                  "base": {
                    "display": "flex",
                    "padding-top": "4px",
                    "padding-right": "4px",
                    "padding-bottom": "4px",
                    "padding-left": "4px",
                    "border-top-left-radius": "10px",
                    "border-top-right-radius": "10px",
                    "border-bottom-right-radius": "10px",
                    "border-bottom-left-radius": "10px",
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
                    "border-left-color": "#DDE0D8"
                  }
                },
                "attrs": {
                  "role": "radiogroup",
                  "aria-label": "View",
                  "data-blok-choices": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-9",
                    "style": {
                      "base": {
                        "height": "40px",
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
                        "border-left-width": "0",
                        "border-left-style": "none",
                        "border-left-color": "transparent",
                        "border-top-left-radius": "7px",
                        "border-top-right-radius": "7px",
                        "border-bottom-right-radius": "7px",
                        "border-bottom-left-radius": "7px",
                        "cursor": "pointer",
                        "font-size": "14px",
                        "background-color": "#0F1115",
                        "color": "#FFFFFF",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "attrs": {
                      "role": "radio",
                      "aria-checked": "true",
                      "data-blok-choice": ""
                    },
                    "text": "Grid"
                  },
                  {
                    "tag": "div",
                    "key": "div-10",
                    "style": {
                      "base": {
                        "height": "40px",
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
                        "border-left-width": "0",
                        "border-left-style": "none",
                        "border-left-color": "transparent",
                        "border-top-left-radius": "7px",
                        "border-top-right-radius": "7px",
                        "border-bottom-right-radius": "7px",
                        "border-bottom-left-radius": "7px",
                        "cursor": "pointer",
                        "font-size": "14px",
                        "background-color": "transparent",
                        "color": "#4E545D",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "attrs": {
                      "role": "radio",
                      "aria-checked": "false",
                      "data-blok-choice": ""
                    },
                    "text": "List"
                  }
                ]
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-85",
            "style": {
              "base": {
                "display": "grid",
                "grid-template-columns": "1fr",
                "row-gap": "14px",
                "column-gap": "14px"
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
                "tag": "a",
                "key": "a-21",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "border-top-left-radius": "18px",
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                    "border-bottom-left-radius": "18px",
                    "overflow": "hidden",
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
                    "color": "#0F1115",
                    "text-decoration": "none"
                  }
                },
                "href": "#",
                "children": [
                  {
                    "tag": "div",
                    "key": "div-17",
                    "style": {
                      "base": {
                        "height": "130px",
                        "background-color": "#E8ECFE",
                        "display": "flex",
                        "align-items": "flex-end",
                        "padding-top": "14px",
                        "padding-right": "14px",
                        "padding-bottom": "14px",
                        "padding-left": "14px"
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
                            "row-gap": "6px",
                            "column-gap": "6px",
                            "width": "70%"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-13",
                            "style": {
                              "base": {
                                "height": "8px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "rgba(15,17,21,0.25)",
                                "width": "80%"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-14",
                            "style": {
                              "base": {
                                "height": "8px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "rgba(15,17,21,0.15)"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-15",
                            "style": {
                              "base": {
                                "height": "8px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "rgba(15,17,21,0.15)",
                                "width": "60%"
                              }
                            }
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
                        "padding-top": "16px",
                        "padding-right": "16px",
                        "padding-bottom": "16px",
                        "padding-left": "16px",
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "6px",
                        "column-gap": "6px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-18",
                        "style": {
                          "base": {
                            "font-size": "12px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Checklist"
                      },
                      {
                        "tag": "div",
                        "key": "div-19",
                        "style": {
                          "base": {
                            "font-size": "17px",
                            "font-weight": "600"
                          }
                        },
                        "text": "Bin wash checklist"
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "a",
                "key": "a-30",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "border-top-left-radius": "18px",
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                    "border-bottom-left-radius": "18px",
                    "overflow": "hidden",
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
                    "color": "#0F1115",
                    "text-decoration": "none"
                  }
                },
                "href": "#",
                "children": [
                  {
                    "tag": "div",
                    "key": "div-26",
                    "style": {
                      "base": {
                        "height": "130px",
                        "background-color": "#F1E9FB",
                        "display": "flex",
                        "align-items": "flex-end",
                        "padding-top": "14px",
                        "padding-right": "14px",
                        "padding-bottom": "14px",
                        "padding-left": "14px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-25",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "6px",
                            "column-gap": "6px",
                            "width": "70%"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-22",
                            "style": {
                              "base": {
                                "height": "8px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "rgba(15,17,21,0.25)",
                                "width": "80%"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-23",
                            "style": {
                              "base": {
                                "height": "8px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "rgba(15,17,21,0.15)"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-24",
                            "style": {
                              "base": {
                                "height": "8px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "rgba(15,17,21,0.15)",
                                "width": "60%"
                              }
                            }
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
                        "padding-top": "16px",
                        "padding-right": "16px",
                        "padding-bottom": "16px",
                        "padding-left": "16px",
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "6px",
                        "column-gap": "6px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-27",
                        "style": {
                          "base": {
                            "font-size": "12px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Message"
                      },
                      {
                        "tag": "div",
                        "key": "div-28",
                        "style": {
                          "base": {
                            "font-size": "17px",
                            "font-weight": "600"
                          }
                        },
                        "text": "Day-before reminder"
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "a",
                "key": "a-39",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "border-top-left-radius": "18px",
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                    "border-bottom-left-radius": "18px",
                    "overflow": "hidden",
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
                    "color": "#0F1115",
                    "text-decoration": "none"
                  }
                },
                "href": "#",
                "children": [
                  {
                    "tag": "div",
                    "key": "div-35",
                    "style": {
                      "base": {
                        "height": "130px",
                        "background-color": "#E5F4EA",
                        "display": "flex",
                        "align-items": "flex-end",
                        "padding-top": "14px",
                        "padding-right": "14px",
                        "padding-bottom": "14px",
                        "padding-left": "14px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-34",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "6px",
                            "column-gap": "6px",
                            "width": "70%"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-31",
                            "style": {
                              "base": {
                                "height": "8px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "rgba(15,17,21,0.25)",
                                "width": "80%"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-32",
                            "style": {
                              "base": {
                                "height": "8px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "rgba(15,17,21,0.15)"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-33",
                            "style": {
                              "base": {
                                "height": "8px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "rgba(15,17,21,0.15)",
                                "width": "60%"
                              }
                            }
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
                        "padding-top": "16px",
                        "padding-right": "16px",
                        "padding-bottom": "16px",
                        "padding-left": "16px",
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "6px",
                        "column-gap": "6px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-36",
                        "style": {
                          "base": {
                            "font-size": "12px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Invoice"
                      },
                      {
                        "tag": "div",
                        "key": "div-37",
                        "style": {
                          "base": {
                            "font-size": "17px",
                            "font-weight": "600"
                          }
                        },
                        "text": "Monthly service invoice"
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "a",
                "key": "a-48",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "border-top-left-radius": "18px",
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                    "border-bottom-left-radius": "18px",
                    "overflow": "hidden",
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
                    "color": "#0F1115",
                    "text-decoration": "none"
                  }
                },
                "href": "#",
                "children": [
                  {
                    "tag": "div",
                    "key": "div-44",
                    "style": {
                      "base": {
                        "height": "130px",
                        "background-color": "#FDEFE4",
                        "display": "flex",
                        "align-items": "flex-end",
                        "padding-top": "14px",
                        "padding-right": "14px",
                        "padding-bottom": "14px",
                        "padding-left": "14px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-43",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "6px",
                            "column-gap": "6px",
                            "width": "70%"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-40",
                            "style": {
                              "base": {
                                "height": "8px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "rgba(15,17,21,0.25)",
                                "width": "80%"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-41",
                            "style": {
                              "base": {
                                "height": "8px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "rgba(15,17,21,0.15)"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-42",
                            "style": {
                              "base": {
                                "height": "8px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "rgba(15,17,21,0.15)",
                                "width": "60%"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-47",
                    "style": {
                      "base": {
                        "padding-top": "16px",
                        "padding-right": "16px",
                        "padding-bottom": "16px",
                        "padding-left": "16px",
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "6px",
                        "column-gap": "6px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-45",
                        "style": {
                          "base": {
                            "font-size": "12px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Quote"
                      },
                      {
                        "tag": "div",
                        "key": "div-46",
                        "style": {
                          "base": {
                            "font-size": "17px",
                            "font-weight": "600"
                          }
                        },
                        "text": "Pressure wash quote"
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "a",
                "key": "a-57",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "border-top-left-radius": "18px",
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                    "border-bottom-left-radius": "18px",
                    "overflow": "hidden",
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
                    "color": "#0F1115",
                    "text-decoration": "none"
                  }
                },
                "href": "#",
                "children": [
                  {
                    "tag": "div",
                    "key": "div-53",
                    "style": {
                      "base": {
                        "height": "130px",
                        "background-color": "#F1E9FB",
                        "display": "flex",
                        "align-items": "flex-end",
                        "padding-top": "14px",
                        "padding-right": "14px",
                        "padding-bottom": "14px",
                        "padding-left": "14px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-52",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "6px",
                            "column-gap": "6px",
                            "width": "70%"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-49",
                            "style": {
                              "base": {
                                "height": "8px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "rgba(15,17,21,0.25)",
                                "width": "80%"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-50",
                            "style": {
                              "base": {
                                "height": "8px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "rgba(15,17,21,0.15)"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-51",
                            "style": {
                              "base": {
                                "height": "8px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "rgba(15,17,21,0.15)",
                                "width": "60%"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-56",
                    "style": {
                      "base": {
                        "padding-top": "16px",
                        "padding-right": "16px",
                        "padding-bottom": "16px",
                        "padding-left": "16px",
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "6px",
                        "column-gap": "6px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-54",
                        "style": {
                          "base": {
                            "font-size": "12px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Message"
                      },
                      {
                        "tag": "div",
                        "key": "div-55",
                        "style": {
                          "base": {
                            "font-size": "17px",
                            "font-weight": "600"
                          }
                        },
                        "text": "On-the-way text"
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "a",
                "key": "a-66",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "border-top-left-radius": "18px",
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                    "border-bottom-left-radius": "18px",
                    "overflow": "hidden",
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
                    "color": "#0F1115",
                    "text-decoration": "none"
                  }
                },
                "href": "#",
                "children": [
                  {
                    "tag": "div",
                    "key": "div-62",
                    "style": {
                      "base": {
                        "height": "130px",
                        "background-color": "#F1E9FB",
                        "display": "flex",
                        "align-items": "flex-end",
                        "padding-top": "14px",
                        "padding-right": "14px",
                        "padding-bottom": "14px",
                        "padding-left": "14px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-61",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "6px",
                            "column-gap": "6px",
                            "width": "70%"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-58",
                            "style": {
                              "base": {
                                "height": "8px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "rgba(15,17,21,0.25)",
                                "width": "80%"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-59",
                            "style": {
                              "base": {
                                "height": "8px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "rgba(15,17,21,0.15)"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-60",
                            "style": {
                              "base": {
                                "height": "8px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "rgba(15,17,21,0.15)",
                                "width": "60%"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-65",
                    "style": {
                      "base": {
                        "padding-top": "16px",
                        "padding-right": "16px",
                        "padding-bottom": "16px",
                        "padding-left": "16px",
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "6px",
                        "column-gap": "6px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-63",
                        "style": {
                          "base": {
                            "font-size": "12px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Message"
                      },
                      {
                        "tag": "div",
                        "key": "div-64",
                        "style": {
                          "base": {
                            "font-size": "17px",
                            "font-weight": "600"
                          }
                        },
                        "text": "New customer welcome"
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "a",
                "key": "a-75",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "border-top-left-radius": "18px",
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                    "border-bottom-left-radius": "18px",
                    "overflow": "hidden",
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
                    "color": "#0F1115",
                    "text-decoration": "none"
                  }
                },
                "href": "#",
                "children": [
                  {
                    "tag": "div",
                    "key": "div-71",
                    "style": {
                      "base": {
                        "height": "130px",
                        "background-color": "#E8ECFE",
                        "display": "flex",
                        "align-items": "flex-end",
                        "padding-top": "14px",
                        "padding-right": "14px",
                        "padding-bottom": "14px",
                        "padding-left": "14px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-70",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "6px",
                            "column-gap": "6px",
                            "width": "70%"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-67",
                            "style": {
                              "base": {
                                "height": "8px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "rgba(15,17,21,0.25)",
                                "width": "80%"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-68",
                            "style": {
                              "base": {
                                "height": "8px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "rgba(15,17,21,0.15)"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-69",
                            "style": {
                              "base": {
                                "height": "8px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "rgba(15,17,21,0.15)",
                                "width": "60%"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-74",
                    "style": {
                      "base": {
                        "padding-top": "16px",
                        "padding-right": "16px",
                        "padding-bottom": "16px",
                        "padding-left": "16px",
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "6px",
                        "column-gap": "6px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-72",
                        "style": {
                          "base": {
                            "font-size": "12px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Checklist"
                      },
                      {
                        "tag": "div",
                        "key": "div-73",
                        "style": {
                          "base": {
                            "font-size": "17px",
                            "font-weight": "600"
                          }
                        },
                        "text": "Gutter cleaning checklist"
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "a",
                "key": "a-84",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "border-top-left-radius": "18px",
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                    "border-bottom-left-radius": "18px",
                    "overflow": "hidden",
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
                    "color": "#0F1115",
                    "text-decoration": "none"
                  }
                },
                "href": "#",
                "children": [
                  {
                    "tag": "div",
                    "key": "div-80",
                    "style": {
                      "base": {
                        "height": "130px",
                        "background-color": "#F1E9FB",
                        "display": "flex",
                        "align-items": "flex-end",
                        "padding-top": "14px",
                        "padding-right": "14px",
                        "padding-bottom": "14px",
                        "padding-left": "14px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-79",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "6px",
                            "column-gap": "6px",
                            "width": "70%"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-76",
                            "style": {
                              "base": {
                                "height": "8px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "rgba(15,17,21,0.25)",
                                "width": "80%"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-77",
                            "style": {
                              "base": {
                                "height": "8px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "rgba(15,17,21,0.15)"
                              }
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-78",
                            "style": {
                              "base": {
                                "height": "8px",
                                "border-top-left-radius": "4px",
                                "border-top-right-radius": "4px",
                                "border-bottom-right-radius": "4px",
                                "border-bottom-left-radius": "4px",
                                "background-color": "rgba(15,17,21,0.15)",
                                "width": "60%"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-83",
                    "style": {
                      "base": {
                        "padding-top": "16px",
                        "padding-right": "16px",
                        "padding-bottom": "16px",
                        "padding-left": "16px",
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "6px",
                        "column-gap": "6px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-81",
                        "style": {
                          "base": {
                            "font-size": "12px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Message"
                      },
                      {
                        "tag": "div",
                        "key": "div-82",
                        "style": {
                          "base": {
                            "font-size": "17px",
                            "font-weight": "600"
                          }
                        },
                        "text": "Seasonal price update"
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
