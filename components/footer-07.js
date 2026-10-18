import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "footer-07",
  "prefix": "footer07",
  "name": "Footer / Collapsible",
  "category": "footer",
  "collection": "saas",
  "description": "Footer / Collapsible for Harborline.",
  "props": {},
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "div-14",
        "div-55",
        "div-60"
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
        "padding-top": "clamp(48px, 6vw, 72px)",
        "padding-right": "clamp(20px, 4vw, 48px)",
        "padding-bottom": "28px",
        "padding-left": "clamp(20px, 4vw, 48px)"
      }
    },
    "children": [
      {
        "tag": "div",
        "key": "div-61",
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
            "key": "div-14",
            "style": {
              "base": {
                "display": "flex",
                "flex-wrap": "wrap",
                "justify-content": "space-between",
                "align-items": "center",
                "row-gap": "16px",
                "column-gap": "16px",
                "padding-bottom": "24px",
                "border-bottom-width": "1px",
                "border-bottom-style": "solid",
                "border-bottom-color": "#DDE0D8"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-4",
                "style": {
                  "base": {
                    "display": "flex",
                    "align-items": "center",
                    "row-gap": "10px",
                    "column-gap": "10px",
                    "font-size": "20px",
                    "font-weight": "600",
                    "letter-spacing": "-0.02em"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-2",
                    "style": {
                      "base": {
                        "width": "26px",
                        "height": "26px",
                        "border-top-left-radius": "7px",
                        "border-top-right-radius": "7px",
                        "border-bottom-right-radius": "7px",
                        "border-bottom-left-radius": "7px",
                        "background-color": "#0F1115",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "attrs": {
                      "aria-hidden": "true"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-1",
                        "style": {
                          "base": {
                            "width": "10px",
                            "height": "10px",
                            "border-top-left-radius": "2px",
                            "border-top-right-radius": "2px",
                            "border-bottom-right-radius": "2px",
                            "border-bottom-left-radius": "2px",
                            "background-color": "#FFFFFF"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "text-3",
                    "text": "Harborline"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-13",
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
                    "tag": "a",
                    "key": "a-7",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "row-gap": "8px",
                        "column-gap": "8px",
                        "height": "40px",
                        "padding-top": "0",
                        "padding-right": "14px",
                        "padding-bottom": "0",
                        "padding-left": "14px",
                        "border-top-left-radius": "999px",
                        "border-top-right-radius": "999px",
                        "border-bottom-right-radius": "999px",
                        "border-bottom-left-radius": "999px",
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
                        "font-size": "14px",
                        "color": "#0F1115",
                        "text-decoration": "none"
                      }
                    },
                    "href": "#",
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-5",
                        "style": {
                          "base": {
                            "width": "8px",
                            "height": "8px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "background-color": "#2F9E5B"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        }
                      },
                      {
                        "tag": "div",
                        "key": "text-6",
                        "text": "[System status]"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-12",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "row-gap": "8px",
                        "column-gap": "8px",
                        "font-size": "14px",
                        "color": "#4E545D"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-8",
                        "style": {
                          "base": {
                            "position": "absolute",
                            "width": "1px",
                            "height": "1px",
                            "overflow": "hidden",
                            "clip": "rect(0 0 0 0)"
                          }
                        },
                        "text": "Language"
                      },
                      {
                        "tag": "div",
                        "key": "select-9",
                        "style": {
                          "base": {
                            "height": "40px",
                            "padding-top": "0",
                            "padding-right": "10px",
                            "padding-bottom": "0",
                            "padding-left": "10px",
                            "border-top-left-radius": "999px",
                            "border-top-right-radius": "999px",
                            "border-bottom-right-radius": "999px",
                            "border-bottom-left-radius": "999px",
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
                            "font-size": "14px",
                            "color": "#0F1115",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "space-between"
                          }
                        },
                        "attrs": {
                          "role": "combobox"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "text-10",
                            "text": "English"
                          },
                          {
                            "tag": "div",
                            "key": "text-11",
                            "text": "▾"
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
            "key": "div-55",
            "style": {
              "base": {
                "display": "grid",
                "grid-template-columns": "1fr",
                "row-gap": "0",
                "column-gap": "32px"
              },
              "md": {
                "grid-template-columns": "repeat(3, minmax(0, 1fr))"
              },
              "lg": {
                "grid-template-columns": "repeat(4, minmax(0, 1fr))"
              }
            },
            "attrs": {
              "data-blok-accordion": "multi"
            },
            "children": [
              {
                "tag": "div",
                "key": "div-24",
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
                    "key": "div-17",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "align-items": "center",
                        "width": "100%",
                        "min-height": "56px",
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
                      "aria-expanded": "true",
                      "data-blok-acc-trigger": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-15",
                        "style": {
                          "base": {
                            "font-size": "16px",
                            "font-weight": "600"
                          }
                        },
                        "text": "Product"
                      },
                      {
                        "tag": "div",
                        "key": "div-16",
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
                    "key": "panel-23",
                    "attrs": {
                      "data-blok-acc-panel": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-22",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "10px",
                            "column-gap": "10px",
                            "padding-top": "0",
                            "padding-right": "0",
                            "padding-bottom": "18px",
                            "padding-left": "0"
                          }
                        },
                        "attrs": {
                          "aria-label": "Product"
                        },
                        "children": [
                          {
                            "tag": "a",
                            "key": "a-18",
                            "style": {
                              "base": {
                                "font-size": "15px",
                                "color": "#4E545D",
                                "text-decoration": "none"
                              }
                            },
                            "href": "#",
                            "text": "Scheduling"
                          },
                          {
                            "tag": "a",
                            "key": "a-19",
                            "style": {
                              "base": {
                                "font-size": "15px",
                                "color": "#4E545D",
                                "text-decoration": "none"
                              }
                            },
                            "href": "#",
                            "text": "Dispatch"
                          },
                          {
                            "tag": "a",
                            "key": "a-20",
                            "style": {
                              "base": {
                                "font-size": "15px",
                                "color": "#4E545D",
                                "text-decoration": "none"
                              }
                            },
                            "href": "#",
                            "text": "Invoicing"
                          },
                          {
                            "tag": "a",
                            "key": "a-21",
                            "style": {
                              "base": {
                                "font-size": "15px",
                                "color": "#4E545D",
                                "text-decoration": "none"
                              }
                            },
                            "href": "#",
                            "text": "Crew app"
                          }
                        ]
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
                    "key": "div-27",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "align-items": "center",
                        "width": "100%",
                        "min-height": "56px",
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
                      "aria-expanded": "true",
                      "data-blok-acc-trigger": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-25",
                        "style": {
                          "base": {
                            "font-size": "16px",
                            "font-weight": "600"
                          }
                        },
                        "text": "Industries"
                      },
                      {
                        "tag": "div",
                        "key": "div-26",
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
                    "key": "panel-33",
                    "attrs": {
                      "data-blok-acc-panel": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-32",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "10px",
                            "column-gap": "10px",
                            "padding-top": "0",
                            "padding-right": "0",
                            "padding-bottom": "18px",
                            "padding-left": "0"
                          }
                        },
                        "attrs": {
                          "aria-label": "Industries"
                        },
                        "children": [
                          {
                            "tag": "a",
                            "key": "a-28",
                            "style": {
                              "base": {
                                "font-size": "15px",
                                "color": "#4E545D",
                                "text-decoration": "none"
                              }
                            },
                            "href": "#",
                            "text": "Bin cleaning"
                          },
                          {
                            "tag": "a",
                            "key": "a-29",
                            "style": {
                              "base": {
                                "font-size": "15px",
                                "color": "#4E545D",
                                "text-decoration": "none"
                              }
                            },
                            "href": "#",
                            "text": "Pressure washing"
                          },
                          {
                            "tag": "a",
                            "key": "a-30",
                            "style": {
                              "base": {
                                "font-size": "15px",
                                "color": "#4E545D",
                                "text-decoration": "none"
                              }
                            },
                            "href": "#",
                            "text": "Lawn care"
                          },
                          {
                            "tag": "a",
                            "key": "a-31",
                            "style": {
                              "base": {
                                "font-size": "15px",
                                "color": "#4E545D",
                                "text-decoration": "none"
                              }
                            },
                            "href": "#",
                            "text": "Windows"
                          }
                        ]
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
                    "key": "div-37",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "align-items": "center",
                        "width": "100%",
                        "min-height": "56px",
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
                      "aria-expanded": "true",
                      "data-blok-acc-trigger": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-35",
                        "style": {
                          "base": {
                            "font-size": "16px",
                            "font-weight": "600"
                          }
                        },
                        "text": "Resources"
                      },
                      {
                        "tag": "div",
                        "key": "div-36",
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
                    "key": "panel-43",
                    "attrs": {
                      "data-blok-acc-panel": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-42",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "10px",
                            "column-gap": "10px",
                            "padding-top": "0",
                            "padding-right": "0",
                            "padding-bottom": "18px",
                            "padding-left": "0"
                          }
                        },
                        "attrs": {
                          "aria-label": "Resources"
                        },
                        "children": [
                          {
                            "tag": "a",
                            "key": "a-38",
                            "style": {
                              "base": {
                                "font-size": "15px",
                                "color": "#4E545D",
                                "text-decoration": "none"
                              }
                            },
                            "href": "#",
                            "text": "Help center"
                          },
                          {
                            "tag": "a",
                            "key": "a-39",
                            "style": {
                              "base": {
                                "font-size": "15px",
                                "color": "#4E545D",
                                "text-decoration": "none"
                              }
                            },
                            "href": "#",
                            "text": "Templates"
                          },
                          {
                            "tag": "a",
                            "key": "a-40",
                            "style": {
                              "base": {
                                "font-size": "15px",
                                "color": "#4E545D",
                                "text-decoration": "none"
                              }
                            },
                            "href": "#",
                            "text": "Changelog"
                          },
                          {
                            "tag": "a",
                            "key": "a-41",
                            "style": {
                              "base": {
                                "font-size": "15px",
                                "color": "#4E545D",
                                "text-decoration": "none"
                              }
                            },
                            "href": "#",
                            "text": "API"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-54",
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
                        "justify-content": "space-between",
                        "align-items": "center",
                        "width": "100%",
                        "min-height": "56px",
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
                      "aria-expanded": "true",
                      "data-blok-acc-trigger": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-45",
                        "style": {
                          "base": {
                            "font-size": "16px",
                            "font-weight": "600"
                          }
                        },
                        "text": "Company"
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
                        "text": "−"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "panel-53",
                    "attrs": {
                      "data-blok-acc-panel": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-52",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "10px",
                            "column-gap": "10px",
                            "padding-top": "0",
                            "padding-right": "0",
                            "padding-bottom": "18px",
                            "padding-left": "0"
                          }
                        },
                        "attrs": {
                          "aria-label": "Company"
                        },
                        "children": [
                          {
                            "tag": "a",
                            "key": "a-48",
                            "style": {
                              "base": {
                                "font-size": "15px",
                                "color": "#4E545D",
                                "text-decoration": "none"
                              }
                            },
                            "href": "#",
                            "text": "About"
                          },
                          {
                            "tag": "a",
                            "key": "a-49",
                            "style": {
                              "base": {
                                "font-size": "15px",
                                "color": "#4E545D",
                                "text-decoration": "none"
                              }
                            },
                            "href": "#",
                            "text": "Customers"
                          },
                          {
                            "tag": "a",
                            "key": "a-50",
                            "style": {
                              "base": {
                                "font-size": "15px",
                                "color": "#4E545D",
                                "text-decoration": "none"
                              }
                            },
                            "href": "#",
                            "text": "Careers"
                          },
                          {
                            "tag": "a",
                            "key": "a-51",
                            "style": {
                              "base": {
                                "font-size": "15px",
                                "color": "#4E545D",
                                "text-decoration": "none"
                              }
                            },
                            "href": "#",
                            "text": "Contact"
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
            "key": "div-60",
            "style": {
              "base": {
                "display": "flex",
                "flex-wrap": "wrap",
                "justify-content": "space-between",
                "row-gap": "12px",
                "column-gap": "12px",
                "font-size": "14px",
                "color": "#5B616B"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-56",
                "text": "© 2026 Harborline, Inc. [Replace with your company.]"
              },
              {
                "tag": "div",
                "key": "div-59",
                "style": {
                  "base": {
                    "display": "flex",
                    "row-gap": "18px",
                    "column-gap": "18px"
                  }
                },
                "children": [
                  {
                    "tag": "a",
                    "key": "a-57",
                    "style": {
                      "base": {
                        "color": "#4E545D",
                        "text-decoration": "none"
                      }
                    },
                    "href": "#",
                    "text": "Privacy"
                  },
                  {
                    "tag": "a",
                    "key": "a-58",
                    "style": {
                      "base": {
                        "color": "#4E545D",
                        "text-decoration": "none"
                      }
                    },
                    "href": "#",
                    "text": "Terms"
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
