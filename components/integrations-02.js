import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "integrations-02",
  "prefix": "integrations02",
  "name": "Integrations / Connect toggles",
  "category": "integrations",
  "collection": "saas",
  "description": "Integrations / Connect toggles for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "Switch on the tools you already pay for"
    },
    "subheading": {
      "type": "text",
      "default": "Flip a few on to see what starts syncing."
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-12",
        "div-55"
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
        "key": "div-56",
        "style": {
          "base": {
            "max-width": "1200px",
            "margin-top": "0",
            "margin-right": "auto",
            "margin-bottom": "0",
            "margin-left": "auto",
            "display": "flex",
            "flex-wrap": "wrap",
            "row-gap": "clamp(32px, 5vw, 64px)",
            "column-gap": "clamp(32px, 5vw, 64px)"
          }
        },
        "children": [
          {
            "tag": "div",
            "key": "div-12",
            "style": {
              "base": {
                "flex-grow": "1",
                "flex-shrink": "1",
                "flex-basis": "340px",
                "display": "flex",
                "flex-direction": "column",
                "row-gap": "20px",
                "column-gap": "20px",
                "max-width": "420px"
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
                "text": "Integrations"
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
                    "font-size": "18px",
                    "line-height": "1.55",
                    "color": "#4E545D"
                  }
                },
                "bind": "subheading"
              },
              {
                "tag": "div",
                "key": "div-11",
                "style": {
                  "base": {
                    "margin-top": "8px",
                    "padding-top": "22px",
                    "padding-right": "22px",
                    "padding-bottom": "22px",
                    "padding-left": "22px",
                    "border-top-left-radius": "16px",
                    "border-top-right-radius": "16px",
                    "border-bottom-right-radius": "16px",
                    "border-bottom-left-radius": "16px",
                    "background-color": "#0F1115",
                    "color": "#F4F5F1",
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "14px",
                    "column-gap": "14px"
                  }
                },
                "attrs": {
                  "role": "status"
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-6",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "baseline",
                        "row-gap": "10px",
                        "column-gap": "10px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-4",
                        "style": {
                          "base": {
                            "font-size": "48px",
                            "font-weight": "600",
                            "letter-spacing": "-0.04em",
                            "line-height": "1"
                          }
                        },
                        "text": "1"
                      },
                      {
                        "tag": "div",
                        "key": "div-5",
                        "style": {
                          "base": {
                            "font-size": "15px",
                            "color": "#A7ADB6"
                          }
                        },
                        "text": "connected"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-10",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "8px",
                        "column-gap": "8px"
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
                            "font-size": "14px",
                            "color": "#C9CDD4"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-7",
                            "style": {
                              "base": {
                                "color": "#8FD3A8"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "↻"
                          },
                          {
                            "tag": "div",
                            "key": "text-8",
                            "text": "Paid invoices post to your books"
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
                "flex-grow": "999",
                "flex-shrink": "1",
                "flex-basis": "520px",
                "min-width": "0",
                "display": "flex",
                "flex-direction": "column",
                "border-top-width": "1px",
                "border-top-style": "solid",
                "border-top-color": "#ECEEE8"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-19",
                "style": {
                  "base": {
                    "display": "flex",
                    "align-items": "center",
                    "row-gap": "16px",
                    "column-gap": "16px",
                    "padding-top": "16px",
                    "padding-right": "0",
                    "padding-bottom": "16px",
                    "padding-left": "0",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#ECEEE8"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-13",
                    "style": {
                      "base": {
                        "flex-shrink": "0",
                        "width": "44px",
                        "height": "44px",
                        "border-top-left-radius": "12px",
                        "border-top-right-radius": "12px",
                        "border-bottom-right-radius": "12px",
                        "border-bottom-left-radius": "12px",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "font-weight": "600",
                        "font-size": "16px",
                        "background-color": "#E5F4EA",
                        "color": "#1D6B3A"
                      }
                    },
                    "attrs": {
                      "aria-hidden": "true"
                    },
                    "text": "Bk"
                  },
                  {
                    "tag": "div",
                    "key": "div-16",
                    "style": {
                      "base": {
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "0%",
                        "min-width": "0",
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "2px",
                        "column-gap": "2px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-14",
                        "style": {
                          "base": {
                            "font-size": "17px",
                            "font-weight": "600"
                          }
                        },
                        "text": "[Accounting app]"
                      },
                      {
                        "tag": "div",
                        "key": "div-15",
                        "style": {
                          "base": {
                            "font-size": "14px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Invoices and payments"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-18",
                    "style": {
                      "base": {
                        "flex-shrink": "0",
                        "position": "relative",
                        "width": "52px",
                        "height": "30px",
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
                        "border-top-left-radius": "999px",
                        "border-top-right-radius": "999px",
                        "border-bottom-right-radius": "999px",
                        "border-bottom-left-radius": "999px",
                        "cursor": "pointer",
                        "background-color": "#2D4BF0",
                        "display": "inline-flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "line-height": "1",
                        "padding-top": "0px",
                        "padding-right": "0px",
                        "padding-bottom": "0px",
                        "padding-left": "0px"
                      }
                    },
                    "attrs": {
                      "role": "switch",
                      "aria-checked": "true",
                      "aria-label": "Connect [Accounting app]"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-17",
                        "style": {
                          "base": {
                            "position": "absolute",
                            "top": "3px",
                            "left": "25px",
                            "width": "24px",
                            "height": "24px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "background-color": "#FFFFFF",
                            "box-shadow": "0 1px 3px rgba(0,0,0,0.25)",
                            "transition": "left 160ms ease"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        }
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
                    "display": "flex",
                    "align-items": "center",
                    "row-gap": "16px",
                    "column-gap": "16px",
                    "padding-top": "16px",
                    "padding-right": "0",
                    "padding-bottom": "16px",
                    "padding-left": "0",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#ECEEE8"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-20",
                    "style": {
                      "base": {
                        "flex-shrink": "0",
                        "width": "44px",
                        "height": "44px",
                        "border-top-left-radius": "12px",
                        "border-top-right-radius": "12px",
                        "border-bottom-right-radius": "12px",
                        "border-bottom-left-radius": "12px",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "font-weight": "600",
                        "font-size": "16px",
                        "background-color": "#E8ECFE",
                        "color": "#2D4BF0"
                      }
                    },
                    "attrs": {
                      "aria-hidden": "true"
                    },
                    "text": "Py"
                  },
                  {
                    "tag": "div",
                    "key": "div-23",
                    "style": {
                      "base": {
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "0%",
                        "min-width": "0",
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "2px",
                        "column-gap": "2px"
                      }
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
                        "text": "[Payments provider]"
                      },
                      {
                        "tag": "div",
                        "key": "div-22",
                        "style": {
                          "base": {
                            "font-size": "14px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Cards and bank transfers"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-25",
                    "style": {
                      "base": {
                        "flex-shrink": "0",
                        "position": "relative",
                        "width": "52px",
                        "height": "30px",
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
                        "border-top-left-radius": "999px",
                        "border-top-right-radius": "999px",
                        "border-bottom-right-radius": "999px",
                        "border-bottom-left-radius": "999px",
                        "cursor": "pointer",
                        "background-color": "#CFD3CA",
                        "display": "inline-flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "line-height": "1",
                        "padding-top": "0px",
                        "padding-right": "0px",
                        "padding-bottom": "0px",
                        "padding-left": "0px"
                      }
                    },
                    "attrs": {
                      "role": "switch",
                      "aria-checked": "false",
                      "aria-label": "Connect [Payments provider]"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-24",
                        "style": {
                          "base": {
                            "position": "absolute",
                            "top": "3px",
                            "left": "3px",
                            "width": "24px",
                            "height": "24px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "background-color": "#FFFFFF",
                            "box-shadow": "0 1px 3px rgba(0,0,0,0.25)",
                            "transition": "left 160ms ease"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        }
                      }
                    ]
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
                    "row-gap": "16px",
                    "column-gap": "16px",
                    "padding-top": "16px",
                    "padding-right": "0",
                    "padding-bottom": "16px",
                    "padding-left": "0",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#ECEEE8"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-27",
                    "style": {
                      "base": {
                        "flex-shrink": "0",
                        "width": "44px",
                        "height": "44px",
                        "border-top-left-radius": "12px",
                        "border-top-right-radius": "12px",
                        "border-bottom-right-radius": "12px",
                        "border-bottom-left-radius": "12px",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "font-weight": "600",
                        "font-size": "16px",
                        "background-color": "#FDEFE4",
                        "color": "#9A4A12"
                      }
                    },
                    "attrs": {
                      "aria-hidden": "true"
                    },
                    "text": "Ca"
                  },
                  {
                    "tag": "div",
                    "key": "div-30",
                    "style": {
                      "base": {
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "0%",
                        "min-width": "0",
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "2px",
                        "column-gap": "2px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-28",
                        "style": {
                          "base": {
                            "font-size": "17px",
                            "font-weight": "600"
                          }
                        },
                        "text": "[Calendar]"
                      },
                      {
                        "tag": "div",
                        "key": "div-29",
                        "style": {
                          "base": {
                            "font-size": "14px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Two-way schedule sync"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-32",
                    "style": {
                      "base": {
                        "flex-shrink": "0",
                        "position": "relative",
                        "width": "52px",
                        "height": "30px",
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
                        "border-top-left-radius": "999px",
                        "border-top-right-radius": "999px",
                        "border-bottom-right-radius": "999px",
                        "border-bottom-left-radius": "999px",
                        "cursor": "pointer",
                        "background-color": "#CFD3CA",
                        "display": "inline-flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "line-height": "1",
                        "padding-top": "0px",
                        "padding-right": "0px",
                        "padding-bottom": "0px",
                        "padding-left": "0px"
                      }
                    },
                    "attrs": {
                      "role": "switch",
                      "aria-checked": "false",
                      "aria-label": "Connect [Calendar]"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-31",
                        "style": {
                          "base": {
                            "position": "absolute",
                            "top": "3px",
                            "left": "3px",
                            "width": "24px",
                            "height": "24px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "background-color": "#FFFFFF",
                            "box-shadow": "0 1px 3px rgba(0,0,0,0.25)",
                            "transition": "left 160ms ease"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        }
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
                    "display": "flex",
                    "align-items": "center",
                    "row-gap": "16px",
                    "column-gap": "16px",
                    "padding-top": "16px",
                    "padding-right": "0",
                    "padding-bottom": "16px",
                    "padding-left": "0",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#ECEEE8"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-34",
                    "style": {
                      "base": {
                        "flex-shrink": "0",
                        "width": "44px",
                        "height": "44px",
                        "border-top-left-radius": "12px",
                        "border-top-right-radius": "12px",
                        "border-bottom-right-radius": "12px",
                        "border-bottom-left-radius": "12px",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "font-weight": "600",
                        "font-size": "16px",
                        "background-color": "#F1E9FB",
                        "color": "#6B32A8"
                      }
                    },
                    "attrs": {
                      "aria-hidden": "true"
                    },
                    "text": "Em"
                  },
                  {
                    "tag": "div",
                    "key": "div-37",
                    "style": {
                      "base": {
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "0%",
                        "min-width": "0",
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "2px",
                        "column-gap": "2px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-35",
                        "style": {
                          "base": {
                            "font-size": "17px",
                            "font-weight": "600"
                          }
                        },
                        "text": "[Email marketing]"
                      },
                      {
                        "tag": "div",
                        "key": "div-36",
                        "style": {
                          "base": {
                            "font-size": "14px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Customer lists"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-39",
                    "style": {
                      "base": {
                        "flex-shrink": "0",
                        "position": "relative",
                        "width": "52px",
                        "height": "30px",
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
                        "border-top-left-radius": "999px",
                        "border-top-right-radius": "999px",
                        "border-bottom-right-radius": "999px",
                        "border-bottom-left-radius": "999px",
                        "cursor": "pointer",
                        "background-color": "#CFD3CA",
                        "display": "inline-flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "line-height": "1",
                        "padding-top": "0px",
                        "padding-right": "0px",
                        "padding-bottom": "0px",
                        "padding-left": "0px"
                      }
                    },
                    "attrs": {
                      "role": "switch",
                      "aria-checked": "false",
                      "aria-label": "Connect [Email marketing]"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-38",
                        "style": {
                          "base": {
                            "position": "absolute",
                            "top": "3px",
                            "left": "3px",
                            "width": "24px",
                            "height": "24px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "background-color": "#FFFFFF",
                            "box-shadow": "0 1px 3px rgba(0,0,0,0.25)",
                            "transition": "left 160ms ease"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
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
                    "display": "flex",
                    "align-items": "center",
                    "row-gap": "16px",
                    "column-gap": "16px",
                    "padding-top": "16px",
                    "padding-right": "0",
                    "padding-bottom": "16px",
                    "padding-left": "0",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#ECEEE8"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-41",
                    "style": {
                      "base": {
                        "flex-shrink": "0",
                        "width": "44px",
                        "height": "44px",
                        "border-top-left-radius": "12px",
                        "border-top-right-radius": "12px",
                        "border-bottom-right-radius": "12px",
                        "border-bottom-left-radius": "12px",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "font-weight": "600",
                        "font-size": "16px",
                        "background-color": "#ECEEE8",
                        "color": "#0F1115"
                      }
                    },
                    "attrs": {
                      "aria-hidden": "true"
                    },
                    "text": "Rv"
                  },
                  {
                    "tag": "div",
                    "key": "div-44",
                    "style": {
                      "base": {
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "0%",
                        "min-width": "0",
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "2px",
                        "column-gap": "2px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-42",
                        "style": {
                          "base": {
                            "font-size": "17px",
                            "font-weight": "600"
                          }
                        },
                        "text": "[Review site]"
                      },
                      {
                        "tag": "div",
                        "key": "div-43",
                        "style": {
                          "base": {
                            "font-size": "14px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Ask after each job"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-46",
                    "style": {
                      "base": {
                        "flex-shrink": "0",
                        "position": "relative",
                        "width": "52px",
                        "height": "30px",
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
                        "border-top-left-radius": "999px",
                        "border-top-right-radius": "999px",
                        "border-bottom-right-radius": "999px",
                        "border-bottom-left-radius": "999px",
                        "cursor": "pointer",
                        "background-color": "#CFD3CA",
                        "display": "inline-flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "line-height": "1",
                        "padding-top": "0px",
                        "padding-right": "0px",
                        "padding-bottom": "0px",
                        "padding-left": "0px"
                      }
                    },
                    "attrs": {
                      "role": "switch",
                      "aria-checked": "false",
                      "aria-label": "Connect [Review site]"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-45",
                        "style": {
                          "base": {
                            "position": "absolute",
                            "top": "3px",
                            "left": "3px",
                            "width": "24px",
                            "height": "24px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "background-color": "#FFFFFF",
                            "box-shadow": "0 1px 3px rgba(0,0,0,0.25)",
                            "transition": "left 160ms ease"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        }
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
                    "display": "flex",
                    "align-items": "center",
                    "row-gap": "16px",
                    "column-gap": "16px",
                    "padding-top": "16px",
                    "padding-right": "0",
                    "padding-bottom": "16px",
                    "padding-left": "0",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#ECEEE8"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-48",
                    "style": {
                      "base": {
                        "flex-shrink": "0",
                        "width": "44px",
                        "height": "44px",
                        "border-top-left-radius": "12px",
                        "border-top-right-radius": "12px",
                        "border-bottom-right-radius": "12px",
                        "border-bottom-left-radius": "12px",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "font-weight": "600",
                        "font-size": "16px",
                        "background-color": "#E8ECFE",
                        "color": "#2D4BF0"
                      }
                    },
                    "attrs": {
                      "aria-hidden": "true"
                    },
                    "text": "Au"
                  },
                  {
                    "tag": "div",
                    "key": "div-51",
                    "style": {
                      "base": {
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "0%",
                        "min-width": "0",
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "2px",
                        "column-gap": "2px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-49",
                        "style": {
                          "base": {
                            "font-size": "17px",
                            "font-weight": "600"
                          }
                        },
                        "text": "[Automation tool]"
                      },
                      {
                        "tag": "div",
                        "key": "div-50",
                        "style": {
                          "base": {
                            "font-size": "14px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Connect anything else"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-53",
                    "style": {
                      "base": {
                        "flex-shrink": "0",
                        "position": "relative",
                        "width": "52px",
                        "height": "30px",
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
                        "border-top-left-radius": "999px",
                        "border-top-right-radius": "999px",
                        "border-bottom-right-radius": "999px",
                        "border-bottom-left-radius": "999px",
                        "cursor": "pointer",
                        "background-color": "#CFD3CA",
                        "display": "inline-flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "line-height": "1",
                        "padding-top": "0px",
                        "padding-right": "0px",
                        "padding-bottom": "0px",
                        "padding-left": "0px"
                      }
                    },
                    "attrs": {
                      "role": "switch",
                      "aria-checked": "false",
                      "aria-label": "Connect [Automation tool]"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-52",
                        "style": {
                          "base": {
                            "position": "absolute",
                            "top": "3px",
                            "left": "3px",
                            "width": "24px",
                            "height": "24px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "background-color": "#FFFFFF",
                            "box-shadow": "0 1px 3px rgba(0,0,0,0.25)",
                            "transition": "left 160ms ease"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        }
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
