import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "onboard-01",
  "prefix": "onboard01",
  "name": "Onboarding / Setup checklist",
  "category": "onboard",
  "collection": "saas",
  "description": "Onboarding / Setup checklist for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "Up and running before lunch"
    },
    "subheading": {
      "type": "text",
      "default": "Four steps. Tick them off here to see how it feels; the real checklist lives in your dashboard."
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-4",
        "div-36"
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
        "key": "div-37",
        "style": {
          "base": {
            "max-width": "1200px",
            "margin-top": "0",
            "margin-right": "auto",
            "margin-bottom": "0",
            "margin-left": "auto",
            "display": "flex",
            "flex-wrap": "wrap",
            "row-gap": "48px",
            "column-gap": "48px",
            "align-items": "flex-start"
          }
        },
        "children": [
          {
            "tag": "div",
            "key": "div-4",
            "style": {
              "base": {
                "flex-grow": "1",
                "flex-shrink": "1",
                "flex-basis": "360px",
                "display": "flex",
                "flex-direction": "column",
                "row-gap": "18px",
                "column-gap": "18px"
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
                "text": "Getting started"
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
                    "max-width": "420px",
                    "font-size": "17px",
                    "line-height": "1.6",
                    "color": "#4E545D"
                  }
                },
                "bind": "subheading"
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-36",
            "style": {
              "base": {
                "flex-grow": "1.2",
                "flex-shrink": "1",
                "flex-basis": "480px",
                "min-width": "0",
                "padding-top": "clamp(20px, 3vw, 32px)",
                "padding-right": "clamp(20px, 3vw, 32px)",
                "padding-bottom": "clamp(20px, 3vw, 32px)",
                "padding-left": "clamp(20px, 3vw, 32px)",
                "border-top-left-radius": "20px",
                "border-top-right-radius": "20px",
                "border-bottom-right-radius": "20px",
                "border-bottom-left-radius": "20px",
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
                "border-left-color": "#E2E4DE",
                "display": "flex",
                "flex-direction": "column",
                "row-gap": "20px",
                "column-gap": "20px"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-10",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "10px",
                    "column-gap": "10px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-7",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "font-size": "14px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-5",
                        "style": {
                          "base": {
                            "font-weight": "600"
                          }
                        },
                        "text": "Setup"
                      },
                      {
                        "tag": "div",
                        "key": "div-6",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "color": "#4E545D"
                          }
                        },
                        "text": "1 of 4 done"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-9",
                    "style": {
                      "base": {
                        "height": "8px",
                        "border-top-left-radius": "8px",
                        "border-top-right-radius": "8px",
                        "border-bottom-right-radius": "8px",
                        "border-bottom-left-radius": "8px",
                        "background-color": "#E2E4DE",
                        "overflow": "hidden"
                      }
                    },
                    "attrs": {
                      "role": "progressbar",
                      "aria-valuemin": "0",
                      "aria-valuemax": "4",
                      "aria-valuenow": "1",
                      "aria-label": "Setup progress"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-8",
                        "style": {
                          "base": {
                            "height": "8px",
                            "width": "25%",
                            "background-color": "#2D4BF0",
                            "border-top-left-radius": "8px",
                            "border-top-right-radius": "8px",
                            "border-bottom-right-radius": "8px",
                            "border-bottom-left-radius": "8px"
                          }
                        }
                      }
                    ]
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
                    "row-gap": "8px",
                    "column-gap": "8px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-16",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "flex-start",
                        "row-gap": "14px",
                        "column-gap": "14px",
                        "width": "100%",
                        "padding-top": "16px",
                        "padding-right": "16px",
                        "padding-bottom": "16px",
                        "padding-left": "16px",
                        "border-top-left-radius": "14px",
                        "border-top-right-radius": "14px",
                        "border-bottom-right-radius": "14px",
                        "border-bottom-left-radius": "14px",
                        "cursor": "pointer",
                        "text-align": "left",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CBD3FB",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CBD3FB",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CBD3FB",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CBD3FB",
                        "background-color": "#FFFFFF"
                      }
                    },
                    "attrs": {
                      "aria-pressed": "true"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-11",
                        "style": {
                          "base": {
                            "flex-shrink": "0",
                            "width": "26px",
                            "height": "26px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "font-size": "13px",
                            "font-weight": "700",
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
                            "background-color": "#2D4BF0",
                            "color": "#FFFFFF"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        },
                        "text": "✓"
                      },
                      {
                        "tag": "div",
                        "key": "div-14",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "4px",
                            "column-gap": "4px",
                            "flex-grow": "1",
                            "flex-shrink": "1",
                            "flex-basis": "0%"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-12",
                            "style": {
                              "base": {
                                "font-size": "16px",
                                "font-weight": "600",
                                "color": "#5B616B",
                                "text-decoration": "line-through"
                              }
                            },
                            "text": "Import your customers"
                          },
                          {
                            "tag": "div",
                            "key": "div-13",
                            "style": {
                              "base": {
                                "font-size": "14px",
                                "color": "#5B616B",
                                "line-height": "1.5"
                              }
                            },
                            "text": "Upload a spreadsheet or paste from your phone contacts."
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-15",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#5B616B",
                            "white-space": "nowrap"
                          }
                        },
                        "text": "5 min"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-22",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "flex-start",
                        "row-gap": "14px",
                        "column-gap": "14px",
                        "width": "100%",
                        "padding-top": "16px",
                        "padding-right": "16px",
                        "padding-bottom": "16px",
                        "padding-left": "16px",
                        "border-top-left-radius": "14px",
                        "border-top-right-radius": "14px",
                        "border-bottom-right-radius": "14px",
                        "border-bottom-left-radius": "14px",
                        "cursor": "pointer",
                        "text-align": "left",
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
                        "background-color": "#FFFFFF"
                      }
                    },
                    "attrs": {
                      "aria-pressed": "false"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-17",
                        "style": {
                          "base": {
                            "flex-shrink": "0",
                            "width": "26px",
                            "height": "26px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "font-size": "13px",
                            "font-weight": "700",
                            "border-top-width": "2px",
                            "border-top-style": "solid",
                            "border-top-color": "#C9CDC4",
                            "border-right-width": "2px",
                            "border-right-style": "solid",
                            "border-right-color": "#C9CDC4",
                            "border-bottom-width": "2px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#C9CDC4",
                            "border-left-width": "2px",
                            "border-left-style": "solid",
                            "border-left-color": "#C9CDC4",
                            "background-color": "#FFFFFF",
                            "color": "#FFFFFF"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-20",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "4px",
                            "column-gap": "4px",
                            "flex-grow": "1",
                            "flex-shrink": "1",
                            "flex-basis": "0%"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-18",
                            "style": {
                              "base": {
                                "font-size": "16px",
                                "font-weight": "600",
                                "color": "#0F1115",
                                "text-decoration": "none"
                              }
                            },
                            "text": "Add your services and prices"
                          },
                          {
                            "tag": "div",
                            "key": "div-19",
                            "style": {
                              "base": {
                                "font-size": "14px",
                                "color": "#5B616B",
                                "line-height": "1.5"
                              }
                            },
                            "text": "Mowing, cleanups, bin washes: whatever you sell."
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-21",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#5B616B",
                            "white-space": "nowrap"
                          }
                        },
                        "text": "5 min"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-28",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "flex-start",
                        "row-gap": "14px",
                        "column-gap": "14px",
                        "width": "100%",
                        "padding-top": "16px",
                        "padding-right": "16px",
                        "padding-bottom": "16px",
                        "padding-left": "16px",
                        "border-top-left-radius": "14px",
                        "border-top-right-radius": "14px",
                        "border-bottom-right-radius": "14px",
                        "border-bottom-left-radius": "14px",
                        "cursor": "pointer",
                        "text-align": "left",
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
                        "background-color": "#FFFFFF"
                      }
                    },
                    "attrs": {
                      "aria-pressed": "false"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-23",
                        "style": {
                          "base": {
                            "flex-shrink": "0",
                            "width": "26px",
                            "height": "26px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "font-size": "13px",
                            "font-weight": "700",
                            "border-top-width": "2px",
                            "border-top-style": "solid",
                            "border-top-color": "#C9CDC4",
                            "border-right-width": "2px",
                            "border-right-style": "solid",
                            "border-right-color": "#C9CDC4",
                            "border-bottom-width": "2px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#C9CDC4",
                            "border-left-width": "2px",
                            "border-left-style": "solid",
                            "border-left-color": "#C9CDC4",
                            "background-color": "#FFFFFF",
                            "color": "#FFFFFF"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-26",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "4px",
                            "column-gap": "4px",
                            "flex-grow": "1",
                            "flex-shrink": "1",
                            "flex-basis": "0%"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-24",
                            "style": {
                              "base": {
                                "font-size": "16px",
                                "font-weight": "600",
                                "color": "#0F1115",
                                "text-decoration": "none"
                              }
                            },
                            "text": "Invite your crews"
                          },
                          {
                            "tag": "div",
                            "key": "div-25",
                            "style": {
                              "base": {
                                "font-size": "14px",
                                "color": "#5B616B",
                                "line-height": "1.5"
                              }
                            },
                            "text": "Each person gets a text with a link to the crew app."
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-27",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#5B616B",
                            "white-space": "nowrap"
                          }
                        },
                        "text": "2 min"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-34",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "flex-start",
                        "row-gap": "14px",
                        "column-gap": "14px",
                        "width": "100%",
                        "padding-top": "16px",
                        "padding-right": "16px",
                        "padding-bottom": "16px",
                        "padding-left": "16px",
                        "border-top-left-radius": "14px",
                        "border-top-right-radius": "14px",
                        "border-bottom-right-radius": "14px",
                        "border-bottom-left-radius": "14px",
                        "cursor": "pointer",
                        "text-align": "left",
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
                        "background-color": "#FFFFFF"
                      }
                    },
                    "attrs": {
                      "aria-pressed": "false"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-29",
                        "style": {
                          "base": {
                            "flex-shrink": "0",
                            "width": "26px",
                            "height": "26px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "font-size": "13px",
                            "font-weight": "700",
                            "border-top-width": "2px",
                            "border-top-style": "solid",
                            "border-top-color": "#C9CDC4",
                            "border-right-width": "2px",
                            "border-right-style": "solid",
                            "border-right-color": "#C9CDC4",
                            "border-bottom-width": "2px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#C9CDC4",
                            "border-left-width": "2px",
                            "border-left-style": "solid",
                            "border-left-color": "#C9CDC4",
                            "background-color": "#FFFFFF",
                            "color": "#FFFFFF"
                          }
                        },
                        "attrs": {
                          "aria-hidden": "true"
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-32",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "4px",
                            "column-gap": "4px",
                            "flex-grow": "1",
                            "flex-shrink": "1",
                            "flex-basis": "0%"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-30",
                            "style": {
                              "base": {
                                "font-size": "16px",
                                "font-weight": "600",
                                "color": "#0F1115",
                                "text-decoration": "none"
                              }
                            },
                            "text": "Connect payments"
                          },
                          {
                            "tag": "div",
                            "key": "div-31",
                            "style": {
                              "base": {
                                "font-size": "14px",
                                "color": "#5B616B",
                                "line-height": "1.5"
                              }
                            },
                            "text": "Turn on card payments so invoices can be paid online."
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-33",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#5B616B",
                            "white-space": "nowrap"
                          }
                        },
                        "text": "3 min"
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
