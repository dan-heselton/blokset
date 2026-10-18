import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "import-02",
  "prefix": "import02",
  "name": "Import / Column mapper",
  "category": "import",
  "collection": "saas",
  "description": "Import / Column mapper for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "Bring your spreadsheet. Keep your columns."
    },
    "subheading": {
      "type": "text",
      "default": "Tell us which column is which. We’ll handle the rest."
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-5",
        "div-70"
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
        "key": "div-71",
        "style": {
          "base": {
            "max-width": "1200px",
            "margin-top": "0",
            "margin-right": "auto",
            "margin-bottom": "0",
            "margin-left": "auto",
            "display": "flex",
            "flex-direction": "column",
            "row-gap": "32px",
            "column-gap": "32px"
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
                    "text": "Import"
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
                "tag": "p",
                "key": "subheading",
                "style": {
                  "base": {
                    "margin-top": "0",
                    "margin-right": "0",
                    "margin-bottom": "0",
                    "margin-left": "0",
                    "max-width": "380px",
                    "font-size": "17px",
                    "line-height": "1.55",
                    "color": "#4E545D"
                  }
                },
                "bind": "subheading"
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-70",
            "style": {
              "base": {
                "display": "flex",
                "flex-wrap": "wrap",
                "row-gap": "20px",
                "column-gap": "20px",
                "align-items": "flex-start"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-42",
                "style": {
                  "base": {
                    "flex-grow": "1",
                    "flex-shrink": "1",
                    "flex-basis": "360px",
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "10px",
                    "column-gap": "10px",
                    "padding-top": "22px",
                    "padding-right": "22px",
                    "padding-bottom": "22px",
                    "padding-left": "22px",
                    "border-top-left-radius": "18px",
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                    "border-bottom-left-radius": "18px",
                    "background-color": "#F4F5F1",
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
                    "key": "div-8",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "align-items": "center",
                        "margin-bottom": "4px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-6",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px"
                          }
                        },
                        "text": "customers.csv"
                      },
                      {
                        "tag": "div",
                        "key": "div-7",
                        "style": {
                          "base": {
                            "height": "36px",
                            "padding-top": "0",
                            "padding-right": "10px",
                            "padding-bottom": "0",
                            "padding-left": "10px",
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
                            "color": "#2D4BF0",
                            "cursor": "pointer",
                            "font-size": "14px",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center"
                          }
                        },
                        "text": "Remove"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-16",
                    "style": {
                      "base": {
                        "display": "grid",
                        "grid-template-columns": "1fr 24px 1fr",
                        "align-items": "center",
                        "row-gap": "10px",
                        "column-gap": "10px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-9",
                        "style": {
                          "base": {
                            "height": "44px",
                            "display": "flex",
                            "align-items": "center",
                            "padding-top": "0",
                            "padding-right": "12px",
                            "padding-bottom": "0",
                            "padding-left": "12px",
                            "border-top-left-radius": "10px",
                            "border-top-right-radius": "10px",
                            "border-bottom-right-radius": "10px",
                            "border-bottom-left-radius": "10px",
                            "background-color": "#FFFFFF",
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
                            "border-left-color": "#E2E4DE",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px"
                          }
                        },
                        "text": "Client"
                      },
                      {
                        "tag": "div",
                        "key": "div-10",
                        "style": {
                          "base": {
                            "text-align": "center",
                            "color": "#5B616B"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        },
                        "text": "→"
                      },
                      {
                        "tag": "div",
                        "key": "div-15",
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-11",
                            "style": {
                              "base": {
                                "position": "absolute",
                                "width": "1px",
                                "height": "1px",
                                "overflow": "hidden",
                                "clip": "rect(0 0 0 0)"
                              }
                            },
                            "text": "Map Client"
                          },
                          {
                            "tag": "div",
                            "key": "select-12",
                            "style": {
                              "base": {
                                "width": "100%",
                                "height": "44px",
                                "padding-top": "0",
                                "padding-right": "10px",
                                "padding-bottom": "0",
                                "padding-left": "10px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "border-top-width": "1px",
                                "border-top-style": "solid",
                                "border-top-color": "#2D4BF0",
                                "border-right-width": "1px",
                                "border-right-style": "solid",
                                "border-right-color": "#2D4BF0",
                                "border-bottom-width": "1px",
                                "border-bottom-style": "solid",
                                "border-bottom-color": "#2D4BF0",
                                "border-left-width": "1px",
                                "border-left-style": "solid",
                                "border-left-color": "#2D4BF0",
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
                                "key": "text-13",
                                "text": "Customer name"
                              },
                              {
                                "tag": "div",
                                "key": "text-14",
                                "text": "▾"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-24",
                    "style": {
                      "base": {
                        "display": "grid",
                        "grid-template-columns": "1fr 24px 1fr",
                        "align-items": "center",
                        "row-gap": "10px",
                        "column-gap": "10px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-17",
                        "style": {
                          "base": {
                            "height": "44px",
                            "display": "flex",
                            "align-items": "center",
                            "padding-top": "0",
                            "padding-right": "12px",
                            "padding-bottom": "0",
                            "padding-left": "12px",
                            "border-top-left-radius": "10px",
                            "border-top-right-radius": "10px",
                            "border-bottom-right-radius": "10px",
                            "border-bottom-left-radius": "10px",
                            "background-color": "#FFFFFF",
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
                            "border-left-color": "#E2E4DE",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px"
                          }
                        },
                        "text": "Street"
                      },
                      {
                        "tag": "div",
                        "key": "div-18",
                        "style": {
                          "base": {
                            "text-align": "center",
                            "color": "#5B616B"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        },
                        "text": "→"
                      },
                      {
                        "tag": "div",
                        "key": "div-23",
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-19",
                            "style": {
                              "base": {
                                "position": "absolute",
                                "width": "1px",
                                "height": "1px",
                                "overflow": "hidden",
                                "clip": "rect(0 0 0 0)"
                              }
                            },
                            "text": "Map Street"
                          },
                          {
                            "tag": "div",
                            "key": "select-20",
                            "style": {
                              "base": {
                                "width": "100%",
                                "height": "44px",
                                "padding-top": "0",
                                "padding-right": "10px",
                                "padding-bottom": "0",
                                "padding-left": "10px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "border-top-width": "1px",
                                "border-top-style": "solid",
                                "border-top-color": "#2D4BF0",
                                "border-right-width": "1px",
                                "border-right-style": "solid",
                                "border-right-color": "#2D4BF0",
                                "border-bottom-width": "1px",
                                "border-bottom-style": "solid",
                                "border-bottom-color": "#2D4BF0",
                                "border-left-width": "1px",
                                "border-left-style": "solid",
                                "border-left-color": "#2D4BF0",
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
                                "key": "text-21",
                                "text": "Service address"
                              },
                              {
                                "tag": "div",
                                "key": "text-22",
                                "text": "▾"
                              }
                            ]
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
                        "display": "grid",
                        "grid-template-columns": "1fr 24px 1fr",
                        "align-items": "center",
                        "row-gap": "10px",
                        "column-gap": "10px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-25",
                        "style": {
                          "base": {
                            "height": "44px",
                            "display": "flex",
                            "align-items": "center",
                            "padding-top": "0",
                            "padding-right": "12px",
                            "padding-bottom": "0",
                            "padding-left": "12px",
                            "border-top-left-radius": "10px",
                            "border-top-right-radius": "10px",
                            "border-bottom-right-radius": "10px",
                            "border-bottom-left-radius": "10px",
                            "background-color": "#FFFFFF",
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
                            "border-left-color": "#E2E4DE",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px"
                          }
                        },
                        "text": "Cell #"
                      },
                      {
                        "tag": "div",
                        "key": "div-26",
                        "style": {
                          "base": {
                            "text-align": "center",
                            "color": "#5B616B"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        },
                        "text": "→"
                      },
                      {
                        "tag": "div",
                        "key": "div-31",
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-27",
                            "style": {
                              "base": {
                                "position": "absolute",
                                "width": "1px",
                                "height": "1px",
                                "overflow": "hidden",
                                "clip": "rect(0 0 0 0)"
                              }
                            },
                            "text": "Map Cell #"
                          },
                          {
                            "tag": "div",
                            "key": "select-28",
                            "style": {
                              "base": {
                                "width": "100%",
                                "height": "44px",
                                "padding-top": "0",
                                "padding-right": "10px",
                                "padding-bottom": "0",
                                "padding-left": "10px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
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
                                "border-left-color": "#E2E4DE",
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
                                "key": "text-29",
                                "text": "Don’t import"
                              },
                              {
                                "tag": "div",
                                "key": "text-30",
                                "text": "▾"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-40",
                    "style": {
                      "base": {
                        "display": "grid",
                        "grid-template-columns": "1fr 24px 1fr",
                        "align-items": "center",
                        "row-gap": "10px",
                        "column-gap": "10px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-33",
                        "style": {
                          "base": {
                            "height": "44px",
                            "display": "flex",
                            "align-items": "center",
                            "padding-top": "0",
                            "padding-right": "12px",
                            "padding-bottom": "0",
                            "padding-left": "12px",
                            "border-top-left-radius": "10px",
                            "border-top-right-radius": "10px",
                            "border-bottom-right-radius": "10px",
                            "border-bottom-left-radius": "10px",
                            "background-color": "#FFFFFF",
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
                            "border-left-color": "#E2E4DE",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px"
                          }
                        },
                        "text": "How often"
                      },
                      {
                        "tag": "div",
                        "key": "div-34",
                        "style": {
                          "base": {
                            "text-align": "center",
                            "color": "#5B616B"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        },
                        "text": "→"
                      },
                      {
                        "tag": "div",
                        "key": "div-39",
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-35",
                            "style": {
                              "base": {
                                "position": "absolute",
                                "width": "1px",
                                "height": "1px",
                                "overflow": "hidden",
                                "clip": "rect(0 0 0 0)"
                              }
                            },
                            "text": "Map How often"
                          },
                          {
                            "tag": "div",
                            "key": "select-36",
                            "style": {
                              "base": {
                                "width": "100%",
                                "height": "44px",
                                "padding-top": "0",
                                "padding-right": "10px",
                                "padding-bottom": "0",
                                "padding-left": "10px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "border-top-width": "1px",
                                "border-top-style": "solid",
                                "border-top-color": "#2D4BF0",
                                "border-right-width": "1px",
                                "border-right-style": "solid",
                                "border-right-color": "#2D4BF0",
                                "border-bottom-width": "1px",
                                "border-bottom-style": "solid",
                                "border-bottom-color": "#2D4BF0",
                                "border-left-width": "1px",
                                "border-left-style": "solid",
                                "border-left-color": "#2D4BF0",
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
                                "key": "text-37",
                                "text": "Visit frequency"
                              },
                              {
                                "tag": "div",
                                "key": "text-38",
                                "text": "▾"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-41",
                    "style": {
                      "base": {
                        "margin-top": "6px",
                        "font-size": "14px",
                        "color": "#1D6B3A"
                      }
                    },
                    "attrs": {
                      "role": "status"
                    },
                    "text": "Looks good. Phone numbers are optional."
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-69",
                "style": {
                  "base": {
                    "flex-grow": "999",
                    "flex-shrink": "1",
                    "flex-basis": "480px",
                    "min-width": "0",
                    "border-top-left-radius": "18px",
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                    "border-bottom-left-radius": "18px",
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
                    "overflow-x": "auto"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-65",
                    "style": {
                      "base": {
                        "width": "100%",
                        "border-collapse": "collapse",
                        "font-size": "14px",
                        "display": "table"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-47",
                        "style": {
                          "base": {
                            "display": "table-header-group"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-46",
                            "style": {
                              "base": {
                                "display": "table-row"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-43",
                                "style": {
                                  "base": {
                                    "text-align": "left",
                                    "padding-top": "14px",
                                    "padding-right": "16px",
                                    "padding-bottom": "14px",
                                    "padding-left": "16px",
                                    "background-color": "#F4F5F1",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#DDE0D8",
                                    "font-weight": "600",
                                    "white-space": "nowrap",
                                    "display": "table-cell",
                                    "vertical-align": "middle"
                                  }
                                },
                                "text": "Customer name"
                              },
                              {
                                "tag": "div",
                                "key": "div-44",
                                "style": {
                                  "base": {
                                    "text-align": "left",
                                    "padding-top": "14px",
                                    "padding-right": "16px",
                                    "padding-bottom": "14px",
                                    "padding-left": "16px",
                                    "background-color": "#F4F5F1",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#DDE0D8",
                                    "font-weight": "600",
                                    "white-space": "nowrap",
                                    "display": "table-cell",
                                    "vertical-align": "middle"
                                  }
                                },
                                "text": "Service address"
                              },
                              {
                                "tag": "div",
                                "key": "div-45",
                                "style": {
                                  "base": {
                                    "text-align": "left",
                                    "padding-top": "14px",
                                    "padding-right": "16px",
                                    "padding-bottom": "14px",
                                    "padding-left": "16px",
                                    "background-color": "#F4F5F1",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#DDE0D8",
                                    "font-weight": "600",
                                    "white-space": "nowrap",
                                    "display": "table-cell",
                                    "vertical-align": "middle"
                                  }
                                },
                                "text": "Visit frequency"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-64",
                        "style": {
                          "base": {
                            "display": "table-row-group"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-51",
                            "style": {
                              "base": {
                                "display": "table-row"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-48",
                                "style": {
                                  "base": {
                                    "padding-top": "14px",
                                    "padding-right": "16px",
                                    "padding-bottom": "14px",
                                    "padding-left": "16px",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#ECEEE8",
                                    "white-space": "nowrap",
                                    "display": "table-cell",
                                    "vertical-align": "middle"
                                  }
                                },
                                "text": "Dana Ruiz"
                              },
                              {
                                "tag": "div",
                                "key": "div-49",
                                "style": {
                                  "base": {
                                    "padding-top": "14px",
                                    "padding-right": "16px",
                                    "padding-bottom": "14px",
                                    "padding-left": "16px",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#ECEEE8",
                                    "white-space": "nowrap",
                                    "display": "table-cell",
                                    "vertical-align": "middle"
                                  }
                                },
                                "text": "220 Bay St"
                              },
                              {
                                "tag": "div",
                                "key": "div-50",
                                "style": {
                                  "base": {
                                    "padding-top": "14px",
                                    "padding-right": "16px",
                                    "padding-bottom": "14px",
                                    "padding-left": "16px",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#ECEEE8",
                                    "white-space": "nowrap",
                                    "display": "table-cell",
                                    "vertical-align": "middle"
                                  }
                                },
                                "text": "Monthly"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-55",
                            "style": {
                              "base": {
                                "display": "table-row"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-52",
                                "style": {
                                  "base": {
                                    "padding-top": "14px",
                                    "padding-right": "16px",
                                    "padding-bottom": "14px",
                                    "padding-left": "16px",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#ECEEE8",
                                    "white-space": "nowrap",
                                    "display": "table-cell",
                                    "vertical-align": "middle"
                                  }
                                },
                                "text": "Pine Row HOA"
                              },
                              {
                                "tag": "div",
                                "key": "div-53",
                                "style": {
                                  "base": {
                                    "padding-top": "14px",
                                    "padding-right": "16px",
                                    "padding-bottom": "14px",
                                    "padding-left": "16px",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#ECEEE8",
                                    "white-space": "nowrap",
                                    "display": "table-cell",
                                    "vertical-align": "middle"
                                  }
                                },
                                "text": "9 Pine Row"
                              },
                              {
                                "tag": "div",
                                "key": "div-54",
                                "style": {
                                  "base": {
                                    "padding-top": "14px",
                                    "padding-right": "16px",
                                    "padding-bottom": "14px",
                                    "padding-left": "16px",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#ECEEE8",
                                    "white-space": "nowrap",
                                    "display": "table-cell",
                                    "vertical-align": "middle"
                                  }
                                },
                                "text": "Weekly"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-59",
                            "style": {
                              "base": {
                                "display": "table-row"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-56",
                                "style": {
                                  "base": {
                                    "padding-top": "14px",
                                    "padding-right": "16px",
                                    "padding-bottom": "14px",
                                    "padding-left": "16px",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#ECEEE8",
                                    "white-space": "nowrap",
                                    "display": "table-cell",
                                    "vertical-align": "middle"
                                  }
                                },
                                "text": "M. Okafor"
                              },
                              {
                                "tag": "div",
                                "key": "div-57",
                                "style": {
                                  "base": {
                                    "padding-top": "14px",
                                    "padding-right": "16px",
                                    "padding-bottom": "14px",
                                    "padding-left": "16px",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#ECEEE8",
                                    "white-space": "nowrap",
                                    "display": "table-cell",
                                    "vertical-align": "middle"
                                  }
                                },
                                "text": "14 Alder Ct"
                              },
                              {
                                "tag": "div",
                                "key": "div-58",
                                "style": {
                                  "base": {
                                    "padding-top": "14px",
                                    "padding-right": "16px",
                                    "padding-bottom": "14px",
                                    "padding-left": "16px",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#ECEEE8",
                                    "white-space": "nowrap",
                                    "display": "table-cell",
                                    "vertical-align": "middle"
                                  }
                                },
                                "text": "Every 2 weeks"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-63",
                            "style": {
                              "base": {
                                "display": "table-row"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-60",
                                "style": {
                                  "base": {
                                    "padding-top": "14px",
                                    "padding-right": "16px",
                                    "padding-bottom": "14px",
                                    "padding-left": "16px",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#ECEEE8",
                                    "white-space": "nowrap",
                                    "display": "table-cell",
                                    "vertical-align": "middle"
                                  }
                                },
                                "text": "Shore Diner"
                              },
                              {
                                "tag": "div",
                                "key": "div-61",
                                "style": {
                                  "base": {
                                    "padding-top": "14px",
                                    "padding-right": "16px",
                                    "padding-bottom": "14px",
                                    "padding-left": "16px",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#ECEEE8",
                                    "white-space": "nowrap",
                                    "display": "table-cell",
                                    "vertical-align": "middle"
                                  }
                                },
                                "text": "77 Shore Dr"
                              },
                              {
                                "tag": "div",
                                "key": "div-62",
                                "style": {
                                  "base": {
                                    "padding-top": "14px",
                                    "padding-right": "16px",
                                    "padding-bottom": "14px",
                                    "padding-left": "16px",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#ECEEE8",
                                    "white-space": "nowrap",
                                    "display": "table-cell",
                                    "vertical-align": "middle"
                                  }
                                },
                                "text": "Weekly"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-68",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "align-items": "center",
                        "row-gap": "12px",
                        "column-gap": "12px",
                        "padding-top": "14px",
                        "padding-right": "16px",
                        "padding-bottom": "14px",
                        "padding-left": "16px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-66",
                        "style": {
                          "base": {
                            "font-size": "14px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Previewing 4 of [N] rows"
                      },
                      {
                        "tag": "div",
                        "key": "div-67",
                        "style": {
                          "base": {
                            "height": "44px",
                            "padding-top": "0",
                            "padding-right": "18px",
                            "padding-bottom": "0",
                            "padding-left": "18px",
                            "border-top-left-radius": "10px",
                            "border-top-right-radius": "10px",
                            "border-bottom-right-radius": "10px",
                            "border-bottom-left-radius": "10px",
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
                            "cursor": "pointer",
                            "font-weight": "500",
                            "background-color": "#2D4BF0",
                            "color": "#FFFFFF",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center"
                          }
                        },
                        "text": "Import customers"
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
