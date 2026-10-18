import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "trust-02",
  "prefix": "trust02",
  "name": "Trust / Accordion",
  "category": "trust",
  "collection": "saas",
  "description": "Trust / Accordion for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "Built to be boring about your data"
    },
    "subheading": {
      "type": "text",
      "default": "The short version is below. The long version lives in the trust center."
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-7",
        "div-56"
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
        "padding-top": "clamp(56px, 8vw, 96px)",
        "padding-right": "clamp(20px, 4vw, 48px)",
        "padding-bottom": "clamp(56px, 8vw, 96px)",
        "padding-left": "clamp(20px, 4vw, 48px)"
      }
    },
    "children": [
      {
        "tag": "div",
        "key": "div-57",
        "style": {
          "base": {
            "max-width": "1200px",
            "margin-top": "0",
            "margin-right": "auto",
            "margin-bottom": "0",
            "margin-left": "auto",
            "display": "flex",
            "flex-wrap": "wrap",
            "row-gap": "clamp(32px, 5vw, 72px)",
            "column-gap": "clamp(32px, 5vw, 72px)"
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
                "flex-basis": "340px",
                "max-width": "440px",
                "display": "flex",
                "flex-direction": "column",
                "row-gap": "20px",
                "column-gap": "20px"
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
                "text": "Security"
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
                    "font-size": "17px",
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
                    "row-gap": "10px",
                    "column-gap": "10px",
                    "flex-wrap": "wrap"
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
                        "height": "46px",
                        "padding-top": "0",
                        "padding-right": "18px",
                        "padding-bottom": "0",
                        "padding-left": "18px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "background-color": "#F4F5F1",
                        "color": "#0F1115",
                        "font-weight": "500",
                        "text-decoration": "none"
                      }
                    },
                    "href": "#",
                    "text": "Trust center"
                  },
                  {
                    "tag": "a",
                    "key": "a-5",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "height": "46px",
                        "padding-top": "0",
                        "padding-right": "18px",
                        "padding-bottom": "0",
                        "padding-left": "18px",
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
                        "font-weight": "500",
                        "text-decoration": "none"
                      }
                    },
                    "href": "#",
                    "text": "Report an issue"
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
                "flex-grow": "999",
                "flex-shrink": "1",
                "flex-basis": "520px",
                "min-width": "0",
                "display": "flex",
                "flex-direction": "column",
                "border-top-width": "1px",
                "border-top-style": "solid",
                "border-top-color": "#2C3037"
              }
            },
            "attrs": {
              "data-blok-accordion": ""
            },
            "children": [
              {
                "tag": "div",
                "key": "div-15",
                "style": {
                  "base": {
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#2C3037"
                  }
                },
                "attrs": {
                  "data-blok-acc-item": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-12",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "row-gap": "16px",
                        "column-gap": "16px",
                        "width": "100%",
                        "min-height": "68px",
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
                        "color": "#F4F5F1"
                      }
                    },
                    "attrs": {
                      "aria-expanded": "true",
                      "data-blok-acc-trigger": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-8",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#8C929B",
                            "width": "24px"
                          }
                        },
                        "text": "01"
                      },
                      {
                        "tag": "div",
                        "key": "div-9",
                        "style": {
                          "base": {
                            "flex-grow": "1",
                            "flex-shrink": "1",
                            "flex-basis": "0%",
                            "font-size": "18px",
                            "font-weight": "600",
                            "letter-spacing": "-0.015em"
                          }
                        },
                        "text": "Encryption"
                      },
                      {
                        "tag": "div",
                        "key": "div-10",
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
                            "background-color": "#262A31",
                            "color": "#A7ADB6"
                          }
                        },
                        "text": "[Confirm]"
                      },
                      {
                        "tag": "div",
                        "key": "div-11",
                        "style": {
                          "base": {
                            "width": "28px",
                            "text-align": "center",
                            "font-size": "18px",
                            "color": "#A7ADB6",
                            "transform": "rotate(45deg)",
                            "transition": "transform 180ms ease"
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
                    "key": "panel-14",
                    "attrs": {
                      "data-blok-acc-panel": ""
                    },
                    "children": [
                      {
                        "tag": "p",
                        "key": "p-13",
                        "style": {
                          "base": {
                            "margin-top": "0",
                            "margin-right": "0",
                            "margin-bottom": "0",
                            "margin-left": "0",
                            "padding-top": "0",
                            "padding-right": "44px",
                            "padding-bottom": "22px",
                            "padding-left": "40px",
                            "font-size": "16px",
                            "line-height": "1.6",
                            "color": "#B9BEC6"
                          }
                        },
                        "text": "Data is encrypted in transit with TLS. [Describe encryption at rest.]"
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-23",
                "style": {
                  "base": {
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#2C3037"
                  }
                },
                "attrs": {
                  "data-blok-acc-item": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-20",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "row-gap": "16px",
                        "column-gap": "16px",
                        "width": "100%",
                        "min-height": "68px",
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
                        "color": "#F4F5F1"
                      }
                    },
                    "attrs": {
                      "aria-expanded": "false",
                      "data-blok-acc-trigger": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-16",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#8C929B",
                            "width": "24px"
                          }
                        },
                        "text": "02"
                      },
                      {
                        "tag": "div",
                        "key": "div-17",
                        "style": {
                          "base": {
                            "flex-grow": "1",
                            "flex-shrink": "1",
                            "flex-basis": "0%",
                            "font-size": "18px",
                            "font-weight": "600",
                            "letter-spacing": "-0.015em"
                          }
                        },
                        "text": "Access controls"
                      },
                      {
                        "tag": "div",
                        "key": "div-18",
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
                            "background-color": "#1E3A2A",
                            "color": "#8FD3A8"
                          }
                        },
                        "text": "Built in"
                      },
                      {
                        "tag": "div",
                        "key": "div-19",
                        "style": {
                          "base": {
                            "width": "28px",
                            "text-align": "center",
                            "font-size": "18px",
                            "color": "#A7ADB6",
                            "transform": "rotate(0deg)",
                            "transition": "transform 180ms ease"
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
                    "key": "panel-22",
                    "attrs": {
                      "data-blok-acc-panel": ""
                    },
                    "children": [
                      {
                        "tag": "p",
                        "key": "p-21",
                        "style": {
                          "base": {
                            "margin-top": "0",
                            "margin-right": "0",
                            "margin-bottom": "0",
                            "margin-left": "0",
                            "padding-top": "0",
                            "padding-right": "44px",
                            "padding-bottom": "22px",
                            "padding-left": "40px",
                            "font-size": "16px",
                            "line-height": "1.6",
                            "color": "#B9BEC6"
                          }
                        },
                        "text": "Owners, dispatchers and crews each see only what their role needs. Admins can require two-step sign in."
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-31",
                "style": {
                  "base": {
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#2C3037"
                  }
                },
                "attrs": {
                  "data-blok-acc-item": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-28",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "row-gap": "16px",
                        "column-gap": "16px",
                        "width": "100%",
                        "min-height": "68px",
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
                        "color": "#F4F5F1"
                      }
                    },
                    "attrs": {
                      "aria-expanded": "false",
                      "data-blok-acc-trigger": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-24",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#8C929B",
                            "width": "24px"
                          }
                        },
                        "text": "03"
                      },
                      {
                        "tag": "div",
                        "key": "div-25",
                        "style": {
                          "base": {
                            "flex-grow": "1",
                            "flex-shrink": "1",
                            "flex-basis": "0%",
                            "font-size": "18px",
                            "font-weight": "600",
                            "letter-spacing": "-0.015em"
                          }
                        },
                        "text": "Audit log"
                      },
                      {
                        "tag": "div",
                        "key": "div-26",
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
                            "background-color": "#1E3A2A",
                            "color": "#8FD3A8"
                          }
                        },
                        "text": "Built in"
                      },
                      {
                        "tag": "div",
                        "key": "div-27",
                        "style": {
                          "base": {
                            "width": "28px",
                            "text-align": "center",
                            "font-size": "18px",
                            "color": "#A7ADB6",
                            "transform": "rotate(0deg)",
                            "transition": "transform 180ms ease"
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
                    "key": "panel-30",
                    "attrs": {
                      "data-blok-acc-panel": ""
                    },
                    "children": [
                      {
                        "tag": "p",
                        "key": "p-29",
                        "style": {
                          "base": {
                            "margin-top": "0",
                            "margin-right": "0",
                            "margin-bottom": "0",
                            "margin-left": "0",
                            "padding-top": "0",
                            "padding-right": "44px",
                            "padding-bottom": "22px",
                            "padding-left": "40px",
                            "font-size": "16px",
                            "line-height": "1.6",
                            "color": "#B9BEC6"
                          }
                        },
                        "text": "See who changed a job, an invoice or a setting, and when."
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-39",
                "style": {
                  "base": {
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#2C3037"
                  }
                },
                "attrs": {
                  "data-blok-acc-item": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-36",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "row-gap": "16px",
                        "column-gap": "16px",
                        "width": "100%",
                        "min-height": "68px",
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
                        "color": "#F4F5F1"
                      }
                    },
                    "attrs": {
                      "aria-expanded": "false",
                      "data-blok-acc-trigger": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-32",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#8C929B",
                            "width": "24px"
                          }
                        },
                        "text": "04"
                      },
                      {
                        "tag": "div",
                        "key": "div-33",
                        "style": {
                          "base": {
                            "flex-grow": "1",
                            "flex-shrink": "1",
                            "flex-basis": "0%",
                            "font-size": "18px",
                            "font-weight": "600",
                            "letter-spacing": "-0.015em"
                          }
                        },
                        "text": "Backups"
                      },
                      {
                        "tag": "div",
                        "key": "div-34",
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
                            "background-color": "#262A31",
                            "color": "#A7ADB6"
                          }
                        },
                        "text": "[Confirm]"
                      },
                      {
                        "tag": "div",
                        "key": "div-35",
                        "style": {
                          "base": {
                            "width": "28px",
                            "text-align": "center",
                            "font-size": "18px",
                            "color": "#A7ADB6",
                            "transform": "rotate(0deg)",
                            "transition": "transform 180ms ease"
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
                    "key": "panel-38",
                    "attrs": {
                      "data-blok-acc-panel": ""
                    },
                    "children": [
                      {
                        "tag": "p",
                        "key": "p-37",
                        "style": {
                          "base": {
                            "margin-top": "0",
                            "margin-right": "0",
                            "margin-bottom": "0",
                            "margin-left": "0",
                            "padding-top": "0",
                            "padding-right": "44px",
                            "padding-bottom": "22px",
                            "padding-left": "40px",
                            "font-size": "16px",
                            "line-height": "1.6",
                            "color": "#B9BEC6"
                          }
                        },
                        "text": "[How often backups run, where they live and how long they are kept.]"
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
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#2C3037"
                  }
                },
                "attrs": {
                  "data-blok-acc-item": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-44",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "row-gap": "16px",
                        "column-gap": "16px",
                        "width": "100%",
                        "min-height": "68px",
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
                        "color": "#F4F5F1"
                      }
                    },
                    "attrs": {
                      "aria-expanded": "false",
                      "data-blok-acc-trigger": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-40",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#8C929B",
                            "width": "24px"
                          }
                        },
                        "text": "05"
                      },
                      {
                        "tag": "div",
                        "key": "div-41",
                        "style": {
                          "base": {
                            "flex-grow": "1",
                            "flex-shrink": "1",
                            "flex-basis": "0%",
                            "font-size": "18px",
                            "font-weight": "600",
                            "letter-spacing": "-0.015em"
                          }
                        },
                        "text": "Payments"
                      },
                      {
                        "tag": "div",
                        "key": "div-42",
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
                            "background-color": "#262A31",
                            "color": "#A7ADB6"
                          }
                        },
                        "text": "[Confirm]"
                      },
                      {
                        "tag": "div",
                        "key": "div-43",
                        "style": {
                          "base": {
                            "width": "28px",
                            "text-align": "center",
                            "font-size": "18px",
                            "color": "#A7ADB6",
                            "transform": "rotate(0deg)",
                            "transition": "transform 180ms ease"
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
                    "key": "panel-46",
                    "attrs": {
                      "data-blok-acc-panel": ""
                    },
                    "children": [
                      {
                        "tag": "p",
                        "key": "p-45",
                        "style": {
                          "base": {
                            "margin-top": "0",
                            "margin-right": "0",
                            "margin-bottom": "0",
                            "margin-left": "0",
                            "padding-top": "0",
                            "padding-right": "44px",
                            "padding-bottom": "22px",
                            "padding-left": "40px",
                            "font-size": "16px",
                            "line-height": "1.6",
                            "color": "#B9BEC6"
                          }
                        },
                        "text": "[Name your payment processor.] Card numbers never touch Harborline servers."
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
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#2C3037"
                  }
                },
                "attrs": {
                  "data-blok-acc-item": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-52",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "row-gap": "16px",
                        "column-gap": "16px",
                        "width": "100%",
                        "min-height": "68px",
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
                        "color": "#F4F5F1"
                      }
                    },
                    "attrs": {
                      "aria-expanded": "false",
                      "data-blok-acc-trigger": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-48",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#8C929B",
                            "width": "24px"
                          }
                        },
                        "text": "06"
                      },
                      {
                        "tag": "div",
                        "key": "div-49",
                        "style": {
                          "base": {
                            "flex-grow": "1",
                            "flex-shrink": "1",
                            "flex-basis": "0%",
                            "font-size": "18px",
                            "font-weight": "600",
                            "letter-spacing": "-0.015em"
                          }
                        },
                        "text": "Compliance"
                      },
                      {
                        "tag": "div",
                        "key": "div-50",
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
                            "background-color": "#262A31",
                            "color": "#A7ADB6"
                          }
                        },
                        "text": "[Confirm]"
                      },
                      {
                        "tag": "div",
                        "key": "div-51",
                        "style": {
                          "base": {
                            "width": "28px",
                            "text-align": "center",
                            "font-size": "18px",
                            "color": "#A7ADB6",
                            "transform": "rotate(0deg)",
                            "transition": "transform 180ms ease"
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
                    "key": "panel-54",
                    "attrs": {
                      "data-blok-acc-panel": ""
                    },
                    "children": [
                      {
                        "tag": "p",
                        "key": "p-53",
                        "style": {
                          "base": {
                            "margin-top": "0",
                            "margin-right": "0",
                            "margin-bottom": "0",
                            "margin-left": "0",
                            "padding-top": "0",
                            "padding-right": "44px",
                            "padding-bottom": "22px",
                            "padding-left": "40px",
                            "font-size": "16px",
                            "line-height": "1.6",
                            "color": "#B9BEC6"
                          }
                        },
                        "text": "[List only certifications you currently hold, with audit dates.]"
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
    default: "dark",
    map: { section: { "background-color": "bg", color: "fg" } },
  }),
};
export default spec;
