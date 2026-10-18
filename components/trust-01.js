import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "trust-01",
  "prefix": "trust01",
  "name": "Trust / Security",
  "category": "trust",
  "collection": "saas",
  "description": "Trust / Security for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "Your customers’ details stay yours"
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-5",
        "div-37"
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
        "key": "div-38",
        "style": {
          "base": {
            "max-width": "1200px",
            "margin-top": "0",
            "margin-right": "auto",
            "margin-bottom": "0",
            "margin-left": "auto",
            "display": "flex",
            "flex-direction": "column",
            "row-gap": "36px",
            "column-gap": "36px"
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
                    "row-gap": "16px",
                    "column-gap": "16px",
                    "max-width": "620px"
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
                "text": "Visit the trust center →"
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-37",
            "style": {
              "base": {
                "display": "flex",
                "flex-wrap": "wrap",
                "row-gap": "20px",
                "column-gap": "20px",
                "align-items": "stretch"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-15",
                "style": {
                  "base": {
                    "flex-grow": "1",
                    "flex-shrink": "1",
                    "flex-basis": "260px",
                    "max-width": "340px",
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "6px",
                    "column-gap": "6px"
                  }
                },
                "attrs": {
                  "role": "tablist",
                  "aria-orientation": "vertical",
                  "aria-label": "Security topics",
                  "data-blok-choices": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-8",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "align-items": "flex-start",
                        "row-gap": "4px",
                        "column-gap": "4px",
                        "padding-top": "18px",
                        "padding-right": "20px",
                        "padding-bottom": "18px",
                        "padding-left": "20px",
                        "border-top-left-radius": "14px",
                        "border-top-right-radius": "14px",
                        "border-bottom-right-radius": "14px",
                        "border-bottom-left-radius": "14px",
                        "cursor": "pointer",
                        "text-align": "left",
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
                      "role": "tab",
                      "aria-selected": "true",
                      "data-blok-panel-go": "",
                      "data-blok-choice": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-6",
                        "style": {
                          "base": {
                            "font-size": "18px",
                            "font-weight": "600",
                            "letter-spacing": "-0.015em"
                          }
                        },
                        "text": "Data"
                      },
                      {
                        "tag": "div",
                        "key": "div-7",
                        "style": {
                          "base": {
                            "font-size": "14px",
                            "color": "#B9BEC6"
                          }
                        },
                        "text": "How it is stored and moved"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-11",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "align-items": "flex-start",
                        "row-gap": "4px",
                        "column-gap": "4px",
                        "padding-top": "18px",
                        "padding-right": "20px",
                        "padding-bottom": "18px",
                        "padding-left": "20px",
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
                        "background-color": "#FFFFFF",
                        "color": "#0F1115"
                      }
                    },
                    "attrs": {
                      "role": "tab",
                      "aria-selected": "false",
                      "data-blok-panel-go": "",
                      "data-blok-choice": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-9",
                        "style": {
                          "base": {
                            "font-size": "18px",
                            "font-weight": "600",
                            "letter-spacing": "-0.015em"
                          }
                        },
                        "text": "Access"
                      },
                      {
                        "tag": "div",
                        "key": "div-10",
                        "style": {
                          "base": {
                            "font-size": "14px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Who can see what"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-14",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "align-items": "flex-start",
                        "row-gap": "4px",
                        "column-gap": "4px",
                        "padding-top": "18px",
                        "padding-right": "20px",
                        "padding-bottom": "18px",
                        "padding-left": "20px",
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
                        "background-color": "#FFFFFF",
                        "color": "#0F1115"
                      }
                    },
                    "attrs": {
                      "role": "tab",
                      "aria-selected": "false",
                      "data-blok-panel-go": "",
                      "data-blok-choice": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-12",
                        "style": {
                          "base": {
                            "font-size": "18px",
                            "font-weight": "600",
                            "letter-spacing": "-0.015em"
                          }
                        },
                        "text": "Compliance"
                      },
                      {
                        "tag": "div",
                        "key": "div-13",
                        "style": {
                          "base": {
                            "font-size": "14px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Audits and policies"
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "stack-115",
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
                    "key": "div-36",
                    "style": {
                      "base": {
                        "flex-grow": "999",
                        "flex-shrink": "1",
                        "flex-basis": "480px",
                        "min-width": "0",
                        "padding-top": "clamp(22px, 3vw, 34px)",
                        "padding-right": "clamp(22px, 3vw, 34px)",
                        "padding-bottom": "clamp(22px, 3vw, 34px)",
                        "padding-left": "clamp(22px, 3vw, 34px)",
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
                        "border-left-color": "#E2E4DE",
                        "display": "grid",
                        "grid-template-columns": "1fr",
                        "row-gap": "12px",
                        "column-gap": "12px"
                      },
                      "md": {
                        "grid-template-columns": "repeat(2, minmax(0, 1fr))"
                      },
                      "lg": {
                        "grid-template-columns": "repeat(4, minmax(0, 1fr))"
                      }
                    },
                    "attrs": {
                      "role": "tabpanel",
                      "data-blok-panel": "",
                      "data-display": "grid"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-20",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "8px",
                            "column-gap": "8px",
                            "padding-top": "20px",
                            "padding-right": "20px",
                            "padding-bottom": "20px",
                            "padding-left": "20px",
                            "border-top-left-radius": "14px",
                            "border-top-right-radius": "14px",
                            "border-bottom-right-radius": "14px",
                            "border-bottom-left-radius": "14px",
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
                            "border-left-color": "#E2E4DE"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-18",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "8px",
                                "column-gap": "8px",
                                "font-size": "16px",
                                "font-weight": "600"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-16",
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
                                "key": "text-17",
                                "text": "Encrypted in transit"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-19",
                            "style": {
                              "base": {
                                "font-size": "14px",
                                "line-height": "1.55",
                                "color": "#4E545D"
                              }
                            },
                            "text": "Every connection uses TLS. [Confirm your current standard.]"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-25",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "8px",
                            "column-gap": "8px",
                            "padding-top": "20px",
                            "padding-right": "20px",
                            "padding-bottom": "20px",
                            "padding-left": "20px",
                            "border-top-left-radius": "14px",
                            "border-top-right-radius": "14px",
                            "border-bottom-right-radius": "14px",
                            "border-bottom-left-radius": "14px",
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
                            "border-left-color": "#E2E4DE"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-23",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "8px",
                                "column-gap": "8px",
                                "font-size": "16px",
                                "font-weight": "600"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-21",
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
                                "key": "text-22",
                                "text": "Encrypted at rest"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-24",
                            "style": {
                              "base": {
                                "font-size": "14px",
                                "line-height": "1.55",
                                "color": "#4E545D"
                              }
                            },
                            "text": "[Describe your storage encryption.]"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-30",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "8px",
                            "column-gap": "8px",
                            "padding-top": "20px",
                            "padding-right": "20px",
                            "padding-bottom": "20px",
                            "padding-left": "20px",
                            "border-top-left-radius": "14px",
                            "border-top-right-radius": "14px",
                            "border-bottom-right-radius": "14px",
                            "border-bottom-left-radius": "14px",
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
                            "border-left-color": "#E2E4DE"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-28",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "8px",
                                "column-gap": "8px",
                                "font-size": "16px",
                                "font-weight": "600"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-26",
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
                                "key": "text-27",
                                "text": "Backups"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-29",
                            "style": {
                              "base": {
                                "font-size": "14px",
                                "line-height": "1.55",
                                "color": "#4E545D"
                              }
                            },
                            "text": "[How often, where, and how long you keep them.]"
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
                            "column-gap": "8px",
                            "padding-top": "20px",
                            "padding-right": "20px",
                            "padding-bottom": "20px",
                            "padding-left": "20px",
                            "border-top-left-radius": "14px",
                            "border-top-right-radius": "14px",
                            "border-bottom-right-radius": "14px",
                            "border-bottom-left-radius": "14px",
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
                            "border-left-color": "#E2E4DE"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-33",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "8px",
                                "column-gap": "8px",
                                "font-size": "16px",
                                "font-weight": "600"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-31",
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
                                "key": "text-32",
                                "text": "Data export"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-34",
                            "style": {
                              "base": {
                                "font-size": "14px",
                                "line-height": "1.55",
                                "color": "#4E545D"
                              }
                            },
                            "text": "Download customers, jobs and invoices any time as CSV."
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
                        "flex-grow": "999",
                        "flex-shrink": "1",
                        "flex-basis": "480px",
                        "min-width": "0",
                        "padding-top": "clamp(22px, 3vw, 34px)",
                        "padding-right": "clamp(22px, 3vw, 34px)",
                        "padding-bottom": "clamp(22px, 3vw, 34px)",
                        "padding-left": "clamp(22px, 3vw, 34px)",
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
                        "border-left-color": "#E2E4DE",
                        "display": "none",
                        "grid-template-columns": "1fr",
                        "row-gap": "12px",
                        "column-gap": "12px"
                      },
                      "md": {
                        "grid-template-columns": "repeat(2, minmax(0, 1fr))"
                      },
                      "lg": {
                        "grid-template-columns": "repeat(4, minmax(0, 1fr))"
                      }
                    },
                    "attrs": {
                      "role": "tabpanel",
                      "data-blok-panel": "",
                      "data-display": "grid"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-58",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "8px",
                            "column-gap": "8px",
                            "padding-top": "20px",
                            "padding-right": "20px",
                            "padding-bottom": "20px",
                            "padding-left": "20px",
                            "border-top-left-radius": "14px",
                            "border-top-right-radius": "14px",
                            "border-bottom-right-radius": "14px",
                            "border-bottom-left-radius": "14px",
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
                                "align-items": "center",
                                "row-gap": "8px",
                                "column-gap": "8px",
                                "font-size": "16px",
                                "font-weight": "600"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-54",
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
                                "key": "text-55",
                                "text": "Roles"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-57",
                            "style": {
                              "base": {
                                "font-size": "14px",
                                "line-height": "1.55",
                                "color": "#4E545D"
                              }
                            },
                            "text": "Owners, dispatchers and crews see only what their role needs."
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-63",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "8px",
                            "column-gap": "8px",
                            "padding-top": "20px",
                            "padding-right": "20px",
                            "padding-bottom": "20px",
                            "padding-left": "20px",
                            "border-top-left-radius": "14px",
                            "border-top-right-radius": "14px",
                            "border-bottom-right-radius": "14px",
                            "border-bottom-left-radius": "14px",
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
                            "border-left-color": "#E2E4DE"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-61",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "8px",
                                "column-gap": "8px",
                                "font-size": "16px",
                                "font-weight": "600"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-59",
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
                                "key": "text-60",
                                "text": "Two-step sign in"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-62",
                            "style": {
                              "base": {
                                "font-size": "14px",
                                "line-height": "1.55",
                                "color": "#4E545D"
                              }
                            },
                            "text": "Require a second step for every admin account."
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-68",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "8px",
                            "column-gap": "8px",
                            "padding-top": "20px",
                            "padding-right": "20px",
                            "padding-bottom": "20px",
                            "padding-left": "20px",
                            "border-top-left-radius": "14px",
                            "border-top-right-radius": "14px",
                            "border-bottom-right-radius": "14px",
                            "border-bottom-left-radius": "14px",
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
                            "border-left-color": "#E2E4DE"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-66",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "8px",
                                "column-gap": "8px",
                                "font-size": "16px",
                                "font-weight": "600"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-64",
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
                                "key": "text-65",
                                "text": "Single sign-on"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-67",
                            "style": {
                              "base": {
                                "font-size": "14px",
                                "line-height": "1.55",
                                "color": "#4E545D"
                              }
                            },
                            "text": "[List supported providers, if any.]"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-73",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "8px",
                            "column-gap": "8px",
                            "padding-top": "20px",
                            "padding-right": "20px",
                            "padding-bottom": "20px",
                            "padding-left": "20px",
                            "border-top-left-radius": "14px",
                            "border-top-right-radius": "14px",
                            "border-bottom-right-radius": "14px",
                            "border-bottom-left-radius": "14px",
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
                            "border-left-color": "#E2E4DE"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-71",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "8px",
                                "column-gap": "8px",
                                "font-size": "16px",
                                "font-weight": "600"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-69",
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
                                "key": "text-70",
                                "text": "Audit log"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-72",
                            "style": {
                              "base": {
                                "font-size": "14px",
                                "line-height": "1.55",
                                "color": "#4E545D"
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
                    "key": "div-112",
                    "style": {
                      "base": {
                        "flex-grow": "999",
                        "flex-shrink": "1",
                        "flex-basis": "480px",
                        "min-width": "0",
                        "padding-top": "clamp(22px, 3vw, 34px)",
                        "padding-right": "clamp(22px, 3vw, 34px)",
                        "padding-bottom": "clamp(22px, 3vw, 34px)",
                        "padding-left": "clamp(22px, 3vw, 34px)",
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
                        "border-left-color": "#E2E4DE",
                        "display": "none",
                        "grid-template-columns": "1fr",
                        "row-gap": "12px",
                        "column-gap": "12px"
                      },
                      "md": {
                        "grid-template-columns": "repeat(2, minmax(0, 1fr))"
                      },
                      "lg": {
                        "grid-template-columns": "repeat(4, minmax(0, 1fr))"
                      }
                    },
                    "attrs": {
                      "role": "tabpanel",
                      "data-blok-panel": "",
                      "data-display": "grid"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-96",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "8px",
                            "column-gap": "8px",
                            "padding-top": "20px",
                            "padding-right": "20px",
                            "padding-bottom": "20px",
                            "padding-left": "20px",
                            "border-top-left-radius": "14px",
                            "border-top-right-radius": "14px",
                            "border-bottom-right-radius": "14px",
                            "border-bottom-left-radius": "14px",
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
                            "border-left-color": "#E2E4DE"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-94",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "8px",
                                "column-gap": "8px",
                                "font-size": "16px",
                                "font-weight": "600"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-92",
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
                                "key": "text-93",
                                "text": "[Certification]"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-95",
                            "style": {
                              "base": {
                                "font-size": "14px",
                                "line-height": "1.55",
                                "color": "#4E545D"
                              }
                            },
                            "text": "[Status and audit date. Only list what you hold.]"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-101",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "8px",
                            "column-gap": "8px",
                            "padding-top": "20px",
                            "padding-right": "20px",
                            "padding-bottom": "20px",
                            "padding-left": "20px",
                            "border-top-left-radius": "14px",
                            "border-top-right-radius": "14px",
                            "border-bottom-right-radius": "14px",
                            "border-bottom-left-radius": "14px",
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
                            "border-left-color": "#E2E4DE"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-99",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "8px",
                                "column-gap": "8px",
                                "font-size": "16px",
                                "font-weight": "600"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-97",
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
                                "key": "text-98",
                                "text": "Privacy policy"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-100",
                            "style": {
                              "base": {
                                "font-size": "14px",
                                "line-height": "1.55",
                                "color": "#4E545D"
                              }
                            },
                            "text": "[Link to your policy and data processing terms.]"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-106",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "8px",
                            "column-gap": "8px",
                            "padding-top": "20px",
                            "padding-right": "20px",
                            "padding-bottom": "20px",
                            "padding-left": "20px",
                            "border-top-left-radius": "14px",
                            "border-top-right-radius": "14px",
                            "border-bottom-right-radius": "14px",
                            "border-bottom-left-radius": "14px",
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
                            "border-left-color": "#E2E4DE"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-104",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "8px",
                                "column-gap": "8px",
                                "font-size": "16px",
                                "font-weight": "600"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-102",
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
                                "key": "text-103",
                                "text": "Payment data"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-105",
                            "style": {
                              "base": {
                                "font-size": "14px",
                                "line-height": "1.55",
                                "color": "#4E545D"
                              }
                            },
                            "text": "[Name your payment processor and what it handles.]"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-111",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "8px",
                            "column-gap": "8px",
                            "padding-top": "20px",
                            "padding-right": "20px",
                            "padding-bottom": "20px",
                            "padding-left": "20px",
                            "border-top-left-radius": "14px",
                            "border-top-right-radius": "14px",
                            "border-bottom-right-radius": "14px",
                            "border-bottom-left-radius": "14px",
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
                            "border-left-color": "#E2E4DE"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-109",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "8px",
                                "column-gap": "8px",
                                "font-size": "16px",
                                "font-weight": "600"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-107",
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
                                "key": "text-108",
                                "text": "Report an issue"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-110",
                            "style": {
                              "base": {
                                "font-size": "14px",
                                "line-height": "1.55",
                                "color": "#4E545D"
                              }
                            },
                            "text": "[Your security contact and disclosure process.]"
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
